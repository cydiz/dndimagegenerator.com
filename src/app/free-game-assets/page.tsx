"use client";

import { ToolPageLayout } from "@/components/ToolPageLayout";

export default function FreeGameAssetsPage() {
  return (
    <ToolPageLayout
      title="Free Game Assets"
      subtitle="Download free game assets"
      description="Browse and download free game assets including characters, backgrounds, icons, and more."
      badge="AI Game"
    >
      <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm shadow-slate-100 sm:p-8">
        <p className="text-sm text-slate-600">
          Browse our collection of free game assets. All assets are ready to use
          in your game projects.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="flex h-32 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-xs text-slate-500"
            >
              Asset {i}
            </div>
          ))}
        </div>
      </div>
    </ToolPageLayout>
  );
}

