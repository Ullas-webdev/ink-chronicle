import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <span className="text-[11px] uppercase tracking-widest3 text-gold-muted mb-6">
        404
      </span>
      <h1 className="font-display text-5xl md:text-6xl text-bone mb-6">
        This page left no mark.
      </h1>
      <p className="text-bone/60 font-light mb-10 max-w-sm">
        The page you&apos;re looking for doesn&apos;t exist, or has moved.
      </p>
      <Link
        href="/"
        className="text-xs uppercase tracking-widest2 border border-gold/50 text-bone px-8 py-4 hover:border-gold hover:text-gold transition-all duration-300"
      >
        Return Home
      </Link>
    </section>
  );
}
