import { NextRequest, NextResponse } from "next/server";

type GenerateRequestBody = {
  prompt?: string;
  count?: number;
};

export async function POST(req: NextRequest) {
  let body: GenerateRequestBody = {};

  try {
    body = await req.json();
  } catch {
    // ignore, will be validated below
  }

  const prompt = typeof body.prompt === "string" ? body.prompt.trim() : "";
  const countRaw = body.count ?? 3;
  const count = Math.min(4, Math.max(1, Number.isFinite(countRaw as number) ? Number(countRaw) : 3));

  if (!prompt) {
    return NextResponse.json(
      { error: "Missing 'prompt' in request body." },
      { status: 400 },
    );
  }

  // TODO: 在这里调用你真实的图像生成服务（例如 Stable Diffusion、Hotpot API 或自建后端）。
  // 当前实现仅返回占位数据，用于在前端演示完整调用流程。

  const now = Date.now();
  const results = Array.from({ length: count }).map((_, index) => {
    const variant = index + 1;

    return {
      id: `${now}-${variant}`,
      variant,
      prompt,
      // 占位图片：请替换为真实生成结果的 URL
      imageUrl: `/placeholder/dnd-variant-${variant}.png`,
    };
  });

  // 可选：模拟少量网络延迟，让前端 loading 状态更真实
  await new Promise((resolve) => setTimeout(resolve, 400));

  return NextResponse.json({ results });
}


