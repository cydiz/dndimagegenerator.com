"use client";

import { useState } from "react";
import { ImageUploadTool } from "./ImageUploadTool";

type TemplateEditorProps = {
  templateName: string;
  dimensions: { width: number; height: number };
  description: string;
  tips?: string[];
};

export function TemplateEditor({
  templateName,
  dimensions,
  description,
  tips = [],
}: TemplateEditorProps) {
  const [text, setText] = useState("");
  const [image, setImage] = useState<string | null>(null);

  return (
    <div className="grid gap-8 lg:grid-cols-[1.2fr,1fr]">
      <div className="space-y-6 rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm shadow-slate-100 sm:p-8">
        <h2 className="text-lg font-semibold tracking-tight text-slate-900">
          Create your {templateName}
        </h2>
        <p className="text-sm text-slate-600">{description}</p>
        <div className="space-y-4">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Text Content
            </label>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="min-h-[100px] w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none ring-sky-100 focus:border-sky-400 focus:ring"
              placeholder="Enter your text content..."
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Upload Image (Optional)
            </label>
            <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 p-4">
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    const reader = new FileReader();
                    reader.onloadend = () => {
                      setImage(reader.result as string);
                    };
                    reader.readAsDataURL(file);
                  }
                }}
                className="hidden"
                id="template-image-upload"
              />
              <label
                htmlFor="template-image-upload"
                className="cursor-pointer rounded-full border border-slate-300 bg-white px-4 py-2 text-xs font-semibold text-slate-900 hover:bg-slate-50"
              >
                Choose Image
              </label>
            </div>
          </div>
          {image && (
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-2">
              <img src={image} alt="Preview" className="w-full rounded-lg" />
            </div>
          )}
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <p className="mb-2 text-xs font-semibold text-slate-700">
              Template Size
            </p>
            <p className="text-xs text-slate-600">
              {dimensions.width} × {dimensions.height} pixels
            </p>
          </div>
          <button
            onClick={() => {
              // Simulate generation
              alert("Template generation would happen here");
            }}
            className="w-full rounded-full bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 px-5 py-3 text-sm font-semibold text-white shadow-sm shadow-sky-200 transition hover:brightness-110"
          >
            Generate Template
          </button>
        </div>
      </div>
      <div className="space-y-6">
        <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm shadow-slate-100">
          <h3 className="mb-4 text-sm font-semibold text-slate-900">
            Template Features
          </h3>
          <ul className="space-y-2 text-xs text-slate-600">
            <li>• Customizable text and images</li>
            <li>• Professional templates</li>
            <li>• Export in high quality</li>
            <li>• Multiple style options</li>
          </ul>
        </div>
        {tips.length > 0 && (
          <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm shadow-slate-100">
            <h3 className="mb-4 text-sm font-semibold text-slate-900">
              Tips
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

