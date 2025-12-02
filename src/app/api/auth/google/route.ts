import { NextRequest, NextResponse } from "next/server";

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID || "";
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET || "";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

/**
 * GET /api/auth/google
 * 初始化 Google OAuth 登录流程
 */
export async function GET(req: NextRequest) {
  const redirectUri = `${BASE_URL}/api/auth/google/callback`;
  const scope = "openid email profile";
  
  // Generate state for CSRF protection
  const state = Buffer.from(`${Date.now()}:${Math.random()}`).toString("base64");
  
  // Store state in a cookie (in production, use httpOnly cookie)
  const response = NextResponse.redirect(
    `https://accounts.google.com/o/oauth2/v2/auth?` +
    `client_id=${encodeURIComponent(GOOGLE_CLIENT_ID)}&` +
    `redirect_uri=${encodeURIComponent(redirectUri)}&` +
    `response_type=code&` +
    `scope=${encodeURIComponent(scope)}&` +
    `state=${encodeURIComponent(state)}&` +
    `access_type=offline&` +
    `prompt=consent`
  );
  
  // Store state in cookie for verification
  response.cookies.set("oauth_state", state, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 600, // 10 minutes
  });
  
  return response;
}

