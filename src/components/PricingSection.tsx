"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export function PricingSection() {
  const { t } = useLanguage();

  return (
    <section
      id="pricing"
      className="border-b border-slate-200 bg-slate-900"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 text-slate-100 sm:flex-row sm:items-center sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div>
          <h2 className="text-xl font-semibold tracking-tight">
            {t("home.pricing.title")}
          </h2>
          <p className="mt-1 text-sm text-slate-300">
            {t("home.pricing.description")}
          </p>
        </div>
        <div className="flex flex-col items-start gap-2 text-sm sm:items-end">
          <p className="text-3xl font-semibold text-white">
            {t("home.pricing.price")}
            <span className="ml-1 text-sm font-normal text-slate-300">
              {t("home.pricing.perGraphic")}
            </span>
          </p>
          <p className="text-xs text-slate-400">
            {t("home.pricing.volumeDiscounts")}
          </p>
        </div>
      </div>
    </section>
  );
}

