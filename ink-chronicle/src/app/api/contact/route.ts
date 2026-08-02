import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";
import type { ApiResponse } from "@/types";

export const runtime = "nodejs";

const contactSchema = z.object({
  name: z.string().min(2).max(120),
  email: z.string().email(),
  message: z.string().min(2).max(1000),
});

export async function POST(req: NextRequest) {
  const json = await req.json().catch(() => null);
  const parsed = contactSchema.safeParse(json);

  if (!parsed.success) {
    const response: ApiResponse = { success: false, message: "Please complete all fields." };
    return NextResponse.json(response, { status: 400 });
  }

  if (!process.env.RESEND_API_KEY) {
    const response: ApiResponse = { success: false, message: "Messaging is not configured yet." };
    return NextResponse.json(response, { status: 503 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const from = process.env.RESEND_FROM_EMAIL ?? "Ink Chronicle <studio@inkchronicle.com>";
  const studioInbox = process.env.STUDIO_NOTIFY_EMAIL ?? "bookings@inkchronicle.com";

  try {
    await resend.emails.send({
      from,
      to: studioInbox,
      subject: `Quick enquiry — ${parsed.data.name}`,
      html: `<p><strong>${parsed.data.name}</strong> (${parsed.data.email})</p><p>${parsed.data.message}</p>`,
    });
    const response: ApiResponse = { success: true, message: "Message sent." };
    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.error("[contact] failed", error);
    const response: ApiResponse = { success: false, message: "Could not send your message." };
    return NextResponse.json(response, { status: 502 });
  }
}
