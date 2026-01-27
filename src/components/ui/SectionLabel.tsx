"use client";

export function SectionLabel({
  index,
  dark = true,
}: {
  index: string;
  dark?: boolean;
}) {
  return (
    <span
      className={`inline-block font-mono text-xs font-medium tracking-[2px] mb-6 ${
        dark ? "text-white/30" : "text-[var(--text-dark-muted)]"
      }`}
    >
      ·{index}
    </span>
  );
}
