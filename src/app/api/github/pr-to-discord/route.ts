import { NextRequest, NextResponse } from "next/server";

const DISCORD_WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL!;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { action, pull_request, repository, sender } = body;

    // Garante que só trata eventos de PR
    if (!pull_request) {
      return NextResponse.json({ ok: true, message: "Not a PR event" });
    }

    const repoName = repository?.full_name ?? "unknown repo";
    const prTitle = pull_request.title;
    const prNumber = pull_request.number;
    const prUrl = pull_request.html_url;
    const author = pull_request.user?.login ?? "unknown";
    const actor = sender?.login ?? "unknown";

    const content = [
      `📢 Novo PR em **${repoName}**`,
      `#${prNumber} · ${prTitle}`,
      `Autor · ${author}`,
      `Ação · ${action} (disparado por ${actor})`,
      `🔗 ${prUrl}`,
    ].join("\n");

    await fetch(DISCORD_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content }),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Erro no webhook GitHub → Discord", error);
    return NextResponse.json(
      { ok: false, error: "Internal error" },
      { status: 500 }
    );
  }
}
