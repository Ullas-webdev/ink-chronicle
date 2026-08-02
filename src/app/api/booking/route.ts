import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { sendBookingEmails } from "@/lib/resend";
import type { ApiResponse } from "@/types";

export const runtime = "nodejs";

const bookingSchema = z.object({
  name: z.string().min(2, "Name is required").max(120),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(6, "Phone number is required").max(24),
  service: z.string().optional().default(""),
  colorPreference: z.string().optional().default(""),
  styleSlug: z.string().optional().default(""),
  size: z.string().optional().default(""),
  placement: z.string().optional().default(""),
  canVisit: z.string().optional().default(""),
  budget: z.string().optional().default(""),
  message: z.string().max(1000).optional().default(""),
});

export async function POST(req: NextRequest) {
  const json = await req.json().catch(() => null);
  const parsed = bookingSchema.safeParse(json);

  if (!parsed.success) {
    const response: ApiResponse = {
      success: false,
      message: "Please fill in your name, email, and phone number.",
    };
    return NextResponse.json(response, { status: 400 });
  }

  try {
    if (process.env.RESEND_API_KEY) {
      await sendBookingEmails(parsed.data);
    } else {
      console.log("[booking] RESEND_API_KEY not configured, logging submission:", parsed.data);
    }

    const response: ApiResponse = {
      success: true,
      message: "Your consultation request has been received.",
    };
    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.error("[booking] failed to send email", error);
    const response: ApiResponse = {
      success: false,
      message: "Something went wrong sending the email. Please contact us directly.",
    };
    return NextResponse.json(response, { status: 502 });
  }
}
