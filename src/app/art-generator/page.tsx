"use client";

import { useState } from "react";
import { ToolPageLayout } from "@/components/ToolPageLayout";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ArtGeneratorPage() {
  const { t } = useLanguage();
  const [prompt, setPrompt] = useState("");
  const [generating, setGenerating] = useState(false);

  async function handleGenerate() {
    setGenerating(true);
    // TODO: 调用真实的图像生成 API
    setTimeout(() => {
      setGenerating(false);
    }, 2000);
  }

  return (
    <ToolPageLayout
      title="AI Art Generator"
      subtitle="Turn text into art"
      description="Create stunning artwork from simple text descriptions. Generate images in various styles including realistic, painterly, anime, and more."
      badge="AI Image"
    >
      <div className="grid gap-8 lg:grid-cols-[1.2fr,1fr]">
        <div className="space-y-6 rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm shadow-slate-100 sm:p-8">
          <h2 className="text-lg font-semibold tracking-tight text-slate-900">
            Create your artwork
          </h2>
          <div className="space-y-4">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Describe your artwork
              </label>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="min-h-[120px] w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none ring-sky-100 focus:border-sky-400 focus:ring"
                placeholder="e.g., A serene mountain landscape at sunset with vibrant colors, painterly style, 4k"
              />
            </div>
            <button
              onClick={handleGenerate}
              disabled={!prompt.trim() || generating}
              className="w-full rounded-full bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 px-5 py-3 text-sm font-semibold text-white shadow-sm shadow-sky-200 transition hover:brightness-110 disabled:opacity-50"
            >
              {generating ? "Generating..." : "Generate Art"}
            </button>
          </div>
        </div>
        <div className="space-y-6">
          <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm shadow-slate-100">
            <h3 className="mb-4 text-sm font-semibold text-slate-900">
              Tips for better results
            </h3>
            <ul className="space-y-2 text-xs text-slate-600">
              <li>• Be specific about style, mood, and composition</li>
              <li>• Include details about lighting and colors</li>
              <li>• Mention the desired art style (realistic, anime, etc.)</li>
              <li>• Add quality keywords like "4k", "highly detailed"</li>
            </ul>
          </div>
        </div>
      </div>
    </ToolPageLayout>
  );
}

