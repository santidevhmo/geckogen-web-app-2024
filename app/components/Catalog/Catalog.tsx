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
  return response.json();
};

const Catalog = () => {
  const [filteredItems, setFilteredItems] = useState<Stripe.Product[]>([]);
  const { selectedFilters } = useFiltersContext();

  const { data: catalog }: { data: Stripe.Product[] } = useSWR("/api/catalog", fetcher);

  useEffect(() => {
    console.log("Catalog data:", catalog);
    if (catalog) {
      filterItems();
    }
  }, [selectedFilters, catalog]);

  if (!catalog) {
    return <Loading />;
  }

  function filterItems() {
    if (selectedFilters.length > 0) {
      const tempItems = catalog.filter(product => {
        const productCategory = product.metadata?.category;
        console.log("Product Category:", productCategory);
        return productCategory && selectedFilters.includes(productCategory);
      });
      setFilteredItems(tempItems);
    } else {
      setFilteredItems(catalog);
    }
  }
  

  function getPriceFromProduct(product: Stripe.Product): number {
    const price = product.default_price as Stripe.Price;
    return price?.unit_amount ? price.unit_amount / 100.0 : 0;
  }

  return (
    <Suspense fallback={<ProductCardSkeleton />}>
      <div className="w-full max-w-none px-4 mt-1 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8 overflow-hidden">
        {filteredItems.map((product) => (
          <LazyProductCard
            key={product.id}
            productId={product.id}
            productImage={product.images[0] || "/default-image.webp"}
            productTitle={product.name}
            productPrice={getPriceFromProduct(product)}
          />
        ))}
      </div>
    </Suspense>
  );
};

export default Catalog;