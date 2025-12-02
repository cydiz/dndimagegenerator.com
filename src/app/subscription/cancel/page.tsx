"use client";

import Link from "next/link";
import { ToolPageLayout } from "@/components/ToolPageLayout";

export default function SubscriptionCancelPage() {
  return (
    <ToolPageLayout
      title="Subscription Cancelled"
      description="Your subscription was not completed."
    >
      <div className="mx-auto max-w-2xl">
        <div className="rounded-3xl border border-slate-200 bg-white/80 p-8 text-center">
          <h2 className="mb-2 text-lg font-semibold text-slate-900">
            Subscription Cancelled
          </h2>
          <p className="mb-6 text-sm text-slate-600">
            You cancelled the subscription process. No charges were made.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/pricing"
              className="rounded-full bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 px-5 py-2 text-sm font-semibold text-white shadow-sm shadow-sky-200 transition hover:brightness-110"
            >
              View Pricing
            </Link>
            <Link
              href="/"
              className="rounded-full border border-slate-300 bg-white px-5 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
            >
              Go Home
            </Link>
          </div>
        </div>
      </div>
    </ToolPageLayout>
  );
}

