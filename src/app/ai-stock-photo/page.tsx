"use client";

import { useState } from "react";
import { ToolPageLayout } from "@/components/ToolPageLayout";

export default function AiStockPhotoPage() {
  const [prompt, setPrompt] = useState("");
  const [generating, setGenerating] = useState(false);

  async function handleGenerate() {
    setGenerating(true);
    setTimeout(() => setGenerating(false), 2000);
  }

  return (
    <ToolPageLayout
      title="AI Stock Photos"
      subtitle="Create on-brand stock photos"
      description="Generate professional stock photos without photoshoots. Perfect for marketing materials, websites, and product shots."
      badge="AI Image"
    >
      <div className="grid gap-8 lg:grid-cols-[1.2fr,1fr]">
        <div className="space-y-6 rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm shadow-slate-100 sm:p-8">
          <h2 className="text-lg font-semibold tracking-tight text-slate-900">
            Generate stock photos
          </h2>
          <div className="space-y-4">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Describe your stock photo
              </label>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="min-h-[120px] w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none ring-sky-100 focus:border-sky-400 focus:ring"
                placeholder="e.g., Professional business team meeting in modern office, diverse group, natural lighting, high quality"
              />
            </div>
            <button
              onClick={handleGenerate}
              disabled={!prompt.trim() || generating}
              className="w-full rounded-full bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 px-5 py-3 text-sm font-semibold text-white shadow-sm shadow-sky-200 transition hover:brightness-110 disabled:opacity-50"
            >
              {generating ? "Generating..." : "Generate Stock Photo"}
            </button>
          </div>
        </div>
        <div className="space-y-6">
          <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm shadow-slate-100">
            <h3 className="mb-4 text-sm font-semibold text-slate-900">
              Use cases
            </h3>
            <ul className="space-y-2 text-xs text-slate-600">
              <li>• Marketing campaigns</li>
              <li>• Website hero images</li>
              <li>• Social media content</li>
              <li>• Product presentations</li>
              <li>• Blog post headers</li>
            </ul>
          </div>
        </div>
      </div>
    </ToolPageLayout>
  );
}

