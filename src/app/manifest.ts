import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Hotpot AI - Free DnD Image Generator & AI Art Creator",
    short_name: "Hotpot AI",
    description:
      "Free DnD image generator powered by AI. Create stunning Dungeons & Dragons scenes, characters, and fantasy art. Generate images with AI Image Generator, reimagine yourself with AI Headshots, or automate editing with powerful AI photo tools.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0ea5e9",
    categories: ["design", "productivity", "entertainment"],
    icons: [
      {
        src: "/images/logos/brandmark.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}

