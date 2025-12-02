"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="border-b border-slate-200 bg-gradient-to-b from-sky-50 via-white to-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:gap-10 sm:px-6 sm:py-14 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
        <div className="space-y-5 sm:space-y-6">
          <p className="inline-flex items-center rounded-full bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-sky-600 ring-1 ring-sky-100">
            {t("home.hero.badge")}
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            {t("home.hero.title")}{" "}
            <span className="bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
              {t("home.hero.titleHighlight")}
            </span>
          </h1>
          <p className="max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base lg:text-lg">
            {t("home.hero.description")}
          </p>
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <button className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 px-5 py-2 text-sm font-semibold text-white shadow-sm shadow-sky-200 transition hover:brightness-110">
              {t("home.hero.startFree")}
              <span className="text-xs font-normal text-sky-100">
                {t("home.hero.noLoginRequired")}
              </span>
            </button>
            <button className="inline-flex items-center gap-1.5 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-800 shadow-sm transition hover:bg-slate-50">
              {t("home.hero.viewTools")}
            </button>
          </div>
          <p className="text-[11px] text-slate-500">
            {t("home.hero.pricingNote")}
          </p>
        </div>

        <div className="relative">
          <div className="absolute -inset-10 -z-10 rounded-3xl bg-gradient-to-tr from-sky-100 via-blue-50 to-indigo-50 blur-2xl" />
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white/80 shadow-xl shadow-sky-100">
            <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50/80 px-4 py-2">
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                AI Image Generator
              </div>
              <div className="flex gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
                <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
                <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
              </div>
            </div>
            <div className="grid gap-4 p-4 sm:grid-cols-[1.2fr,1fr] sm:p-6">
              <div className="space-y-3">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-sky-500">
                  Prompt
                </p>
                <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-3 text-xs text-slate-600 sm:text-sm">
                  <span className="font-medium text-slate-800">
                    "Epic fantasy landscape for DnD:
                  </span>{" "}
                  floating islands above a glowing forest, painterly style,
                  cinematic lighting, 4k"
                </div>
                <button className="inline-flex items-center justify-center rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-slate-800 sm:text-sm">
                  {t("common.generate")}
                </button>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200 bg-slate-900/90">
                <Image
                  src="/images/site/ai/image_generator/art_maker/teaser_400.jpg"
                  alt="AI generated fantasy landscape"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
