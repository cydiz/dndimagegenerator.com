"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useAuth } from "@/contexts/AuthContext";

const navItems = [
  {
    key: "aiImages",
    href: "/ai-images",
    submenu: [
      { key: "artGenerator", href: "/art-generator" },
      { key: "artGeneratorPowerEditor", href: "/ai-editor" },
      { key: "aiCharacters", href: "/ai-character-generator" },
      { key: "aiLogos", href: "/logo-generator" },
      { key: "aiStockPhotos", href: "/ai-stock-photo" },
      { key: "aiBackgrounds", href: "/background-generator" },
      { key: "aiAnime", href: "/anime-generator" },
    ],
  },
  {
    key: "aiHeadshots",
    href: "/ai-headshots",
    submenu: [
      { key: "generalHeadshot", href: "/ai-headshots" },
      { key: "corporateHeadshot", href: "/ai-corporate-headshot" },
      { key: "lunarNewYearHeadshot", href: "/lunar-new-year-headshot" },
      { key: "avatar", href: "/ai-avatar" },
      { key: "cosplayHeadshot", href: "/ai-cosplay" },
      { key: "realEstateHeadshot", href: "/real-estate-headshot" },
      { key: "medicalHeadshot", href: "/medical-headshot" },
      { key: "xmasHeadshot", href: "/xmas-headshot" },
      { key: "profilePictureEditor", href: "/profile-picture-editor" },
    ],
  },
  {
    key: "aiEditing",
    href: "/ai-editing",
    submenu: [
      { key: "photoUpscaler", href: "/upscale-photo" },
      { key: "objectRemover", href: "/remove-object" },
      { key: "backgroundRemover", href: "/remove-background" },
      { key: "photoRestyler", href: "/personalize-art" },
      { key: "photoColorizer", href: "/colorize-picture" },
      { key: "photoRestorer", href: "/restore-picture" },
      { key: "faceEnhancer", href: "/enhance-face" },
      { key: "autoCrop", href: "/crop-photo" },
      { key: "colorGenerator", href: "/color-generator" },
    ],
  },
  {
    key: "aiGame",
    href: "/game-tools",
    submenu: [
      { key: "aiGameTools", href: "/game-tools" },
      { key: "aiGameCharacters", href: "/ai-character-generator" },
      { key: "aiGameBackground", href: "/background-generator" },
      { key: "aiGameCopywriter", href: "/sparkwriter" },
      { key: "aiGameLogo", href: "/logo-generator" },
      { key: "dndGenerator", href: "/dnd-generator" },
    ],
  },
  {
    key: "aiWriting",
    href: "/ai-writing",
    submenu: [
      { key: "contentBrainstorming", href: "/ai-writing/content-brainstorming" },
      { key: "artNftIdea", href: "/ai-writing/art-nft-idea" },
      { key: "copywriting", href: "/ai-writing/copywriting" },
      { key: "songWriting", href: "/ai-writing/song-writing" },
      { key: "bookWriting", href: "/ai-writing/book-writing" },
      { key: "professionalWriting", href: "/ai-writing/professional-writing" },
      { key: "productWriting", href: "/ai-writing/product-writing" },
    ],
  },
  {
    key: "pricing",
    href: "/pricing",
  },
];

export function Header() {
  const router = useRouter();
  const { language, setLanguage, t } = useLanguage();
  const { user, logout, loading: authLoading } = useAuth();
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);

  function handleLogout() {
    logout();
    router.push("/");
  }

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-3 sm:px-4 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative h-8 w-8">
            <Image
              src="/images/logos/brandmark.svg"
              alt="Hotpot.ai"
              fill
              className="object-contain"
              onError={(e) => {
                // Fallback to gradient if image fails to load
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const parent = target.parentElement;
                if (parent) {
                  parent.innerHTML = '<div class="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-tr from-sky-500 via-blue-500 to-indigo-500 text-sm font-bold text-white shadow-md">AI</div>';
                }
              }}
            />
          </div>
          <div className="relative h-6 w-24 hidden sm:block">
            <Image
              src="/images/logos/wordmark.svg"
              alt="Hotpot"
              fill
              className="object-contain"
              onError={(e) => {
                // Fallback to text if image fails to load
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const parent = target.parentElement;
                if (parent) {
                  parent.innerHTML = '<div class="flex flex-col leading-tight"><span class="text-base font-semibold tracking-tight text-slate-900">Hotpot</span><span class="text-xs font-medium uppercase tracking-[0.18em] text-sky-500">AI STUDIO</span></div>';
                }
              }}
            />
          </div>
          <div className="flex flex-col leading-tight sm:hidden">
            <span className="text-base font-semibold tracking-tight text-slate-900">
              Hotpot
            </span>
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-sky-500">
              AI STUDIO
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 text-sm font-medium text-slate-700 md:flex">
          {navItems.map((item) => (
            <div
              key={item.key}
              className="relative"
              onMouseEnter={() => item.submenu && setHoveredNav(item.key)}
              onMouseLeave={() => setHoveredNav(null)}
            >
              {item.href.startsWith("#") ? (
                <a
                  href={item.href}
                  className="rounded-full px-3 py-1 transition-colors hover:bg-slate-100 hover:text-slate-900"
                >
                  {t(`nav.${item.key}`)}
                </a>
              ) : (
                <Link
                  href={item.href}
                  className="rounded-full px-3 py-1 transition-colors hover:bg-slate-100 hover:text-slate-900"
                >
                  {t(`nav.${item.key}`)}
                </Link>
              )}
              {item.submenu && hoveredNav === item.key && (
                <div className="absolute left-0 top-full mt-1 w-56 rounded-2xl border border-slate-200 bg-white p-2 shadow-lg">
                  {item.submenu.map((sub) => (
                    <Link
                      key={sub.href}
                      href={sub.href}
                      className="block rounded-xl px-3 py-2 text-sm text-slate-700 transition-colors hover:bg-slate-50 hover:text-slate-900"
                    >
                      {t(`nav.submenu.${sub.key}`)}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="relative">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value as "en" | "zh")}
              className="appearance-none rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700 outline-none transition hover:bg-slate-50 focus:border-sky-400 focus:ring-1 focus:ring-sky-200"
            >
              <option value="en">EN</option>
              <option value="zh">中文</option>
            </select>
          </div>
          {!authLoading && (
            <>
              {user ? (
                <div className="flex items-center gap-2">
                  <Link
                    href="/account"
                    className="hidden items-center gap-2 text-sm text-slate-700 md:flex"
                  >
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-tr from-sky-500 via-blue-500 to-indigo-500 text-xs font-semibold text-white">
                      {user.name?.[0]?.toUpperCase() || user.email[0].toUpperCase()}
                    </div>
                    <span className="max-w-[120px] truncate">
                      {user.name || user.email.split("@")[0]}
                    </span>
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="rounded-full px-3 py-1 text-xs sm:text-sm font-medium text-slate-700 transition hover:bg-slate-100"
                  >
                    {t("auth.logout")}
                  </button>
                </div>
              ) : (
                <>
                  <Link
                    href="/login"
                    className="hidden rounded-full px-3 py-1 text-sm font-medium text-slate-700 transition hover:bg-slate-100 md:inline-flex"
                  >
                    {t("common.signIn")}
                  </Link>
                  <Link
                    href="/login"
                    className="inline-flex items-center rounded-full bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 px-4 py-1.5 text-xs sm:text-sm font-semibold text-white shadow-sm shadow-sky-200 transition hover:brightness-110"
                  >
                    {t("common.startCreating")}
                  </Link>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </header>
  );
}
