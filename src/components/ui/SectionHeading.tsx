interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      data-reveal
      className={`flex flex-col gap-5 ${align === "center" ? "items-center text-center" : "items-start text-left"}`}
    >
      <div className="flex items-center gap-4">
        {align === "left" && <span className="h-px w-10 bg-gold/60" aria-hidden />}
        <span className="text-[11px] uppercase tracking-widest3 text-gold-muted">
          {eyebrow}
        </span>
      </div>
      <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.05] text-bone max-w-2xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-lg text-sm md:text-base text-bone/60 leading-relaxed font-light">
          {description}
        </p>
      )}
    </div>
  );
}
