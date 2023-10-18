const ProductCardSkeleton = () => {
  return (
    <div className="animate-pulse">
      <div className="relative">
        <img className="object-cover" src={"/white-template.jpeg"} alt="" />
        <div className="absolute inset-0" style={{ background: 'rgb(229 231 235)' }}></div>
      </div>
      <div className="pt-4 relative">
        <div className="w-6/12 h-3 bg-gray-200"></div>
        <div className="w-4/12 h-3 bg-gray-200 mt-2"></div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
