import Link from "next/link";
import Image from "next/image";

interface ProductCardProps {
  productId: string;
  productImage: string;
  productTitle: string;
  productPrice: number;
}

const ProductCard = ({ productId, productImage, productTitle, productPrice }: ProductCardProps) => (
  <div className="w-full">
    <Link href={`/shop/product/${productId}`} prefetch={false}>
      {/* Set the outer container to maintain a square aspect ratio */}
      <div className="w-full aspect-square relative overflow-hidden bg-gray-100 rounded-md">
        <Image
          className="object-cover w-full h-full" // Ensures the image fills the container
          src={productImage}
          alt={productTitle}
          layout="fill" // Let Next.js handle responsive image scaling
          onError={(e) => (e.currentTarget.src = "/default-image.webp")}
        />
      </div>
      <div className="p-2 text-center">
        <p className="text-base font-medium">{productTitle}</p>
        {/* Conditional rendering for price */}
        <p className="text-sm">
          {productPrice > 0 ? `$${productPrice.toFixed(2)} USD` : "Price via email"}
        </p>
      </div>
    </Link>
  </div>
);

export default ProductCard;
