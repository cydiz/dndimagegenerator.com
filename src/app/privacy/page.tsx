"use client";

import { ToolPageLayout } from "@/components/ToolPageLayout";

export default function PrivacyPage() {
  return (
    <ToolPageLayout
      title="Privacy Policy"
      description="Our privacy policy."
    >
      <div className="mx-auto max-w-3xl">
        <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm shadow-slate-100 sm:p-8">
          <div className="prose prose-sm max-w-none">
            <h2 className="mb-4 text-lg font-semibold tracking-tight text-slate-900">
              Privacy Policy
            </h2>
            <p className="mb-4 text-sm text-slate-600">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section className="mb-6">
              <h3 className="mb-2 text-sm font-semibold text-slate-900">
                1. Information We Collect
              </h3>
              <p className="text-sm text-slate-600">
                We collect information you provide directly to us, such as when
                you create an account, use our services, or contact us for
                support. This may include your name, email address, and any
                images or content you upload.
              </p>
            </section>

            <section className="mb-6">
              <h3 className="mb-2 text-sm font-semibold text-slate-900">
                2. How We Use Your Information
              </h3>
              <p className="text-sm text-slate-600">
                We use the information we collect to provide, maintain, and
                improve our services, process transactions, send you technical
                notices and support messages, and respond to your comments and
                questions.
              </p>
            </section>

            <section className="mb-6">
              <h3 className="mb-2 text-sm font-semibold text-slate-900">
                3. Information Sharing
              </h3>
              <p className="text-sm text-slate-600">
                We do not sell, trade, or rent your personal information to
                third parties. We may share your information only in the
                circumstances described in this policy, such as with your
                consent or to comply with legal obligations.
              </p>
            </section>

            <section className="mb-6">
              <h3 className="mb-2 text-sm font-semibold text-slate-900">
                4. Data Security
              </h3>
              <p className="text-sm text-slate-600">
                We implement appropriate technical and organizational measures to
                protect your personal information against unauthorized access,
                alteration, disclosure, or destruction.
              </p>
            </section>

            <section className="mb-6">
              <h3 className="mb-2 text-sm font-semibold text-slate-900">
                5. Your Rights
              </h3>
              <p className="text-sm text-slate-600">
                You have the right to access, update, or delete your personal
                information at any time. You can do this through your account
                settings or by contacting us.
              </p>
            </section>

            <section className="mb-6">
              <h3 className="mb-2 text-sm font-semibold text-slate-900">
                6. Contact Us
              </h3>
              <p className="text-sm text-slate-600">
                If you have any questions about this Privacy Policy, please
                contact us at{" "}
                <a
                  href="/contact"
                  className="text-sky-600 hover:text-sky-700"
                >
                  our contact page
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </div>
    </ToolPageLayout>
  );
}
