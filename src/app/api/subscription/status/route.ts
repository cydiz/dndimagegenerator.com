import { NextRequest, NextResponse } from "next/server";
import { creemClient } from "@/lib/creem";
import { db } from "@/lib/db";

export async function GET(req: NextRequest) {
  try {
    const authHeader = req.headers.get("authorization");
    if (!authHeader?.startsWith("Bearer ")) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const token = authHeader.substring(7);
    // Parse token to get user ID (simplified - in production use proper JWT)
    const userId = token.split(":")[0];

    const user = db.users.findById(userId);
    if (!user) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }

    // Get subscription from database
    const subscription = user.subscriptionId
      ? db.subscriptions.findById(user.subscriptionId)
      : db.subscriptions.findByUserId(user.id);

    if (!subscription) {
      return NextResponse.json({
        hasSubscription: false,
        status: "none",
      });
    }

    // Sync with Creem
    try {
      const creemSubscription = await creemClient.getSubscription(
        subscription.creemSubscriptionId
      );

      // Update local subscription status
      db.subscriptions.update(subscription.id, {
        status: creemSubscription.status as any,
        currentPeriodStart: creemSubscription.current_period_start,
        currentPeriodEnd: creemSubscription.current_period_end,
        cancelAtPeriodEnd: creemSubscription.cancel_at_period_end,
      });
    } catch (error) {
      console.error("Error syncing with Creem:", error);
    }

    const updatedSubscription = db.subscriptions.findById(subscription.id);

    return NextResponse.json({
      hasSubscription: true,
      status: updatedSubscription?.status || "none",
      currentPeriodEnd: updatedSubscription?.currentPeriodEnd,
      cancelAtPeriodEnd: updatedSubscription?.cancelAtPeriodEnd,
    });
  } catch (error: any) {
    console.error("Error getting subscription status:", error);
    return NextResponse.json(
      { error: error.message || "Failed to get subscription status" },
      { status: 500 }
    );
  }
}

