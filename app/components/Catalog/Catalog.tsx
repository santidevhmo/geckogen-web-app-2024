import { Suspense, useEffect, useState } from "react";
// import ProductCard from "../ProductCard/ProductCard";
import Stripe from "stripe";
import ProductCardSkeleton from "../Skeleton/ProductCardSkeleton";
import React from "react";

const LazyProductCard = React.lazy(
  () => import("../ProductCard/ProductCard")
);

const Catalog = () => {
  const [catalog, setCatalog] = useState<Stripe.Product[]>([]);

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

      setCatalog(products.data);
    };

    getCatalog();
  }, []);

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
    <div className="lg:px-6 mt-1 grid grid-cols-2 lg:grid-cols-3 gap-x-1 lg:gap-x-2 gap-y-5">
      {catalog.map((product) => {
        const price = getPriceFromProduct(product);
        return (
          <Suspense key={product.id} fallback={<ProductCardSkeleton />}>
            <LazyProductCard
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
