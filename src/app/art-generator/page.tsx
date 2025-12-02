import type { Metadata } from "next";
import { ToolPageLayout } from "@/components/ToolPageLayout";
import { generateToolMetadata } from "@/lib/metadata";
import { ArtGeneratorClient } from "./ArtGeneratorClient";

export const metadata: Metadata = generateToolMetadata({
  title: "AI Art Generator - Turn text into art",
  description:
    "Create stunning artwork from simple text descriptions. Generate images in various styles including realistic, painterly, anime, and more. Free AI art generator.",
  keywords: [
    "AI art generator",
    "text to image",
    "AI image generator",
    "art generator",
    "image generator",
    "AI artwork",
    "free art generator",
  ],
  path: "/art-generator",
});

export default function ArtGeneratorPage() {
  return (
    <ToolPageLayout
      title="AI Art Generator"
      subtitle="Turn text into art"
      description="Create stunning artwork from simple text descriptions. Generate images in various styles including realistic, painterly, anime, and more."
      badge="AI Image"
    >
      <ArtGeneratorClient />
    </ToolPageLayout>
  );
}

