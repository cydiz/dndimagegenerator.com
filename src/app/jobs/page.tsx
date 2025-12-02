"use client";

import { ToolPageLayout } from "@/components/ToolPageLayout";

const positions = [
  {
    title: "Senior Full Stack Developer",
    department: "Engineering",
    location: "Remote",
    description:
      "We're looking for an experienced full-stack developer to join our team and help build the future of AI-powered creative tools.",
  },
  {
    title: "AI/ML Engineer",
    department: "Engineering",
    location: "Remote",
    description:
      "Join our team to develop and improve AI models for image generation and editing.",
  },
  {
    title: "Product Designer",
    department: "Design",
    location: "Remote",
    description:
      "Help design beautiful and intuitive user experiences for our AI tools.",
  },
];

export default function JobsPage() {
  return (
    <ToolPageLayout title="Jobs" description="Join our team.">
      <div className="mx-auto max-w-3xl space-y-6">
        <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm shadow-slate-100 sm:p-8">
          <h2 className="mb-6 text-lg font-semibold tracking-tight text-slate-900">
            Open Positions
          </h2>
          <div className="space-y-6">
            {positions.map((position, index) => (
              <div
                key={index}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
              >
                <div className="mb-2 flex items-start justify-between">
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900">
                      {position.title}
                    </h3>
                    <p className="mt-1 text-xs text-slate-600">
                      {position.department} • {position.location}
                    </p>
                  </div>
                </div>
                <p className="mb-4 text-sm text-slate-600">
                  {position.description}
                </p>
                <button className="rounded-full border border-slate-300 bg-white px-4 py-2 text-xs font-semibold text-slate-900 hover:bg-slate-50">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm shadow-slate-100 sm:p-8">
          <h2 className="mb-4 text-lg font-semibold tracking-tight text-slate-900">
            Don't see a role that fits?
          </h2>
          <p className="mb-4 text-sm text-slate-600">
            We're always looking for talented people. Send us your resume and
            we'll keep you in mind for future opportunities.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center rounded-full bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 px-5 py-2 text-sm font-semibold text-white shadow-sm shadow-sky-200 transition hover:brightness-110"
          >
            Contact Us
          </a>
        </div>
      </div>
    </ToolPageLayout>
  );
}
