import Link from "next/link";

const NavigationLinks = () => {
  return (
    <div>
      <ul className="flex mr-8 whitespace-nowrap gap-6">
        <li className="hover:text-blue-500"><Link href={"/shop"}>Shop</Link></li>
        <li className="hover:text-blue-500"><Link href={"/orders"}>My Orders</Link></li>
      </ul>
    </div>
  );
};

export default NavigationLinks;
