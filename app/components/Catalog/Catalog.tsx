import { Suspense, useContext, useEffect, useState } from "react";
import Stripe from "stripe";
import ProductCardSkeleton from "../Skeleton/ProductCardSkeleton";
import React from "react";
import { useFiltersContext } from "../Filters/FiltersContext";

const LazyProductCard = React.lazy(() => import("../ProductCard/ProductCard"));

const Catalog = () => {
  const [catalog, setCatalog] = useState<Stripe.Product[]>([]);
  const [filteredItems, setFilteredItems] = useState<Stripe.Product[]>([]);
  const {selectedFilters} = useFiltersContext();

  useEffect(() => {
    const getCatalog = async () => {
      const stripe = new Stripe(
        process.env.NEXT_PUBLIC_STRIPE_API_SECRET_KEY as string,
        {
          typescript: true,
          apiVersion: "2023-10-16",
        }
      );
      const products = await stripe.products.list({
        expand: [`data.default_price`],
      });

      setFilteredItems(products.data);
      setCatalog(products.data);
    };

    getCatalog();
  }, []);

  useEffect(() => {
    filterItems();
  }, [selectedFilters]);

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
      setFilteredItems([...catalog]);
    }
  }

  function getPriceFromProduct(
    product: Stripe.Product
  ): Stripe.Price | undefined {
    if (product.default_price && typeof product.default_price === "object") {
      // Check if default_price exists and is an object
      return product.default_price as Stripe.Price;
    }
    return undefined;
  }

  return (
    <div className="lg:px-6 mt-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-1 lg:gap-x-2 gap-y-5">
      {filteredItems.map((product) => {
        const price = getPriceFromProduct(product);
        return (
          <Suspense key={product.id} fallback={<ProductCardSkeleton />}>
            <LazyProductCard
              productId={product.id}
              productImage={product.images[0]}
              productTitle={product.name}
              productPrice={(price?.unit_amount ?? 0) / 100}
            />
          </Suspense>
        );
      })}
    </div>
  );
};

export default Catalog;
