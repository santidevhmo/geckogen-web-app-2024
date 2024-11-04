import Link from "next/link";
import Image from "next/image";

interface ProductCardProps {
  productId: string;
  productImage: string;
  productTitle: string;
  productPrice: number;
}

const ProductCard = (props: ProductCardProps) => {
  const { productId, productImage, productTitle, productPrice } = props;
  return (
    <div className="w-full max-w-[300px]">
      <Link href={`shop/product/${productId}`} prefetch={false}>
        <div className="relative w-full aspect-[1/1] overflow-hidden bg-grey-200 lg:rounded-sm">
          <Image
            className="object-cover"
            src={productImage}
            alt="Product image"
            fill // Sets the image to fill the parent container
            sizes="300px"
          />
        </div>
        <div className="pt-4 px-2 lg:px-0">
          <p className="text-lg font-medium">{productTitle}</p>
          <div className="flex items-start text-base">
            <p className="text-sm">${(productPrice)} USD</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
