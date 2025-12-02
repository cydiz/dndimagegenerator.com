"use client";

import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { imageMap } from "@/lib/imageMap";
import { generateBreadcrumbList } from "@/lib/structured-data";

const toolKeys = ["artGenerator", "aiLogos", "aiStockPhotos", "aiBackgrounds", "aiAnime"];

const toolHrefs: Record<string, string> = {
  artGenerator: "/art-generator",
  aiLogos: "/logo-generator",
  aiStockPhotos: "/ai-stock-photo",
  aiBackgrounds: "/background-generator",
  aiAnime: "/anime-generator",
};

export default function AiImagesPage() {
  const { t } = useLanguage();

  const baseUrl = "https://dndimagegenerator.com";
  const breadcrumbJsonLd = generateBreadcrumbList([
    { name: "Home", url: baseUrl },
    { name: "AI Images", url: `${baseUrl}/ai-images` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <div className="min-h-screen bg-slate-50 text-slate-900">
        <Header />
      <main className="border-b border-slate-200 bg-gradient-to-b from-sky-50 via-white to-white">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
          <div className="mb-8 space-y-3">
            <p className="inline-flex items-center rounded-full bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-sky-600 ring-1 ring-sky-100">
              {t("aiImages.badge")}
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              {t("aiImages.title")}{" "}
              <span className="bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
                {t("aiImages.titleHighlight")}
              </span>{" "}
              {t("aiImages.titleSuffix")}
            </h1>
            <p className="max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
              {t("aiImages.description")}
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {toolKeys.map((key) => (
              <Link
                key={key}
                href={toolHrefs[key]}
                className="flex flex-col justify-between rounded-3xl border border-slate-200 bg-white/90 p-5 shadow-sm shadow-slate-100 transition hover:-translate-y-0.5 hover:border-sky-200 hover:shadow-md"
              >
                <div>
                  <div className="mb-3 relative aspect-video overflow-hidden rounded-2xl">
                    <Image
                      src={imageMap[key] || "/file.svg"}
                      alt={`${t(`aiImages.tools.${key}.title`)} - AI image generator tool`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="mb-3 flex items-center justify-between gap-2">
                    <h2 className="text-sm font-semibold tracking-tight text-slate-900">
                      {t(`aiImages.tools.${key}.title`)}
                    </h2>
                    {key === "artGenerator" ? (
                      <span className="inline-flex items-center rounded-full bg-slate-900 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white">
                        {t("common.popular")}
                      </span>
                    ) : null}
                  </div>
                  <p className="text-xs leading-relaxed text-slate-600">
                    {t(`aiImages.tools.${key}.description`)}
                  </p>
                </div>
                <button className="mt-4 inline-flex items-center justify-center rounded-full border border-slate-300 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-900 hover:bg-slate-100">
                  {t("common.openTool")}
                </button>
              </Link>
            ))}
          </div>

          <div className="mt-10 rounded-3xl border border-dashed border-sky-300 bg-sky-50/60 p-5 text-xs text-slate-700 sm:p-6">
            <p className="font-semibold text-slate-900">
              {t("aiImages.connectToReal")}
            </p>
            <p className="mt-1">
              {t("aiImages.connectDescription")}
            </p>
          </div>
        </div>
      </main>
      <Footer />
      </div>
    </>
  );
}
