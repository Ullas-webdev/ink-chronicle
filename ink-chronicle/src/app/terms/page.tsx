import type { Metadata } from "next";

export const metadata: Metadata = { title: "Terms of Service" };

export default function TermsPage() {
  return (
    <section className="min-h-screen pt-40 pb-28 px-6 md:px-10">
      <div className="mx-auto max-w-2xl">
        <h1 className="font-display text-5xl text-bone mb-8">Terms of Service</h1>
        <p className="text-bone/60 font-light leading-relaxed">
          All bookings require a signed consent form and a non-refundable
          design deposit, credited toward your final session. Rescheduling
          requires 72 hours&apos; notice. Full terms are provided at your
          in-studio consultation.
        </p>
      </div>
    </section>
  );
}
