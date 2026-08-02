import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { sendBookingEmails } from "@/lib/resend";
import type { ApiResponse } from "@/types";

export const runtime = "nodejs";

const bookingSchema = z.object({
  name: z.string().min(2).max(120),
  email: z.string().email(),
  phone: z.string().min(6).max(24),
  artistSlug: z.string().min(1),
  styleSlug: z.string().min(1),
  placement: z.string().min(2).max(120),
  budget: z.string().min(1).max(60),
  message: z.string().max(1000).optional().default(""),
});

export async function POST(req: NextRequest) {
  const json = await req.json().catch(() => null);
  const parsed = bookingSchema.safeParse(json);

  if (!parsed.success) {
    const response: ApiResponse = {
      success: false,
      message: "Please check the highlighted fields and try again.",
    };
    return NextResponse.json(response, { status: 400 });
  }

  try {
    await sendBookingEmails(parsed.data);
    const response: ApiResponse = {
      success: true,
      message: "Your consultation request has been received.",
    };
    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.error("[booking] failed to send email", error);
    const response: ApiResponse = {
      success: false,
      message: "Something went wrong on our end. Please email us directly.",
    };
    return NextResponse.json(response, { status: 502 });
  }
}
