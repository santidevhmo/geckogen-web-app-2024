import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export async function GET(request: NextRequest, response: NextResponse) {
  const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_API_SECRET_KEY as string, {
    typescript: true,
    apiVersion: "2023-10-16"
  })

  const products = await stripe.products.list({
    expand: [`data.default_price`],
    limit: 100,
    active: true
  });

  return NextResponse.json(products.data)
}