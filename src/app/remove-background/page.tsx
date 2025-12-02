"use client";

import { useState } from "react";
import { ToolPageLayout } from "@/components/ToolPageLayout";

export default function RemoveBackgroundPage() {
  const [uploading, setUploading] = useState(false);

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    setTimeout(() => setUploading(false), 2000);
  }

  return (
    <ToolPageLayout
      title="Background Remover"
      subtitle="Remove backgrounds instantly"
      description="Remove backgrounds from images with AI. Perfect for product photos, portraits, and graphics."
      badge="AI Editing"
    >
      <div className="grid gap-8 lg:grid-cols-[1.2fr,1fr]">
        <div className="space-y-6 rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm shadow-slate-100 sm:p-8">
          <h2 className="text-lg font-semibold tracking-tight text-slate-900">
            Upload your image
          </h2>
          <div className="space-y-4">
            <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 p-8">
              <input
                type="file"
                accept="image/*"
                onChange={handleUpload}
                className="hidden"
                id="remove-bg-upload"
              />
              <label
                htmlFor="remove-bg-upload"
                className="cursor-pointer rounded-full bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-sky-200 transition hover:brightness-110"
              >
                {uploading ? "Processing..." : "Choose Image"}
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
              Features
            </h3>
            <ul className="space-y-2 text-xs text-slate-600">
              <li>• Instant background removal</li>
              <li>• Transparent PNG output</li>
              <li>• Works with complex backgrounds</li>
              <li>• High-quality edge detection</li>
              <li>• Batch processing support</li>
            </ul>
          </div>
        </div>
      </div>
    </ToolPageLayout>
  );
}

