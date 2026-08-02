import { Resend } from "resend";
import type { BookingFormValues } from "@/types";

let client: Resend | null = null;

function getClient() {
  if (!client) {
    if (!process.env.RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is not configured.");
    }
    client = new Resend(process.env.RESEND_API_KEY);
  }
  return client;
}

export async function sendBookingEmails(values: BookingFormValues) {
  const resend = getClient();
  const from = process.env.RESEND_FROM_EMAIL ?? "Ink Chronicle <onboarding@resend.dev>";
  const studioInbox = process.env.STUDIO_NOTIFY_EMAIL ?? "pavanrocker001@gmail.com";

  // 1. Send detailed notification to studio owner (Pavan)
  await resend.emails.send({
    from,
    to: studioInbox,
    subject: `New Reservation Request from ${values.name}`,
    html: buildStudioNoticeHtml(values),
  });

  // 2. Send receipt confirmation to user
  if (values.email) {
    await resend.emails.send({
      from,
      to: values.email,
      subject: "Your Consultation Request — Ink Chronicle Studio",
      html: buildClientConfirmationHtml(values),
    });
  }
}

export async function sendContactEmail(values: { name: string; email: string; message: string; phone?: string }) {
  const resend = getClient();
  const from = process.env.RESEND_FROM_EMAIL ?? "Ink Chronicle <onboarding@resend.dev>";
  const studioInbox = process.env.STUDIO_NOTIFY_EMAIL ?? "pavanrocker001@gmail.com";

  // 1. Send notice to owner
  await resend.emails.send({
    from,
    to: studioInbox,
    subject: `New Quick Enquiry from ${values.name}`,
    html: `
      <div style="font-family: Arial, sans-serif; background:#080808; color:#F5F5F3; padding:32px; border-radius:8px;">
        <h2 style="color:#d4af37; letter-spacing: 0.08em; margin-bottom:20px;">NEW QUICK ENQUIRY</h2>
        <p><strong>Name:</strong> ${values.name}</p>
        <p><strong>Email:</strong> ${values.email}</p>
        ${values.phone ? `<p><strong>Phone:</strong> ${values.phone}</p>` : ""}
        <p><strong>Message:</strong></p>
        <p style="background:#141414; padding:16px; border-left:3px solid #d4af37;">${values.message}</p>
      </div>
    `,
  });

  // 2. Send receipt to client
  await resend.emails.send({
    from,
    to: values.email,
    subject: "We received your message — Ink Chronicle",
    html: `
      <div style="font-family: Arial, sans-serif; background:#080808; color:#F5F5F3; padding:32px; border-radius:8px;">
        <h2 style="color:#d4af37; letter-spacing: 0.08em;">INK CHRONICLE STUDIO</h2>
        <p>Hi ${values.name.split(" ")[0]},</p>
        <p>Thank you for reaching out! We received your message and will get back to you within 24 business hours.</p>
        <br/>
        <p style="color:#9A9A96;">Best regards,<br/>Pavan & Ink Chronicle Team</p>
      </div>
    `,
  });
}

function buildStudioNoticeHtml(v: BookingFormValues) {
  return `
    <div style="font-family: Arial, sans-serif; background:#080808; color:#F5F5F3; padding:32px; border-radius:8px;">
      <h2 style="color:#d4af37; letter-spacing: 0.08em; border-bottom:1px solid rgba(255,255,255,0.1); padding-bottom:12px;">NEW CONSULTATION REQUEST</h2>
      <p style="margin-top:16px;"><strong>Client Name:</strong> ${v.name}</p>
      <p><strong>Email:</strong> ${v.email}</p>
      <p><strong>Phone:</strong> ${v.phone}</p>
      <p><strong>Service Requested:</strong> ${v.service || "Not specified"}</p>
      <p><strong>Color Preference:</strong> ${v.colorPreference || "Not specified"}</p>
      <p><strong>Tattoo/Piercing Style:</strong> ${v.styleSlug || "Custom"}</p>
      <p><strong>Estimated Size:</strong> ${v.size || "Not specified"}</p>
      <p><strong>Placement:</strong> ${v.placement || "Not specified"}</p>
      <p><strong>Able to Visit Studio:</strong> ${v.canVisit || "Not specified"}</p>
      ${v.message ? `<p><strong>Additional Notes:</strong><br/>${v.message}</p>` : ""}
    </div>
  `;
}

function buildClientConfirmationHtml(v: BookingFormValues) {
  const firstName = v.name.split(" ")[0] || "there";
  return `
    <div style="font-family: Arial, sans-serif; background:#080808; color:#F5F5F3; padding:32px; border-radius:8px;">
      <h2 style="color:#d4af37; letter-spacing: 0.08em; border-bottom:1px solid rgba(255,255,255,0.1); padding-bottom:12px;">INK CHRONICLE STUDIO</h2>
      <p style="margin-top:16px;">Dear ${firstName},</p>
      <p>Thank you for submitting your consultation request for <strong>${v.service || "your tattoo/piercing idea"}</strong>.</p>
      <p>We have safely received your details and details regarding placement (${v.placement || "custom"}). Master artist Pavan and our studio team will review your idea and contact you shortly with pricing and session availability.</p>
      <br/>
      <p style="color:#9A9A96; font-size:13px;">— Ink Chronicle Studio<br/>Mysuru, Karnataka</p>
    </div>
  `;
}
