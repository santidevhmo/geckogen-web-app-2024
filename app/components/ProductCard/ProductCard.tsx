import Link from "next/link";
import Image from "next/image";

interface ProductCardProps {
  productId: string
  productImage: string
  productTitle: string
  productPrice: number
}

const ProductCard = (props: ProductCardProps) => {
  const { productId, productImage, productTitle, productPrice } = props
  return (
    
    <div>
      <Link href={`shop/product/${productId}`}>
        <div>
          <Image
            className="object-cover md:rounded-sm"
            width={417}
            height={417}
            src={productImage}
            alt="productImage"
          />
        </div>
        <div className="pt-4 px-2 lg:px-0">
          <p className="text-lg font-extrabold">{productTitle}</p>
          <p className="text-base">${productPrice}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
