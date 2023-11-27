import { Suspense, useContext, useEffect, useState } from "react";
import Stripe from "stripe";
import ProductCardSkeleton from "../Skeleton/ProductCardSkeleton";
import React from "react";
import { useFiltersContext } from "../Filters/FiltersContext";
import useSWR from "swr";
import Loading from "@/app/loading";

const LazyProductCard = React.lazy(() => import("../ProductCard/ProductCard"));

const fetcher = async (url: string) => {
  const response = await fetch(url);
  return response.json()
};

const Catalog = () => {
  const [filteredItems, setFilteredItems] = useState<Stripe.Product[]>([]);
  const { selectedFilters } = useFiltersContext();

  const { data: catalog } : { data : Stripe.Product[] } = useSWR(
    "/api/catalog",
    fetcher
  );

  useEffect(() => {
    if (catalog) {
      filterItems();
    }
  }, [selectedFilters, catalog])

  if (!catalog) {
    // Data is still loading, return loading state or spinner
    return <Loading/>;
  }

  function filterItems() {
    if (selectedFilters.length > 0) {
      let tempItems = selectedFilters.map((selectedCategory) => {
        let temp = catalog.filter(
          (product) => product.metadata.category === selectedCategory
        );
        return temp;
      });
      setFilteredItems(tempItems.flat());
    } else {
      setFilteredItems(catalog);
    }
  }

  function getPriceFromProduct(
    product: Stripe.Product
  ): Stripe.Price {
    // Check if default_price exists and is an object
    return product.default_price as Stripe.Price;
  }
  
  return (
    <div className="lg:px-6 mt-1 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-1 lg:gap-x-4 gap-y-12">
      {filteredItems.map((product) => {
        const price = getPriceFromProduct(product);
        return (
          <Suspense key={product.id} fallback={<ProductCardSkeleton />}>
            <LazyProductCard
              productId={product.id}
              productImage={product.images[0]}
              productTitle={product.name}
              productPrice={price.unit_amount as number / 100.00}
            />
          </Suspense>
        );
      })}
    </div>
  );
};

export default Catalog;
