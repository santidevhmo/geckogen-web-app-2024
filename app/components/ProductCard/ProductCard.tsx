import Link from "next/link";

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
          <img
            className="object-cover"
            src={productImage}
            alt=""
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
