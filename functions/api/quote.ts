// Cloudflare Pages Function — POST /api/quote
// Receives lead form submissions and forwards them to GoHighLevel.
//
// Setup: in the Cloudflare Pages project, add an environment variable
//   GHL_FORM_ENDPOINT = <your GoHighLevel inbound webhook URL>
// (Settings → Environment variables). Optionally GHL_API_KEY if your
// endpoint requires a bearer token. No code change needed to go live.

interface Env {
  GHL_FORM_ENDPOINT?: string;
  GHL_API_KEY?: string;
}

// Default GoHighLevel inbound webhook. Can be overridden by setting the
// GHL_FORM_ENDPOINT environment variable in Cloudflare Pages.
const DEFAULT_GHL_ENDPOINT =
  "https://services.leadconnectorhq.com/hooks/gZPpzKy7LkmqIJPwadxs/webhook-trigger/21d844ad-c1d0-4949-ad52-1d8dcb53577f";

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  let body: Record<string, string>;
  try {
    const ct = request.headers.get("content-type") || "";
    body = ct.includes("application/json")
      ? await request.json()
      : Object.fromEntries((await request.formData()).entries() as any);
  } catch {
    return json({ ok: false, error: "Invalid request body" }, 400);
  }

  // Honeypot: silently accept (looks successful to the bot, but we drop it).
  if (body.company_website) return json({ ok: true });

  // Basic validation.
  const name = (body.name || "").trim();
  const phone = (body.phone || "").trim();
  const email = (body.email || "").trim();
  if (!name || (!phone && !email)) {
    return json({ ok: false, error: "Missing required fields" }, 422);
  }

  const moveType = body.moveType || "";
  const moveSize = body.moveSize || "";
  const timeframe = body.timeframe || "";
  const fromLocation = body.fromLocation || "";
  const toLocation = body.toLocation || "";
  const moveDate = body.moveDate || "";
  const stairs = body.stairs ? "Yes" : "No";
  const needsPacking = body.needsPacking ? "Yes" : "No";
  const notes = body.notes || body.message || "";

  // Human-readable summary so the sales rep sees everything at a glance
  // when they call the lead (even if individual GHL fields aren't mapped).
  const summary = [
    moveType && `Move type: ${moveType}`,
    moveSize && `Size: ${moveSize}`,
    (fromLocation || toLocation) && `Route: ${fromLocation || "?"} → ${toLocation || "?"}`,
    timeframe && `Timeframe: ${timeframe}`,
    moveDate && `Preferred date: ${moveDate}`,
    `Stairs/elevator: ${stairs}`,
    `Wants packing help: ${needsPacking}`,
    notes && `Notes: ${notes}`,
  ]
    .filter(Boolean)
    .join("\n");

  const payload = {
    name,
    phone,
    email,
    moveType,
    moveSize,
    timeframe,
    fromLocation,
    toLocation,
    moveDate,
    stairs,
    needsPacking,
    notes,
    message: summary,
    summary,
    source: body.source || "website",
    submittedAt: new Date().toISOString(),
  };

  const endpoint = env.GHL_FORM_ENDPOINT || DEFAULT_GHL_ENDPOINT;

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(env.GHL_API_KEY ? { Authorization: `Bearer ${env.GHL_API_KEY}` } : {}),
      },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      console.error("GHL forward failed:", res.status, await res.text());
      return json({ ok: false, error: "Lead service error" }, 502);
    }
    return json({ ok: true, forwarded: true });
  } catch (err) {
    console.error("GHL forward exception:", err);
    return json({ ok: false, error: "Lead service unavailable" }, 502);
  }
};
