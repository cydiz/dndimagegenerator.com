import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/metadata";

export const metadata: Metadata = generateToolMetadata({
  title: "AI Stock Photos - Generate Unique Stock Images",
  description:
    "Generate unique, high-quality stock photos with AI. Create custom stock images for your projects without copyright concerns. Free AI stock photo generator.",
  keywords: [
    "AI stock photos",
    "stock photo generator",
    "free stock images",
    "AI stock images",
    "custom stock photos",
    "royalty-free stock photos",
  ],
  path: "/ai-stock-photo",
});

export default function AiStockPhotoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

