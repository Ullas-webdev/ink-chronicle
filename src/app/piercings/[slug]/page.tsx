import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, ShieldCheck, CheckCircle2 } from "lucide-react";
import { getPiercingBySlug, PIERCINGS_DATA } from "@/lib/piercings-data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PIERCINGS_DATA.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getPiercingBySlug(slug);
  if (!item) return { title: "Piercing Not Found" };

  return {
    title: `${item.name} — ${item.price} | Ink Chronicle Studio`,
    description: item.shortDescription,
  };
}

export default async function PiercingDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = getPiercingBySlug(slug);

  if (!item) {
    notFound();
  }

  return (
    <section className="min-h-screen pt-36 pb-28 px-4 md:px-10 bg-ink-black text-bone font-sans selection:bg-gold selection:text-ink-black">
      <div className="mx-auto max-w-6xl">
        
        {/* Back Link */}
        <Link
          href="/piercings"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest2 text-gold-muted hover:text-gold transition-colors mb-10"
        >
          <ArrowLeft size={14} /> Back to Piercings Menu
        </Link>

        {/* 2-Column Product Detail Layout matching Chronic Ink */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Large Vector Diagram Box (Beige #f2eae4 with Red/Gold Art) */}
          <div className="relative aspect-square md:aspect-[4/5] w-full max-h-[50vh] md:max-h-none bg-[#f2eae4] rounded-sm overflow-hidden p-6 md:p-12 border border-white/10 flex items-center justify-center shadow-2xl md:sticky md:top-36">
            <DetailPiercingDiagram type={item.diagramType} />
          </div>

          {/* Right Column: Information & Description */}
          <div className="flex flex-col gap-6">
            
            <div>
              <span className="text-xs uppercase tracking-widest3 text-gold font-semibold mb-2 block">
                Professional Body Piercing
              </span>
              <h1 className="font-display text-3xl md:text-4xl text-bone mb-3 uppercase tracking-tight">
                {item.name}
              </h1>
              {item.technique && (
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold/10 border border-gold/40 rounded text-gold text-xs font-semibold uppercase tracking-wider mb-3">
                  <span>✦ {item.technique}</span>
                </div>
              )}
              <span className="font-display text-3xl text-gold font-semibold block mb-4">
                {item.price}
              </span>
            </div>

            {/* BOOK NOW Button */}
            <a
              href="/#booking"
              className="w-full text-center bg-transparent border border-white text-bone py-4 text-xs font-semibold uppercase tracking-widest2 hover:bg-white hover:text-ink-black transition-colors"
            >
              BOOK NOW
            </a>

            {/* Duration Box */}
            <div className="border border-white/10 p-4 rounded-sm bg-ink-charcoal/50">
              <span className="text-xs text-bone/60 block mb-1">
                Duration: <strong className="text-bone">{item.duration}</strong>
              </span>
              <div className="border border-white/20 px-4 py-2.5 rounded bg-ink-black text-xs text-bone/90 font-medium">
                {item.duration} appointment
              </div>
            </div>

            {/* Detailed Description Section */}
            <div className="border-t hairline border-gold/20 pt-8 mt-2 space-y-6">
              
              <h2 className="font-display text-xl uppercase tracking-wider text-bone">
                DESCRIPTION
              </h2>

              {/* Age Policy */}
              <div className="text-xs md:text-sm text-bone/80 font-light leading-relaxed space-y-3">
                <p>
                  <strong>We offer {item.name.toLowerCase()} to clients 14 years and up</strong>, provided a parent or legal guardian is present. Clients 16 years old and up can get a piercing without the presence of a parent or legal guardian with valid ID.
                </p>
              </div>

              {/* Fee Information */}
              <div className="bg-ink-charcoal/60 p-5 rounded-sm border hairline border-gold/10 space-y-2 text-xs md:text-sm">
                <h3 className="font-semibold text-gold uppercase tracking-wider">
                  What is included in the {item.name.toLowerCase()} fee?
                </h3>
                <p className="text-bone/70 font-light leading-relaxed">
                  The service fee for {item.name} is <strong>{item.price}</strong>. On the day of your appointment, all procedure tools and <strong>Initial SS Steel (Surgical Stainless Steel) starter jewelry installation are fully included</strong>.
                </p>
              </div>

              {/* Re-piercing note */}
              <p className="text-xs text-bone/60 font-light leading-relaxed">
                <strong>Please note:</strong> Reopening a closed piercing or re-piercing a partially closed site is subject to the full service fee of the piercing.
              </p>

              {/* How to prepare */}
              <div className="space-y-3 text-xs md:text-sm">
                <h3 className="font-semibold text-gold uppercase tracking-wider">
                  How to prepare for an appointment?
                </h3>
                <p className="text-bone/70 font-light leading-relaxed">
                  We require a government-issued photo ID for age verification. Please make sure you have eaten a meal within 2 hours prior to your session and stay hydrated.
                </p>
              </div>

              {/* In-depth Overview */}
              <div className="space-y-3 border-t hairline border-white/10 pt-6">
                <h3 className="font-semibold text-bone uppercase tracking-wider text-xs md:text-sm">
                  Procedure & Placement Overview
                </h3>
                {item.inDepthDescription.map((paragraph, i) => (
                  <p key={i} className="text-xs md:text-sm text-bone/70 font-light leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Pain & Healing Specs */}
              <div className="grid grid-cols-2 gap-4 py-4 px-5 bg-ink-black border hairline rounded-sm text-xs">
                <div>
                  <span className="text-bone/40 uppercase tracking-widest block text-[10px]">Pain Level</span>
                  <span className="font-semibold text-gold">{item.painLevel}</span>
                </div>
                <div>
                  <span className="text-bone/40 uppercase tracking-widest block text-[10px]">Healing Time</span>
                  <span className="font-semibold text-gold">{item.healingTime}</span>
                </div>
              </div>

              {/* Aftercare Tips */}
              <div className="space-y-3 pt-2">
                <h3 className="font-semibold text-gold uppercase tracking-wider text-xs">
                  Care Guidelines
                </h3>
                {item.careTips.map((tip, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-bone/70 font-light">
                    <CheckCircle2 size={16} className="text-gold shrink-0 mt-0.5" />
                    <span>{tip}</span>
                  </div>
                ))}
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

// ─── Detail Vector Diagram Component ──────────────────────────────────────────
function DetailPiercingDiagram({ type }: { type: string }) {
  const isCombo = type.startsWith("combo-");

  if (isCombo) {
    const parts = type.replace("combo-", "").split("-");
    const firstFocus = parts[0] || "";
    const secondFocus = parts[1] || firstFocus;
    return (
      <div className="flex items-center justify-center gap-4 w-full h-full">
        <DetailEarVector focus={firstFocus} />
        <span className="text-3xl text-neutral-400 font-light">+</span>
        <DetailEarVector focus={secondFocus} />
      </div>
    );
  }

  if (type.startsWith("ear-")) {
    const focus = type.replace("ear-", "");
    return <DetailEarVector focus={focus} />;
  }

  if (type === "nose") {
    return (
      <svg viewBox="0 0 120 120" className="w-full h-full max-h-80 stroke-red-500 fill-none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M 42 20 L 42 65 C 42 85 78 85 78 65 L 78 20" />
        <path d="M 32 75 C 28 65 42 62 48 70" />
        <path d="M 88 75 C 92 65 78 62 72 70" />
        <circle cx="38" cy="68" r="4" fill="#f59e0b" stroke="none" />
        <polygon points="82,64 84,68 88,68 85,71 86,75 82,73 78,75 79,71 76,68 80,68" fill="#f59e0b" stroke="none" />
      </svg>
    );
  }

  if (type === "septum") {
    return (
      <svg viewBox="0 0 120 120" className="w-full h-full max-h-80 stroke-red-500 fill-none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M 42 20 L 42 60 C 42 80 78 80 78 60 L 78 20" />
        <path d="M 30 70 C 26 60 40 58 46 65" />
        <path d="M 90 70 C 94 60 80 58 74 65" />
        <path d="M 50 72 C 50 90 70 90 70 72" stroke="#f59e0b" strokeWidth="4" fill="none" />
      </svg>
    );
  }

  if (type === "belly-button") {
    return (
      <svg viewBox="0 0 120 120" className="w-full h-full max-h-80 stroke-red-500 fill-none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M 15 35 C 45 40 75 40 105 35" />
        <path d="M 20 100 C 50 110 70 110 100 100" />
        <circle cx="60" cy="70" r="12" stroke="#f59e0b" strokeWidth="2" />
        <circle cx="60" cy="70" r="5" fill="#f59e0b" stroke="none" />
        <circle cx="60" cy="48" r="4" fill="#f59e0b" stroke="none" />
        <line x1="60" y1="52" x2="60" y2="65" stroke="#f59e0b" strokeWidth="3" />
      </svg>
    );
  }

  if (type.includes("lip") || type.includes("philtrum") || type.includes("labret")) {
    return (
      <svg viewBox="0 0 140 80" className="w-full h-full max-h-72 stroke-red-500 fill-none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M 15 40 Q 40 25 70 32 Q 100 25 125 40 Q 70 48 15 40 Z" />
        <path d="M 15 40 Q 70 70 125 40 Q 70 45 15 40 Z" />
        {type.includes("philtrum") && (
          <polygon points="70,10 73,16 79,16 74,20 76,26 70,22 64,26 66,20 61,16 67,16" fill="#f59e0b" stroke="none" />
        )}
        {type.includes("labret") && (
          <circle cx="70" cy="62" r="4" fill="#f59e0b" stroke="none" />
        )}
      </svg>
    );
  }

  if (type.includes("eyebrow")) {
    return (
      <svg viewBox="0 0 140 80" className="w-full h-full max-h-72 stroke-red-500 fill-none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M 15 25 Q 40 18 60 28" strokeWidth="3" />
        <path d="M 80 28 Q 100 18 125 25" strokeWidth="3" />
        <path d="M 25 50 Q 38 60 50 50" strokeWidth="1.5" />
        <path d="M 90 50 Q 102 60 115 50" strokeWidth="1.5" />
        <circle cx="105" cy="18" r="3.5" fill="#f59e0b" stroke="none" />
        <circle cx="110" cy="32" r="3.5" fill="#f59e0b" stroke="none" />
      </svg>
    );
  }

  if (type.includes("nipple")) {
    return (
      <div className="flex items-center justify-center gap-6 w-full h-full">
        <svg viewBox="0 0 60 60" className="w-24 h-24 stroke-red-500 fill-none" strokeWidth="1.8">
          <circle cx="30" cy="30" r="24" strokeDasharray="3 3" stroke="#d1d5db" />
          <circle cx="30" cy="30" r="14" />
          <circle cx="18" cy="30" r="3" fill="#f59e0b" stroke="none" />
          <circle cx="30" cy="30" r="3" fill="#f59e0b" stroke="none" />
          <circle cx="42" cy="30" r="3" fill="#f59e0b" stroke="none" />
        </svg>
      </div>
    );
  }

  return (
    <div className="text-center font-display text-sm text-neutral-500 font-semibold tracking-widest uppercase">
      Jewelry Removal
    </div>
  );
}

function DetailEarVector({ focus }: { focus: string }) {
  return (
    <svg viewBox="0 0 100 140" className="w-full h-full max-h-80 stroke-red-500 fill-none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M 35 15 C 65 15 85 30 85 65 C 85 95 70 125 45 125 C 30 125 25 110 32 95 C 38 80 48 70 48 55 C 48 35 30 30 35 15 Z" />
      <path d="M 45 32 C 65 35 70 55 65 80 C 60 95 48 105 42 100" strokeWidth="1.4" />
      <path d="M 35 60 C 45 60 45 75 35 75" strokeWidth="1.4" />

      {focus.includes("lobe") && (
        <circle cx="42" cy="112" r="10" stroke="#111" strokeWidth="2" strokeDasharray="3 3" />
      )}
      {focus.includes("helix") && !focus.includes("3x") && !focus.includes("forward") && (
        <circle cx="76" cy="38" r="10" stroke="#111" strokeWidth="2" strokeDasharray="3 3" />
      )}
      {focus.includes("3x") && (
        <>
          <circle cx="76" cy="30" r="6" fill="#f59e0b" stroke="none" />
          <circle cx="78" cy="44" r="6" fill="#f59e0b" stroke="none" />
          <circle cx="76" cy="58" r="6" fill="#f59e0b" stroke="none" />
        </>
      )}
      {focus.includes("forward") && (
        <circle cx="40" cy="30" r="9" stroke="#111" strokeWidth="2" strokeDasharray="3 3" />
      )}
      {focus.includes("tragus") && (
        <circle cx="38" cy="67" r="9" stroke="#111" strokeWidth="2" strokeDasharray="3 3" />
      )}
      {focus.includes("conch") && (
        <circle cx="56" cy="72" r="9" stroke="#111" strokeWidth="2" strokeDasharray="3 3" />
      )}
      {focus.includes("rook") && (
        <circle cx="50" cy="42" r="9" stroke="#111" strokeWidth="2" strokeDasharray="3 3" />
      )}
      {focus.includes("flat") && (
        <circle cx="60" cy="28" r="10" stroke="#111" strokeWidth="2" strokeDasharray="3 3" />
      )}
      {focus.includes("daith") && (
        <circle cx="48" cy="58" r="9" stroke="#111" strokeWidth="2" strokeDasharray="3 3" />
      )}
    </svg>
  );
}
