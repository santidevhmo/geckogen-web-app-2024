const OrdersSkeleton = () => {
  const orderCard = (
    <div className="h-36 bg-gray-100 rounded-md flex items-center mb-3 animate-pulse">
      <div className="h-28 w-28 bg-gray-200 mx-4 my-4 rounded-md"></div>
      <div className="hidden lg:grid grid-rows-2 grid-cols-2 gap-x-10 gap-y-5 flex-1">
        <div>
          <div className="h-4 bg-gray-200 w-60 mb-2"></div>
          <div className="h-4 bg-gray-200 w-44"></div>
        </div>

        <div>
          <div className="h-4 bg-gray-200 w-60 mb-2"></div>
          <div className="h-4 bg-gray-200 w-44"></div>
        </div>
      </div>

      <div className="lg:hidden">
        <div>
          <div className="h-4 bg-gray-200 w-44 mb-2"></div>
          <div className="h-4 bg-gray-200 w-36"></div>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      {orderCard}
      {orderCard}
      {orderCard}
    </div>
  );
};

export default OrdersSkeleton;
