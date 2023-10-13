interface ProductCardProps {
  productImage: string
  productTitle: string
  productPrice: number
}

const ProductCard = (props: ProductCardProps) => {
  const { productImage, productTitle, productPrice } = props
  return (
    
    <div className="">
      {/*w-48 h-auto md:w-56 */}
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
    </div>
  );
};

export default ProductCard;
