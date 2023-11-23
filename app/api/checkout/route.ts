import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { auth } from "@clerk/nextjs";

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_API_SECRET_KEY as string, {
  typescript: true,
  apiVersion: "2023-10-16"
})

export async function POST(req: NextRequest) {
  const { priceId } = await req.json()
  const { userId } = auth();

  const session = await stripe.checkout.sessions.create({
    client_reference_id: userId as string,
    ui_mode: 'embedded',
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: priceId,
        quantity: 1,
      },
    ],
    mode: 'payment',
    return_url: `${process.env.DOMAIN}/return?session_id={CHECKOUT_SESSION_ID}`,
    shipping_address_collection: {
      allowed_countries: ["US"]
    },
  });

  return NextResponse.json({clientSecret: session.client_secret});
}

export async function GET(req: NextRequest) {

  const sessionId = req.nextUrl.searchParams.get("session_id") as string;
  const session = await stripe.checkout.sessions.retrieve(sessionId);

  return NextResponse.json({
    status: session.status,
    customer_email: session.customer_details?.email
  });
  
}
