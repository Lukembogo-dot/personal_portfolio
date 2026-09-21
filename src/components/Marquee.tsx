type MarqueeProps = {
  items: string[];
  rotate?: number;
};

export default function Marquee({ items, rotate = -2 }: MarqueeProps) {
  const repeatedItems = [...items, ...items];

  return (
    <div
      className="marquee-wrap overflow-hidden border-y border-[var(--line)] py-3"
      style={{ transform: `rotate(${rotate}deg)` }}
      aria-label={items.join(", ")}
    >
      <div className="marquee-track flex w-max items-center whitespace-nowrap">
        {repeatedItems.map((item, index) => (
          <span key={`${item}-${index}`} className="flex items-center">
            <span className="px-5 font-[family-name:var(--font-display)] text-xs tracking-[0.18em] text-[var(--accent)]">
              {item}
            </span>
            <span className="text-[var(--fg-dim)]" aria-hidden="true">
              /
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
