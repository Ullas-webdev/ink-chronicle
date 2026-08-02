# Ink Chronicle

A private, luxury tattoo studio experience — built with Next.js 16 (App Router),
TypeScript, Tailwind CSS v4, Framer Motion, GSAP, Lenis, Three.js, Resend, and
Cloudinary.

## Getting started

```bash
npm install
cp .env.example .env.local   # fill in Resend + Cloudinary keys
npm run dev
```

Visit `http://localhost:3000`.

## Environment variables

| Variable | Purpose |
|---|---|
| `RESEND_API_KEY` | Sends booking + enquiry emails via Resend |
| `RESEND_FROM_EMAIL` | Verified sending address |
| `STUDIO_NOTIFY_EMAIL` | Inbox that receives new leads |
| `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` | Cloudinary account for gallery/artist media |
| `CLOUDINARY_API_KEY` / `CLOUDINARY_API_SECRET` | Server-side Cloudinary operations |
| `NEXT_PUBLIC_SITE_URL` | Used for metadata, sitemap, robots.txt |

Without Cloudinary keys configured, `cldUrl()` falls back to
`/public/placeholders/*.jpg` so the UI still renders in local development —
drop your own images there, or connect Cloudinary and swap the public IDs in
`src/lib/data.ts`.

## Architecture

```
src/
  app/
    layout.tsx          Root layout: fonts, metadata, JSON-LD, providers
    template.tsx         Cross-route fade transition
    page.tsx              Homepage — composes all sections
    globals.css           Design tokens, scrollbar, focus states, reduced-motion
    sitemap.ts / robots.ts SEO
    api/
      booking/route.ts    Validates + emails booking requests (Resend)
      contact/route.ts    Floating consultation quick-enquiry endpoint
    privacy/, terms/       Legal pages
  components/
    layout/                Header, Footer, LoadingScreen, FloatingConsult,
                            SmoothScrollProvider (Lenis)
    sections/               Hero, ArtistPortfolio, StyleExplorer, Gallery,
                            Process, Testimonials, Booking
    ui/                     Button, SectionHeading, Reveal, Marquee, InkStroke
  hooks/
    useLenis.ts             Lenis smooth-scroll lifecycle
    useGsapReveal.ts        GSAP ScrollTrigger reveal utility (opt-in per section)
  lib/
    data.ts                 Studio content: artists, styles, gallery, testimonials
    cloudinary.ts           Cloudinary URL builder
    resend.ts               Email templates + send logic
    utils.ts                cn() classname merge, slug formatting
  types/index.ts            Shared domain interfaces
```

## Design system

- **Palette** — Matte Black `#090909`, Deep Charcoal `#111111`, Luxury Gold
  `#C5A46D`, Muted Gold `#9B7B4B`, Bone White `#F5F5F5`.
- **Type** — Bodoni Moda (display serif, editorial) paired with Manrope
  (utility sans, UI and body copy).
- **Signature motif** — a single continuous ink-stroke SVG (`InkStroke.tsx`)
  that draws itself once per major section transition, echoing the moment a
  needle first touches skin. Used sparingly by design.
- **Motion** — Framer Motion for in-view reveals and micro-interactions,
  Lenis for scroll physics, a restrained Three.js particle field in the hero.
  Everything respects `prefers-reduced-motion`.

## Performance notes for a 95+ Lighthouse score

- All hero/gallery imagery should be served through `next/image` + Cloudinary
  (`f_auto,q_auto`) — already wired via `cldUrl()`.
- `HeroParticles` (Three.js) is dynamically imported with `ssr: false` so it
  never blocks first paint or adds to the server bundle.
- Fonts are loaded via `next/font/google` (self-hosted, zero layout shift).
- The loading screen only shows once per session (`sessionStorage`), not on
  every route change.
- Replace the placeholder Cloudinary public IDs in `src/lib/data.ts` with your
  real, pre-optimized assets before launch, and run `npm run build` to verify
  bundle size.

## Deployment (Vercel)

1. Push to a Git repository and import into Vercel.
2. Add the environment variables above in the Vercel project settings.
3. Verify your sending domain in Resend and set `RESEND_FROM_EMAIL` to a
   verified address.
4. Deploy — `next.config.ts` already whitelists Cloudinary's image host and
   sets standard security headers.
