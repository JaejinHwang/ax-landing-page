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
      className={`inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-[3px] uppercase mb-6 ${
        dark ? "text-[var(--accent-light)]" : "text-[var(--accent-primary)]"
      }`}
    >
      <span
        className={`inline-block w-8 h-px ${
          dark
            ? "bg-gradient-to-r from-[var(--accent-primary)] to-transparent"
            : "bg-gradient-to-r from-[var(--accent-primary)] to-transparent"
        }`}
      />
      {index}
    </span>
  );
}
