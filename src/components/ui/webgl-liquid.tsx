"use client";

/**
 * WebGLLiquid — Ink Chronicle hero background
 *
 * A raw WebGL2 fragment-shader that renders slow, viscous "ink in water"
 * using simplex-style zero-centered noise flow fields. No Three.js dependency.
 *
 * Brand palette (black / charcoal / silver):
 *   colorDeep      = #080808
 *   colorMid       = #2a2a2a
 *   colorHighlight = #E8E8E6
 *
 * Performance:
 *   - DPR capped at 2
 *   - IntersectionObserver pauses rAF when off-screen
 *   - prefers-reduced-motion → single static frame, no loop
 *   - WebGL context-loss handled (restores on context-restored event)
 *   - Mobile Safari: powerPreference "low-power", failIfMajorPerformanceCaveat=false
 *   - SSR-safe: all WebGL inside useEffect, no server rendering
 */

import { useEffect, useRef } from "react";
import {
  WebGLErrorBoundary,
  WebGLFallback,
} from "@/components/ui/webgl-liquid-utils/webgl-error-boundary";

// ─── Shader sources ───────────────────────────────────────────────────────────

const VERT = /* glsl */ `#version 300 es
precision highp float;
in vec2 aPos;
void main() { gl_Position = vec4(aPos, 0.0, 1.0); }
`;

// Organic liquid ink flow shader.
// Utilises zero-centered gradient noise to produce rich, high-contrast
// structures and flows that map perfectly to the luxury silver/charcoal stops.
const FRAG = /* glsl */ `#version 300 es
precision highp float;

uniform vec2  uRes;
uniform float uTime;
uniform float uFlow;    // flow strength (0–2)
uniform float uSpeed;   // time multiplier
uniform float uGrain;   // film grain intensity
uniform vec3  uDeep;    // #080808
uniform vec3  uMid;     // #2a2a2a
uniform vec3  uHigh;    // #E8E8E6

out vec4 fragColor;

// ── Zero-centered hash ─────────────────────────────────────────────────────
vec2 hash(vec2 p) {
  p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));
  return -1.0 + 2.0 * fract(sin(p) * 43758.5453123);
}

// ── 2D Gradient Noise ──────────────────────────────────────────────────────
float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  
  float a = dot(hash(i),                 f);
  float b = dot(hash(i + vec2(1.0, 0.0)), f - vec2(1.0, 0.0));
  float c = dot(hash(i + vec2(0.0, 1.0)), f - vec2(0.0, 1.0));
  float d = dot(hash(i + vec2(1.0, 1.0)), f - vec2(1.0, 1.0));
  
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}

// ── 3-Octave FBM ───────────────────────────────────────────────────────────
float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.55;
  vec2  shift = vec2(100.0);
  mat2  rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.5));
  for (int i = 0; i < 3; i++) {
    v += a * noise(p);
    p = rot * p * 2.05 + shift;
    a *= 0.48;
  }
  return v;
}

// ── Film grain ─────────────────────────────────────────────────────────────
float grain(vec2 uv, float t) {
  return fract(sin(dot(uv * 1000.0 + t * 0.07, vec2(127.1, 311.7))) * 43758.5);
}

void main() {
  vec2 uv = gl_FragCoord.xy / uRes;
  float t = uTime * uSpeed;

  // Aspect-corrected coordinate space centered at 0.5, 0.5
  vec2 p = (uv - 0.5) * vec2(uRes.x / uRes.y, 1.0) * 1.6;

  // Domain warping for organic liquid movements
  float q0 = fbm(p + vec2(0.0, t * 0.15));
  float q1 = fbm(p + vec2(q0 * uFlow, t * 0.11 + 1.2));
  
  // Final noise calculation
  float n = fbm(p + vec2(q1 * uFlow, q0 * uFlow * 0.6));

  // n is zero-centered in range ~[-0.6, 0.6]. Normalize to [0.0, 1.0] with contrast boost.
  n = n * 1.8 + 0.5;
  n = clamp(n, 0.0, 1.0);
  n = smoothstep(0.0, 1.0, n);

  // Blend three-stop palette: deep base -> mid charcoal -> bright silver
  vec3 col;
  if (n < 0.45) {
    col = mix(uDeep, uMid, n / 0.45);
  } else {
    // Bring up the silver highlight value with organic interpolation
    col = mix(uMid, uHigh, (n - 0.45) / 0.55);
  }

  // Very subtle film grain texture
  float g = grain(uv, uTime) * 2.0 - 1.0;
  col += g * uGrain;

  // Cinematic vignette
  float dist = length(uv - 0.5);
  float vig = smoothstep(0.85, 0.2, dist);
  col = mix(uDeep * 0.4, col, vig);

  fragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
}
`;

// ─── Helpers ──────────────────────────────────────────────────────────────────

function hexToRgb01(hex: string): [number, number, number] {
  const n = parseInt(hex.replace("#", ""), 16);
  return [(n >> 16 & 255) / 255, (n >> 8 & 255) / 255, (n & 255) / 255];
}

function compileShader(gl: WebGL2RenderingContext, type: number, src: string) {
  const s = gl.createShader(type)!;
  gl.shaderSource(s, src);
  gl.compileShader(s);
  if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
    throw new Error(`Shader compile error: ${gl.getShaderInfoLog(s)}`);
  }
  return s;
}

function createProgram(gl: WebGL2RenderingContext, vert: string, frag: string) {
  const vs  = compileShader(gl, gl.VERTEX_SHADER,   vert);
  const fs  = compileShader(gl, gl.FRAGMENT_SHADER, frag);
  const prg = gl.createProgram()!;
  gl.attachShader(prg, vs);
  gl.attachShader(prg, fs);
  gl.linkProgram(prg);
  if (!gl.getProgramParameter(prg, gl.LINK_STATUS)) {
    throw new Error(`Program link error: ${gl.getProgramInfoLog(prg)}`);
  }
  gl.deleteShader(vs);
  gl.deleteShader(fs);
  return prg;
}

// ─── Canvas component ─────────────────────────────────────────────────────────

interface LiquidCanvasProps {
  colorDeep?:      string;
  colorMid?:       string;
  colorHighlight?: string;
  flowStrength?:   number;
  speed?:          number;
  grain?:          number;
}

function LiquidCanvas({
  colorDeep      = "#080808",
  colorMid       = "#2a2a2a",
  colorHighlight = "#E8E8E6",
  flowStrength   = 0.9,
  speed          = 0.7,
  grain          = 0.05,
}: LiquidCanvasProps) {
  const canvasRef   = useRef<HTMLCanvasElement>(null);
  const pausedRef   = useRef(false); // IntersectionObserver control
  const rafRef      = useRef<number>(0);
  const glRef       = useRef<WebGL2RenderingContext | null>(null);
  const programRef  = useRef<WebGLProgram | null>(null);
  const startRef    = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // ── Reduced-motion check ─────────────────────────────────────────────
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // ── WebGL context ────────────────────────────────────────────────────
    let gl: WebGL2RenderingContext | null = null;
    try {
      gl = canvas.getContext("webgl2", {
        alpha:                           false,
        antialias:                       false,
        depth:                           false,
        stencil:                         false,
        powerPreference:                 "low-power",
        failIfMajorPerformanceCaveat:    false,
        preserveDrawingBuffer:           false,
      }) as WebGL2RenderingContext | null;
    } catch {
      throw new Error("WebGL2 not supported on this browser/device");
    }
    if (!gl) {
      throw new Error("WebGL2 Rendering Context failed to initialize");
    }

    glRef.current = gl;

    // ── Program setup ────────────────────────────────────────────────────
    let program: WebGLProgram;
    try {
      program = createProgram(gl, VERT, FRAG);
    } catch (e) {
      if (process.env.NODE_ENV === "development") console.warn("[WebGLLiquid]", e);
      throw e;
    }
    programRef.current = program;
    gl.useProgram(program);

    // Full-screen quad
    const buf = gl.createBuffer()!;
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, 1,1]), gl.STATIC_DRAW);
    const aPos = gl.getAttribLocation(program, "aPos");
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

    // Uniform locations
    const uRes   = gl.getUniformLocation(program, "uRes");
    const uTime  = gl.getUniformLocation(program, "uTime");
    const uFlow  = gl.getUniformLocation(program, "uFlow");
    const uSpeed = gl.getUniformLocation(program, "uSpeed");
    const uGrain = gl.getUniformLocation(program, "uGrain");
    const uDeep  = gl.getUniformLocation(program, "uDeep");
    const uMid   = gl.getUniformLocation(program, "uMid");
    const uHigh  = gl.getUniformLocation(program, "uHigh");

    // Set static uniforms
    gl.uniform1f(uFlow,  flowStrength);
    gl.uniform1f(uSpeed, speed);
    gl.uniform1f(uGrain, grain);
    gl.uniform3fv(uDeep,  hexToRgb01(colorDeep));
    gl.uniform3fv(uMid,   hexToRgb01(colorMid));
    gl.uniform3fv(uHigh,  hexToRgb01(colorHighlight));

    // ── Resize handler ───────────────────────────────────────────────────
    const resize = () => {
      if (!gl || !canvas) return;
      const dpr = Math.min(window.devicePixelRatio, 2);
      const w   = canvas.clientWidth;
      const h   = canvas.clientHeight;
      canvas.width  = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(uRes, canvas.width, canvas.height);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    // ── Render loop ──────────────────────────────────────────────────────
    startRef.current = performance.now();

    const draw = (now: number) => {
      if (!gl) return;
      const t = (now - startRef.current) * 0.001;
      gl.uniform1f(uTime, t);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    };

    if (prefersReduced) {
      draw(performance.now());
      return;
    }

    const loop = (now: number) => {
      if (!pausedRef.current) draw(now);
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);

    // ── IntersectionObserver — pause when off-screen ──────────────────
    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry) {
          pausedRef.current = !entry.isIntersecting;
        }
      },
      { threshold: 0.05 }
    );
    io.observe(canvas);

    // ── WebGL context loss / restore ─────────────────────────────────
    const handleLost = (e: Event) => {
      e.preventDefault();
      cancelAnimationFrame(rafRef.current);
    };
    const handleRestored = () => {
      rafRef.current = requestAnimationFrame(loop);
    };
    canvas.addEventListener("webglcontextlost",     handleLost);
    canvas.addEventListener("webglcontextrestored", handleRestored);

    // ── Cleanup ──────────────────────────────────────────────────────────
    return () => {
      cancelAnimationFrame(rafRef.current);
      ro.disconnect();
      io.disconnect();
      canvas.removeEventListener("webglcontextlost",     handleLost);
      canvas.removeEventListener("webglcontextrestored", handleRestored);
      if (gl) {
        gl.deleteBuffer(buf);
        gl.deleteProgram(program);
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      style={{
        position:       "absolute",
        inset:          0,
        width:          "100%",
        height:         "100%",
        display:        "block",
        pointerEvents:  "none",
      }}
    />
  );
}

// ─── Public export ────────────────────────────────────────────────────────────

export interface WebGLLiquidProps extends LiquidCanvasProps {
  className?: string;
}

export function WebGLLiquid({
  className  = "",
  ...shaderProps
}: WebGLLiquidProps) {
  const fallback = <WebGLFallback className="absolute inset-0 pointer-events-none" />;

  return (
    <WebGLErrorBoundary fallback={fallback}>
      <div
        className={className}
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
        }}
      >
        <WebGLAvailabilityGate fallback={fallback}>
          <LiquidCanvas {...shaderProps} />
        </WebGLAvailabilityGate>
      </div>
    </WebGLErrorBoundary>
  );
}

// ─── WebGL availability gate ──────────────────────────────────────────────────

function WebGLAvailabilityGate({
  children,
  fallback,
}: {
  children: React.ReactNode;
  fallback: React.ReactNode;
}) {
  // Check for WebGL2 specifically
  if (typeof window !== "undefined" && !window.WebGL2RenderingContext) {
    return <>{fallback}</>;
  }
  return <>{children}</>;
}
