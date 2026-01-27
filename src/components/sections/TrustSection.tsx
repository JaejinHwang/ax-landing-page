"use client";

import { SectionLabel } from "@/components/ui/SectionLabel";
import { CountUpNumber } from "@/components/ui/CountUpNumber";
import { Button } from "@/components/ui/Button";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { TRUST_NUMBERS, MILESTONES, PARTNERS } from "@/lib/constants";

export function TrustSection() {
  const { ref: numbersRef, isVisible: numbersVisible } = useScrollReveal();
  const { ref: timelineRef, isVisible: timelineVisible } = useScrollReveal();

  return (
    <section id="trust" className="bg-[var(--bg-light)] py-20 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div
          ref={numbersRef}
          className={`scroll-reveal ${numbersVisible ? "visible" : ""}`}
        >
          <SectionLabel index="06" dark={false} />

          <h2 className="text-[36px] md:text-[48px] font-bold leading-[1.25] tracking-[-1px] text-[var(--text-dark-primary)] mb-5">
            QANDA가 걸어온 길
          </h2>

          <p className="text-lg md:text-xl text-[var(--text-dark-secondary)] max-w-[550px] mb-16 leading-relaxed">
            1억 명 이상의 사용자와 함께 만든 글로벌 AI 리더십
          </p>

          {/* Key Numbers */}
          <div className="mb-6">
            <span className="text-sm font-semibold tracking-[1.5px] uppercase text-[var(--accent-primary)]">
              Key Numbers
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
            {TRUST_NUMBERS.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 shadow-[0_2px_12px_rgba(0,0,0,0.06)] text-center"
              >
                <CountUpNumber
                  value={item.value}
                  suffix={item.suffix}
                  className="text-[40px] md:text-[48px] font-extrabold text-[var(--text-dark-primary)]"
                />
                <p className="text-sm font-medium text-[var(--accent-primary)] tracking-[0.5px] mt-1">
                  {item.label}
                </p>
                <p className="text-[15px] text-[var(--text-dark-secondary)] mt-0.5">
                  {item.sublabel}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Milestones */}
        <div
          ref={timelineRef}
          className={`scroll-reveal ${timelineVisible ? "visible" : ""}`}
        >
          <div className="mb-8">
            <span className="text-sm font-semibold tracking-[1.5px] uppercase text-[var(--accent-primary)]">
              Milestones
            </span>
          </div>

          <div className="relative pl-8 mb-20">
            {/* Vertical line */}
            <div className="absolute left-[5px] top-2 bottom-2 w-0.5 bg-[rgba(124,77,255,0.2)]" />

            <div className="space-y-10">
              {MILESTONES.map((milestone, i) => (
                <div key={i} className="relative">
                  {/* Dot */}
                  <div className="absolute -left-8 top-1.5 w-[10px] h-[10px] rounded-full bg-[var(--accent-primary)]" />

                  <span className="text-2xl font-bold text-[var(--text-dark-primary)]">
                    {milestone.year}
                  </span>
                  <div className="mt-2 space-y-1.5">
                    {milestone.events.map((event, j) => (
                      <p
                        key={j}
                        className="text-[17px] text-[#3a3a5c] leading-relaxed"
                      >
                        {event}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Partners */}
          <div className="mb-6">
            <span className="text-sm font-semibold tracking-[1.5px] uppercase text-[var(--accent-primary)]">
              Partners
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-8 mb-16">
            {PARTNERS.map((partner) => (
              <span
                key={partner}
                className="text-lg font-bold text-[var(--text-dark-primary)] opacity-40 hover:opacity-100 transition-opacity duration-300 cursor-default"
              >
                {partner}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button href="#cta" variant="primary" size="large">
              지금 상담 시작하기
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
