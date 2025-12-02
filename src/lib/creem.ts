/**
 * Creem API Client
 * Documentation: https://docs.creem.com/
 */

const CREEM_API_BASE = process.env.NEXT_PUBLIC_CREEM_API_BASE || "https://api.creem.io";
const CREEM_API_KEY = process.env.CREEM_API_KEY || "";

export type CreemProduct = {
  id: string;
  name: string;
  description?: string;
  price: number;
  currency: string;
  type: "subscription" | "one_time";
  billing_interval?: "month" | "year";
};

export type CreemCheckoutSession = {
  id: string;
  url: string;
  product_id: string;
  customer_email?: string;
  success_url?: string;
  cancel_url?: string;
};

export type CreemSubscription = {
  id: string;
  product_id: string;
  customer_email: string;
  status: "active" | "cancelled" | "expired" | "pending";
  current_period_start: number;
  current_period_end: number;
  cancel_at_period_end: boolean;
};

export class CreemClient {
  private apiKey: string;

  constructor(apiKey?: string) {
    this.apiKey = apiKey || CREEM_API_KEY;
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${CREEM_API_BASE}${endpoint}`;
    const response = await fetch(url, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        "x-api-key": this.apiKey,
        ...options.headers,
      },
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({ message: "Unknown error" }));
      throw new Error(error.message || `API request failed: ${response.statusText}`);
    }

    return response.json();
  }

  /**
   * Create a checkout session for a product
   * Creem API: POST https://api.creem.io/v1/checkouts
   */
  async createCheckoutSession(
    productId: string,
    options: {
      customerEmail?: string;
      successUrl?: string;
      cancelUrl?: string;
      metadata?: Record<string, string>;
    } = {}
  ): Promise<CreemCheckoutSession> {
    const response = await this.request<{ checkout_url: string; checkout_id: string }>("/v1/checkouts", {
      method: "POST",
      body: JSON.stringify({
        product_id: productId,
        // Creem API accepts optional parameters
        ...(options.customerEmail && { customer_email: options.customerEmail }),
        ...(options.successUrl && { success_url: options.successUrl }),
        ...(options.cancelUrl && { cancel_url: options.cancelUrl }),
        ...(options.metadata && { metadata: options.metadata }),
      }),
    });

    return {
      id: response.checkout_id,
      url: response.checkout_url,
      product_id: productId,
      customer_email: options.customerEmail,
      success_url: options.successUrl,
      cancel_url: options.cancelUrl,
    };
  }

  /**
   * Get subscription details
   */
  async getSubscription(subscriptionId: string): Promise<CreemSubscription> {
    return this.request<CreemSubscription>(`/v1/subscriptions/${subscriptionId}`);
  }

  /**
   * Get subscription by customer email
   */
  async getSubscriptionByEmail(email: string): Promise<CreemSubscription | null> {
    try {
      return this.request<CreemSubscription>(`/v1/subscriptions?customer_email=${encodeURIComponent(email)}`);
    } catch (error) {
      return null;
    }
  }

  /**
   * Cancel a subscription
   */
  async cancelSubscription(subscriptionId: string, cancelAtPeriodEnd: boolean = true): Promise<CreemSubscription> {
    return this.request<CreemSubscription>(`/v1/subscriptions/${subscriptionId}/cancel`, {
      method: "POST",
      body: JSON.stringify({
        cancel_at_period_end: cancelAtPeriodEnd,
      }),
    });
  }

  /**
   * Verify webhook signature
   */
  verifyWebhookSignature(payload: string, signature: string): boolean {
    // Creem webhook signature verification
    // In production, implement proper signature verification
    const expectedSignature = process.env.CREEM_WEBHOOK_SECRET || "";
    // This is a simplified version - implement proper HMAC verification
    return signature === expectedSignature || process.env.NODE_ENV === "development";
  }
}

export const creemClient = new CreemClient();

