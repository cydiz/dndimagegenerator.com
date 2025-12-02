import type { Metadata } from "next";

export function generateToolMetadata({
  title,
  description,
  keywords,
  path,
}: {
  title: string;
  description: string;
  keywords?: string[];
  path: string;
}): Metadata {
  const baseUrl = "https://dndimagegenerator.com";
  const url = `${baseUrl}${path}`;

  return {
    title,
    description,
    keywords: keywords || [],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Hotpot AI",
      images: [
        {
          url: "/images/logos/brandmark.svg",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/logos/brandmark.svg"],
    },
  };
}

