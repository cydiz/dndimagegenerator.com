import { NextRequest, NextResponse } from "next/server";
import { creemClient } from "@/lib/creem";
import { db } from "@/lib/db";

export async function POST(req: NextRequest) {
  try {
    const authHeader = req.headers.get("authorization");
    if (!authHeader?.startsWith("Bearer ")) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const token = authHeader.substring(7);
    const userId = token.split(":")[0];

    const user = db.users.findById(userId);
    if (!user) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }

    const subscription = user.subscriptionId
      ? db.subscriptions.findById(user.subscriptionId)
      : db.subscriptions.findByUserId(user.id);

    if (!subscription) {
      return NextResponse.json(
        { error: "No active subscription found" },
        { status: 404 }
      );
    }

    const body = await req.json();
    const cancelAtPeriodEnd = body.cancelAtPeriodEnd !== false; // Default to true

    // Cancel subscription in Creem
    await creemClient.cancelSubscription(
      subscription.creemSubscriptionId,
      cancelAtPeriodEnd
    );

    // Update local subscription
    db.subscriptions.update(subscription.id, {
      cancelAtPeriodEnd: cancelAtPeriodEnd,
      status: cancelAtPeriodEnd ? "active" : "cancelled",
    });

    return NextResponse.json({
      success: true,
      message: cancelAtPeriodEnd
        ? "Subscription will be cancelled at the end of the billing period"
        : "Subscription cancelled immediately",
    });
  } catch (error: any) {
    console.error("Error cancelling subscription:", error);
    return NextResponse.json(
      { error: error.message || "Failed to cancel subscription" },
      { status: 500 }
    );
  }
}

