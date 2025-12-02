"use client";

import Image from "next/image";
import { ToolPageLayout } from "@/components/ToolPageLayout";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

const writingTools = [
  {
    title: "Content Brainstorming",
    href: "/ai-writing/content-brainstorming",
    description: "Generate ideas and brainstorm content for blogs, articles, and social media",
    icon: "💡",
  },
  {
    title: "Art & NFT Idea",
    href: "/ai-writing/art-nft-idea",
    description: "Generate creative ideas for art projects and NFT concepts",
    icon: "🎨",
  },
  {
    title: "Copywriting",
    href: "/ai-writing/copywriting",
    description: "Create compelling copy for marketing, ads, and product descriptions",
    icon: "✍️",
  },
  {
    title: "Song Writing",
    href: "/ai-writing/song-writing",
    description: "Write lyrics and compose songs with AI assistance",
    icon: "🎵",
  },
  {
    title: "Book Writing",
    href: "/ai-writing/book-writing",
    description: "Assist with book writing, chapters, and storytelling",
    icon: "📚",
  },
  {
    title: "Professional Writing",
    href: "/ai-writing/professional-writing",
    description: "Create professional documents, emails, and reports",
    icon: "📄",
  },
  {
    title: "Product Writing",
    href: "/ai-writing/product-writing",
    description: "Write product descriptions, features, and marketing copy",
    icon: "📦",
  },
];

export default function AiWritingPage() {
  const { t } = useLanguage();

  return (
    <ToolPageLayout
      title="AI Writing"
      subtitle="Elevate writing with AI"
      description="Brainstorm ideas, polish copy, and generate content for blogs, products, and books. Use AI to enhance your writing workflow."
      badge="AI Writing"
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {writingTools.map((tool) => (
          <Link
            key={tool.href}
            href={tool.href}
            className="flex flex-col justify-between rounded-3xl border border-slate-200 bg-white/90 p-5 shadow-sm shadow-slate-100 transition hover:-translate-y-0.5 hover:border-sky-200 hover:shadow-md"
          >
            <div>
              <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-tr from-amber-400/15 via-orange-400/10 to-rose-500/10 text-3xl">
                {tool.icon}
              </div>
              <h3 className="mb-2 text-sm font-semibold tracking-tight text-slate-900">
                {tool.title}
              </h3>
              <p className="text-xs leading-relaxed text-slate-600">
                {tool.description}
              </p>
            </div>
            <button className="mt-4 inline-flex items-center justify-center rounded-full border border-slate-300 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-900 hover:bg-slate-100">
              Open tool
            </button>
          </Link>
        ))}
      </div>

      <div className="mt-10 grid gap-6 rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm shadow-slate-100 sm:p-8 lg:grid-cols-2">
        <div>
          <h3 className="mb-3 text-lg font-semibold text-slate-900">
            Why use AI Writing tools?
          </h3>
          <ul className="space-y-2 text-sm text-slate-600">
            <li>• Generate ideas faster and overcome writer's block</li>
            <li>• Improve writing quality with AI suggestions</li>
            <li>• Save time on repetitive writing tasks</li>
            <li>• Create content in multiple styles and tones</li>
            <li>• Enhance your existing writing with AI assistance</li>
          </ul>
        </div>
        <div>
          <h3 className="mb-3 text-lg font-semibold text-slate-900">
            Use cases
          </h3>
          <ul className="space-y-2 text-sm text-slate-600">
            <li>• Blog posts and articles</li>
            <li>• Marketing copy and advertisements</li>
            <li>• Product descriptions</li>
            <li>• Social media content</li>
            <li>• Creative writing and storytelling</li>
            <li>• Professional documents and emails</li>
          </ul>
        </div>
      </div>
    </ToolPageLayout>
  );
}
