"use client";

import { useState } from "react";
import { ToolPageLayout } from "@/components/ToolPageLayout";
import { useLanguage } from "@/contexts/LanguageContext";
import { ImageUploadTool } from "@/components/ImageUploadTool";

export default function AiEditorPage() {
  const { t } = useLanguage();
  const [prompt, setPrompt] = useState("");
  const [generating, setGenerating] = useState(false);

  return (
    <ToolPageLayout
      title="Art Generator"
      subtitle="Power Editor"
      description="Advanced AI art generator with powerful editing capabilities. Create and refine your artwork with professional tools."
      badge="AI Image"
    >
      <div className="space-y-8">
        <div className="grid gap-8 lg:grid-cols-[1.2fr,1fr]">
          <div className="space-y-6 rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm shadow-slate-100 sm:p-8">
            <h2 className="text-lg font-semibold tracking-tight text-slate-900">
              Create or edit artwork
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
                  placeholder="e.g., A futuristic cityscape at sunset, cyberpunk style, highly detailed, 4k"
                />
              </div>
              <button
                onClick={() => {
                  setGenerating(true);
                  setTimeout(() => setGenerating(false), 2000);
                }}
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
                Power Editor Features
              </h3>
              <ul className="space-y-2 text-xs text-slate-600">
                <li>• Advanced prompt engineering</li>
                <li>• Style transfer and mixing</li>
                <li>• Image-to-image transformation</li>
                <li>• Inpainting and outpainting</li>
                <li>• Upscaling and enhancement</li>
                <li>• Batch generation</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm shadow-slate-100">
              <h3 className="mb-4 text-sm font-semibold text-slate-900">
                Tips
              </h3>
              <ul className="space-y-2 text-xs text-slate-600">
                <li>• Be specific about style and mood</li>
                <li>• Include technical details (4k, detailed, etc.)</li>
                <li>• Use style keywords (realistic, anime, etc.)</li>
                <li>• Experiment with different prompts</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm shadow-slate-100 sm:p-8">
          <h2 className="mb-4 text-lg font-semibold tracking-tight text-slate-900">
            Upload image to edit
          </h2>
          <ImageUploadTool
            title=""
            description="Upload an existing image to edit with AI power tools"
            processingText="Processing image..."
            features={[]}
            tips={[]}
          />
        </div>
      </div>
    </ToolPageLayout>
  );
}

