"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useAuth } from "@/contexts/AuthContext";
import { useLanguage } from "@/contexts/LanguageContext";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { login } = useAuth();
  const { t } = useLanguage();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [googleLoading, setGoogleLoading] = useState(false);

  const { register } = useAuth();

  // Handle Google OAuth callback
  useEffect(() => {
    const googleSuccess = searchParams.get("google_success");
    const errorParam = searchParams.get("error");
    const tokenParam = searchParams.get("token");
    
    if (errorParam) {
      setError(decodeURIComponent(errorParam));
      return;
    }
    
    if (googleSuccess === "true" && tokenParam) {
      // Store token in localStorage
      const token = decodeURIComponent(tokenParam);
      localStorage.setItem("auth_token", token);
      
      // Fetch user info and update auth context
      fetch("/api/auth/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.user) {
            // Update URL to remove token from query string
            router.replace("/login?google_success=true");
            // Redirect to home after a short delay
            setTimeout(() => {
              router.push("/");
            }, 500);
          }
        })
        .catch(() => {
          setError("Failed to get user information");
        });
    }
  }, [searchParams, router]);

  function handleGoogleLogin() {
    setGoogleLoading(true);
    window.location.href = "/api/auth/google";
  }

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
                disabled={loading || googleLoading}
                className="w-full rounded-full bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-sky-200 transition hover:brightness-110 disabled:opacity-50"
              >
                {loading
                  ? t("auth.processing")
                  : isLogin
                    ? t("auth.login")
                    : t("auth.register")}
              </button>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-200"></div>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white px-2 text-slate-500">
                    {t("auth.orContinueWith")}
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={handleGoogleLogin}
                disabled={loading || googleLoading}
                className="flex w-full items-center justify-center gap-3 rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50 disabled:opacity-50"
              >
                {googleLoading ? (
                  <>
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-slate-300 border-t-slate-900"></div>
                    <span>{t("auth.processing")}</span>
                  </>
                ) : (
                  <>
                    <svg className="h-5 w-5" viewBox="0 0 24 24">
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                    </svg>
                    <span>{t("auth.continueWithGoogle")}</span>
                  </>
                )}
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

export default function LoginPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-slate-50 text-slate-900">
        <Header />
        <main className="flex min-h-[calc(100vh-8rem)] items-center justify-center">
          <div className="text-sm text-slate-600">Loading...</div>
        </main>
        <Footer />
      </div>
    }>
      <LoginForm />
    </Suspense>
  );
}

