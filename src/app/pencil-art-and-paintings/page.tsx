import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles, ArrowRight, ShieldCheck, Palette, Frame, Layers } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { PencilArtForm } from "@/components/forms/PencilArtForm";

export const metadata: Metadata = {
  title: "Pencil Art & Paintings — Bespoke Fine Art Commissions by Ink Chronicle",
  description:
    "Commission original charcoal pencil portraits, realistic sketches, oil paintings, and archival flash prints crafted by Ink Chronicle studio artists in Mysuru.",
};

const GALLERY_ITEMS = [
  {
    title: "Realistic Charcoal Portrait",
    medium: "Graphite & Charcoal on Archival Paper",
    size: "12 x 16 Inches",
    image: "/pencil-art-portrait.jpg",
  },
  {
    title: "Majestic Wildlife Pencil Sketch",
    medium: "Pencil & Shading Wash",
    size: "16 x 20 Inches",
    image: "/pencil-wildlife.jpg",
  },
  {
    title: "Fine Line Botanical Study",
    medium: "Fine Line Ink & Soft Graphite",
    size: "10 x 14 Inches",
    image: "/pencil-botanical.jpg",
  },
  {
    title: "Classical Mythology Portrait",
    medium: "Oil on Canvas",
    size: "18 x 24 Inches",
    image: "/canvas-painting.jpg",
  },
];

export default function PencilArtPage() {
  return (
    <div className="bg-ink-black text-bone min-h-screen pt-28 pb-20">
      
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 border-b hairline overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-25">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/pencil-art-portrait.jpg"
            alt="Pencil Art & Paintings"
            className="w-full h-full object-cover brightness-[0.3]"
          />
        </div>

        <div className="mx-auto max-w-shell px-6 md:px-10 relative z-10 text-center flex flex-col items-center">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/40 text-gold text-xs font-bold uppercase tracking-widest mb-6">
            <Palette size={14} className="text-gold" />
            <span>COMMISSIONED FINE ART & GALLERY PRINTS</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-medium tracking-tight text-white max-w-4xl leading-tight">
            Pencil Art & <span className="text-gold italic font-serif">Paintings</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base md:text-lg text-bone/80 font-light leading-relaxed">
            Bespoke charcoal pencil portraits, realistic graphite sketches, custom oil paintings, and archival fine art prints crafted by Ink Chronicle studio masters in Mysuru.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href="#order">
              <Button className="bg-gold text-black font-black hover:bg-white text-xs uppercase tracking-widest px-8 py-4 shadow-xl">
                ORDER CUSTOM ARTWORK
              </Button>
            </a>
            <a href="#gallery">
              <Button variant="outline" className="text-xs uppercase tracking-widest px-8 py-4">
                VIEW GALLERY SKETCHES
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Brief Description & Commission Process */}
      <section className="py-16 md:py-20 bg-ink-charcoal border-b hairline">
        <div className="mx-auto max-w-shell px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 flex flex-col gap-6">
            <span className="text-gold text-xs font-bold uppercase tracking-widest">BESPOKE FINE ART ATELIER</span>
            <h2 className="font-display text-3xl md:text-4xl text-white font-semibold leading-tight">
              Art Created to Endure <span className="text-gold italic font-serif">Generations</span>
            </h2>
            <p className="text-bone/80 text-sm md:text-base leading-relaxed font-light">
              Beyond body art, Ink Chronicle is a private fine art atelier. Our master resident artists accept custom commissions for hyper-realistic pencil portraits, intricate charcoal studies, and original oil paintings.
            </p>
            <p className="text-bone/80 text-sm md:text-base leading-relaxed font-light">
              Whether you wish to immortalize a loved one in a detailed pencil portrait, order a statement wildlife sketch, or commission an original canvas painting, every piece is hand-crafted on museum-grade acid-free paper or heavy canvas.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              <div className="p-4 bg-ink-black border hairline rounded flex items-center gap-3">
                <Frame size={20} className="text-gold shrink-0" />
                <span className="text-xs text-bone font-medium">Museum-Grade Materials</span>
              </div>
              <div className="p-4 bg-ink-black border hairline rounded flex items-center gap-3">
                <Sparkles size={20} className="text-gold shrink-0" />
                <span className="text-xs text-bone font-medium">100% Hand-Drawn Original</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative h-[380px] md:h-[460px] rounded-sm overflow-hidden border hairline shadow-2xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/pencil-wildlife.jpg"
              alt="Hand drawn realistic wildlife pencil artwork"
              className="w-full h-full object-cover brightness-95 hover:scale-105 transition-transform duration-700"
            />
          </div>

        </div>
      </section>

      {/* Minimal Pictures Gallery */}
      <section id="gallery" className="py-16 md:py-24 border-b hairline">
        <div className="mx-auto max-w-shell px-6 md:px-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-gold text-xs font-bold uppercase tracking-widest">MINIMAL FINE ART GALLERY</span>
            <h2 className="font-display text-3xl md:text-5xl text-white font-semibold mt-3">
              Selected Sketches & Paintings
            </h2>
            <p className="text-bone/70 text-sm mt-4 font-light">
              Explore recent pencil portraits, charcoal drawings, and oil paintings created by our Mysuru atelier artists.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {GALLERY_ITEMS.map((item) => (
              <div
                key={item.title}
                className="bg-ink-charcoal border hairline rounded-sm overflow-hidden group flex flex-col justify-between"
              >
                <div className="relative h-80 w-full overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover brightness-90 group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="font-display text-xl text-white font-semibold mb-1 group-hover:text-gold transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gold font-medium mb-3">{item.medium}</p>
                    <p className="text-xs text-bone/60 font-light">Dimensions: {item.size}</p>
                  </div>
                  
                  <a
                    href="#order"
                    className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-white hover:text-gold transition-colors"
                  >
                    <span>COMMISSION SIMILAR PIECE</span>
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Order Now Form Section */}
      <section id="order" className="py-16 md:py-20 bg-ink-charcoal">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <span className="text-gold text-xs font-bold uppercase tracking-widest">CUSTOM COMMISSIONS</span>
          <h2 className="font-display text-3xl md:text-5xl text-white font-semibold mt-3 mb-4">
            Order Your Custom Artwork
          </h2>
          <p className="text-bone/80 text-sm md:text-base font-light mb-8 max-w-xl mx-auto">
            Ready to order a custom pencil portrait, charcoal drawing, or oil painting? Fill out your inquiry below or order instantly on WhatsApp.
          </p>
          <PencilArtForm />
        </div>
      </section>

    </div>
  );
}
