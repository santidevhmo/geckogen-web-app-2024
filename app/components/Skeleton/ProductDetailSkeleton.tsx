const ProductDetailSkeleton = () => {
  return (
    <div className="pt-24 pb-14 flex justify-center lg:items-center lg:h-[50rem] animate-pulse">
      <div className="lg:flex gap-x-10">
        <div className="h-[27rem] w-[27rem] bg-gray-100 rounded-lg mb-5"></div>
        <div>
          <div className="h-8 w-60 lg:w-96 bg-gray-100 rounded-md mb-3"></div>
          <div className="h-8 w-28 lg:w-48 bg-gray-100"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailSkeleton;
