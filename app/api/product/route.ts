import { NextRequest, NextResponse } from "next/server";
import { Stripe } from "stripe";

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_API_SECRET_KEY as string, {
  typescript: true,
  apiVersion: "2023-10-16",
});

export async function GET(req: NextRequest, res: NextResponse) {
  const productId = req.nextUrl.searchParams.get("id") as string;

  try {
    const product = await stripe.products.retrieve(productId);
    const price = await stripe.prices.retrieve(product.default_price as string);

    return NextResponse.json({
      productName: product.name,
      productPrice: price.unit_amount,
      productPriceId: price.id,
      productImage: product.images,
      productDescription: product.description,
      hatchedDate: product.metadata.HatchedDate, // Retrieve Hatched Date from metadata
      weight: product.metadata.Weight, // Retrieve Weight from metadata
      videoURL: product.metadata.video, // Ensure this matches your metadata field name in Stripe
      metadata: product.metadata // ✅ Include the whole metadata object
    });
  } catch (error) {
    console.error("Error fetching product:", error);
    return NextResponse.json({ error: "Failed to fetch product" }, { status: 500 });
  }
}
