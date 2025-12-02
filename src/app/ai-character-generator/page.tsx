"use client";

import { useState } from "react";
import { ToolPageLayout } from "@/components/ToolPageLayout";

export default function AiCharacterGeneratorPage() {
  const [prompt, setPrompt] = useState("");
  const [generating, setGenerating] = useState(false);

  async function handleGenerate() {
    setGenerating(true);
    setTimeout(() => setGenerating(false), 2000);
  }

  return (
    <ToolPageLayout
      title="AI Character Generator"
      subtitle="Create game characters"
      description="Generate unique game characters with AI. Perfect for RPGs, mobile games, and game prototypes."
      badge="AI Game"
    >
      <div className="grid gap-8 lg:grid-cols-[1.2fr,1fr]">
        <div className="space-y-6 rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm shadow-slate-100 sm:p-8">
          <h2 className="text-lg font-semibold tracking-tight text-slate-900">
            Describe your character
          </h2>
          <div className="space-y-4">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Character description
              </label>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="min-h-[120px] w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none ring-sky-100 focus:border-sky-400 focus:ring"
                placeholder="e.g., Warrior elf with green armor, long blonde hair, holding a magical sword, fantasy style"
              />
            </div>
            <button
              onClick={handleGenerate}
              disabled={!prompt.trim() || generating}
              className="w-full rounded-full bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 px-5 py-3 text-sm font-semibold text-white shadow-sm shadow-sky-200 transition hover:brightness-110 disabled:opacity-50"
            >
              {generating ? "Generating..." : "Generate Character"}
            </button>
          </div>
        </div>
        <div className="space-y-6">
          <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm shadow-slate-100">
            <h3 className="mb-4 text-sm font-semibold text-slate-900">
              Character types
            </h3>
            <ul className="space-y-2 text-xs text-slate-600">
              <li>• Fantasy characters</li>
              <li>• Sci-fi characters</li>
              <li>• Anime characters</li>
              <li>• Pixel art characters</li>
              <li>• 3D game characters</li>
            </ul>
          </div>
        </div>
      </div>
    </ToolPageLayout>
  );
}

