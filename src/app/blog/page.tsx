"use client";

import { ToolPageLayout } from "@/components/ToolPageLayout";
import Link from "next/link";

const blogPosts = [
  {
    title: "Generating Images With AI",
    href: "/blog/ai-art-and-image-generator-guide",
    description: "A comprehensive guide to AI image generation",
  },
  {
    title: "Bing AI Image Generator Alternative",
    href: "/bing-ai-image-generator-alternative",
    description: "Why choose Hotpot over Bing AI Image Generator",
  },
  {
    title: "DALLE 3 Alternative",
    href: "/dalle-3",
    description: "Explore alternatives to DALLE 3",
  },
  {
    title: "App Store Screenshot Sizes",
    href: "/blog/app-store-screenshot-sizes",
    description: "Complete guide to app store screenshot dimensions",
  },
  {
    title: "How to Make App Store Screenshots",
    href: "/blog/how-to-make-app-store-screenshots",
    description: "Step-by-step guide to creating app store screenshots",
  },
];

export default function BlogPage() {
  return (
    <ToolPageLayout
      title="Blog"
      subtitle="AI insights and guides"
      description="Learn about AI image generation, design tips, and creative inspiration."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <Link
            key={post.href}
            href={post.href}
            className="flex flex-col rounded-3xl border border-slate-200 bg-white/90 p-5 shadow-sm shadow-slate-100 transition hover:-translate-y-0.5 hover:border-sky-200 hover:shadow-md"
          >
            <h3 className="mb-2 text-lg font-semibold tracking-tight text-slate-900">
              {post.title}
            </h3>
            <p className="text-sm leading-relaxed text-slate-600">
              {post.description}
            </p>
          </Link>
        ))}
      </div>
    </ToolPageLayout>
  );
}

