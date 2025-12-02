"use client";

import { useState } from "react";
import { ToolPageLayout } from "@/components/ToolPageLayout";

export default function AiCorporateHeadshotPage() {
  const [uploading, setUploading] = useState(false);

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    // TODO: 上传并处理图片
    setTimeout(() => setUploading(false), 2000);
  }

  return (
    <ToolPageLayout
      title="AI Corporate Headshot"
      subtitle="Elevate your professional profile"
      description="Create professional headshots for LinkedIn, company websites, and business profiles. Upload your photo and get multiple professional variations."
      badge="AI Headshot"
    >
      <div className="grid gap-8 lg:grid-cols-[1.2fr,1fr]">
        <div className="space-y-6 rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm shadow-slate-100 sm:p-8">
          <h2 className="text-lg font-semibold tracking-tight text-slate-900">
            Upload your photo
          </h2>
          <div className="space-y-4">
            <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 p-8">
              <input
                type="file"
                accept="image/*"
                onChange={handleUpload}
                className="hidden"
                id="photo-upload"
              />
              <label
                htmlFor="photo-upload"
                className="cursor-pointer rounded-full bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-sky-200 transition hover:brightness-110"
              >
                {uploading ? "Processing..." : "Choose Photo"}
              </label>
              <p className="mt-2 text-xs text-slate-500">
                JPG, PNG up to 10MB
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm shadow-slate-100">
            <h3 className="mb-4 text-sm font-semibold text-slate-900">
              What you'll get
            </h3>
            <ul className="space-y-2 text-xs text-slate-600">
              <li>• Multiple professional variations</li>
              <li>• Various backgrounds</li>
              <li>• Different lighting styles</li>
              <li>• High-resolution output</li>
              <li>• Ready for LinkedIn and resumes</li>
            </ul>
          </div>
        </div>
      </div>
    </ToolPageLayout>
  );
}

