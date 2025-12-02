"use client";

import { ToolPageLayout } from "@/components/ToolPageLayout";

export default function PricingPage() {
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
          <ul className="space-y-2 text-sm text-slate-600">
            <li>• Basic image generation</li>
            <li>• Standard resolution</li>
            <li>• Watermarked exports</li>
          </ul>
        </div>
        <div className="rounded-3xl border-2 border-sky-500 bg-white/80 p-6 shadow-sm shadow-slate-100">
          <h3 className="mb-2 text-lg font-semibold text-slate-900">Pro</h3>
          <p className="mb-4 text-3xl font-semibold text-slate-900">
            $1<span className="text-sm font-normal text-slate-500">/graphic</span>
          </p>
          <ul className="space-y-2 text-sm text-slate-600">
            <li>• High-resolution exports</li>
            <li>• No watermarks</li>
            <li>• Commercial license</li>
            <li>• Priority support</li>
          </ul>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm shadow-slate-100">
          <h3 className="mb-2 text-lg font-semibold text-slate-900">Team</h3>
          <p className="mb-4 text-sm text-slate-500">Volume discounts</p>
          <ul className="space-y-2 text-sm text-slate-600">
            <li>• All Pro features</li>
            <li>• Team collaboration</li>
            <li>• Volume discounts</li>
            <li>• Custom solutions</li>
          </ul>
        </div>
      </div>
    </ToolPageLayout>
  );
}

