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
  const data = await response.json();
  console.log("Fetched Catalog Data:", data); // Log the entire catalog data
  return data;
};

const Catalog = () => {
  const [filteredItems, setFilteredItems] = useState<Stripe.Product[]>([]);
  const { selectedFilters } = useFiltersContext();

  const { data: catalog }: { data: Stripe.Product[] } = useSWR("/api/catalog", fetcher);

  const productDescription = "Crested Gecko Female (VisualMono X Red Pin Phantom)";
  const result = productDescription
    .toLowerCase()
    .replace(/_/g, "")
    .includes("mono");

  console.log(result); // Output: true

  useEffect(() => {
    console.log("Full Catalog Data:", catalog); // Log the entire catalog data
    if (catalog) {
      filterItems();
    }
  }, [selectedFilters, catalog]);

  if (!catalog) {
    return <Loading />;
  }

  function filterItems() {
    if (selectedFilters.length > 0) {
      console.log("Selected Filters:", selectedFilters); // Log currently selected filters
  
      const tempItems = catalog.filter((product) => {
        const productCategory = product.metadata?.category || product.metadata?.category; // Check category
        const productSex = product.metadata?.sex || product.metadata?.sex; // Check sex
        const productDescription = product.metadata?.description || product.description; // Check description
  
        console.log("Product Being Checked:", {
          id: product.id,
          category: productCategory,
          sex: productSex,
          description: productDescription,
        });
  
        const isMatch = selectedFilters.every((filter) => {
          const matchesCategory = filter.species
            ? filter.species === productCategory
            : true;
  
          const matchesSex = filter.sex && filter.sex !== "Monochrome"
            ? filter.sex === productSex
            : true;
  
          const matchesMonochrome =
            filter.species === "C (Crested) Species" && filter.sex === "Monochrome"
              ? productDescription &&
                productDescription.toLowerCase().replace(/_/g, "").includes("mono")
              : true;
  
          console.log("Filter Check:", {
            filter,
            matchesCategory,
            matchesSex,
            matchesMonochrome,
          });
  
          return matchesCategory && matchesSex && matchesMonochrome;
        });
  
        console.log("Does Product Match All Filters?", isMatch);
        return isMatch;
      });
  
      console.log("Filtered Items:", tempItems); // Log the filtered products
      setFilteredItems(tempItems);
    } else {
      console.log("No Filters Selected - Displaying Full Catalog");
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