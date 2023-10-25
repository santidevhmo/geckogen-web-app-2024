import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_API_SECRET_KEY as string, {
  typescript: true,
  apiVersion: "2023-10-16"
})

export async function POST() {
  const session = await stripe.checkout.sessions.create({
    ui_mode: 'embedded',
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: 'price_1O21ikAJTeML29ZUFBpoFvD0',
        quantity: 1,
      },
    ],
    mode: 'payment',
    return_url: `${process.env.DOMAIN}/return?session_id={CHECKOUT_SESSION_ID}`,
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
