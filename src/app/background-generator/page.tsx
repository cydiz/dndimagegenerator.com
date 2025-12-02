"use client";

import { useState } from "react";
import { ToolPageLayout } from "@/components/ToolPageLayout";

export default function BackgroundGeneratorPage() {
  const [prompt, setPrompt] = useState("");
  const [generating, setGenerating] = useState(false);

  async function handleGenerate() {
    setGenerating(true);
    setTimeout(() => setGenerating(false), 2000);
  }

  return (
    <ToolPageLayout
      title="AI Background Generator"
      subtitle="Design vivid backdrops"
      description="Create stunning backgrounds for games, apps, presentations, and websites. Generate custom backgrounds in seconds."
      badge="AI Image"
    >
      <div className="grid gap-8 lg:grid-cols-[1.2fr,1fr]">
        <div className="space-y-6 rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm shadow-slate-100 sm:p-8">
          <h2 className="text-lg font-semibold tracking-tight text-slate-900">
            Create backgrounds
          </h2>
          <div className="space-y-4">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Describe your background
              </label>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="min-h-[120px] w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none ring-sky-100 focus:border-sky-400 focus:ring"
                placeholder="e.g., Abstract gradient background with purple and blue tones, modern, seamless pattern"
              />
            </div>
            <button
              onClick={handleGenerate}
              disabled={!prompt.trim() || generating}
              className="w-full rounded-full bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 px-5 py-3 text-sm font-semibold text-white shadow-sm shadow-sky-200 transition hover:brightness-110 disabled:opacity-50"
            >
              {generating ? "Generating..." : "Generate Background"}
            </button>
          </div>
        </div>
        <div className="space-y-6">
          <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm shadow-slate-100">
            <h3 className="mb-4 text-sm font-semibold text-slate-900">
              Perfect for
            </h3>
            <ul className="space-y-2 text-xs text-slate-600">
              <li>• Game backgrounds</li>
              <li>• App interfaces</li>
              <li>• Presentation slides</li>
              <li>• Website headers</li>
              <li>• Social media posts</li>
            </ul>
          </div>
        </div>
      </div>
    </ToolPageLayout>
  );
}

