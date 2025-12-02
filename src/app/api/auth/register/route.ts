import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

function generateToken(userId: string): string {
  // 简单的 token 生成（生产环境应使用 JWT）
  return Buffer.from(`${userId}:${Date.now()}`).toString("base64");
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, password, name } = body;

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 },
      );
    }

    // 验证邮箱格式
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 },
      );
    }

    // 验证密码长度
    if (password.length < 6) {
      return NextResponse.json(
        { error: "Password must be at least 6 characters" },
        { status: 400 },
      );
    }

    // 检查用户是否已存在
    if (db.users.findByEmail(email)) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 409 },
      );
    }

    // 创建新用户
    const newUser = db.users.create({
      email: email.toLowerCase(),
      password, // 生产环境应使用 bcrypt 加密
      name: name || undefined,
    });

    const token = generateToken(newUser.id);

    return NextResponse.json({
      token,
      user: {
        id: newUser.id,
        email: newUser.email,
        name: newUser.name,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}

