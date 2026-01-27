"use client";

import { useState } from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { WHY_AX } from "@/lib/constants";

export function WhyAxSection() {
  const { ref, isVisible } = useScrollReveal();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="why-ax" className="relative bg-[var(--bg-primary)] py-28 md:py-44 overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(212,184,150,0.04) 0%, transparent 60%)",
        }}
      />

      <div
        ref={ref}
        className={`relative max-w-[1200px] mx-auto px-6 scroll-reveal ${
          isVisible ? "visible" : ""
        }`}
      >
        <SectionLabel index="04" />

        <h2 className="text-[36px] md:text-[48px] font-bold leading-[1.25] tracking-[-1px] text-white mb-20">
          왜 <span className="gradient-text">QANDA AX</span>인가
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {WHY_AX.map((item, i) => (
            <div
              key={i}
              className="relative glass-card-glow p-8 md:p-10 cursor-default"
              style={{
                opacity:
                  hoveredIndex !== null && hoveredIndex !== i ? 0.45 : 1,
                transform:
                  hoveredIndex === i ? "translateY(-4px)" : "translateY(0)",
                boxShadow:
                  hoveredIndex === i
                    ? "0 12px 40px rgba(0,0,0,0.4), 0 0 30px rgba(201,149,106,0.1)"
                    : "none",
                borderColor:
                  hoveredIndex === i
                    ? "rgba(201,149,106,0.2)"
                    : undefined,
              }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Gradient accent line top */}
              <div className="absolute top-0 left-8 w-[60px] h-[2px] rounded-b-full bg-gradient-to-r from-[var(--accent-primary)] via-[var(--secondary)] to-transparent opacity-60" />

              <span className="inline-block font-mono text-sm font-semibold gradient-text tracking-[1px] mb-4">
                {item.number}
              </span>

              <h3 className="text-2xl font-bold text-white mb-5 whitespace-pre-line leading-tight">
                {item.title}
              </h3>

              {item.points.length > 0 && (
                <ul className="space-y-2.5">
                  {item.points.map((point, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-3 text-base text-white/50 leading-relaxed"
                    >
                      <span className="text-[var(--secondary)] mt-0.5 text-sm">
                        ▸
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              )}

              {"stats" in item && item.stats && (
                <div className="space-y-4">
                  {item.stats.map((stat, j) => (
                    <div key={j}>
                      <span className="text-[28px] md:text-[32px] font-extrabold text-white">
                        {stat.value.replace("+", "")}
                        <span className="gradient-text">+</span>
                      </span>
                      <span className="text-base text-white/50 ml-3">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
