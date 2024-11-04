import Link from "next/link";
import MorphMarketButton from "../../MorphMarketBtn/MorphMarketBtn";

const NavigationLinks = () => {
  return (
    <div>
      <ul className="flex mr-8 whitespace-nowrap gap-10 items-center">
        <li className="hover:text-blue-500"><Link href={"/blog"}>Blog</Link></li>
        <li className="hover:text-blue-500"><Link href={"/shop"}>Shop</Link></li>
        <li className="hover:text-blue-500"><Link href={"/orders"}>My Orders</Link></li>
      </ul>
    </div>
  );
};

export default NavigationLinks;
