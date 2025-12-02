import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://dndimagegenerator.com";

  // Static pages
  const staticPages = [
    "",
    "/about",
    "/pricing",
    "/help",
    "/contact",
    "/privacy",
    "/jobs",
    "/blog",
  ];

  // Tool category pages
  const categoryPages = [
    "/ai-images",
    "/ai-headshots",
    "/ai-editing",
    "/ai-game",
    "/ai-writing",
  ];

  // AI Image tools
  const aiImageTools = [
    "/art-generator",
    "/ai-editor",
    "/ai-character-generator",
    "/logo-generator",
    "/ai-stock-photo",
    "/background-generator",
    "/anime-generator",
  ];

  // AI Headshot tools
  const aiHeadshotTools = [
    "/ai-headshots",
    "/ai-corporate-headshot",
    "/lunar-new-year-headshot",
    "/ai-avatar",
    "/ai-cosplay",
    "/real-estate-headshot",
    "/medical-headshot",
    "/xmas-headshot",
    "/profile-picture-editor",
  ];

  // AI Editing tools
  const aiEditingTools = [
    "/upscale-photo",
    "/remove-object",
    "/remove-background",
    "/personalize-art",
    "/colorize-picture",
    "/restore-picture",
    "/enhance-face",
    "/crop-photo",
    "/color-generator",
  ];

  // AI Game tools
  const aiGameTools = [
    "/game-tools",
    "/dnd-generator",
    "/sparkwriter",
    "/free-game-assets",
  ];

  // AI Writing tools
  const aiWritingTools = [
    "/ai-writing",
    "/ai-writing/content-brainstorming",
    "/ai-writing/art-nft-idea",
    "/ai-writing/copywriting",
    "/ai-writing/song-writing",
    "/ai-writing/book-writing",
    "/ai-writing/professional-writing",
    "/ai-writing/product-writing",
  ];

  // Template pages
  const templatePages = [
    "/templates/facebook-post",
    "/templates/facebook-cover",
    "/templates/instagram-post",
    "/templates/instagram-story",
    "/templates/linkedin-banner",
    "/templates/youtube-banner",
    "/templates/youtube-thumbnail",
  ];

  // App content pages
  const appContentPages = [
    "/app-marketing-pack",
    "/app-store-screenshot-generator",
    "/ios-app-graphics",
    "/android-app-graphics",
  ];

  // Combine all pages
  const allPages = [
    ...staticPages,
    ...categoryPages,
    ...aiImageTools,
    ...aiHeadshotTools,
    ...aiEditingTools,
    ...aiGameTools,
    ...aiWritingTools,
    ...templatePages,
    ...appContentPages,
  ];

  return allPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency:
      path === "" ? "daily" : path.startsWith("/blog") ? "weekly" : "monthly",
    priority: path === "" ? 1.0 : path.startsWith("/ai-") ? 0.9 : 0.8,
  }));
}

