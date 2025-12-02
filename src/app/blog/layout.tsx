import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/metadata";

export const metadata: Metadata = generateToolMetadata({
  title: "Blog - AI Image Generation Guides & Tips",
  description:
    "Learn about AI image generation, design tips, and creative inspiration. Guides for DnD image generation, AI art creation, and more.",
  keywords: [
    "AI blog",
    "AI image generation guide",
    "DnD image generator guide",
    "AI art tips",
    "image generation tutorials",
  ],
  path: "/blog",
});

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

