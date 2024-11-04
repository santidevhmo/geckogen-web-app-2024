import Link from "next/link";
import Image from "next/image";
import BuyButtonSVG from "../../../../public/buyButton.svg";

// Declaring this to fix error "Binding element 'product' implicitly has an 'any' type.ts(7031)"
interface Product {
  productPriceId: string;
  productImage: string[];
  productName: string;
  productDescription?: string;
  hatchedDate?: string;
  weight?: string;
  productPrice: number;
}
interface BuyButtonProps {
  product: Product;
}

export default function BuyButton({ product } : BuyButtonProps) {
  return (
    <div className="pt-8 w-full relative">
      <Link href={`/checkout/${product.productPriceId}`}>
        <div className="w-full relative hover:opacity-80">
          <Image
            src={BuyButtonSVG}
            alt="Buy"
            className="w-full h-auto"
          />
          <span className="absolute inset-0 flex items-center justify-center text-white text-lg">
            Buy
          </span>
        </div>
      </Link>
    </div>
  );
}