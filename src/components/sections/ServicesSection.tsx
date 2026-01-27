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
    <section id="services" className="relative bg-[var(--bg-secondary)] py-28 md:py-44 overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(201,149,106,0.05) 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-[1200px] mx-auto px-6">
        <div
          ref={cardsRef}
          className={`scroll-reveal ${cardsVisible ? "visible" : ""}`}
        >
          <SectionLabel index="03" />

          <h2 className="text-[36px] md:text-[48px] font-bold leading-[1.25] tracking-[-1px] text-white mb-6">
            QANDA AX가 제공하는 서비스
          </h2>

          <p className="text-lg md:text-xl text-white/50 max-w-[650px] mb-20 leading-relaxed">
            AI Literacy 교육부터 AI Agent 개발까지, 조직의 AI 전환을 처음부터
            끝까지 함께합니다.
          </p>

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-28">
            {SERVICES.map((service, i) => {
              const Icon = iconMap[service.icon];
              return (
                <div
                  key={i}
                  className="glass-card-glow p-8 md:p-12 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[rgba(201,149,106,0.15)] to-[rgba(212,184,150,0.08)] backdrop-blur-sm flex items-center justify-center mb-6 group-hover:from-[rgba(201,149,106,0.25)] group-hover:to-[rgba(212,184,150,0.12)] transition-all duration-300">
                    <Icon className="w-6 h-6 text-[var(--accent-light)]" />
                  </div>
                  <h3 className="text-[24px] md:text-[28px] font-bold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-[17px] text-white/55 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="border-t border-[rgba(255,255,255,0.05)] pt-6 mb-8">
                    <ul className="space-y-3">
                      {service.features.map((feature, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-3 text-base text-white/50"
                        >
                          <span className="text-[var(--secondary)] mt-0.5 text-sm">
                            ▸
                          </span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a
                    href="#cta"
                    className="inline-flex items-center gap-2 text-base font-semibold text-[var(--accent-light)] hover:text-[var(--secondary)] hover:gap-3 transition-all duration-300"
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
            <span className="text-sm font-semibold tracking-[1.5px] uppercase gradient-text">
              AI Agent Efficiency Framework
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {BERSIN_STAGES.map((stage, i) => (
              <div
                key={i}
                className="relative glass-card-glow p-6 md:p-8"
                style={{
                  background: `linear-gradient(135deg, rgba(201, 149, 106, ${0.06 + i * 0.04}), rgba(212, 184, 150, ${0.02 + i * 0.02}))`,
                  boxShadow:
                    i === 3
                      ? "0 0 30px rgba(201,149,106,0.12), inset 0 1px 0 rgba(255,255,255,0.06)"
                      : "inset 0 1px 0 rgba(255,255,255,0.03)",
                }}
              >
                {/* Arrow connector (hidden on mobile) */}
                {i < 3 && (
                  <div className="hidden lg:block absolute -right-2.5 top-1/2 -translate-y-1/2 z-10 text-[var(--accent-primary)] opacity-30 text-lg">
                    →
                  </div>
                )}
                <span className="text-[13px] font-semibold text-white/40 tracking-wider">
                  Stage {stage.stage}
                </span>
                <h4 className="text-[20px] md:text-[22px] font-bold text-white mt-2 mb-3">
                  {stage.name}
                </h4>
                <div className="text-[28px] md:text-[36px] font-extrabold gradient-text mb-2">
                  {stage.efficiency}
                </div>
                <p className="text-sm text-white/40">{stage.description}</p>
              </div>
            ))}
          </div>

          <p className="text-[13px] text-white/20 italic mt-6">
            Source: Josh Bersin Company, Evolving Job Redesign, 2025
          </p>
        </div>
      </div>
    </section>
  );
}
