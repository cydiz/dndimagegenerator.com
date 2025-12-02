"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useAuth } from "@/contexts/AuthContext";
import { useLanguage } from "@/contexts/LanguageContext";

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth();
  const { t } = useLanguage();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const { register } = useAuth();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const result = isLogin
        ? await login(email, password)
        : await register(email, password, name || undefined);

      if (result.success) {
        router.push("/");
      } else {
        setError(result.error || "An error occurred");
      }
    } catch (err) {
      setError("An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />
      <main className="border-b border-slate-200 bg-gradient-to-b from-sky-50 via-white to-white">
        <div className="mx-auto flex min-h-[calc(100vh-8rem)] max-w-md items-center px-4 py-12 sm:px-6">
          <div className="w-full space-y-6">
            <div className="text-center">
              <h1 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                {isLogin ? t("auth.loginTitle") : t("auth.registerTitle")}
              </h1>
              <p className="mt-2 text-sm text-slate-600">
                {isLogin
                  ? t("auth.loginSubtitle")
                  : t("auth.registerSubtitle")}
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-4 rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm shadow-slate-100 sm:p-8"
            >
              {error && (
                <div className="rounded-2xl border border-red-200 bg-red-50 p-3 text-sm text-red-700">
                  {error}
                </div>
              )}

              {!isLogin && (
                <div>
                  <label className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    {t("auth.name")} ({t("auth.optional")})
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-sky-100 focus:border-sky-400 focus:ring"
                    placeholder={t("auth.namePlaceholder")}
                  />
                </div>
              )}

              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  {t("auth.email")}
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-sky-100 focus:border-sky-400 focus:ring"
                  placeholder={t("auth.emailPlaceholder")}
                />
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  {t("auth.password")}
                </label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-sky-100 focus:border-sky-400 focus:ring"
                  placeholder={t("auth.passwordPlaceholder")}
                  minLength={6}
                />
                {!isLogin && (
                  <p className="mt-1 text-xs text-slate-500">
                    {t("auth.passwordHint")}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-full bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-sky-200 transition hover:brightness-110 disabled:opacity-50"
              >
                {loading
                  ? t("auth.processing")
                  : isLogin
                    ? t("auth.login")
                    : t("auth.register")}
              </button>

              <div className="text-center text-sm text-slate-600">
                {isLogin ? (
                  <>
                    {t("auth.noAccount")}{" "}
                    <button
                      type="button"
                      onClick={() => {
                        setIsLogin(false);
                        setError("");
                      }}
                      className="font-semibold text-sky-600 hover:text-sky-700"
                    >
                      {t("auth.register")}
                    </button>
                  </>
                ) : (
                  <>
                    {t("auth.haveAccount")}{" "}
                    <button
                      type="button"
                      onClick={() => {
                        setIsLogin(true);
                        setError("");
                      }}
                      className="font-semibold text-sky-600 hover:text-sky-700"
                    >
                      {t("auth.login")}
                    </button>
                  </>
                )}
              </div>
            </form>

            <p className="text-center text-xs text-slate-500">
              {t("auth.demoNote")}
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

