"use client"

import Link from "next/link";
import { useEffect, useState } from "react";

interface ProductData {
  productName: string;
  productDescription: string;
}

const Product = ({ params }: { params: { id: string } }) => {
  const [product, setProduct] = useState<ProductData>();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await fetch(`/api/products?id=${params.id}`);
        if (response.ok) {
          const data = await response.json();
          setProduct(data);
        } else {
          console.error('Failed to fetch product');
        }
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    }

    getProduct();

  }, []);

  return (
    <div className="h-screen flex items-center justify-center">
      <div>
        <div>
          <Link href={"/shop"}>
            <button>
              <p>Back</p>
            </button>
          </Link>
        </div>
        <div>
          <p>Welcome to the porduct with id: {product?.productName}</p>
        </div>
      </div>
    </div>
  )
}

export default Product;