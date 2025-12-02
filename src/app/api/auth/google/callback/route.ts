import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID || "";
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET || "";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

function generateToken(userId: string): string {
  return Buffer.from(`${userId}:${Date.now()}`).toString("base64");
}

/**
 * GET /api/auth/google/callback
 * 处理 Google OAuth 回调
 */
export async function GET(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams;
    const code = searchParams.get("code");
    const state = searchParams.get("state");
    const error = searchParams.get("error");

    // Check for errors
    if (error) {
      return NextResponse.redirect(
        `${BASE_URL}/login?error=${encodeURIComponent(error)}`
      );
    }

    if (!code || !state) {
      return NextResponse.redirect(
        `${BASE_URL}/login?error=${encodeURIComponent("Missing authorization code")}`
      );
    }

    // Verify state (CSRF protection)
    const storedState = req.cookies.get("oauth_state")?.value;
    if (!storedState || storedState !== state) {
      return NextResponse.redirect(
        `${BASE_URL}/login?error=${encodeURIComponent("Invalid state parameter")}`
      );
    }

    // Exchange authorization code for access token
    const tokenResponse = await fetch("https://oauth2.googleapis.com/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        code,
        client_id: GOOGLE_CLIENT_ID,
        client_secret: GOOGLE_CLIENT_SECRET,
        redirect_uri: `${BASE_URL}/api/auth/google/callback`,
        grant_type: "authorization_code",
      }),
    });

    if (!tokenResponse.ok) {
      const errorData = await tokenResponse.json().catch(() => ({}));
      console.error("Token exchange error:", errorData);
      return NextResponse.redirect(
        `${BASE_URL}/login?error=${encodeURIComponent("Failed to exchange token")}`
      );
    }

    const tokenData = await tokenResponse.json();
    const { access_token } = tokenData;

    // Get user info from Google
    const userInfoResponse = await fetch(
      "https://www.googleapis.com/oauth2/v2/userinfo",
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );

    if (!userInfoResponse.ok) {
      return NextResponse.redirect(
        `${BASE_URL}/login?error=${encodeURIComponent("Failed to get user info")}`
      );
    }

    const userInfo = await userInfoResponse.json();
    const { email, name, picture, id: googleId } = userInfo;

    if (!email) {
      return NextResponse.redirect(
        `${BASE_URL}/login?error=${encodeURIComponent("Email not provided by Google")}`
      );
    }

    // Find or create user
    let user = db.users.findByEmail(email);
    
    if (!user) {
      // Create new user with Google OAuth
      user = db.users.create({
        email: email.toLowerCase(),
        password: `google_${googleId}`, // Special password for Google users
        name: name || email.split("@")[0],
      });
    }

    // Generate token
    const token = generateToken(user.id);

    // Create response that redirects to home with token
    const response = NextResponse.redirect(`${BASE_URL}/login?google_success=true`);
    
    // Set token in cookie (more secure than URL parameter)
    response.cookies.set("auth_token", token, {
      httpOnly: false, // Need to access from client-side
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });

    // Also store in localStorage via client-side script
    // We'll handle this in the login page
    
    return response;
  } catch (error: any) {
    console.error("Google OAuth callback error:", error);
    return NextResponse.redirect(
      `${BASE_URL}/login?error=${encodeURIComponent(error.message || "Authentication failed")}`
    );
  }
}

