import { NextRequest, NextResponse } from "next/server";

const DISCORD_WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL!;

export async function GET() {
  return NextResponse.json({
    status: "online",
    message: "GitHub Webhook Endpoint is ready",
  });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { action, pull_request, issue, repository, sender } = body;

    // Garante que só trata eventos de PR ou Issue
    if (!pull_request && !issue) {
      return NextResponse.json({
        ok: true,
        message: "Not a PR or Issue event",
      });
    }

    const repoName = repository?.full_name ?? "unknown repo";
    const actor = sender?.login ?? "unknown";

    let type, title, number, url, author;

    if (pull_request) {
      type = "Pull Request";
      title = pull_request.title;
      number = pull_request.number;
      url = pull_request.html_url;
      author = pull_request.user?.login ?? "unknown";
    } else {
      type = "Issue";
      title = issue.title;
      number = issue.number;
      url = issue.html_url;
      author = issue.user?.login ?? "unknown";
    }

    const content = [
      `📢 **${type}** em **${repoName}**`,
      `#${number} · ${title}`,
      `Autor · ${author}`,
      `Ação · ${action} (disparado por ${actor})`,
      `🔗 ${url}`,
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
