"use client";

import React from "react";

// ─── WebGLErrorBoundary ───────────────────────────────────────────────────────

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export class WebGLErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    // Non-fatal — silently swallow, the CSS fallback takes over
    if (process.env.NODE_ENV === "development") {
      console.warn("[WebGLErrorBoundary] WebGL render error:", error, info);
    }
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

// ─── WebGLFallback ────────────────────────────────────────────────────────────
// Pure CSS approximation of the liquid shader for browsers/devices without WebGL.
// Uses the same brand palette: #080808 base, #2a2a2a mid, #E8E8E6 silver accent.
// No canvas, no JS animation loop — only CSS keyframes.

interface FallbackProps {
  className?: string;
}

export function WebGLFallback({ className = "" }: FallbackProps) {
  return (
    <>
      <style>{`
        @keyframes ic-liquid-drift {
          0%   { transform: rotate(0deg)   scale(1.2); }
          33%  { transform: rotate(8deg)   scale(1.3); }
          66%  { transform: rotate(-5deg)  scale(1.25); }
          100% { transform: rotate(0deg)   scale(1.2); }
        }
        @keyframes ic-liquid-pulse {
          0%, 100% { opacity: 0.55; }
          50%       { opacity: 0.72; }
        }
        @media (prefers-reduced-motion: reduce) {
          .ic-liquid-drift { animation: none !important; }
          .ic-liquid-pulse { animation: none !important; }
        }
      `}</style>
      <div
        className={className}
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "#080808",
          overflow: "hidden",
        }}
      >
        {/* Base dark layer */}
        <div style={{ position: "absolute", inset: 0, backgroundColor: "#080808" }} />

        {/* Slow-rotating radial — the silver "ink" bloom */}
        <div
          className="ic-liquid-drift"
          style={{
            position: "absolute",
            inset: "-20%",
            background:
              "conic-gradient(from 0deg at 52% 48%, #080808 0%, #1a1a1a 18%, #2a2a2a 32%, #E8E8E6 42%, #2a2a2a 52%, #1a1a1a 65%, #080808 80%, #111 100%)",
            animation: "ic-liquid-drift 18s ease-in-out infinite",
            filter: "blur(48px)",
          }}
        />

        {/* Second layer — offset timing for depth */}
        <div
          className="ic-liquid-drift"
          style={{
            position: "absolute",
            inset: "-15%",
            background:
              "radial-gradient(ellipse 60% 55% at 44% 52%, #2a2a2a 0%, transparent 70%), " +
              "radial-gradient(ellipse 40% 50% at 62% 44%, rgba(232,232,230,0.18) 0%, transparent 65%)",
            animation: "ic-liquid-drift 26s ease-in-out infinite reverse",
            filter: "blur(36px)",
          }}
        />

        {/* Grain texture overlay */}
        <div
          className="ic-liquid-pulse"
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E\")",
            backgroundSize: "200px 200px",
            opacity: 0.6,
            animation: "ic-liquid-pulse 4s ease-in-out infinite",
          }}
        />

        {/* Radial vignette */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 80% 70% at 50% 50%, transparent 30%, #080808 100%)",
          }}
        />
      </div>
    </>
  );
}
