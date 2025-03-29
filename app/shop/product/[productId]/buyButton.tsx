import Link from "next/link";
import Image from "next/image";
import BuyButtonSVG from "../../../../public/buyButton.svg";

// ✅ Extended Product interface to include metadata
interface Product {
  productPriceId: string;
  productImage: string[];
  productName: string;
  productDescription?: string;
  hatchedDate?: string;
  weight?: string;
  productPrice: number;
  metadata?: {
    link?: string;
    [key: string]: any;
  };
}

interface BuyButtonProps {
  product: Product;
}

export default function BuyButton({ product }: BuyButtonProps) {
  const fallbackUrl = "https://www.morphmarket.com/stores/edgatron/";
  const productLink = product?.metadata?.link?.trim() || fallbackUrl;

  return (
    <div className="pt-8 w-full relative">
      <Link href={productLink}>
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
