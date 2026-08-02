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
  const from = process.env.RESEND_FROM_EMAIL ?? "Ink Chronicle <studio@inkchronicle.com>";
  const studioInbox = process.env.STUDIO_NOTIFY_EMAIL ?? "bookings@inkchronicle.com";

  await resend.emails.send({
    from,
    to: studioInbox,
    subject: `New consultation request — ${values.name}`,
    html: buildStudioNoticeHtml(values),
  });

  await resend.emails.send({
    from,
    to: values.email,
    subject: "Your consultation request — Ink Chronicle",
    html: buildClientConfirmationHtml(values),
  });
}

function buildStudioNoticeHtml(v: BookingFormValues) {
  return `
    <div style="font-family: Georgia, serif; background:#090909; color:#F5F5F5; padding:32px;">
      <h2 style="color:#C5A46D; letter-spacing: 0.08em;">NEW CONSULTATION REQUEST</h2>
      <p><strong>Name:</strong> ${v.name}</p>
      <p><strong>Email:</strong> ${v.email}</p>
      <p><strong>Phone:</strong> ${v.phone}</p>
      <p><strong>Preferred Artist:</strong> ${v.artistSlug}</p>
      <p><strong>Style:</strong> ${v.styleSlug}</p>
      <p><strong>Placement:</strong> ${v.placement}</p>
      <p><strong>Budget:</strong> ${v.budget}</p>
      <p><strong>Message:</strong><br/>${v.message}</p>
    </div>
  `;
}

function buildClientConfirmationHtml(v: BookingFormValues) {
  return `
    <div style="font-family: Georgia, serif; background:#090909; color:#F5F5F5; padding:32px;">
      <h2 style="color:#C5A46D; letter-spacing: 0.08em;">INK CHRONICLE</h2>
      <p>Dear ${v.name.split(" ")[0]},</p>
      <p>Your request for a private consultation has been received. A member of our studio will contact you within two business days to confirm a time.</p>
      <p style="color:#9B7B4B;">— Ink Chronicle Studio</p>
    </div>
  `;
}
