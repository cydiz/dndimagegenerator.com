"use client";

import { ToolPageLayout } from "@/components/ToolPageLayout";
import Link from "next/link";

const gameTools = [
  {
    title: "AI DnD Generator",
    href: "/dnd-generator",
    description: "Generate DnD scenes and characters",
  },
  {
    title: "AI Game Characters",
    href: "/ai-character-generator",
    description: "Create game characters with AI",
  },
  {
    title: "AI Game Background",
    href: "/background-generator",
    description: "Design game backgrounds",
  },
  {
    title: "Free Game Assets",
    href: "/free-game-assets",
    description: "Download free game assets",
  },
];

export default function GameToolsPage() {
  return (
    <ToolPageLayout
      title="AI Game Tools"
      subtitle="Create game content with AI"
      description="Design game characters, backgrounds, and assets. Perfect for DnD, mobile games, and prototypes."
      badge="AI Game"
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {gameTools.map((tool) => (
          <Link
            key={tool.href}
            href={tool.href}
            className="flex flex-col justify-between rounded-3xl border border-slate-200 bg-white/90 p-5 shadow-sm shadow-slate-100 transition hover:-translate-y-0.5 hover:border-sky-200 hover:shadow-md"
          >
            <div>
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
    </ToolPageLayout>
  );
}

