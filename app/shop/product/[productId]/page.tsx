"use client";

import ProductDetailSkeleton from "@/app/components/Skeleton/ProductDetailSkeleton";
import Link from "next/link";
import { useEffect, useState } from "react";

interface ProductData {
  productName: string;
  productPrice: number;
  productPriceId: string;
  productImage: string[];
  productDescription: string;
}

const Product = ({ params }: { params: { productId: string } }) => {
  const [product, setProduct] = useState<ProductData>();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await fetch(`/api/products?id=${params.productId}`);
        if (response.ok) {
          const data = await response.json();
          setProduct(data);
        } else {
          console.error("Failed to fetch product");
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    getProduct();
  }, []);

  return (
    <div className="pt-24 pb-14 flex justify-center lg:items-center lg:h-[50rem]">
      {product ? (
        <div className="w-[30rem] lg:flex lg:w-auto lg:gap-10 px-2">
          <div className="space-y-1 pb-7 lg:hidden">
            <p className="text-2xl md:text-3xl">{product.productName}</p>
            <p className="text-xl md:text-2xl">${product.productPrice / 100}</p>
          </div>

          <div>
            <img
              className="w-full object-cover rounded-lg"
              src={product.productImage[0]}
              alt=""
            />
          </div>

          <div className="pt-4 text-base text-gray-600 w-fit lg:hidden">
            <p>{product.productDescription ?? "No description available"}</p>
          </div>

          <div className="pt-12 lg:hidden">
            <Link href={`/checkout/${product.productPriceId}`}>
              <button className="py-3 w-full bg-blue-500 text-white rounded-md">
                Buy
              </button>
            </Link>
          </div>

          <div className="hidden lg:block">
            <div className="space-y-1 pb-7">
              <p className="text-2xl md:text-3xl">{product.productName}</p>
              <p className="text-xl md:text-2xl">
                ${product.productPrice / 100}
              </p>
            </div>

            <div className="pt-4 text-base text-gray-600 w-96">
              <p>{product.productDescription ?? "No description available"}</p>
            </div>

            <div className="pt-12">
              <Link href={`/checkout/${product.productPriceId}`}>
                <button className="py-3 w-full bg-blue-500 text-white rounded-md">
                  Buy
                </button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <ProductDetailSkeleton />
      )}
    </div>
  );
};

export default Product;
