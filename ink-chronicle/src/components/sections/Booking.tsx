"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { artists, tattooStyles } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

const schema = z.object({
  name: z.string().min(2, "Please enter your full name."),
  email: z.string().email("Please enter a valid email."),
  phone: z.string().min(6, "Please enter a valid phone number."),
  artistSlug: z.string().min(1, "Please choose an artist."),
  styleSlug: z.string().min(1, "Please choose a style."),
  placement: z.string().min(2, "Please tell us the placement."),
  budget: z.string().min(1, "Please select a budget range."),
  message: z.string().max(1000).optional(),
});

type FormValues = z.infer<typeof schema>;

const BUDGET_RANGES = ["£300 – £600", "£600 – £1,200", "£1,200 – £2,500", "£2,500+"];

export function Booking() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  async function onSubmit(values: FormValues) {
    setStatus("sending");
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (res.ok) {
        setStatus("sent");
        reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="booking" className="py-28 md:py-40 bg-ink-charcoal">
      <div className="mx-auto max-w-shell px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <SectionHeading
            eyebrow="Reservation"
            title="Request a private consultation."
            description="Every engagement begins with a seated consultation, not a quote. Tell us what you have in mind and we'll respond within two business days."
          />
        </div>

        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-6"
          noValidate
        >
          {status === "sent" ? (
            <div className="border border-gold/40 p-8 text-center">
              <p className="font-display text-2xl text-gold mb-2">Request received</p>
              <p className="text-sm text-bone/60">
                A member of the studio will be in touch within two business days.
              </p>
            </div>
          ) : (
            <>
              <Field label="Full Name" error={errors.name?.message}>
                <input {...register("name")} className={inputClass} autoComplete="name" />
              </Field>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Field label="Email" error={errors.email?.message}>
                  <input {...register("email")} type="email" className={inputClass} autoComplete="email" />
                </Field>
                <Field label="Phone" error={errors.phone?.message}>
                  <input {...register("phone")} type="tel" className={inputClass} autoComplete="tel" />
                </Field>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Field label="Preferred Artist" error={errors.artistSlug?.message}>
                  <select {...register("artistSlug")} className={inputClass} defaultValue="">
                    <option value="" disabled>Select an artist</option>
                    {artists.map((a) => (
                      <option key={a.slug} value={a.slug}>{a.name}</option>
                    ))}
                  </select>
                </Field>
                <Field label="Style" error={errors.styleSlug?.message}>
                  <select {...register("styleSlug")} className={inputClass} defaultValue="">
                    <option value="" disabled>Select a style</option>
                    {tattooStyles.map((s) => (
                      <option key={s.slug} value={s.slug}>{s.name}</option>
                    ))}
                  </select>
                </Field>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Field label="Placement" error={errors.placement?.message}>
                  <input {...register("placement")} placeholder="e.g. Forearm" className={inputClass} />
                </Field>
                <Field label="Budget" error={errors.budget?.message}>
                  <select {...register("budget")} className={inputClass} defaultValue="">
                    <option value="" disabled>Select a range</option>
                    {BUDGET_RANGES.map((b) => (
                      <option key={b} value={b}>{b}</option>
                    ))}
                  </select>
                </Field>
              </div>

              <Field label="Your Vision (optional)">
                <textarea {...register("message")} rows={4} className={`${inputClass} resize-none`} />
              </Field>

              <Button type="submit" disabled={status === "sending"} className="mt-2 w-full sm:w-fit">
                {status === "sending" ? "Sending…" : "Submit Request"}
              </Button>

              {status === "error" && (
                <p className="text-xs text-red-400">
                  Something went wrong — please email bookings@inkchronicle.com directly.
                </p>
              )}
            </>
          )}
        </motion.form>
      </div>
    </section>
  );
}

const inputClass =
  "w-full bg-transparent border-b hairline py-3 text-sm text-bone placeholder:text-bone/30 focus:border-gold outline-none transition-colors duration-300 [&>option]:bg-ink-charcoal";

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-[11px] uppercase tracking-widest2 text-bone/50">{label}</span>
      {children}
      {error && <span className="text-xs text-red-400">{error}</span>}
    </label>
  );
}
