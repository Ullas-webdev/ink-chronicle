interface MarqueeProps {
  items: string[];
}

/** Infinite horizontal ticker — duplicated content for a seamless loop. */
export function Marquee({ items }: MarqueeProps) {
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y hairline py-6" aria-hidden={false}>
      <div className="flex w-max animate-marquee gap-16">
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="text-sm md:text-base uppercase tracking-widest2 text-bone/40 shrink-0"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
