"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

/**
 * A recurring, ambient ink-splash accent over the hero wordmark. Deep red and
 * indigo ink converge onto the letterforms, hold briefly, then drain back to
 * silver — looping with a fixed gap between splashes. This is the one place
 * color is allowed on an otherwise strict black/white/silver site.
 *
 * How the masking works (important — do not change this structure):
 * - This component renders an absolutely-positioned CLONE of the wordmark
 *   text, matching the base wordmark's font/size/weight/spacing exactly (it
 *   inherits these via CSS `font: inherit` from its parent element).
 * - `background-clip: text` + `color: transparent` means its background
 *   image (the ink blobs) is only painted inside the letter shapes.
 * - `mix-blend-mode: multiply` blends that ink into the base text underneath.
 * - Because both layers share the same parent and `inset: 0`, they align
 *   without any manual coordinate math or ResizeObserver.
 */
export function HeroInkSplash() {
  const inkRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = inkRef.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    gsap.set(el, {
      backgroundPosition: "-140% -160%, 240% 180%, -220% 200%, 200% -180%",
      opacity: 0,
      filter: "saturate(1)",
    });

    let tl: gsap.core.Timeline;

    if (prefersReducedMotion) {
      tl = gsap.timeline({ repeat: -1, repeatDelay: 2 });
      tl.set(el, { backgroundPosition: "20% 38%, 64% 52%, 10% 66%, 80% 34%", opacity: 0 })
        .to(el, { opacity: 0.45, filter: "saturate(0.6)", duration: 0.4 })
        .to(el, { opacity: 0, filter: "saturate(0)", duration: 0.6 });
    } else {
      tl = gsap.timeline({ repeat: -1, repeatDelay: 2 });
      tl.set(el, {
        backgroundPosition: "-140% -160%, 240% 180%, -220% 200%, 200% -180%",
        opacity: 0,
        filter: "saturate(1)",
      })
        .to(el, {
          backgroundPosition: "18% 42%, 66% 58%, 6% 72%, 84% 28%",
          opacity: 1,
          duration: 0.55,
          ease: "power4.in",
        })
        .to(el, {
          backgroundPosition: "20% 38%, 64% 52%, 10% 66%, 80% 34%",
          duration: 0.35,
          ease: "power2.out",
        })
        .to({}, { duration: 3.0 })
        .to(el, {
          filter: "saturate(0)",
          opacity: 0,
          duration: 1.4,
          ease: "power2.inOut",
        });
    }

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <span
      ref={inkRef}
      aria-hidden="true"
      className="ink-splash-layer absolute inset-0 pointer-events-none select-none"
    >
      Ink <span className="italic">Chronicle</span>
    </span>
  );
}
