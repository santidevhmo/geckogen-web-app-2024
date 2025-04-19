import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { auth } from "@clerk/nextjs";

const stripe = new Stripe(process.env.STRIPE_API_SECRET_KEY as string, {
  typescript: true,
  apiVersion: "2023-10-16"
})

export async function POST(req: NextRequest) {
  try {
    const { priceId } = await req.json();
    const { userId } = auth();

    if (!userId) {
      return NextResponse.json({ error: "User not authenticated" }, { status: 401 });
    }

    // Get the email address of the authenticated user from your system (replace this with your logic)
    const userEmail = "user@example.com"; // Replace with the actual user's email.

    const session = await stripe.checkout.sessions.create({
      client_reference_id: userId,
      ui_mode: 'embedded',
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: 'payment',
      customer_email: userEmail, // Add this line to send emails
      return_url: `${process.env.DOMAIN}/return?session_id={CHECKOUT_SESSION_ID}`,
      shipping_address_collection: {
        allowed_countries: ["US"],
      },
    });

    return NextResponse.json({ clientSecret: session.client_secret, sessionId: session.id });
  } catch (error) {
    console.error("Error creating checkout session:", error);
    return NextResponse.json({ error: "Failed to create checkout session" }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {

  const sessionId = req.nextUrl.searchParams.get("session_id") as string;
  const session = await stripe.checkout.sessions.retrieve(sessionId);

  return NextResponse.json({
    status: session.status,
    customer_email: session.customer_details?.email
  });
  
}
