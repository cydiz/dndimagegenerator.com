"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

type CategoryConfig = {
  id: string;
  key: string;
  badge?: string;
  itemsKey: string;
  accent: string;
};

const categoryConfigs: CategoryConfig[] = [
  {
    id: "ai-images",
    key: "aiImage",
    badge: "popular",
    itemsKey: "aiImage",
    accent:
      "from-sky-400/15 via-sky-500/10 to-indigo-500/10 border-sky-200/70 text-sky-700",
  },
  {
    id: "ai-headshots",
    key: "aiHeadshot",
    itemsKey: "aiHeadshot",
    accent:
      "from-rose-400/15 via-pink-400/10 to-fuchsia-500/10 border-rose-200/70 text-rose-700",
  },
  {
    id: "ai-editing",
    key: "aiEditing",
    itemsKey: "aiEditing",
    accent:
      "from-emerald-400/15 via-emerald-400/10 to-teal-500/10 border-emerald-200/70 text-emerald-700",
  },
  {
    id: "ai-game",
    key: "aiGame",
    itemsKey: "aiGame",
    accent:
      "from-violet-400/15 via-indigo-400/10 to-blue-500/10 border-violet-200/70 text-violet-700",
  },
  {
    id: "ai-writing",
    key: "aiWriting",
    itemsKey: "aiWriting",
    accent:
      "from-amber-400/15 via-orange-400/10 to-rose-500/10 border-amber-200/70 text-amber-700",
  },
];

function CategoryCard({
  config,
  icon,
  t,
}: {
  config: CategoryConfig;
  icon: ReactNode;
  t: (key: string) => string;
}) {
  const [from, via, to, border, textColor] = config.accent.split(" ");

  const items = [
    "artGenerator",
    "aiLogos",
    "aiStockPhotos",
    "aiBackgrounds",
    "aiAnime",
    "generalHeadshot",
    "corporateHeadshot",
    "avatarCosplay",
    "realEstateHeadshot",
    "medicalHeadshot",
    "photoUpscaler",
    "objectRemover",
    "backgroundRemover",
    "photoRestyler",
    "faceEnhancer",
    "aiGameTools",
    "aiGameCharacters",
    "aiGameBackground",
    "aiGameLogo",
    "aiDndGenerator",
    "contentBrainstorming",
    "artNftIdea",
    "copywriting",
    "songWriting",
    "bookWriting",
    "professionalWriting",
    "productWriting",
  ];

  const itemKeys: Record<string, string[]> = {
    aiImage: ["artGenerator", "aiLogos", "aiStockPhotos", "aiBackgrounds", "aiAnime"],
    aiHeadshot: ["generalHeadshot", "corporateHeadshot", "avatarCosplay", "realEstateHeadshot", "medicalHeadshot"],
    aiEditing: ["photoUpscaler", "objectRemover", "backgroundRemover", "photoColorizer", "photoRestyler", "photoRestorer", "faceEnhancer"],
    aiGame: ["aiGameTools", "aiGameCharacters", "aiGameBackground", "aiGameLogo", "aiDndGenerator"],
    aiWriting: ["contentBrainstorming", "artNftIdea", "copywriting", "songWriting", "bookWriting", "professionalWriting", "productWriting"],
  };

  const categoryItems = itemKeys[config.itemsKey] || [];

  return (
    <section
      id={config.id}
      className="scroll-mt-20 rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm shadow-slate-100 transition hover:-translate-y-0.5 hover:border-sky-200/80 hover:shadow-md sm:p-8"
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-tr ${from} ${via} ${to} ${textColor}`}
          >
            {icon}
          </div>
          <div>
            <h2 className="text-lg font-semibold tracking-tight text-slate-900">
              {t(`home.categories.${config.key}.title`)}
            </h2>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
              {t(`home.categories.${config.key}.subtitle`)}
            </p>
          </div>
        </div>
        {config.badge ? (
          <span className="inline-flex items-center rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white">
            {t("common.popular")}
          </span>
        ) : null}
      </div>

      <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-600">
        {t(`home.categories.${config.key}.description`)}
      </p>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {categoryItems.map((itemKey) => {
          const hrefMap: Record<string, string> = {
            artGenerator: "/art-generator",
            aiLogos: "/logo-generator",
            aiStockPhotos: "/ai-stock-photo",
            aiBackgrounds: "/background-generator",
            aiAnime: "/anime-generator",
            generalHeadshot: "/ai-headshots",
            corporateHeadshot: "/ai-corporate-headshot",
            avatarCosplay: "/ai-avatar",
            realEstateHeadshot: "/real-estate-headshot",
            medicalHeadshot: "/medical-headshot",
            photoUpscaler: "/upscale-photo",
            objectRemover: "/remove-object",
            backgroundRemover: "/remove-background",
            photoColorizer: "/colorize-picture",
            photoRestyler: "/personalize-art",
            photoRestorer: "/restore-picture",
            faceEnhancer: "/enhance-face",
            aiGameTools: "/game-tools",
            aiGameCharacters: "/ai-character-generator",
            aiGameBackground: "/background-generator",
            aiGameLogo: "/logo-generator",
            aiDndGenerator: "/dnd-generator",
            contentBrainstorming: "/ai-writing/content-brainstorming",
            artNftIdea: "/ai-writing/art-nft-idea",
            copywriting: "/ai-writing/copywriting",
            songWriting: "/ai-writing/song-writing",
            bookWriting: "/ai-writing/book-writing",
            professionalWriting: "/ai-writing/professional-writing",
            productWriting: "/ai-writing/product-writing",
          };
          const href = hrefMap[itemKey] || "#";
          const LinkComponent = href.startsWith("#") ? "button" : "a";
          
          if (LinkComponent === "button") {
            return (
              <button
                key={itemKey}
                className={`flex items-center justify-between rounded-2xl border ${border} bg-gradient-to-r ${from} ${to} px-3 py-3 text-left text-sm font-medium text-slate-900 transition hover:-translate-y-0.5 hover:border-slate-300 hover:bg-white`}
              >
                <span>{t(`home.categories.${config.key}.items.${itemKey}`)}</span>
                <span className="text-xs text-slate-500">{t("common.open")}</span>
              </button>
            );
          }
          
          return (
            <Link
              key={itemKey}
              href={href}
              className={`flex items-center justify-between rounded-2xl border ${border} bg-gradient-to-r ${from} ${to} px-3 py-3 text-left text-sm font-medium text-slate-900 transition hover:-translate-y-0.5 hover:border-slate-300 hover:bg-white`}
            >
              <span>{t(`home.categories.${config.key}.items.${itemKey}`)}</span>
              <span className="text-xs text-slate-500">{t("common.open")}</span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export function CategorySection() {
  const { t } = useLanguage();

  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.2fr,1fr] lg:gap-10">
          <div className="space-y-6">
            <CategoryCard
              config={categoryConfigs[0]}
              icon={<span className="text-lg">🎨</span>}
              t={t}
            />
            <CategoryCard
              config={categoryConfigs[1]}
              icon={<span className="text-lg">👤</span>}
              t={t}
            />
            <CategoryCard
              config={categoryConfigs[2]}
              icon={<span className="text-lg">🪄</span>}
              t={t}
            />
          </div>
          <div className="space-y-6">
            <CategoryCard
              config={categoryConfigs[3]}
              icon={<span className="text-lg">🎮</span>}
              t={t}
            />
            <CategoryCard
              config={categoryConfigs[4]}
              icon={<span className="text-lg">✍️</span>}
              t={t}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
