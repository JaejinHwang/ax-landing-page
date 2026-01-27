"use client";

import { SectionLabel } from "@/components/ui/SectionLabel";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { PROCESS_STEPS } from "@/lib/constants";

export function ProcessSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="process" className="relative bg-[var(--bg-secondary)] py-28 md:py-44 overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(201,149,106,0.04) 0%, transparent 60%)",
        }}
      />

      <div
        ref={ref}
        className={`relative max-w-[1200px] mx-auto px-6 scroll-reveal ${
          isVisible ? "visible" : ""
        }`}
      >
        <SectionLabel index="05" />

        <h2 className="text-[36px] md:text-[48px] font-bold leading-[1.25] tracking-[-1px] text-white mb-6">
          도입 프로세스
        </h2>

        <p className="text-lg md:text-xl text-white/50 max-w-[600px] mb-20 leading-relaxed">
          체계적인 4단계 프로세스로 AI 전환을 안전하게 이끌어갑니다.
        </p>

        {/* Desktop: Horizontal */}
        <div className="hidden md:grid grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step, i) => (
            <div key={i} className="relative group">
              {/* Arrow */}
              {i < 3 && (
                <div className="absolute -right-3.5 top-1/2 -translate-y-1/2 z-10 text-[var(--accent-primary)] opacity-30 text-lg">
                  →
                </div>
              )}

              <div className="glass-card-glow p-7 h-full group-hover:!border-t-[rgba(201,149,106,0.4)] group-hover:shadow-[0_-4px_30px_rgba(201,149,106,0.12)]">
                <span className="text-[13px] font-bold tracking-[2px] gradient-text">
                  STEP {step.step}
                </span>
                <h3 className="text-2xl font-bold text-white mt-3 mb-5">
                  {step.title}
                </h3>
                <ul className="space-y-2 mb-6">
                  {step.items.map((item, j) => (
                    <li
                      key={j}
                      className="text-[15px] text-white/50 leading-relaxed"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <span className="inline-block text-[13px] px-3.5 py-1.5 bg-gradient-to-r from-[rgba(201,149,106,0.12)] to-[rgba(212,184,150,0.06)] backdrop-blur-sm rounded-full text-[var(--accent-light)] font-medium border border-[rgba(201,149,106,0.1)]">
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
                <div className="w-3 h-3 rounded-full bg-[var(--accent-primary)] shrink-0 mt-1 shadow-[0_0_8px_rgba(201,149,106,0.4)]" />
                {i < 3 && (
                  <div className="w-0.5 flex-1 bg-gradient-to-b from-[rgba(201,149,106,0.3)] to-[rgba(212,184,150,0.1)]" />
                )}
              </div>

              <div className="glass-card-glow p-6 flex-1 mb-2">
                <span className="text-[13px] font-bold tracking-[2px] gradient-text">
                  STEP {step.step}
                </span>
                <h3 className="text-xl font-bold text-white mt-2 mb-3">
                  {step.title}
                </h3>
                <ul className="space-y-1.5 mb-4">
                  {step.items.map((item, j) => (
                    <li key={j} className="text-sm text-white/50">
                      {item}
                    </li>
                  ))}
                </ul>
                <span className="inline-block text-xs px-3 py-1 bg-gradient-to-r from-[rgba(201,149,106,0.12)] to-[rgba(212,184,150,0.06)] rounded-full text-[var(--accent-light)] font-medium border border-[rgba(201,149,106,0.1)]">
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
