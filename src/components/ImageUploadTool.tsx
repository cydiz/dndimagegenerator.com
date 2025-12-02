"use client";

import { useState } from "react";

type ImageUploadToolProps = {
  title: string;
  description?: string;
  accept?: string;
  maxSize?: string;
  processingText?: string;
  tips?: string[];
  features?: string[];
};

export function ImageUploadTool({
  title,
  description,
  accept = "image/*",
  maxSize = "10MB",
  processingText = "Processing...",
  tips = [],
  features = [],
}: ImageUploadToolProps) {
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    // Create preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result as string);
    };
    reader.readAsDataURL(file);

    setUploading(true);
    // Simulate processing
    setTimeout(() => {
      setUploading(false);
    }, 2000);
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1.2fr,1fr]">
      <div className="space-y-6 rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm shadow-slate-100 sm:p-8">
        <h2 className="text-lg font-semibold tracking-tight text-slate-900">
          {title}
        </h2>
        {description && (
          <p className="text-sm text-slate-600">{description}</p>
        )}
        <div className="space-y-4">
          <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 p-8">
            <input
              type="file"
              accept={accept}
              onChange={handleUpload}
              className="hidden"
              id="image-upload"
            />
            <label
              htmlFor="image-upload"
              className="cursor-pointer rounded-full bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-sky-200 transition hover:brightness-110 disabled:opacity-50"
            >
              {uploading ? processingText : "Choose Image"}
            </label>
            <p className="mt-2 text-xs text-slate-500">
              JPG, PNG up to {maxSize}
            </p>
          </div>
          {preview && (
            <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <img
                src={preview}
                alt="AI generated image preview"
                className="w-full rounded-xl object-cover"
              />
            </div>
          )}
        </div>
      </div>
      <div className="space-y-6">
        {features.length > 0 && (
          <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm shadow-slate-100">
            <h3 className="mb-4 text-sm font-semibold text-slate-900">
              Features
            </h3>
            <ul className="space-y-2 text-xs text-slate-600">
              {features.map((feature, index) => (
                <li key={index}>• {feature}</li>
              ))}
            </ul>
          </div>
        )}
        {tips.length > 0 && (
          <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm shadow-slate-100">
            <h3 className="mb-4 text-sm font-semibold text-slate-900">
              Tips for better results
            </h3>
            <ul className="space-y-2 text-xs text-slate-600">
              {tips.map((tip, index) => (
                <li key={index}>• {tip}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

