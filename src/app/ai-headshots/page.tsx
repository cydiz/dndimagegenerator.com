"use client";

import Image from "next/image";
import { ToolPageLayout } from "@/components/ToolPageLayout";
import Link from "next/link";
import { imageMap } from "@/lib/imageMap";

const headshotTypes = [
  {
    title: "Corporate Headshot",
    href: "/ai-corporate-headshot",
    description: "Professional headshots for LinkedIn and business profiles",
    imageKey: "corporateHeadshot",
  },
  {
    title: "Avatar & Cosplay",
    href: "/ai-avatar",
    description: "Create unique avatars and cosplay portraits",
    imageKey: "avatar",
  },
  {
    title: "Real Estate Headshot",
    href: "/real-estate-headshot",
    description: "Professional real estate agent portraits",
    imageKey: "realEstateHeadshot",
  },
  {
    title: "Medical Headshot",
    href: "/medical-headshot",
    description: "Professional medical professional portraits",
    imageKey: "medicalHeadshot",
  },
  {
    title: "Profile Picture Editor",
    href: "/profile-picture-editor",
    description: "Free profile picture editor and enhancer",
    imageKey: "profilePictureEditor",
  },
];

export default function AiHeadshotsPage() {
  return (
    <ToolPageLayout
      title="AI Headshots"
      subtitle="Reimagine yourself with AI"
      description="Create professional portraits for LinkedIn, resumes, social media, and more in any style."
      badge="AI Headshot"
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {headshotTypes.map((type) => (
          <Link
            key={type.href}
            href={type.href}
            className="flex flex-col justify-between rounded-3xl border border-slate-200 bg-white/90 p-5 shadow-sm shadow-slate-100 transition hover:-translate-y-0.5 hover:border-sky-200 hover:shadow-md"
          >
            <div>
              <div className="mb-3 relative aspect-video overflow-hidden rounded-2xl">
                <Image
                  src={imageMap[type.imageKey] || "/file.svg"}
                  alt={type.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="mb-2 text-sm font-semibold tracking-tight text-slate-900">
                {type.title}
              </h3>
              <p className="text-xs leading-relaxed text-slate-600">
                {type.description}
              </p>
            </div>
            <button className="mt-4 inline-flex items-center justify-center rounded-full border border-slate-300 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-900 hover:bg-slate-100">
              Open tool
            </button>
          </Link>
        ))}
      </div>
    </ToolPageLayout>
  );
}

