import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { sendContactEmail } from "@/lib/resend";
import type { ApiResponse } from "@/types";

export const runtime = "nodejs";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required").max(120),
  email: z.string().email("Valid email required"),
  message: z.string().min(2, "Message required").max(1000),
  phone: z.string().optional().default(""),
});

export async function POST(req: NextRequest) {
  const json = await req.json().catch(() => null);
  const parsed = contactSchema.safeParse(json);

  if (!parsed.success) {
    const response: ApiResponse = { success: false, message: "Please fill in all required fields." };
    return NextResponse.json(response, { status: 400 });
  }

  try {
    if (process.env.RESEND_API_KEY) {
      await sendContactEmail(parsed.data);
    } else {
      console.log("[contact] RESEND_API_KEY not set, logging enquiry:", parsed.data);
    }

    const response: ApiResponse = { success: true, message: "Message sent successfully!" };
    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.error("[contact] failed to send email", error);
    const response: ApiResponse = { success: false, message: "Could not send your message. Please try again or email us directly." };
    return NextResponse.json(response, { status: 502 });
  }
}
