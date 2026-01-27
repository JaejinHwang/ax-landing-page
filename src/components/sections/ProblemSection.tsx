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
    <section id="problem" className="bg-[var(--bg-primary)] py-20 md:py-32">
      <div
        ref={ref}
        className={`max-w-[1200px] mx-auto px-6 scroll-reveal ${
          isVisible ? "visible" : ""
        }`}
      >
        <SectionLabel index="02" />

        <h2 className="text-[36px] md:text-[48px] font-bold leading-[1.25] tracking-[-1px] text-white mb-5">
          AI 시대,
          <br />
          조직은 준비되어 있습니까?
        </h2>

        <p className="text-lg md:text-xl text-white/60 max-w-[600px] mb-16 leading-relaxed">
          기업의 90%가 AI 도입을 계획하지만, 실제로 성과를 내는 조직은 10%에
          불과합니다.
        </p>

        {/* Pain Point Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {PAIN_POINTS.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <div
                key={i}
                className="bg-[var(--glass-subtle)] border border-[var(--border-subtle)] rounded-2xl p-8 md:p-10"
                style={{ transitionDelay: `${0.15 * (i + 1)}s` }}
              >
                <Icon className="w-12 h-12 text-[var(--accent-primary)] mb-6" />
                <h3 className="text-xl font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-base text-white/60 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Statistics Bar */}
        <div className="bg-[var(--accent-subtle)] border border-[rgba(124,77,255,0.12)] rounded-2xl p-10 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
            {STATS.map((stat, i) => (
              <div key={i} className="text-center">
                <CountUpNumber
                  value={stat.value}
                  suffix={stat.suffix}
                  className="text-[48px] md:text-[56px] font-extrabold text-[var(--accent-primary)]"
                />
                <p className="text-[15px] text-white/60 mt-2 leading-snug">
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
