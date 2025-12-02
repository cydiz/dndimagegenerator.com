"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-12 text-xs text-slate-500 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:grid-cols-5">
          {/* Company */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-gradient-to-tr from-sky-500 via-blue-500 to-indigo-500 text-xs font-bold text-white">
                AI
              </div>
              <span className="text-sm font-semibold text-slate-900">Hotpot</span>
            </div>
            <div className="flex flex-col gap-2">
              <Link href="/pricing" className="hover:text-slate-700">
                {t("common.pricing")}
              </Link>
              <Link href="/help" className="hover:text-slate-700">
                {t("common.help")}
              </Link>
              <Link href="/contact" className="hover:text-slate-700">
                {t("common.contact")}
              </Link>
              <Link href="/about" className="hover:text-slate-700">
                {t("footer.about")}
              </Link>
              <Link href="/jobs" className="hover:text-slate-700">
                {t("footer.jobs")}
              </Link>
              <Link href="/privacy" className="hover:text-slate-700">
                {t("common.privacy")}
              </Link>
            </div>
          </div>

          {/* AI Images */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-slate-900">
              {t("nav.aiImages")}
            </h3>
            <div className="flex flex-col gap-2">
              <Link href="/art-generator" className="hover:text-slate-700">
                {t("nav.submenu.artGenerator")}
              </Link>
              <Link href="/logo-generator" className="hover:text-slate-700">
                {t("nav.submenu.aiLogos")}
              </Link>
              <Link href="/ai-stock-photo" className="hover:text-slate-700">
                {t("nav.submenu.aiStockPhotos")}
              </Link>
              <Link href="/background-generator" className="hover:text-slate-700">
                {t("nav.submenu.aiBackgrounds")}
              </Link>
              <Link href="/anime-generator" className="hover:text-slate-700">
                {t("nav.submenu.aiAnime")}
              </Link>
              <Link href="/upscale-photo" className="hover:text-slate-700">
                {t("nav.submenu.photoUpscaler")}
              </Link>
              <Link href="/remove-object" className="hover:text-slate-700">
                {t("nav.submenu.objectRemover")}
              </Link>
              <Link href="/remove-background" className="hover:text-slate-700">
                {t("nav.submenu.backgroundRemover")}
              </Link>
            </div>
          </div>

          {/* Resources */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-slate-900">
              {t("footer.resources")}
            </h3>
            <div className="flex flex-col gap-2">
              <Link href="/game-tools" className="hover:text-slate-700">
                {t("footer.gameTools")}
              </Link>
              <Link href="/ai-avatar" className="hover:text-slate-700">
                {t("footer.aiAvatars")}
              </Link>
              <Link href="/ai-character-generator" className="hover:text-slate-700">
                {t("footer.characterGenerator")}
              </Link>
              <Link href="/free-game-assets" className="hover:text-slate-700">
                {t("footer.freeGameAssets")}
              </Link>
              <Link href="/app-marketing-pack" className="hover:text-slate-700">
                {t("footer.appMarketingPack")}
              </Link>
            </div>
          </div>

          {/* Templates */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-slate-900">
              {t("footer.templates")}
            </h3>
            <div className="flex flex-col gap-2">
              <Link href="/templates/instagram-post" className="hover:text-slate-700">
                Instagram Post
              </Link>
              <Link href="/templates/instagram-story" className="hover:text-slate-700">
                Instagram Story
              </Link>
              <Link href="/templates/facebook-post" className="hover:text-slate-700">
                Facebook Post
              </Link>
              <Link href="/templates/linkedin-banner" className="hover:text-slate-700">
                LinkedIn Banner
              </Link>
              <Link href="/templates/youtube-thumbnail" className="hover:text-slate-700">
                YouTube Thumbnail
              </Link>
            </div>
          </div>

          {/* Blog */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-slate-900">
              {t("footer.blog")}
            </h3>
            <div className="flex flex-col gap-2">
              <Link href="/blog" className="hover:text-slate-700">
                {t("footer.allPosts")}
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p>{t("footer.copyright", { year: new Date().getFullYear() })}</p>
          <p className="text-[11px] leading-relaxed text-slate-500">
            {t("footer.disclaimer")}
          </p>
        </div>
      </div>
    </footer>
  );
}
