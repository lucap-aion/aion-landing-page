import { NextResponse } from "next/server";
import { Resend } from "resend";

const TO = (process.env.CONTACT_TO_EMAIL || "giulio@aioncover.com")
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);
const FROM = process.env.CONTACT_FROM_EMAIL || "AION Cover <team@aioncover.com>";

const escapeHtml = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

export async function POST(req: Request) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { error: "Email service not configured" },
      { status: 500 }
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const company = String(body.company ?? "").trim();
  const message = String(body.message ?? "").trim();
  const honeypot = String(body.website ?? "").trim();

  if (honeypot) {
    return NextResponse.json({ ok: true });
  }

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email and message are required" },
      { status: 400 }
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  if (message.length > 5000 || name.length > 200 || company.length > 200) {
    return NextResponse.json({ error: "Field too long" }, { status: 400 });
  }

  const html = `
    <div style="font-family: -apple-system, system-ui, sans-serif; max-width: 560px; padding: 24px;">
      <h2 style="margin: 0 0 16px;">New AION Cover enquiry</h2>
      <table style="border-collapse: collapse; width: 100%;">
        <tr><td style="padding: 6px 0; color: #888; width: 110px;">Name</td><td>${escapeHtml(name)}</td></tr>
        <tr><td style="padding: 6px 0; color: #888;">Email</td><td><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
        ${company ? `<tr><td style="padding: 6px 0; color: #888;">Company</td><td>${escapeHtml(company)}</td></tr>` : ""}
      </table>
      <h3 style="margin: 24px 0 8px;">Message</h3>
      <p style="white-space: pre-wrap; line-height: 1.55;">${escapeHtml(message)}</p>
    </div>
  `;

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo: email,
      subject: `AION Cover enquiry — ${name}${company ? ` (${company})` : ""}`,
      html,
    });

    if (error) {
      console.error("Resend error", error);
      return NextResponse.json(
        {
          error: "Failed to send",
          detail: process.env.NODE_ENV !== "production" ? error : undefined,
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact route error", err);
    return NextResponse.json(
      {
        error: "Failed to send",
        detail:
          process.env.NODE_ENV !== "production"
            ? String(err instanceof Error ? err.message : err)
            : undefined,
      },
      { status: 500 }
    );
  }
}
