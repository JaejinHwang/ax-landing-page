"use client";

import { SectionLabel } from "@/components/ui/SectionLabel";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { PROCESS_STEPS } from "@/lib/constants";

export function ProcessSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="process" className="bg-[var(--bg-secondary)] py-20 md:py-32">
      <div
        ref={ref}
        className={`max-w-[1200px] mx-auto px-6 scroll-reveal ${
          isVisible ? "visible" : ""
        }`}
      >
        <SectionLabel index="05" />

        <h2 className="text-[36px] md:text-[48px] font-bold leading-[1.25] tracking-[-1px] text-white mb-5">
          도입 프로세스
        </h2>

        <p className="text-lg md:text-xl text-white/60 max-w-[600px] mb-16 leading-relaxed">
          체계적인 4단계 프로세스로 AI 전환을 안전하게 이끌어갑니다.
        </p>

        {/* Desktop: Horizontal */}
        <div className="hidden md:grid grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step, i) => (
            <div key={i} className="relative group">
              {/* Arrow */}
              {i < 3 && (
                <div className="absolute -right-3.5 top-1/2 -translate-y-1/2 z-10 text-white/15 text-lg">
                  →
                </div>
              )}

              <div className="bg-[var(--glass-subtle)] border border-[var(--border-subtle)] rounded-2xl p-7 h-full transition-[border-color,box-shadow] duration-300 hover:border-t-2 hover:border-t-[var(--accent-primary)] hover:shadow-[0_-4px_20px_rgba(124,77,255,0.15)]">
                <span className="text-[13px] font-bold tracking-[2px] text-[var(--accent-primary)]">
                  STEP {step.step}
                </span>
                <h3 className="text-2xl font-bold text-white mt-3 mb-5">
                  {step.title}
                </h3>
                <ul className="space-y-2 mb-6">
                  {step.items.map((item, j) => (
                    <li
                      key={j}
                      className="text-[15px] text-white/60 leading-relaxed"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <span className="inline-block text-[13px] px-3.5 py-1.5 bg-[var(--accent-subtle)] rounded-full text-[var(--accent-light)] font-medium">
                  {step.duration}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: Vertical timeline */}
        <div className="md:hidden space-y-6">
          {PROCESS_STEPS.map((step, i) => (
            <div key={i} className="flex gap-4">
              {/* Timeline line */}
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-[var(--accent-primary)] shrink-0 mt-1" />
                {i < 3 && (
                  <div className="w-0.5 flex-1 bg-[rgba(124,77,255,0.2)]" />
                )}
              </div>

              <div className="bg-[var(--glass-subtle)] border border-[var(--border-subtle)] rounded-xl p-6 flex-1 mb-2">
                <span className="text-[13px] font-bold tracking-[2px] text-[var(--accent-primary)]">
                  STEP {step.step}
                </span>
                <h3 className="text-xl font-bold text-white mt-2 mb-3">
                  {step.title}
                </h3>
                <ul className="space-y-1.5 mb-4">
                  {step.items.map((item, j) => (
                    <li key={j} className="text-sm text-white/60">
                      {item}
                    </li>
                  ))}
                </ul>
                <span className="inline-block text-xs px-3 py-1 bg-[var(--accent-subtle)] rounded-full text-[var(--accent-light)] font-medium">
                  {step.duration}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
