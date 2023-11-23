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
            className="object-cover"
            width={417}
            height={417}
            src={productImage}
            alt="productImage"
          />
        </div>
        <div className="pt-4 ml-2">
          <p className="text-sm">{productTitle}</p>
          <p className="text-md font-extrabold">${productPrice}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
