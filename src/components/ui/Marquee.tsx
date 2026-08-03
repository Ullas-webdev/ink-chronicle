interface MarqueeProps {
  items: string[];
}

/** Infinite horizontal ticker with automatic continuous scroll effect */
export function Marquee({ items }: MarqueeProps) {
  // Multiply items for continuous seamless loop
  const quadrupled = [...items, ...items, ...items, ...items];

  return (
    <div
      className="relative overflow-hidden border-y hairline py-5 bg-neutral-950/90 backdrop-blur-sm z-20"
      aria-label="Studio Specialties"
    >
      {/* Side gradient fade masks for luxury depth */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-neutral-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-neutral-950 to-transparent z-10 pointer-events-none" />

      <div className="flex w-max animate-marquee gap-8 md:gap-12 items-center">
        {quadrupled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="text-xs md:text-sm uppercase tracking-widest2 shrink-0 font-medium flex items-center"
          >
            {item === "✦" ? (
              <span className="text-gold text-xs px-2 opacity-80">✦</span>
            ) : (
              <span className="text-bone/85 hover:text-gold transition-colors duration-300 font-light">
                {item}
              </span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}
