import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export async function GET(request: NextRequest, response: NextResponse) {
  const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_API_SECRET_KEY as string, {
    typescript: true,
    apiVersion: "2023-10-16",
  });

  let allProducts: Stripe.Product[] = [];
  let hasMore = true;
  let lastProductId: string | null = null;

  while (hasMore) {
    const products: Stripe.Response<Stripe.ApiList<Stripe.Product>> = await stripe.products.list({
      expand: [`data.default_price`],
      limit: 100,
      active: true,
      ...(lastProductId && { starting_after: lastProductId }),
    });

    allProducts = [...allProducts, ...products.data];
    hasMore = products.has_more;
    if (hasMore) {
      lastProductId = products.data[products.data.length - 1].id;
    }
  }

  return NextResponse.json(allProducts);
}

