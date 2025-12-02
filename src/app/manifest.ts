import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Hotpot AI - Create stunning images with AI",
    short_name: "Hotpot AI",
    description:
      "Create stunning images, graphics, and content with AI. Visualize ideas with AI Image Generator, reimagine yourself with AI Headshots, or automate editing with powerful AI photo tools.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0ea5e9",
    icons: [
      {
        src: "/images/logos/brandmark.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}

