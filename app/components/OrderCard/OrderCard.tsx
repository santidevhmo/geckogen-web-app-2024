"use client";

import { useState } from "react";
import Image from "next/image";

interface OrderCardProps {
  orderID: string;
  orderDate: string;
  productName: string;
  productImageURL: string;
  productDelivery: string;
  orderTotal: number;
  orderStatus: string;
}

const OrderCard = (props: OrderCardProps) => {
  const [detailsOpen, setDetailsOpen] = useState(false);
  const {
    orderID,
    orderDate,
    productName,
    productImageURL,
    productDelivery,
    orderTotal,
    orderStatus,
  } = props;
  return (
    <div className="my-4">
      <div className="flex justify-between py-3 px-3 text-sm text-gray-500 bg-[#EEEEEE] rounded-t-md">
        <p>ID: {orderID}</p>
        <p className="">{orderDate}</p>
        
      </div>

      <div className="flex px-3 py-3 bg-[#F7F7F7] md:hidden">
        <Image
          className="object-cover rounded-md mr-4"
          src={productImageURL}
          width={96}
          height={96}
          alt="Picture of the author"
        />
        <div className="flex flex-1 justify-between items-center">
          <div>
            <p className="text-base text-left">{productName}</p>
          </div>
          <div className="self-end">
            <button onClick={() => setDetailsOpen(!detailsOpen)}>
              {detailsOpen ? (
                <p className="text-sm text-[#0076E4]">Hide</p>
              ) : (
                <p className="text-sm text-[#0076E4]">Details</p>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className="hidden md:flex px-3 py-3 bg-[#F7F7F7]">
        <Image
          className="object-cover rounded-md mr-4"
          src={productImageURL}
          width={128}
          height={128}
          alt="Picture of the author"
        />
        <div className="grid grid-cols-2 gap-2 h-32 flex-1">
          <div>
            <p className="text-sm text-left text-[#505050]">Product</p>
            <p className="text-base text-left">{productName}</p>
          </div>
          <div>
            <p className="text-sm text-left text-[#505050]">Send to</p>
            <p className="text-base text-left">{productDelivery}</p>
          </div>
          <div>
            <p className="text-sm text-left text-[#505050]">Total</p>
            <p className="text-base text-left">${orderTotal}</p>
          </div>
          <div>
            <p className="text-sm text-left text-[#505050]">Status</p>
            <p className="text-base text-left">{orderStatus}</p>
          </div>
        </div>
      </div>

      {/* Details section */}
      {detailsOpen && (
        <div className="text-sm space-y-3 px-3 pb-3 bg-[#F7F7F7] md:hidden">
          <div>
            <p>Total:</p>
            <p className="text-base text-gray-500">${orderTotal}</p>
          </div>

          <div>
            <p>Date:</p>
            <p className="text-base text-gray-500">{orderDate}</p>
          </div>

          <div>
            <p>Send to:</p>
            <p className="text-base text-gray-500">{productDelivery}</p>
          </div>

          <div>
            <p>Status:</p>
            <p className="text-base text-gray-500">{orderStatus}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderCard;
