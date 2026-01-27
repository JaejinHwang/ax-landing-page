"use client";

import { Compass, BookOpen, RefreshCcw } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { CountUpNumber } from "@/components/ui/CountUpNumber";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { PAIN_POINTS, STATS } from "@/lib/constants";

const iconMap = {
  Compass,
  BookOpen,
  RefreshCcw,
} as const;

export function ProblemSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="problem" className="relative bg-[var(--bg-primary)] py-28 md:py-44">
      {/* Subtle mesh grid */}
      <div className="absolute inset-0 mesh-grid opacity-20 pointer-events-none" />

      <div
        ref={ref}
        className={`relative max-w-[1200px] mx-auto px-6 scroll-reveal ${
          isVisible ? "visible" : ""
        }`}
      >
        <SectionLabel index="02" />

        <h2 className="text-[36px] md:text-[48px] font-bold leading-[1.25] tracking-[-1px] text-white mb-6">
          AI 시대,
          <br />
          조직은 준비되어 있습니까?
        </h2>

        <p className="text-lg md:text-xl text-white/50 max-w-[600px] mb-20 leading-relaxed">
          기업의 90%가 AI 도입을 계획하지만, 실제로 성과를 내는 조직은 10%에
          불과합니다.
        </p>

        {/* Pain Point Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {PAIN_POINTS.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <div
                key={i}
                className="glass-card-glow p-8 md:p-10 group"
                style={{ transitionDelay: `${0.15 * (i + 1)}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-[rgba(201,149,106,0.1)] backdrop-blur-sm flex items-center justify-center mb-6 group-hover:bg-[rgba(201,149,106,0.15)] transition-colors duration-300">
                  <Icon className="w-6 h-6 text-[var(--accent-light)]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-base text-white/50 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Statistics Bar */}
        <div className="relative glass-card-glow p-10 md:p-12 !border-[rgba(201,149,106,0.12)]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
            {STATS.map((stat, i) => (
              <div key={i} className="text-center relative">
                {i > 0 && (
                  <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-12 bg-gradient-to-b from-transparent via-[rgba(201,149,106,0.2)] to-transparent" />
                )}
                <CountUpNumber
                  value={stat.value}
                  suffix={stat.suffix}
                  className="text-[48px] md:text-[56px] font-extrabold gradient-text"
                />
                <p className="text-[15px] text-white/50 mt-2 leading-snug">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
