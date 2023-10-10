import Link from "next/link";

const NavigationLinks = () => {
  return (
    <div>
      <ul className="flex mr-8 whitespace-nowrap gap-6">
        <li className="hover:text-blue-500"><Link href={"/"}>How it works</Link></li>
        <li className="hover:text-blue-500"><Link href={"/"}>About</Link></li>
        <li className="hover:text-blue-500"><Link href={"/"}>Care Sheet</Link></li>
        <li className="hover:text-blue-500"><Link href={"/"}>Shop</Link></li>
        <li className="hover:text-blue-500"><Link href={"/"}>My Orders</Link></li>
        <li className="hover:text-blue-500"><Link href={"/"}>Contact</Link></li>
      </ul>
    </div>
  );
};

export default NavigationLinks;
