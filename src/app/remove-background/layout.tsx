import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/metadata";

export const metadata: Metadata = generateToolMetadata({
  title: "Background Remover - Remove Backgrounds Instantly with AI",
  description:
    "Remove backgrounds instantly with AI. Upload any image and get a transparent background in seconds. Free AI background remover tool.",
  keywords: [
    "background remover",
    "remove background",
    "AI background remover",
    "transparent background",
    "background eraser",
    "free background remover",
  ],
  path: "/remove-background",
});

export default function RemoveBackgroundLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

