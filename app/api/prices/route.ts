import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export async function GET(request: NextRequest, response: NextResponse) {
  const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_API_SECRET_KEY as string, {
    typescript: true,
    apiVersion: "2023-10-16"
  })

  const prices = await stripe.prices.list({
    limit: 100,
    active: true
  });

  return NextResponse.json(prices.data)
}