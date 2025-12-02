import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/metadata";

export const metadata: Metadata = generateToolMetadata({
  title: "Photo Upscaler - Upscale Images 10x with AI",
  description:
    "Upscale images 10x or more with AI. Enhance photo resolution without losing quality. Perfect for enlarging photos, artwork, and images. Free AI photo upscaler.",
  keywords: [
    "photo upscaler",
    "image upscaler",
    "AI upscaler",
    "enhance image resolution",
    "upscale photo",
    "image enhancer",
  ],
  path: "/upscale-photo",
});

export default function UpscalePhotoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

