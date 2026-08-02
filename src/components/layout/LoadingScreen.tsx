"use client";

/**
 * LoadingScreen — Ink Chronicle
 *
 * Shows on EVERY page load (no sessionStorage gate).
 * A detailed tattoo machine buzzes and physically inks "INK CHRONICLE"
 * stroke by stroke. The machine is positioned via a linear time-tracker
 * (Framer Motion animate + onUpdate → getPointAtLength) — no CSS reading.
 *
 * Sequence:
 *   0.0s  Black, grain, vignette
 *   0.3s  Logo-mark blur-settles in
 *   1.1s  Mark shrinks/shifts up
 *   1.5s  Machine enters, starts tattooing letters left→right
 *   ~6.2s Divider + tagline fade in
 *   6.9s  Hold
 *   7.5s  0.9s fade-out → unmount
 */

import { useEffect, useState, useRef, useCallback } from "react";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
  animate as fmAnimate,
} from "framer-motion";

// ─── Phase machine ────────────────────────────────────────────────────────────
type Phase = "seal" | "shift" | "draw" | "tagline" | "hold" | "leave" | "gone";

// ─── SVG canvas ───────────────────────────────────────────────────────────────
const VW = 340;
const VH = 64;

interface Glyph {
  id: string;
  d: string;
  sw: number;   // stroke width — fills the glyph body
  t0: number;   // delay from draw-phase start (s)
  dur: number;  // stroke duration (s)
}

// Hand-authored medial-axis skeleton paths for INK CHRONICLE on a 340×64 canvas.
const GLYPHS: Glyph[] = [
  // ── I ─────────────────────────────────────
  { id:"I",  d:"M 3 11 L 13 11 M 8 11 L 8 53 M 3 53 L 13 53",           sw:3.6, t0:0.00, dur:0.32 },
  // ── N ─────────────────────────────────────
  { id:"N",  d:"M 18 53 L 18 11 L 35 53 L 35 11",                         sw:3.6, t0:0.28, dur:0.40 },
  // ── K ─────────────────────────────────────
  { id:"K",  d:"M 40 11 L 40 53 M 40 32 L 57 11 M 42 30 L 57 53",        sw:3.6, t0:0.64, dur:0.40 },
  // ── C ─────────────────────────────────────
  { id:"C",  d:"M 113 21 C 113 14 108 10 100 10 C 88 10 82 19 82 32 C 82 45 88 54 100 54 C 108 54 113 49 113 43",  sw:3.8, t0:1.02, dur:0.50 },
  // ── H ─────────────────────────────────────
  { id:"H",  d:"M 119 11 L 119 53 M 119 32 L 135 32 M 135 11 L 135 53",     sw:3.6, t0:1.48, dur:0.44 },
  // ── R ─────────────────────────────────────
  { id:"R",  d:"M 141 53 L 141 11 L 152 11 C 160 11 164 15 164 23 C 164 31 160 35 152 35 L 141 35 M 148 35 L 164 53", sw:3.6, t0:1.88, dur:0.50 },
  // ── O ─────────────────────────────────────
  { id:"O",  d:"M 196 32 C 196 19 190 10 183 10 C 176 10 170 19 170 32 C 170 45 176 54 183 54 C 190 54 196 45 196 32 Z", sw:3.8, t0:2.34, dur:0.48 },
  // ── N2 ────────────────────────────────────
  { id:"N2", d:"M 202 53 L 202 11 L 219 53 L 219 11",                    sw:3.6, t0:2.78, dur:0.40 },
  // ── I2 ────────────────────────────────────
  { id:"I2", d:"M 225 11 L 233 11 M 229 11 L 229 53 M 225 53 L 233 53",  sw:3.6, t0:3.14, dur:0.32 },
  // ── C2 ────────────────────────────────────
  { id:"C2", d:"M 268 21 C 268 14 263 10 253.5 10 C 243.5 10 239 19 239 32 C 239 45 243.5 54 253.5 54 C 263 54 268 49 268 43", sw:3.8, t0:3.42, dur:0.50 },
  // ── L ─────────────────────────────────────
  { id:"L",  d:"M 274 11 L 274 53 L 289 53",                              sw:3.6, t0:3.88, dur:0.30 },
  // ── E ─────────────────────────────────────
  { id:"E",  d:"M 308 11 L 295 11 L 295 53 L 308 53 M 295 32 L 306 32",  sw:3.6, t0:4.14, dur:0.42 },
];

const DRAW_END = 4.14 + 0.42 + 0.12; // ≈ 4.68 s

// ─── Tattoo Stencil Background Animation ─────────────────────────────────────
function TattooStencilBackground() {
  return (
    <div
      aria-hidden
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        zIndex: 0,
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Outer Sacred Geometry Tattoo Stencil Mandala */}
      <motion.svg
        width="680"
        height="680"
        viewBox="0 0 680 680"
        style={{
          position: "absolute",
          opacity: 0.08,
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
      >
        {/* Concentric dashed stencil circles */}
        <circle cx="340" cy="340" r="320" stroke="#E8E8E6" strokeWidth="0.9" strokeDasharray="4 8" fill="none" />
        <circle cx="340" cy="340" r="270" stroke="#E8E8E6" strokeWidth="0.8" fill="none" />
        <circle cx="340" cy="340" r="220" stroke="#E8E8E6" strokeWidth="0.8" strokeDasharray="2 4" fill="none" />
        <circle cx="340" cy="340" r="160" stroke="#E8E8E6" strokeWidth="0.8" fill="none" />
        
        {/* Radial compass/stencil rays */}
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
          <line
            key={deg}
            x1="340"
            y1="340"
            x2={Number((340 + 320 * Math.cos((deg * Math.PI) / 180)).toFixed(4))}
            y2={Number((340 + 320 * Math.sin((deg * Math.PI) / 180)).toFixed(4))}
            stroke="#E8E8E6"
            strokeWidth="0.7"
            strokeDasharray="3 6"
          />
        ))}

        {/* 12-petal sacred geometry mandala rose */}
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
          <circle
            key={`petal-${deg}`}
            cx={Number((340 + 100 * Math.cos((deg * Math.PI) / 180)).toFixed(4))}
            cy={Number((340 + 100 * Math.sin((deg * Math.PI) / 180)).toFixed(4))}
            r="100"
            stroke="#E8E8E6"
            strokeWidth="0.6"
            fill="none"
          />
        ))}
      </motion.svg>

      {/* Inner Counter-Rotating Sacred Hexagram Stencil */}
      <motion.svg
        width="440"
        height="440"
        viewBox="0 0 440 440"
        style={{
          position: "absolute",
          opacity: 0.1,
        }}
        animate={{ rotate: -360 }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
      >
        <polygon
          points="220,20 393,120 393,320 220,420 47,320 47,120"
          stroke="#E8E8E6"
          strokeWidth="0.8"
          fill="none"
        />
        <polygon
          points="220,420 47,120 393,120"
          stroke="#E8E8E6"
          strokeWidth="0.8"
          fill="none"
        />
        <polygon
          points="220,20 393,320 47,320"
          stroke="#E8E8E6"
          strokeWidth="0.8"
          fill="none"
        />
        <circle cx="220" cy="220" r="70" stroke="#E8E8E6" strokeWidth="0.8" strokeDasharray="2 4" fill="none" />
      </motion.svg>

      {/* Micro Floating Ink Particles */}
      {[...Array(14)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: "absolute",
            width: (i % 3) + 2,
            height: (i % 3) + 2,
            borderRadius: "50%",
            backgroundColor: i % 2 === 0 ? "#E8E8E6" : "#9A9A96",
            opacity: 0.15 + (i % 4) * 0.05,
            left: `${12 + (i * 6) % 76}%`,
            top: `${18 + (i * 11) % 64}%`,
          }}
          animate={{
            y: [-12, -45, -12],
            x: [0, i % 2 === 0 ? 18 : -18, 0],
            opacity: [0.1, 0.35, 0.1],
          }}
          transition={{
            duration: 3.2 + (i % 4),
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.25,
          }}
        />
      ))}
    </div>
  );
}

// ─── Film grain ───────────────────────────────────────────────────────────────
function GrainOverlay() {
  return (
    <svg aria-hidden style={{ position:"absolute", inset:0, width:"100%", height:"100%", opacity:0.038, pointerEvents:"none", zIndex:0 }}>
      <filter id="icg">
        <feTurbulence type="fractalNoise" baseFrequency="0.70" numOctaves="4" stitchTiles="stitch"/>
        <feColorMatrix type="saturate" values="0"/>
      </filter>
      <motion.rect width="100%" height="100%" filter="url(#icg)"
        animate={{ x:[0,2,-1,1,0], y:[0,-1,2,-1,0] }}
        transition={{ duration:0.16, repeat:Infinity, ease:"linear" }}
      />
    </svg>
  );
}

// ─── Tattoo machine SVG ───────────────────────────────────────────────────────
// Full coil-machine silhouette. Needle tip is at SVG coord (26, 110).
// The parent positions it so tip aligns with the draw point.

function TattooMachine({ buzzing }: { buzzing: boolean }) {
  return (
    <motion.svg
      width="52" height="110"
      viewBox="0 0 52 110"
      fill="none"
      aria-hidden
      style={{ display:"block", overflow:"visible" }}
      // Whole machine vibrates while buzzing
      animate={buzzing ? { x:[0,0.7,-0.7,0.5,-0.5,0], y:[0,-0.5,0.5,-0.3,0.3,0] } : { x:0, y:0 }}
      transition={buzzing ? { duration:0.07, repeat:Infinity, ease:"linear" } : { duration:0 }}
    >
      {/* Frame cap */}
      <rect x="14" y="1" width="24" height="6" rx="2" fill="#2a2a2a" stroke="#6a6a6a" strokeWidth="0.6"/>

      {/* Coil housing */}
      <rect x="9" y="6" width="34" height="28" rx="3" fill="#1e1e1e" stroke="#545454" strokeWidth="0.7"/>
      {[10,14,18,22,26,30].map(y=>(
        <line key={y} x1="11" y1={y} x2="41" y2={y} stroke="#333" strokeWidth="0.6"/>
      ))}
      {/* Coil label band */}
      <rect x="12" y="8" width="28" height="5" rx="1.5" fill="#2d2d2d" stroke="#606060" strokeWidth="0.4"/>

      {/* Side arms */}
      <rect x="7" y="9" width="4" height="22" rx="1.5" fill="#222" stroke="#545454" strokeWidth="0.5"/>
      <rect x="41" y="9" width="4" height="22" rx="1.5" fill="#222" stroke="#545454" strokeWidth="0.5"/>

      {/* Armature bar */}
      <rect x="15" y="32" width="22" height="5" rx="2" fill="#2d2d2d" stroke="#555" strokeWidth="0.5"/>
      <circle cx="26" cy="34.5" r="2.5" fill="#444" stroke="#777" strokeWidth="0.4"/>

      {/* Knurled grip */}
      <rect x="17" y="36" width="18" height="38" rx="5" fill="#242424" stroke="#505050" strokeWidth="0.7"/>
      {[41,45,49,53,57,61,65,69].map(y=>(
        <line key={y} x1="18.5" y1={y} x2="33.5" y2={y} stroke="#363636" strokeWidth="1.1"/>
      ))}
      <rect x="19" y="37" width="5" height="36" rx="2.5" fill="#2e2e2e" opacity="0.4"/>

      {/* Stem */}
      <rect x="22" y="73" width="8" height="16" rx="2" fill="#1c1c1c" stroke="#484848" strokeWidth="0.6"/>

      {/* Needle tip housing */}
      <path d="M 20 87 L 32 87 L 30 94 L 22 94 Z" fill="#292929" stroke="#606060" strokeWidth="0.5"/>

      {/* Needle — tapers to point at y=110 */}
      <path d="M 23.5 93 L 26 110 L 28.5 93 Z" fill="#c8c8c8"/>
      <line x1="26" y1="93" x2="26" y2="110" stroke="#E8E8E6" strokeWidth="0.6"/>

      {/* Power cord */}
      <path d="M 9 19 C 3 19 1 26 1 32" stroke="#383838" strokeWidth="2.5" strokeLinecap="round" fill="none"/>

      {/* Contact glow at needle tip — only when buzzing */}
      {buzzing && <>
        <motion.circle cx="26" cy="109.5" r="2.2"
          fill="#E8E8E6"
          animate={{ opacity:[0.5,1,0.5], scale:[0.8, 1.25, 0.8] }}
          transition={{ duration:0.07, repeat:Infinity, ease:"linear" }}
        />
        <motion.circle cx="26" cy="109.5" r="6"
          fill="none" stroke="#E8E8E6" strokeWidth="0.6"
          animate={{ opacity:[0,0.65,0], scale:[0.4,1.5,2.1] }}
          transition={{ duration:0.52, repeat:Infinity, ease:"easeOut" }}
        />
        <motion.ellipse cx="26" cy="109.5" rx="13" ry="4.5"
          fill="rgba(232,232,230,0.13)"
          animate={{ opacity:[0.07,0.22,0.07] }}
          transition={{ duration:0.55, repeat:Infinity, ease:"easeInOut" }}
        />
      </>}
    </motion.svg>
  );
}

// ─── Wordmark canvas ──────────────────────────────────────────────────────────

function WordmarkCanvas({ active }: { active: boolean }) {
  const svgRef  = useRef<SVGSVGElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  // Machine pixel position relative to wrapper (tip of needle = this point)
  const [machineXY, setMachineXY] = useState<{ x: number; y: number } | null>(null);
  // Ink-bleed ellipse in SVG user units
  const [bleedUV,   setBleedUV]   = useState<{ ux: number; uy: number } | null>(null);
  const [machineVisible, setMachineVisible] = useState(false);

  useEffect(() => {
    if (!active) return;

    let appeared = false;

    // Drive a linear 0 → DRAW_END timer.
    // onUpdate fires every frame with the current elapsed time t.
    // We find which glyph is active at time t and use getPointAtLength
    // to get the exact SVG coordinate of the needle tip — no CSS reading.
    const controls = fmAnimate(0, DRAW_END, {
      duration: DRAW_END,
      ease: "linear",
      onUpdate(t: number) {
        const svg  = svgRef.current;
        const wrap = wrapRef.current;
        if (!svg || !wrap) return;

        // Find the most recent glyph that has started
        let activeGlyph: Glyph | null = null;
        for (const g of GLYPHS) {
          if (g.t0 <= t) activeGlyph = g;
        }
        if (!activeGlyph) return;

        // Progress within this glyph [0, 1)
        const raw = (t - activeGlyph.t0) / activeGlyph.dur;
        const progress = Math.min(0.998, Math.max(0.001, raw));

        // Look up the matching <path> in the SVG
        const pathEl = svg.querySelector<SVGPathElement>(
          `path[data-glyph="${activeGlyph.id}"]`
        );
        if (!pathEl) return;

        const total = pathEl.getTotalLength();
        if (!total) return;

        const pt = pathEl.getPointAtLength(progress * total);

        // Convert SVG user-units → wrapper-relative pixels
        const svgRect  = svg.getBoundingClientRect();
        const wrapRect = wrap.getBoundingClientRect();
        const scaleX   = svgRect.width  / VW;
        const scaleY   = svgRect.height / VH;

        const px = pt.x * scaleX + (svgRect.left - wrapRect.left);
        const py = pt.y * scaleY + (svgRect.top  - wrapRect.top);

        if (!appeared) { setMachineVisible(true); appeared = true; }
        setMachineXY({ x: px, y: py });
        setBleedUV({ ux: pt.x, uy: pt.y });
      },
    });

    return () => { controls.stop(); };
  }, [active]);

  return (
    <div ref={wrapRef} style={{ position:"relative", userSelect:"none" }}>

      {/* ── SVG letter canvas ── */}
      <svg
        ref={svgRef}
        viewBox={`0 0 ${VW} ${VH}`}
        width="100%"
        aria-hidden
        style={{ maxWidth:"min(440px, 90vw)", height:"auto", overflow:"visible", display:"block" }}
      >
        {/* Ghost anticipation text (almost invisible) */}
        <text
          x={VW/2} y={VH*0.78} textAnchor="middle"
          fill="rgba(232,232,230,0.03)"
          fontSize="34" fontFamily="var(--font-display)"
          letterSpacing="6" fontWeight="300"
          style={{ pointerEvents:"none" }}
        >INK CHRONICLE</text>

        {/* Animated stroke letters */}
        {GLYPHS.map(g => (
          <motion.path
            key={g.id}
            data-glyph={g.id}
            d={g.d}
            stroke="#E8E8E6"
            strokeWidth={g.sw}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            initial={{ pathLength:0, opacity:0 }}
            animate={active ? { pathLength:1, opacity:1 } : { pathLength:0, opacity:0 }}
            transition={{
              pathLength: { delay:g.t0, duration:g.dur, ease:[0.4,0,0.6,1] },
              opacity:    { delay:g.t0, duration:0.01 },
            }}
          />
        ))}

        {/* Ink-bleed glow spot */}
        {bleedUV && active && (
          <motion.ellipse
            cx={bleedUV.ux} cy={bleedUV.uy}
            rx={14} ry={5.5}
            fill="rgba(232,232,230,0.09)"
            animate={{ opacity:[0.05,0.18,0.05] }}
            transition={{ duration:0.52, repeat:Infinity, ease:"easeInOut" }}
          />
        )}
      </svg>

      {/* ── Tattoo machine, needle tip pinned to machineXY ── */}
      <AnimatePresence>
        {machineVisible && machineXY && (
          <motion.div
            key="machine"
            style={{
              position: "absolute",
              // TattooMachine SVG: 52 wide × 110 tall; needle tip at (26, 110)
              // → offset left 26px, up 110px so the tip lands on machineXY
              left: machineXY.x - 26,
              top:  machineXY.y - 110,
              pointerEvents: "none",
              zIndex: 10,
            }}
            initial={{ opacity:0, y:-6 }}
            animate={{ opacity:1, y:0 }}
            exit={{ opacity:0 }}
            transition={{ duration:0.2, ease:[0.22,1,0.36,1] }}
          >
            <TattooMachine buzzing={active} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export function LoadingScreen() {
  const prefersReducedMotion = useReducedMotion();
  const [phase, setPhase]   = useState<Phase>("seal");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const isReload = Boolean(
        window.performance &&
        window.performance.getEntriesByType &&
        window.performance.getEntriesByType("navigation")[0] &&
        (window.performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming).type === "reload"
      );
      const alreadyLoaded = sessionStorage.getItem("ic_intro_shown") === "true";
      const hasHash = Boolean(window.location.hash);

      // If user intentionally refreshes, force loading screen to play
      if (!isReload && (alreadyLoaded || hasHash)) {
        setMounted(false);
        window.dispatchEvent(new CustomEvent("ic-loading-complete"));
      } else {
        setMounted(true);
      }
    }
  }, []);

  const advance = useCallback((to: Phase) => {
    setPhase(to);
    if (to === "gone") {
      setMounted(false);
      if (typeof window !== "undefined") {
        sessionStorage.setItem("ic_intro_shown", "true");
      }
    }
  }, []);

  // ── Phase clock ────────────────────────────────────────────────────────────
  useEffect(() => {
    if (!mounted || prefersReducedMotion || phase !== "seal") return;
    const t = setTimeout(() => advance("shift"), 1100);
    return () => clearTimeout(t);
  }, [phase, prefersReducedMotion, advance, mounted]);

  useEffect(() => {
    if (!mounted || phase !== "shift") return;
    const t = setTimeout(() => advance("draw"), 400);
    return () => clearTimeout(t);
  }, [phase, advance, mounted]);

  useEffect(() => {
    if (!mounted || phase !== "draw") return;
    const t = setTimeout(() => advance("tagline"), DRAW_END * 1000);
    return () => clearTimeout(t);
  }, [phase, advance, mounted]);

  useEffect(() => {
    if (!mounted || phase !== "tagline") return;
    const t = setTimeout(() => advance("hold"), 750);
    return () => clearTimeout(t);
  }, [phase, advance, mounted]);

  useEffect(() => {
    if (!mounted || phase !== "hold") return;
    const t = setTimeout(() => advance("leave"), 600);
    return () => clearTimeout(t);
  }, [phase, advance, mounted]);

  useEffect(() => {
    if (!mounted || phase !== "leave") return;
    // Dispatch custom event to coordinate sibling animations
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("ic-loading-complete"));
      sessionStorage.setItem("ic_intro_shown", "true");
    }
    const t = setTimeout(() => { advance("gone"); setMounted(false); }, 900);
    return () => clearTimeout(t);
  }, [phase, advance, mounted]);

  // Reduced-motion: short logo flash then done
  useEffect(() => {
    if (!prefersReducedMotion || phase === "gone") return;
    const t = setTimeout(() => advance("gone"), 650);
    return () => clearTimeout(t);
  }, [prefersReducedMotion, phase, advance]);

  if (!mounted) return null;

  const sealDone   = phase !== "seal";
  const drawActive = phase === "draw";
  const taglineShow = ["tagline","hold","leave"].includes(phase);
  const leaving    = phase === "leave";

  // ── Reduced-motion fallback ────────────────────────────────────────────────
  if (prefersReducedMotion) {
    return (
      <motion.div
        className="fixed inset-0 z-[100] flex items-center justify-center"
        style={{ backgroundColor:"#080808" }}
        animate={{ opacity: leaving ? 0 : 1 }}
        transition={{ duration:0.4 }}
        role="status" aria-live="polite" aria-label="Loading Ink Chronicle"
      >
        <Image src="/logo-full.png" alt="Ink Chronicle" width={240} height={160} priority style={{ opacity:0.9 }}/>
      </motion.div>
    );
  }

  // ── Full cinematic render ──────────────────────────────────────────────────
  return (
    <motion.div
      id="ic-loading"
      key="ic-loading"
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
      style={{ backgroundColor:"#080808" }}
      animate={{ opacity: leaving ? 0 : 1 }}
      transition={leaving ? { duration:0.9, ease:[0.22,1,0.36,1] } : { duration:0 }}
      role="status" aria-live="polite" aria-label="Loading Ink Chronicle"
    >
      <TattooStencilBackground />
      <GrainOverlay/>

      {/* Vignette */}
      <div aria-hidden style={{
        position:"absolute", inset:0, pointerEvents:"none", zIndex:1,
        background:
          "radial-gradient(ellipse 70% 60% at 50% 48%, rgba(232,232,230,0.04) 0%, transparent 60%), " +
          "radial-gradient(ellipse 100% 100% at 50% 50%, transparent 46%, rgba(0,0,0,0.76) 100%)",
      }}/>

      {/* Content */}
      <div style={{ position:"relative", zIndex:2, display:"flex", flexDirection:"column", alignItems:"center" }}>

        {/* Logo mark */}
        <motion.div
          initial={{ opacity:0, scale:0.80, filter:"blur(10px)" }}
          animate={{
            opacity: 1,
            scale:   sealDone ? 0.72 : 1,
            filter:  "blur(0px)",
            y:       sealDone ? -24 : 0,
          }}
          transition={{
            opacity: { duration:0.95, ease:[0.22,1,0.36,1] },
            scale:   sealDone ? { duration:0.48, ease:[0.65,0,0.35,1] } : { duration:0.95, ease:[0.22,1,0.36,1] },
            filter:  { duration:0.95, ease:[0.22,1,0.36,1] },
            y:       sealDone ? { duration:0.48, ease:[0.65,0,0.35,1] } : {},
          }}
          style={{ position:"relative", marginBottom:20, width:58 }}
        >
          <Image src="/logo-mark.png" alt="" width={347} height={624} priority
            style={{ width:"100%", height:"auto", opacity:0.93 }}/>
          {/* Seal-press flash */}
          <motion.div aria-hidden style={{
            position:"absolute", inset:0,
            background:"radial-gradient(circle at 50% 38%, rgba(232,232,230,0.42), transparent 65%)",
          }}
            initial={{ opacity:1 }}
            animate={{ opacity:0 }}
            transition={{ duration:1.8, ease:"easeOut" }}
          />
        </motion.div>

        {/* Wordmark + machine */}
        <motion.div
          initial={{ opacity:0 }}
          animate={{ opacity: sealDone ? 1 : 0 }}
          transition={{ duration:0.15 }}
        >
          <WordmarkCanvas active={drawActive}/>
        </motion.div>

        {/* Tagline */}
        <motion.div
          style={{ marginTop:20, display:"flex", alignItems:"center", gap:10 }}
          initial={{ opacity:0 }}
          animate={{ opacity: taglineShow ? 1 : 0 }}
          transition={{ duration:0.65, ease:[0.22,1,0.36,1] }}
        >
          <motion.span
            style={{ display:"block", height:1, backgroundColor:"#E8E8E6", opacity:0.28 }}
            initial={{ width:0 }}
            animate={{ width: taglineShow ? 28 : 0 }}
            transition={{ duration:0.5, ease:[0.65,0,0.35,1] }}
          />
          <span aria-hidden style={{ display:"block", width:4, height:4, backgroundColor:"#9A9A96", transform:"rotate(45deg)", opacity:0.45, flexShrink:0 }}/>
          <span style={{ fontFamily:"var(--font-body)", fontSize:"0.56rem", letterSpacing:"0.52em", textTransform:"uppercase", color:"rgba(245,245,243,0.34)", whiteSpace:"nowrap" }}>
            Tattoo · Art · Story
          </span>
          <span aria-hidden style={{ display:"block", width:4, height:4, backgroundColor:"#9A9A96", transform:"rotate(45deg)", opacity:0.45, flexShrink:0 }}/>
          <motion.span
            style={{ display:"block", height:1, backgroundColor:"#E8E8E6", opacity:0.28 }}
            initial={{ width:0 }}
            animate={{ width: taglineShow ? 28 : 0 }}
            transition={{ duration:0.5, ease:[0.65,0,0.35,1] }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
