"use client";

import Image from "next/image";
import { ToolPageLayout } from "@/components/ToolPageLayout";
import Link from "next/link";
import { imageMap } from "@/lib/imageMap";

const editingTools = [
  {
    title: "Photo Upscaler",
    href: "/upscale-photo",
    description: "Upscale images 10x or more with AI",
    imageKey: "upscalePhoto",
  },
  {
    title: "Object Remover",
    href: "/remove-object",
    description: "Remove people, objects, and unwanted elements",
    imageKey: "removeObject",
  },
  {
    title: "Background Remover",
    href: "/remove-background",
    description: "Remove backgrounds instantly with AI",
    imageKey: "removeBackground",
  },
  {
    title: "Photo Colorizer",
    href: "/colorize-picture",
    description: "Colorize black and white photos",
    imageKey: "colorizePicture",
  },
  {
    title: "Photo Restyler",
    href: "/personalize-art",
    description: "Restyle images and personalize art",
    imageKey: "personalizeArt",
  },
  {
    title: "Photo Restorer",
    href: "/restore-picture",
    description: "Restore old and damaged photos",
    imageKey: "restorePicture",
  },
  {
    title: "Face Enhancer",
    href: "/enhance-face",
    description: "Enhance faces with AI",
    imageKey: "enhanceFace",
  },
  {
    title: "Auto Crop",
    href: "/crop-photo",
    description: "Automatically crop photos with AI",
  },
  {
    title: "Color Generator",
    href: "/color-generator",
    description: "Generate beautiful color palettes",
  },
];

export default function AiEditingPage() {
  return (
    <ToolPageLayout
      title="AI Photo Editing"
      subtitle="Edit images with AI"
      description="Upscale, clean up, and enhance photos with one click. Remove objects, fix faces, and more."
      badge="AI Editing"
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {editingTools.map((tool) => (
          <Link
            key={tool.href}
            href={tool.href}
            className="flex flex-col justify-between rounded-3xl border border-slate-200 bg-white/90 p-5 shadow-sm shadow-slate-100 transition hover:-translate-y-0.5 hover:border-sky-200 hover:shadow-md"
          >
            <div>
              <div className="mb-3 relative aspect-video overflow-hidden rounded-2xl bg-gradient-to-br from-slate-200 via-slate-300 to-slate-200">
                {tool.imageKey && (
                  <Image
                    src={imageMap[tool.imageKey] || "/file.svg"}
                    alt={tool.title}
                    fill
                    className="object-cover"
                  />
                )}
              </div>
              <h3 className="mb-2 text-sm font-semibold tracking-tight text-slate-900">
                {tool.title}
              </h3>
              <p className="text-xs leading-relaxed text-slate-600">
                {tool.description}
              </p>
            </div>
            <button className="mt-4 inline-flex items-center justify-center rounded-full border border-slate-300 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-900 hover:bg-slate-100">
              Open tool
            </button>
          </Link>
        ))}
      </div>
    </ToolPageLayout>
  );
}

