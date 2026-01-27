"use client";

import { GraduationCap, Bot, ArrowRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { SERVICES, BERSIN_STAGES } from "@/lib/constants";

const iconMap = { GraduationCap, Bot } as const;

export function ServicesSection() {
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollReveal();
  const { ref: frameworkRef, isVisible: frameworkVisible } = useScrollReveal();

  return (
    <section id="services" className="bg-[var(--bg-secondary)] py-20 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6">
        <div
          ref={cardsRef}
          className={`scroll-reveal ${cardsVisible ? "visible" : ""}`}
        >
          <SectionLabel index="03" />

          <h2 className="text-[36px] md:text-[48px] font-bold leading-[1.25] tracking-[-1px] text-white mb-5">
            QANDA AX가 제공하는 서비스
          </h2>

          <p className="text-lg md:text-xl text-white/60 max-w-[650px] mb-16 leading-relaxed">
            AI Literacy 교육부터 AI Agent 개발까지, 조직의 AI 전환을 처음부터
            끝까지 함께합니다.
          </p>

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {SERVICES.map((service, i) => {
              const Icon = iconMap[service.icon];
              return (
                <div
                  key={i}
                  className="bg-[var(--glass-subtle)] border border-[var(--border-subtle)] rounded-2xl p-8 md:p-12 transition-[border-color,box-shadow] duration-300 hover:border-[var(--border-accent)] hover:shadow-[0_0_40px_rgba(124,77,255,0.08)]"
                >
                  <div className="w-12 h-12 rounded-xl bg-[rgba(124,77,255,0.12)] flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-[var(--accent-primary)]" />
                  </div>
                  <h3 className="text-[24px] md:text-[28px] font-bold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-[17px] text-white/70 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="border-t border-[var(--border-subtle)] pt-6 mb-8">
                    <ul className="space-y-3">
                      {service.features.map((feature, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-3 text-base text-white/60"
                        >
                          <span className="text-[var(--accent-primary)] mt-0.5">
                            ·
                          </span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a
                    href="#cta"
                    className="inline-flex items-center gap-2 text-base font-semibold text-[var(--accent-primary)] hover:gap-3 transition-[gap,color] duration-[0.25s]"
                  >
                    {service.ctaText}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>

        {/* Josh Bersin Framework */}
        <div
          ref={frameworkRef}
          className={`scroll-reveal ${frameworkVisible ? "visible" : ""}`}
        >
          <div className="mb-8">
            <span className="text-sm font-semibold tracking-[1.5px] uppercase text-[var(--accent-primary)]">
              AI Agent Efficiency Framework
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {BERSIN_STAGES.map((stage, i) => (
              <div
                key={i}
                className="relative rounded-2xl p-6 md:p-8 border border-[var(--border-subtle)]"
                style={{
                  background: `rgba(124, 77, 255, ${0.06 + i * 0.05})`,
                  boxShadow:
                    i === 3
                      ? "0 0 20px rgba(124,77,255,0.15)"
                      : "none",
                }}
              >
                {/* Arrow connector (hidden on mobile) */}
                {i < 3 && (
                  <div className="hidden lg:block absolute -right-2.5 top-1/2 -translate-y-1/2 z-10 text-white/15 text-lg">
                    →
                  </div>
                )}
                <span className="text-[13px] font-semibold text-white/50 tracking-wider">
                  Stage {stage.stage}
                </span>
                <h4 className="text-[20px] md:text-[22px] font-bold text-white mt-2 mb-3">
                  {stage.name}
                </h4>
                <div className="text-[28px] md:text-[36px] font-extrabold text-[var(--accent-primary)] mb-2">
                  {stage.efficiency}
                </div>
                <p className="text-sm text-white/50">{stage.description}</p>
              </div>
            ))}
          </div>

          <p className="text-[13px] text-white/30 italic mt-6">
            Source: Josh Bersin Company, Evolving Job Redesign, 2025
          </p>
        </div>
      </div>
    </section>
  );
}
