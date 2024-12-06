import Link from "next/link";
import OrderCard from "../components/OrderCard/OrderCard";
import { auth } from "@clerk/nextjs";

interface Orders {
  id: string;
  date: string;
  productDelivery: string;
  productImageURL: string;
  productName: string;
  status: string;
  total: number;
}

const getOrders = async (userID: string) => {
  console.log("Fetching orders for user:", userID); // Debug: Check userID
  const response = await fetch(
    `https://api-jtnmag5rtq-uc.a.run.app/api/orders/${userID}`
  );

  if (!response.ok) {
    console.error("Failed to fetch orders:", response.statusText); // Debug: Log errors
    throw new Error("Failed to fetch data");
  }

  const data = await response.json();
  console.log("Fetched orders:", data); // Debug: Check the response data
  return data;
};

const { userId } = auth();
console.log("Authenticated user ID:", userId); // Debug: Check if userId is valid


const MyOrders = async () => {
  const { userId } = auth();
  const orders: Orders[] = await getOrders(userId as string);
  

  const noOrdersPage = (
    <div className="py-60 flex justify-center items-center">
      <div className="flex justify-center text-center">
        <p className="text-lg text-gray-400 w-4/6 lg:text-xl">
          No orders yet, but you can{" "}
          <Link
            href={"/shop"}
            className="text-[#0076E4] underline text-sm lg:text-base"
          >
            explore the catalog!
          </Link>
        </p>
      </div>
    </div>
  );

  return (
    <div className="pt-28 px-6 mb-10 flex justify-center">
      <div className="w-[60rem]">
        <div className="">
          <p className="text-2xl lg:text-3xl">My Orders</p>
        </div>
        <div className="mt-4 mb-36">
          {orders.length > 0
            ? orders.map((order) => {
                return (
                  <OrderCard
                    key={order.id}
                    orderID={order.id}
                    orderDate={order.date}
                    productName={order.productName}
                    productImageURL={order.productImageURL}
                    productDelivery={order.productDelivery}
                    orderTotal={order.total}
                    orderStatus={order.status}
                  />
                );
              })
            : noOrdersPage}
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
