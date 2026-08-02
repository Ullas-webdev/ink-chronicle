import type { Metadata } from "next";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <section className="min-h-screen pt-40 pb-28 px-6 md:px-10">
      <div className="mx-auto max-w-2xl">
        <h1 className="font-display text-5xl text-bone mb-8">Privacy Policy</h1>
        <p className="text-bone/60 font-light leading-relaxed">
          Ink Chronicle collects only the information you provide through our
          consultation and enquiry forms — your name, contact details, and the
          details of your request — solely to respond to your enquiry and
          schedule your appointment. We do not sell or share your data with
          third parties for marketing purposes. Contact
          privacy@inkchronicle.com for any data request.
        </p>
      </div>
    </section>
  );
}
