import { NextRequest, NextResponse } from "next/server";
import { creemClient } from "@/lib/creem";
import { db } from "@/lib/db";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { productId, userId, email } = body;

    if (!productId) {
      return NextResponse.json(
        { error: "Product ID is required" },
        { status: 400 }
      );
    }

    // Get user
    const user = userId ? db.users.findById(userId) : null;
    const customerEmail = email || user?.email;

    if (!customerEmail) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    // Create checkout session with Creem
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    const checkoutSession = await creemClient.createCheckoutSession(productId, {
      customerEmail,
      successUrl: `${baseUrl}/subscription/success`,
      cancelUrl: `${baseUrl}/subscription/cancel`,
      metadata: {
        userId: userId || "",
      },
    });

    return NextResponse.json({
      checkoutUrl: checkoutSession.url,
      checkoutId: checkoutSession.id,
    });
  } catch (error: any) {
    console.error("Error creating subscription:", error);
    return NextResponse.json(
      { error: error.message || "Failed to create subscription" },
      { status: 500 }
    );
  }
}

