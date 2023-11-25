import { NextRequest, NextResponse } from "next/server";
import { Stripe } from "stripe";

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_API_SECRET_KEY as string, {
  typescript: true,
  apiVersion: "2023-10-16"
})

export async function GET(req: NextRequest, res: NextResponse) {
  const productId = req.nextUrl.searchParams.get("id") as string;
  const product = await stripe.products.retrieve(
    productId
  );
  const price = await stripe.prices.retrieve(
    product.default_price as string
  )

  return NextResponse.json({
    productName: product.name,
    productPrice: price.unit_amount,
    productPriceId: price.id,
    productImage: product.images,
    productDescription: product.description
  })
}
