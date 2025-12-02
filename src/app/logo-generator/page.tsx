"use client";

import { useState } from "react";
import { ToolPageLayout } from "@/components/ToolPageLayout";

export default function LogoGeneratorPage() {
  const [companyName, setCompanyName] = useState("");
  const [style, setStyle] = useState("flat");
  const [generating, setGenerating] = useState(false);

  const styles = [
    { value: "flat", label: "Flat" },
    { value: "detailed", label: "Detailed" },
    { value: "hipster", label: "Hipster" },
    { value: "black-white", label: "Black & White" },
    { value: "minimalist", label: "Minimalist" },
  ];

  async function handleGenerate() {
    setGenerating(true);
    setTimeout(() => setGenerating(false), 2000);
  }

  return (
    <ToolPageLayout
      title="AI Logo Generator"
      subtitle="Create amazing logo ideas"
      description="Generate logo ideas in multiple styles: flat, detailed, hipster, black & white, and more. Perfect for startups and businesses."
      badge="AI Image"
    >
      <div className="grid gap-8 lg:grid-cols-[1.2fr,1fr]">
        <div className="space-y-6 rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm shadow-slate-100 sm:p-8">
          <h2 className="text-lg font-semibold tracking-tight text-slate-900">
            Design your logo
          </h2>
          <div className="space-y-4">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Company name
              </label>
              <input
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none ring-sky-100 focus:border-sky-400 focus:ring"
                placeholder="e.g., TechStart"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Style
              </label>
              <select
                value={style}
                onChange={(e) => setStyle(e.target.value)}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none ring-sky-100 focus:border-sky-400 focus:ring"
              >
                {styles.map((s) => (
                  <option key={s.value} value={s.value}>
                    {s.label}
                  </option>
                ))}
              </select>
            </div>
            <button
              onClick={handleGenerate}
              disabled={!companyName.trim() || generating}
              className="w-full rounded-full bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 px-5 py-3 text-sm font-semibold text-white shadow-sm shadow-sky-200 transition hover:brightness-110 disabled:opacity-50"
            >
              {generating ? "Generating..." : "Generate Logo Ideas"}
            </button>
          </div>
        </div>
        <div className="space-y-6">
          <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm shadow-slate-100">
            <h3 className="mb-4 text-sm font-semibold text-slate-900">
              Logo styles
            </h3>
            <div className="space-y-2 text-xs text-slate-600">
              <p>• <strong>Flat:</strong> Simple, modern, clean design</p>
              <p>• <strong>Detailed:</strong> Rich textures and depth</p>
              <p>• <strong>Hipster:</strong> Vintage, trendy aesthetic</p>
              <p>• <strong>Black & White:</strong> Classic, timeless</p>
              <p>• <strong>Minimalist:</strong> Clean, simple, elegant</p>
            </div>
          </div>
        </div>
      </div>
    </ToolPageLayout>
  );
}

