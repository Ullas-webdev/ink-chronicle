"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Filter } from "lucide-react";
import { PIERCINGS_DATA } from "@/lib/piercings-data";

const PRODUCTS = PIERCINGS_DATA;

const ITEMS_PER_PAGE = 24;

export default function PiercingsCatalogPage() {
  const [filterType, setFilterType] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("best-selling");
  const [currentPage, setCurrentPage] = useState<number>(1);

  const filteredProducts = PRODUCTS.filter((p) => {
    if (filterType === "all") return true;
    return p.type === filterType;
  });

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE) || 1;
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleFilterChange = (type: string) => {
    setFilterType(type);
    handlePageChange(1);
  };

  return (
    <div className="min-h-screen bg-ink-black text-bone pt-36 pb-24 px-4 md:px-10 font-sans selection:bg-gold selection:text-ink-black">
      
      {/* Top Navigation */}
      <div className="max-w-7xl mx-auto mb-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest2 text-gold-muted hover:text-gold transition-colors"
        >
          <ArrowLeft size={14} /> Back to Studio
        </Link>
      </div>

      {/* Main Title & Intro Description */}
      <div className="max-w-4xl mx-auto text-center mb-16 px-4">
        <span className="text-xs uppercase tracking-widest3 text-gold font-semibold mb-3 block">
          Precision & Sterile Artistry
        </span>
        <h1 className="font-display text-4xl md:text-6xl tracking-tight text-bone mb-6 uppercase">
          PIERCINGS <span className="text-gold">MENU</span>
        </h1>
        <p className="text-bone/70 text-sm md:text-base leading-relaxed mb-4 font-light">
          Ink Chronicle Studio is renowned for premium body and ear piercing. Guided by certified piercers and strict hospital-grade sterilization, discover our signature placement menu below.
        </p>

        {/* Official Studio Pricing Policy Box */}
        <div className="mt-8 p-6 bg-ink-charcoal border border-gold/30 rounded-sm text-left grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
          <div className="flex items-start gap-3">
            <span className="text-gold font-bold text-base">✦</span>
            <div>
              <h4 className="font-semibold text-bone uppercase tracking-wider mb-1">Ear Lobe Piercing (Gunshot)</h4>
              <p className="text-bone/70 leading-relaxed font-light">
                <strong>1 Side:</strong> Rs. 400 &nbsp;|&nbsp; <strong>2 Sides:</strong> Rs. 600<br />
                <span className="text-gold/80 italic">* Ear Lobe is the ONLY gunshot piercing available in studio.</span>
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-gold font-bold text-base">✦</span>
            <div>
              <h4 className="font-semibold text-bone uppercase tracking-wider mb-1">All Other Piercings (Sterile Needle)</h4>
              <p className="text-bone/70 leading-relaxed font-light">
                <strong>1 Side / Single:</strong> Rs. 800 &nbsp;|&nbsp; <strong>2 Sides / Pair:</strong> Rs. 1,400 &nbsp;|&nbsp; <strong>3 Sides / Triple:</strong> Rs. 2,200<br />
                <span className="text-gold/80 italic">* Performed exclusively with 100% single-use sterile needles.</span>
              </p>
            </div>
          </div>
        </div>

        {/* SS Steel Jewelry Included Highlight */}
        <div className="mt-4 p-3 bg-gold/10 border border-gold/40 rounded text-center text-xs font-bold text-gold uppercase tracking-wider">
          ✦ Initial SS Steel (Surgical Stainless Steel) Starter Jewelry Included With Every Session
        </div>

        <p className="text-bone/50 text-xs font-light tracking-wide mt-6">
          ✦ We pierce clients 14 years and up. Anyone 15 years or younger must have a legal guardian present.
        </p>
      </div>

      {/* Filter & Controls Bar */}
      <div className="max-w-7xl mx-auto border-t border-b hairline border-gold/20 py-4 mb-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        
        {/* Left Filter Dropdowns */}
        <div className="flex items-center gap-3 flex-wrap">
          <div className="flex items-center gap-1.5 font-semibold text-gold tracking-widest uppercase mr-2">
            <Filter size={14} /> Filter
          </div>
          
          <select
            value={filterType}
            onChange={(e) => handleFilterChange(e.target.value)}
            className="bg-ink-charcoal border border-white/10 rounded px-4 py-2.5 text-xs text-bone outline-none focus:border-gold cursor-pointer transition-colors"
          >
            <option value="all">All Product Types</option>
            <option value="ear">Ear Piercings</option>
            <option value="facial">Facial & Lip</option>
            <option value="body">Body Piercings</option>
            <option value="combo">Combo Packages</option>
            <option value="service">Jewelry Services</option>
          </select>
        </div>

        {/* Right Info & Sort */}
        <div className="flex items-center gap-6">
          <span className="text-bone/50 font-light tracking-wider">
            {filteredProducts.length} Results
          </span>

          <div className="flex items-center gap-2">
            <span className="text-bone/50">Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-ink-charcoal border border-white/10 rounded px-4 py-2.5 text-xs text-bone outline-none focus:border-gold cursor-pointer font-medium transition-colors"
            >
              <option value="best-selling">Best selling</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
        {paginatedProducts.map((product) => (
          <Link
            key={product.id}
            href={`/piercings/${product.slug}`}
            className="group flex flex-col text-center transition-all"
          >
            {/* Card Diagram Box (Warm Beige #f2eae4 with Red Line Art) */}
            <div className="relative aspect-[4/5] w-full bg-[#f2eae4] rounded-sm overflow-hidden mb-4 flex items-center justify-center p-6 border border-white/10 group-hover:border-gold transition-all">
              <PiercingDiagram type={product.diagramType} />
            </div>

            {/* Title & Price */}
            <h3 className="text-xs md:text-sm font-medium tracking-wider text-bone uppercase mb-1.5 leading-snug group-hover:text-gold transition-colors">
              {product.name}
            </h3>
            <span className="text-xs md:text-sm font-semibold text-gold">
              {product.price}
            </span>
          </Link>
        ))}
      </div>

      {/* Pagination Footer */}
      <div className="max-w-7xl mx-auto mt-20 pt-10 border-t hairline border-gold/20 flex flex-col items-center gap-4 text-xs text-bone/50">
        <div className="flex items-center gap-2">
          <button
            onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="w-9 h-9 rounded border border-white/10 flex items-center justify-center hover:bg-ink-charcoal disabled:opacity-30 disabled:hover:bg-transparent transition-colors cursor-pointer"
          >
            &lt;
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
            <button
              key={pageNum}
              onClick={() => handlePageChange(pageNum)}
              className={`w-9 h-9 rounded font-bold flex items-center justify-center transition-colors cursor-pointer ${
                currentPage === pageNum
                  ? "border border-gold bg-gold text-ink-black"
                  : "border border-white/10 text-bone hover:bg-ink-charcoal"
              }`}
            >
              {pageNum}
            </button>
          ))}

          <button
            onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className="w-9 h-9 rounded border border-white/10 flex items-center justify-center hover:bg-ink-charcoal disabled:opacity-30 disabled:hover:bg-transparent transition-colors cursor-pointer"
          >
            &gt;
          </button>
        </div>

        <p className="font-light tracking-wide text-bone/40">
          Showing {startIndex + 1} - {Math.min(startIndex + ITEMS_PER_PAGE, filteredProducts.length)} of {filteredProducts.length} products
        </p>
      </div>

    </div>
  );
}

// ─── Minimal Vector Diagrams (Restored Red Line Art on Beige Cards) ────────────────────
function PiercingDiagram({ type }: { type: string }) {
  const isCombo = type.startsWith("combo-");

  if (isCombo) {
    const parts = type.replace("combo-", "").split("-");
    const firstFocus = parts[0] || "";
    const secondFocus = parts[1] || firstFocus;
    return (
      <div className="flex items-center justify-center gap-2 w-full h-full">
        <EarVector focus={firstFocus} />
        <span className="text-xl text-neutral-400 font-light">+</span>
        <EarVector focus={secondFocus} />
      </div>
    );
  }

  if (type.startsWith("ear-")) {
    const focus = type.replace("ear-", "");
    return <EarVector focus={focus} />;
  }

  if (type === "nose") {
    return <NoseVector />;
  }

  if (type === "septum") {
    return <SeptumVector />;
  }

  if (type === "belly-button") {
    return <BellyButtonVector />;
  }

  if (type.includes("lip") || type.includes("philtrum") || type.includes("labret")) {
    return <LipVector focus={type} />;
  }

  if (type.includes("eyebrow")) {
    return <EyebrowVector focus={type} />;
  }

  if (type.includes("nipple")) {
    return <NippleVector focus={type} />;
  }

  return (
    <div className="text-center font-display text-xs text-neutral-500 font-semibold tracking-widest uppercase">
      Jewelry Removal
    </div>
  );
}

function EarVector({ focus }: { focus: string }) {
  return (
    <svg viewBox="0 0 100 140" className="w-full h-full max-h-56 stroke-red-500 fill-none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      {/* Outer Ear Contour */}
      <path d="M 35 15 C 65 15 85 30 85 65 C 85 95 70 125 45 125 C 30 125 25 110 32 95 C 38 80 48 70 48 55 C 48 35 30 30 35 15 Z" />
      {/* Inner Anti-helix */}
      <path d="M 45 32 C 65 35 70 55 65 80 C 60 95 48 105 42 100" strokeWidth="1.2" />
      {/* Inner Tragus */}
      <path d="M 35 60 C 45 60 45 75 35 75" strokeWidth="1.2" />

      {/* Focus Placement Circles */}
      {focus.includes("lobe") && (
        <circle cx="42" cy="112" r="9" stroke="#111" strokeWidth="1.5" strokeDasharray="3 3" />
      )}
      {focus.includes("helix") && !focus.includes("forward") && (
        <circle cx="76" cy="38" r="9" stroke="#111" strokeWidth="1.5" strokeDasharray="3 3" />
      )}
      {focus.includes("forward") && (
        <circle cx="40" cy="30" r="8" stroke="#111" strokeWidth="1.5" strokeDasharray="3 3" />
      )}
      {focus.includes("tragus") && (
        <circle cx="38" cy="67" r="8" stroke="#111" strokeWidth="1.5" strokeDasharray="3 3" />
      )}
      {focus.includes("conch") && (
        <circle cx="56" cy="72" r="8" stroke="#111" strokeWidth="1.5" strokeDasharray="3 3" />
      )}
      {focus.includes("rook") && (
        <circle cx="50" cy="42" r="8" stroke="#111" strokeWidth="1.5" strokeDasharray="3 3" />
      )}
      {focus.includes("flat") && (
        <circle cx="60" cy="28" r="9" stroke="#111" strokeWidth="1.5" strokeDasharray="3 3" />
      )}
      {focus.includes("daith") && (
        <circle cx="48" cy="58" r="8" stroke="#111" strokeWidth="1.5" strokeDasharray="3 3" />
      )}
    </svg>
  );
}

function LipVector({ focus }: { focus: string }) {
  return (
    <svg viewBox="0 0 140 80" className="w-full h-full max-h-40 stroke-red-500 fill-none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      {/* Upper Lip */}
      <path d="M 15 40 Q 40 25 70 32 Q 100 25 125 40 Q 70 48 15 40 Z" />
      {/* Lower Lip */}
      <path d="M 15 40 Q 70 70 125 40 Q 70 45 15 40 Z" />
      {/* Philtrum Star / Stud indicator */}
      {focus.includes("philtrum") && (
        <polygon points="70,12 72,17 77,17 73,20 75,25 70,22 65,25 67,20 63,17 68,17" fill="#f59e0b" stroke="none" />
      )}
      {focus.includes("labret") && (
        <circle cx="70" cy="62" r="3.5" fill="#f59e0b" stroke="none" />
      )}
    </svg>
  );
}

function EyebrowVector({ focus }: { focus: string }) {
  return (
    <svg viewBox="0 0 140 80" className="w-full h-full max-h-40 stroke-red-500 fill-none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      {/* Left Eyebrow */}
      <path d="M 15 25 Q 40 18 60 28" strokeWidth="2.2" />
      {/* Right Eyebrow */}
      <path d="M 80 28 Q 100 18 125 25" strokeWidth="2.2" />
      {/* Closed Eyes */}
      <path d="M 25 50 Q 38 60 50 50" strokeWidth="1.2" />
      <path d="M 90 50 Q 102 60 115 50" strokeWidth="1.2" />
      {/* Piercing Studs */}
      <circle cx="105" cy="18" r="3" fill="#f59e0b" stroke="none" />
      <circle cx="110" cy="32" r="3" fill="#f59e0b" stroke="none" />
    </svg>
  );
}

function NippleVector({ focus }: { focus: string }) {
  return (
    <div className="flex items-center justify-center gap-6 w-full h-full">
      <svg viewBox="0 0 60 60" className="w-16 h-16 stroke-red-500 fill-none" strokeWidth="1.5">
        <circle cx="30" cy="30" r="24" strokeDasharray="3 3" stroke="#e5e7eb" />
        <circle cx="30" cy="30" r="14" />
        <circle cx="18" cy="30" r="2.5" fill="#f59e0b" stroke="none" />
        <circle cx="30" cy="30" r="2.5" fill="#f59e0b" stroke="none" />
        <circle cx="42" cy="30" r="2.5" fill="#f59e0b" stroke="none" />
      </svg>
      {focus.includes("pair") && (
        <svg viewBox="0 0 60 60" className="w-16 h-16 stroke-red-500 fill-none" strokeWidth="1.5">
          <circle cx="30" cy="30" r="24" strokeDasharray="3 3" stroke="#e5e7eb" />
          <circle cx="30" cy="30" r="14" />
          <circle cx="18" cy="30" r="2.5" fill="#f59e0b" stroke="none" />
          <circle cx="30" cy="30" r="2.5" fill="#f59e0b" stroke="none" />
          <circle cx="42" cy="30" r="2.5" fill="#f59e0b" stroke="none" />
        </svg>
      )}
    </div>
  );
}

function NoseVector() {
  return (
    <svg viewBox="0 0 120 120" className="w-full h-full max-h-48 stroke-red-500 fill-none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      {/* Nose Bridge Contour */}
      <path d="M 42 20 L 42 65 C 42 85 78 85 78 65 L 78 20" />
      {/* Nostril Curves */}
      <path d="M 32 75 C 28 65 42 62 48 70" />
      <path d="M 88 75 C 92 65 78 62 72 70" />
      {/* Nostril Studs */}
      <circle cx="38" cy="68" r="3" fill="#f59e0b" stroke="none" />
      <polygon points="82,64 84,68 88,68 85,71 86,75 82,73 78,75 79,71 76,68 80,68" fill="#f59e0b" stroke="none" />
    </svg>
  );
}

function SeptumVector() {
  return (
    <svg viewBox="0 0 120 120" className="w-full h-full max-h-48 stroke-red-500 fill-none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      {/* Nose Bridge Contour */}
      <path d="M 42 20 L 42 60 C 42 80 78 80 78 60 L 78 20" />
      {/* Nostril Curves */}
      <path d="M 30 70 C 26 60 40 58 46 65" />
      <path d="M 90 70 C 94 60 80 58 74 65" />
      {/* Septum Ring */}
      <path d="M 50 72 C 50 90 70 90 70 72" stroke="#f59e0b" strokeWidth="3" fill="none" />
    </svg>
  );
}

function BellyButtonVector() {
  return (
    <svg viewBox="0 0 120 120" className="w-full h-full max-h-48 stroke-red-500 fill-none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      {/* Waist Contour */}
      <path d="M 15 35 C 45 40 75 40 105 35" />
      <path d="M 20 100 C 50 110 70 110 100 100" />
      {/* Navel Circle */}
      <circle cx="60" cy="70" r="10" stroke="#f59e0b" strokeWidth="1.8" />
      <circle cx="60" cy="70" r="4" fill="#f59e0b" stroke="none" />
      {/* Navel Ring Curved Barbell */}
      <circle cx="60" cy="52" r="3" fill="#f59e0b" stroke="none" />
      <line x1="60" y1="55" x2="60" y2="66" stroke="#f59e0b" strokeWidth="2" />
    </svg>
  );
}
