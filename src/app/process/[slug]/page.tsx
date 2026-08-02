import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, ArrowRight } from "lucide-react";
import { processSteps } from "@/lib/data";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function ProcessPage({ params }: Props) {
  const { slug } = await params;
  const step = processSteps.find((s) => s.slug === slug);

  if (!step) {
    notFound();
  }

  return (
    <main className="min-h-[100svh] bg-ink-black text-bone py-24 px-6 md:px-12 flex flex-col justify-between">
      <div className="mx-auto max-w-3xl w-full">
        {/* Back Link */}
        <Link
          href="/#process"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest2 text-gold-muted hover:text-gold transition-colors mb-16"
        >
          <ArrowLeft size={16} /> Back to Process
        </Link>

        {/* Step Badge & Title */}
        <div className="flex items-center gap-4 mb-6">
          <span className="font-display text-4xl font-semibold text-gold">
            {step.index}
          </span>
          <span className="text-xs uppercase tracking-widest3 text-bone/40">
            Stage {step.index} of 04
          </span>
        </div>

        <h1 className="font-display text-4xl md:text-6xl text-bone mb-8 leading-tight">
          {step.title}
        </h1>

        <p className="text-lg md:text-xl text-bone/80 font-light leading-relaxed mb-12 border-l-2 border-gold/40 pl-6">
          {step.description}
        </p>

        {/* Minimal Simple Description Points */}
        {step.fullDescription && (
          <div className="flex flex-col gap-6 my-12 bg-ink-charcoal border hairline p-8 rounded-sm">
            <h2 className="text-xs uppercase tracking-widest2 text-gold font-semibold mb-2">
              Key Details
            </h2>
            {step.fullDescription.map((point, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <CheckCircle2 size={18} className="text-gold shrink-0 mt-1" />
                <p className="text-sm md:text-base text-bone/70 font-light leading-relaxed">
                  {point}
                </p>
              </div>
            ))}
          </div>
        )}


      </div>

      <footer className="mt-20 pt-8 border-t hairline text-center text-xs text-bone/30">
        Ink Chronicle Studio — Stage Guide
      </footer>
    </main>
  );
}
