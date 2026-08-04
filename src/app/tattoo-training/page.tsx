import type { Metadata } from "next";
import Link from "next/link";
import { Award, BookOpen, ShieldCheck, Wrench, CheckCircle2, ArrowRight, Sparkles, UserCheck, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { TattooTrainingForm } from "@/components/forms/TattooTrainingForm";

export const metadata: Metadata = {
  title: "Tattoo Training Course — Govt. Registered & ISO 9001:2015 Certified Institute, Mysuru",
  description:
    "First and only professional tattoo training course in Mysuru. 10-chapter certification coursework, hands-on synthetic & live skin training, and professional tattoo kit by Ink Chronicle.",
};

const CHAPTERS = [
  { num: "01", title: "History of Tattooing", desc: "Origins, cultural evolution, and modern tattoo movements across classical and contemporary styles." },
  { num: "02", title: "Drawing for Tattooists", desc: "Flash design, stencil creation, anatomy mapping, line weight, and translating art to skin curvature." },
  { num: "03", title: "Hygiene & OH&S", desc: "Cross-contamination prevention, bloodborne pathogen safety, and hospital-grade sterilization protocols." },
  { num: "04", title: "Sterilizing & Handling Equipment", desc: "Autoclave operation, single-use needle cartridge handling, barrier film setups, and biohazard disposal." },
  { num: "05", title: "Tattoo Machine Set up", desc: "Coil and rotary machine assembly, voltage tuning, needle depth calibration, and stroke adjustment." },
  { num: "06", title: "Outlining, Color & Shading Technique", desc: "Line pulling, packing solid blacks, color blending, whip shading, and smooth gray wash gradients." },
  { num: "07", title: "Tattoo Practice (Basic to Advance)", desc: "Hands-on practice starting with synthetic skin & oranges, advancing to live skin under master supervision." },
  { num: "08", title: "Client Care", desc: "Pre-tattoo consultations, pain management, aftercare instructions, and skin healing preservation." },
  { num: "09", title: "Portfolio Development", desc: "High-resolution photography, lighting, digital flash presentation, and social media branding." },
  { num: "10", title: "Tattoo Shop Management", desc: "Studio operations, licensing, client relationships, pricing strategy, and launching your own business." },
];

export default function TattooTrainingPage() {
  return (
    <div className="bg-ink-black text-bone min-h-screen pt-28 pb-20">
      
      {/* Hero Section with Cinematic Studio Video Background */}
      <section className="relative py-20 md:py-32 border-b hairline overflow-hidden min-h-[70vh] flex flex-col justify-center">
        <div className="absolute inset-0 pointer-events-none">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover scale-105"
          >
            <source src="/TATTOO_TRAINING.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Cinematic Radial Overlay for readability */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(8,8,8,0.4) 0%, rgba(8,8,8,0.9) 100%)",
          }}
        />

        <div className="mx-auto max-w-shell px-6 md:px-10 relative z-10 text-center flex flex-col items-center">
          {/* Accreditation Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/40 text-gold text-xs font-bold uppercase tracking-widest mb-6">
            <Award size={14} className="text-gold" />
            <span>GOVT. REGISTERED & ISO 9001 : 2015 CERTIFIED INSTITUTE</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-medium tracking-tight text-white max-w-4xl leading-tight">
            Tattoo Training <span className="text-gold italic font-serif">Masterclass</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base md:text-lg text-bone/80 font-light leading-relaxed">
            Ink Chronicle — The Premier Tattoo Training Institute in Mysuru. Empowering aspiring artists with hands-on atelier mastery and certified expertise.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href="#enroll">
              <Button className="bg-gold text-black font-black hover:bg-white text-xs uppercase tracking-widest px-8 py-4 shadow-xl">
                ENROLL NOW FOR COURSE
              </Button>
            </a>
            <a href="#curriculum">
              <Button variant="outline" className="text-xs uppercase tracking-widest px-8 py-4">
                VIEW 10 CHAPTERS
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Feature Highlights Grid */}
      <section className="py-12 bg-ink-charcoal border-b hairline">
        <div className="mx-auto max-w-shell px-6 md:px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 bg-ink-black border hairline rounded-sm flex flex-col gap-3">
            <ShieldCheck size={28} className="text-gold" />
            <h3 className="font-display text-lg text-white font-semibold">Govt. Registered</h3>
            <p className="text-xs text-bone/70 leading-relaxed">Official Govt. Registered Training Institute and ISO 9001 : 2015 Certified Center in Mysuru.</p>
          </div>
          <div className="p-6 bg-ink-black border hairline rounded-sm flex flex-col gap-3">
            <Wrench size={28} className="text-gold" />
            <h3 className="font-display text-lg text-white font-semibold">Professional Tattoo Kit</h3>
            <p className="text-xs text-bone/70 leading-relaxed">Receive a complete Professional Tattoo Kit upon course completion (based on course package).</p>
          </div>
          <div className="p-6 bg-ink-black border hairline rounded-sm flex flex-col gap-3">
            <UserCheck size={28} className="text-gold" />
            <h3 className="font-display text-lg text-white font-semibold">Hospital-Grade OH&S</h3>
            <p className="text-xs text-bone/70 leading-relaxed">Train in sterile environments following strict hospital-grade sanitation protocols.</p>
          </div>
          <div className="p-6 bg-ink-black border hairline rounded-sm flex flex-col gap-3">
            <BookOpen size={28} className="text-gold" />
            <h3 className="font-display text-lg text-white font-semibold">Live Skin Experience</h3>
            <p className="text-xs text-bone/70 leading-relaxed">Hands-on practice starting with synthetic skin to live willing volunteers under master guidance.</p>
          </div>
        </div>
      </section>

      {/* About The Course Section with Replaced Studio Photo 1 */}
      <section className="py-16 md:py-20 border-b hairline">
        <div className="mx-auto max-w-shell px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 flex flex-col gap-6">
            <span className="text-gold text-xs font-bold uppercase tracking-widest">ABOUT THE INSTITUTE</span>
            <h2 className="font-display text-3xl md:text-4xl text-white font-semibold leading-tight">
              Unlocking the Secrets of <span className="text-gold italic font-serif">Tattoo Education</span>
            </h2>
            <p className="text-bone/80 text-sm md:text-base leading-relaxed font-light">
              Tattoo education seems far-fetched and unreachable to the interested, with little or no direct familiarity with the field. For many years, studios and artists alike have always safe-guarded those &ldquo;so-called&rdquo; tattoo tips and secrets.
            </p>
            <p className="text-bone/80 text-sm md:text-base leading-relaxed font-light">
              It is the first and only one of its kind in Mysuru which will teach you all that you should know about Tattooing. Our unique hands-on program allows you to express your creativity and provides you with the knowledge and skills to serve as a certified tattoo artist.
            </p>
            <div className="p-4 bg-ink-charcoal border border-gold/30 rounded flex items-start gap-3">
              <Sparkles size={20} className="text-gold shrink-0 mt-1" />
              <p className="text-xs text-bone/90 leading-relaxed">
                You will gain real-world experience as you train to become a tattoo artist in Ink Chronicle, learning client relations, portfolio preparation, and studio management.
              </p>
            </div>
          </div>

          {/* Replaced Studio Image 1 */}
          <div className="lg:col-span-6 relative h-[380px] md:h-[480px] rounded-sm overflow-hidden border hairline shadow-2xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/training-studio-wall.jpeg"
              alt="Ink Chronicle Training Studio Wall & Artworks"
              className="w-full h-full object-cover brightness-95 hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </section>

      {/* 10-Chapter Curriculum Syllabus */}
      <section id="curriculum" className="py-16 md:py-24 bg-ink-charcoal border-b hairline">
        <div className="mx-auto max-w-shell px-6 md:px-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-gold text-xs font-bold uppercase tracking-widest">COMPLETE SYLLABUS</span>
            <h2 className="font-display text-3xl md:text-5xl text-white font-semibold mt-3">
              Our 10 Certification Chapters
            </h2>
            <p className="text-bone/70 text-sm mt-4 font-light">
              Comprehensive step-by-step coursework designed to take you from foundational basics to advanced studio practitioner.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CHAPTERS.map((chap) => (
              <div
                key={chap.num}
                className="p-6 md:p-8 bg-ink-black border hairline rounded-sm flex items-start gap-5 hover:border-gold/50 transition-colors group"
              >
                <span className="font-display text-3xl md:text-4xl font-bold text-gold/40 group-hover:text-gold transition-colors shrink-0">
                  {chap.num}
                </span>
                <div>
                  <h3 className="font-display text-xl text-white font-semibold mb-2 group-hover:text-gold transition-colors">
                    Chapter {parseInt(chap.num, 10)} — {chap.title}
                  </h3>
                  <p className="text-xs md:text-sm text-bone/70 font-light leading-relaxed">
                    {chap.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hands-On Process & Certification with Replaced Studio Photo 2 */}
      <section className="py-16 md:py-20 border-b hairline">
        <div className="mx-auto max-w-shell px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Replaced Studio Image 2 - Hands holding Certificate of Completion */}
          <div className="lg:col-span-6 relative h-[380px] md:h-[480px] rounded-sm overflow-hidden border hairline shadow-2xl order-2 lg:order-1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/training-certificate-hands.jpg"
              alt="Ink Chronicle Tattoo Training Certificate of Completion"
              className="w-full h-full object-cover brightness-95 hover:scale-105 transition-transform duration-700"
            />
          </div>

          <div className="lg:col-span-6 flex flex-col gap-6 order-1 lg:order-2">
            <span className="text-gold text-xs font-bold uppercase tracking-widest">HANDS-ON METHODOLOGY</span>
            <h2 className="font-display text-3xl md:text-4xl text-white font-semibold leading-tight">
              Practical Training & <span className="text-gold italic font-serif">Professional Kit</span>
            </h2>
            <p className="text-bone/80 text-sm md:text-base leading-relaxed font-light">
              The course begins teaching you how to use the machinery by tattooing oranges or synthetic skin to get a feel for the equipment before moving on to skins and then in the final class doing a moderate sized tattoo on a willing volunteer.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <CheckCircle2 size={18} className="text-gold shrink-0" />
                <span className="text-xs md:text-sm text-bone/90">Certified Tattoo Artist Certificate given by Ink Chronicle</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 size={18} className="text-gold shrink-0" />
                <span className="text-xs md:text-sm text-bone/90">Professional Tattoo Kit included (depending on course selected)</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 size={18} className="text-gold shrink-0" />
                <span className="text-xs md:text-sm text-bone/90">Hospital-grade sanitation & safety guidelines compliance</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 size={18} className="text-gold shrink-0" />
                <span className="text-xs md:text-sm text-bone/90">Guidance to launch your own tattoo business & shop management</span>
              </div>
            </div>

            {/* Terms & Conditions Notice Box */}
            <div className="p-4 bg-ink-charcoal border border-white/10 rounded flex items-start gap-3 mt-2">
              <AlertCircle size={18} className="text-gold shrink-0 mt-0.5" />
              <div className="text-xs text-bone/70 font-light space-y-1">
                <p>* Any advance paid is non refundable for discontinuing the course.</p>
                <p>* Other studio rules and regulations apply.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enrollment Section */}
      <section id="enroll" className="py-16 md:py-20 bg-ink-charcoal">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <span className="text-gold text-xs font-bold uppercase tracking-widest">START YOUR JOURNEY</span>
          <h2 className="font-display text-3xl md:text-5xl text-white font-semibold mt-3 mb-4">
            Enroll in Ink Chronicle Mysuru
          </h2>
          <p className="text-bone/80 text-sm md:text-base font-light mb-8 max-w-xl mx-auto">
            Ready to start your journey in the art world? Reserve your seat for our upcoming certified tattoo training batch in Mysuru.
          </p>

          <TattooTrainingForm />
        </div>
      </section>

    </div>
  );
}
