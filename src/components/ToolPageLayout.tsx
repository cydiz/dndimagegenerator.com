"use client";

import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { useLanguage } from "@/contexts/LanguageContext";

type ToolPageLayoutProps = {
  title: string;
  subtitle?: string;
  description?: string;
  badge?: string;
  children: ReactNode;
};

export function ToolPageLayout({
  title,
  subtitle,
  description,
  badge,
  children,
}: ToolPageLayoutProps) {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />
      <main className="border-b border-slate-200 bg-gradient-to-b from-sky-50 via-white to-white">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
          <div className="mb-8 space-y-3">
            {badge && (
              <p className="inline-flex items-center rounded-full bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-sky-600 ring-1 ring-sky-100">
                {badge}
              </p>
            )}
            <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              {title}
              {subtitle && (
                <>
                  {" "}
                  <span className="bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
                    {subtitle}
                  </span>
                </>
              )}
            </h1>
            {description && (
              <p className="max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
                {description}
              </p>
            )}
          </div>
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}

