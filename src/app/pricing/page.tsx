"use client";

import { useState } from "react";
import { ToolPageLayout } from "@/components/ToolPageLayout";
import { useAuth } from "@/contexts/AuthContext";

// Product IDs from Creem - configured with actual product ID
const PRODUCT_IDS = {
  PRO_MONTHLY: process.env.NEXT_PUBLIC_CREEM_PRO_MONTHLY_ID || "prod_i8NTuL9iqdS25MHvi1NfU",
  PRO_YEARLY: process.env.NEXT_PUBLIC_CREEM_PRO_YEARLY_ID || "prod_i8NTuL9iqdS25MHvi1NfU",
  TEAM_MONTHLY: process.env.NEXT_PUBLIC_CREEM_TEAM_MONTHLY_ID || "prod_i8NTuL9iqdS25MHvi1NfU",
};

export default function PricingPage() {
  const { user } = useAuth();
  const [loading, setLoading] = useState<string | null>(null);

  async function handleSubscribe(productId: string) {
    setLoading(productId);
    try {
      const response = await fetch("/api/subscription/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(user && {
            Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
          }),
        },
        body: JSON.stringify({
          productId,
          userId: user?.id,
          email: user?.email,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to create subscription");
      }

      // Redirect to Creem checkout
      window.location.href = data.checkoutUrl;
    } catch (error: any) {
      alert(error.message || "Failed to start subscription");
      setLoading(null);
    }
  }

  return (
    <ToolPageLayout
      title="Pricing"
      subtitle="Simple pricing that scales"
      description="Create for free, then pay only when you export high-resolution designs or commercial assets."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm shadow-slate-100">
          <h3 className="mb-2 text-lg font-semibold text-slate-900">Free</h3>
          <p className="mb-4 text-3xl font-semibold text-slate-900">
            $0<span className="text-sm font-normal text-slate-500">/month</span>
          </p>
          <ul className="mb-6 space-y-2 text-sm text-slate-600">
            <li>• Basic image generation</li>
            <li>• Standard resolution</li>
            <li>• Watermarked exports</li>
          </ul>
          <button
            disabled
            className="w-full rounded-full border border-slate-300 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-500"
          >
            Current Plan
          </button>
        </div>
        <div className="rounded-3xl border-2 border-sky-500 bg-white/80 p-6 shadow-sm shadow-slate-100">
          <h3 className="mb-2 text-lg font-semibold text-slate-900">Pro</h3>
          <p className="mb-4 text-3xl font-semibold text-slate-900">
            $5<span className="text-sm font-normal text-slate-500">/month</span>
          </p>
          <ul className="mb-6 space-y-2 text-sm text-slate-600">
            <li>• High-resolution exports</li>
            <li>• No watermarks</li>
            <li>• Commercial license</li>
            <li>• Priority support</li>
            <li>• Unlimited generations</li>
          </ul>
          <div className="space-y-2">
            <button
              onClick={() => handleSubscribe(PRODUCT_IDS.PRO_MONTHLY)}
              disabled={loading === PRODUCT_IDS.PRO_MONTHLY}
              className="w-full rounded-full bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-sky-200 transition hover:brightness-110 disabled:opacity-50"
            >
              {loading === PRODUCT_IDS.PRO_MONTHLY ? "Processing..." : "Subscribe Monthly"}
            </button>
            <button
              onClick={() => handleSubscribe(PRODUCT_IDS.PRO_YEARLY)}
              disabled={loading === PRODUCT_IDS.PRO_YEARLY}
              className="w-full rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50 disabled:opacity-50"
            >
              {loading === PRODUCT_IDS.PRO_YEARLY ? "Processing..." : "Subscribe Yearly (Save 20%)"}
            </button>
          </div>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm shadow-slate-100">
          <h3 className="mb-2 text-lg font-semibold text-slate-900">Team</h3>
          <p className="mb-4 text-3xl font-semibold text-slate-900">
            $29<span className="text-sm font-normal text-slate-500">/month</span>
          </p>
          <ul className="mb-6 space-y-2 text-sm text-slate-600">
            <li>• All Pro features</li>
            <li>• Team collaboration</li>
            <li>• Volume discounts</li>
            <li>• Custom solutions</li>
            <li>• Dedicated support</li>
          </ul>
          <button
            onClick={() => handleSubscribe(PRODUCT_IDS.TEAM_MONTHLY)}
            disabled={loading === PRODUCT_IDS.TEAM_MONTHLY}
            className="w-full rounded-full bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-sky-200 transition hover:brightness-110 disabled:opacity-50"
          >
            {loading === PRODUCT_IDS.TEAM_MONTHLY ? "Processing..." : "Subscribe Team"}
          </button>
        </div>
      </div>
    </ToolPageLayout>
  );
}

