import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/metadata";

export const metadata: Metadata = generateToolMetadata({
  title: "About - Hotpot AI - Free DnD Image Generator",
  description:
    "Learn more about Hotpot AI - a platform for creating amazing images, graphics, and content with AI. Free DnD image generator and AI art tools.",
  keywords: [
    "about Hotpot AI",
    "AI image generator company",
    "DnD image generator",
    "AI art tools",
  ],
  path: "/about",
});

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

