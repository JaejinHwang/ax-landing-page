"use client";

import { useCountUp } from "@/hooks/useCountUp";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface CountUpNumberProps {
  value: number;
  suffix?: string;
  className?: string;
  duration?: number;
}

export function CountUpNumber({
  value,
  suffix = "",
  className = "",
  duration = 1500,
}: CountUpNumberProps) {
  const { ref, isVisible } = useScrollReveal(0.3);
  const count = useCountUp(value, isVisible, duration);

  return (
    <span ref={ref} className={className}>
      {count}
      {suffix && (
        <span className="text-[0.75em] font-semibold ml-0.5 align-middle" style={{ WebkitTextFillColor: 'var(--text-dark-primary)', opacity: 0.6 }}>{suffix}</span>
      )}
    </span>
  );
}
