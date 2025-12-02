import { NextRequest, NextResponse } from "next/server";
import { creemClient } from "@/lib/creem";
import { db } from "@/lib/db";

export async function POST(req: NextRequest) {
  try {
    const signature = req.headers.get("x-creem-signature") || "";
    const body = await req.text();

    // Verify webhook signature
    if (!creemClient.verifyWebhookSignature(body, signature)) {
      return NextResponse.json(
        { error: "Invalid signature" },
        { status: 401 }
      );
    }

    const event = JSON.parse(body);

    // Handle different event types
    switch (event.type) {
      case "subscription.created":
      case "subscription.updated": {
        const { id, customer_email, status, current_period_start, current_period_end, cancel_at_period_end, product_id } = event.data;

        // Find user by email
        const user = db.users.findByEmail(customer_email);
        if (!user) {
          console.warn(`User not found for email: ${customer_email}`);
          return NextResponse.json({ received: true });
        }

        // Check if subscription exists
        let subscription = db.subscriptions.findByCreemId(id);

        if (subscription) {
          // Update existing subscription
          db.subscriptions.update(subscription.id, {
            status: status as any,
            currentPeriodStart: current_period_start,
            currentPeriodEnd: current_period_end,
            cancelAtPeriodEnd: cancel_at_period_end,
            productId: product_id,
          });
        } else {
          // Create new subscription
          subscription = db.subscriptions.create({
            creemSubscriptionId: id,
            userId: user.id,
            productId: product_id,
            status: status as any,
            currentPeriodStart: current_period_start,
            currentPeriodEnd: current_period_end,
            cancelAtPeriodEnd: cancel_at_period_end,
          });

          // Link subscription to user
          db.users.update(user.id, { subscriptionId: subscription.id });
        }

        break;
      }

      case "subscription.cancelled":
      case "subscription.expired": {
        const { id } = event.data;
        const subscription = db.subscriptions.findByCreemId(id);

        if (subscription) {
          db.subscriptions.update(subscription.id, {
            status: event.type === "subscription.cancelled" ? "cancelled" : "expired",
          });
        }
        break;
      }

      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    return NextResponse.json({ received: true });
  } catch (error: any) {
    console.error("Webhook error:", error);
    return NextResponse.json(
      { error: "Webhook processing failed" },
      { status: 500 }
    );
  }
}

