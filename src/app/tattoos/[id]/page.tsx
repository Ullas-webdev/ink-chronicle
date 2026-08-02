import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ALL_TATTOOS, getTattooById } from "@/data/tattoos";
import { InkStroke } from "@/components/ui/InkStroke";
import { ArrowLeft, Clock, Sparkles, Shield, Compass, CalendarCheck } from "lucide-react";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return ALL_TATTOOS.map((tattoo) => ({
    id: tattoo.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const tattoo = getTattooById(id);

  if (!tattoo) {
    return {
      title: "Tattoo Not Found | Ink Chronicle",
    };
  }

  return {
    title: `${tattoo.name} | Ink Chronicle Tattoo Studio`,
    description: `${tattoo.briefDescription} Custom ${tattoo.category} at Ink Chronicle. Book a free consultation for custom design & exact pricing.`,
  };
}

export default async function TattooDetailPage({ params }: PageProps) {
  const { id } = await params;
  const tattoo = getTattooById(id);

  if (!tattoo) {
    return notFound();
  }

  // Get 4 related tattoos from the same category or general list
  const relatedTattoos = ALL_TATTOOS.filter(
    (t) => t.id !== tattoo!.id
  ).slice(0, 4);

  return (
    <main className="min-h-screen bg-ink-black text-bone selection:bg-bone selection:text-ink-black pt-28 pb-24">
      {/* Top Breadcrumb Header Bar */}
      <div className="mx-auto max-w-shell px-6 md:px-10 mb-10">
        <Link
          href="/#tattoos"
          className="inline-flex items-center gap-2 text-xs md:text-sm uppercase tracking-wider text-bone/60 hover:text-gold transition-colors duration-300 group"
        >
          <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
          <span>Back to Tattoo Styles</span>
        </Link>
      </div>

      <div className="mx-auto max-w-shell px-6 md:px-10">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Premium Framed Artwork Showcase */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative w-full bg-white/5 border border-white/20 p-3 md:p-4 rounded-md shadow-2xl overflow-hidden group">
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm bg-ink-charcoal">
                <Image
                  src={tattoo.image}
                  alt={tattoo.name}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-[1200ms] ease-lux group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-80" />
              </div>
            </div>

            <div className="flex items-center justify-between text-xs tracking-widest text-bone/50 uppercase px-1">
              <span>HD Studio Preview</span>
              <span>Authentic Ink Art</span>
            </div>
          </div>

          {/* Right Column: Narrative, Specifications & Pricing CTA */}
          <div className="lg:col-span-6 space-y-8">
            
            {/* Title & Category Badge */}
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium tracking-widest text-gold uppercase">
                <Sparkles size={12} />
                <span>{tattoo.category}</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium tracking-wide text-bone uppercase">
                {tattoo.name}
              </h1>
            </div>

            {/* Brief Narrative Description */}
            <div className="space-y-4 border-b hairline pb-6">
              <p className="text-base md:text-lg text-bone/90 font-light leading-relaxed">
                {tattoo.briefDescription}
              </p>
              <p className="text-sm text-bone/70 leading-relaxed font-light">
                {tattoo.fullDescription}
              </p>
            </div>

            {/* Key Specs Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/[0.03] border border-white/10 p-4 rounded-sm space-y-1">
                <div className="flex items-center gap-2 text-xs text-gold uppercase tracking-wider font-medium">
                  <Compass size={14} />
                  <span>Art Style</span>
                </div>
                <p className="text-xs md:text-sm text-bone font-medium">{tattoo.specs.style}</p>
              </div>

              <div className="bg-white/[0.03] border border-white/10 p-4 rounded-sm space-y-1">
                <div className="flex items-center gap-2 text-xs text-gold uppercase tracking-wider font-medium">
                  <Clock size={14} />
                  <span>Est. Duration</span>
                </div>
                <p className="text-xs md:text-sm text-bone font-medium">{tattoo.specs.sessionDuration}</p>
              </div>

              <div className="bg-white/[0.03] border border-white/10 p-4 rounded-sm space-y-1">
                <div className="flex items-center gap-2 text-xs text-gold uppercase tracking-wider font-medium">
                  <Shield size={14} />
                  <span>Ideal Placement</span>
                </div>
                <p className="text-xs md:text-sm text-bone font-medium">{tattoo.specs.placement}</p>
              </div>

              <div className="bg-white/[0.03] border border-white/10 p-4 rounded-sm space-y-1">
                <div className="flex items-center gap-2 text-xs text-gold uppercase tracking-wider font-medium">
                  <Sparkles size={14} />
                  <span>Pain Level</span>
                </div>
                <p className="text-xs md:text-sm text-bone font-medium">{tattoo.specs.painLevel}</p>
              </div>
            </div>

            {/* Premium Price Consultation CTA Card */}
            <div className="relative overflow-hidden bg-gradient-to-br from-white/10 via-ink-charcoal to-black border border-gold/40 p-6 md:p-8 rounded-md shadow-2xl space-y-6">
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs uppercase tracking-widest text-gold font-semibold">
                    Pricing & Custom Consultation
                  </h3>
                  <span className="text-[10px] uppercase tracking-wider text-bone/50 bg-white/5 px-2 py-0.5 rounded border border-white/10">
                    Custom Quote
                  </span>
                </div>
                <p className="text-sm text-bone/80 font-light leading-relaxed">
                  Tattoo pricing varies based on custom sizing, body placement, and line complexity. Book a 1-on-1 consultation with our master artist to receive your exact price estimate.
                </p>
              </div>

              {/* Book Consultation Button */}
              <Link
                href="/#booking"
                className="w-full inline-flex items-center justify-center gap-3 bg-bone text-ink-black font-bold text-xs md:text-sm uppercase tracking-widest py-4 px-6 rounded-sm shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 hover:bg-gold hover:text-black group/btn cursor-pointer"
              >
                <CalendarCheck size={18} className="text-ink-black transition-transform group-hover/btn:scale-110 shrink-0" />
                <span>Book Consultation To Know Price</span>
              </Link>

              <div className="flex items-center justify-between text-[11px] text-bone/50 tracking-wider">
                <span>Free Initial Consultation</span>
                <span>Sterile & Certified Studio</span>
              </div>
            </div>

          </div>

        </div>

        {/* Related Tattoo Styles */}
        <div className="mt-28 space-y-8">
          <div className="flex items-center justify-between border-b hairline pb-4">
            <h2 className="font-display text-xl md:text-2xl uppercase tracking-wider text-bone font-medium">
              You May Also Like
            </h2>
            <Link
              href="/#tattoos"
              className="text-xs uppercase tracking-wider text-bone/60 hover:text-gold transition-colors"
            >
              View All Tattoos →
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {relatedTattoos.map((item) => (
              <Link
                key={item.id}
                href={`/tattoos/${item.id}`}
                className="group flex flex-col items-center outline-none"
              >
                <div className="w-full bg-white/5 border border-white/20 p-2.5 rounded-sm group-hover:border-gold/70 transition-all duration-500 shadow-xl">
                  <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm bg-ink-charcoal">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 25vw"
                      className="object-cover transition-transform duration-[1200ms] ease-lux group-hover:scale-105"
                    />
                  </div>
                </div>
                <span className="text-xs font-medium tracking-wider text-bone/90 uppercase group-hover:text-gold transition-colors leading-snug mt-3 text-center">
                  {item.name}
                </span>
              </Link>
            ))}
          </div>
        </div>

        <InkStroke className="mt-20" />
      </div>
    </main>
  );
}
