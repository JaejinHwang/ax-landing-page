"use client";

import Image from "next/image";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { CountUpNumber } from "@/components/ui/CountUpNumber";
import { Button } from "@/components/ui/Button";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { TRUST_NUMBERS, MILESTONES, PARTNERS } from "@/lib/constants";

export function TrustSection() {
  const { ref: numbersRef, isVisible: numbersVisible } = useScrollReveal();
  const { ref: timelineRef, isVisible: timelineVisible } = useScrollReveal();

  return (
    <section id="trust" className="relative bg-[var(--bg-light)] py-28 md:py-44 overflow-hidden">
      {/* Light theme background decoration */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(201,149,106,0.05) 0%, transparent 60%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(212,184,150,0.04) 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div
          ref={numbersRef}
          className={`scroll-reveal ${numbersVisible ? "visible" : ""}`}
        >
          <SectionLabel index="06" dark={false} />

          <h2 className="text-[36px] md:text-[48px] font-bold leading-[1.25] tracking-[-1px] text-[var(--text-dark-primary)] mb-6">
            QANDA가 걸어온 길
          </h2>

          <p className="text-lg md:text-xl text-[var(--text-dark-secondary)] max-w-[550px] mb-20 leading-relaxed">
            1억 명 이상의 사용자와 함께 만든 글로벌 AI 리더십
          </p>

          {/* Key Numbers */}
          <div className="mb-6">
            <span className="text-sm font-semibold tracking-[1.5px] uppercase text-[var(--accent-primary)]">
              Key Numbers
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24">
            {TRUST_NUMBERS.map((item, i) => (
              <div
                key={i}
                className="bg-white/70 backdrop-blur-xl rounded-2xl p-8 shadow-[0_4px_24px_rgba(201,149,106,0.06),0_1px_2px_rgba(0,0,0,0.04)] text-center border border-[rgba(201,149,106,0.06)] hover:shadow-[0_8px_32px_rgba(201,149,106,0.1)] hover:border-[rgba(201,149,106,0.12)] transition-all duration-300"
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

          <div className="relative pl-8 mb-24">
            {/* Vertical line */}
            <div className="absolute left-[5px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-[rgba(201,149,106,0.3)] via-[rgba(212,184,150,0.15)] to-[rgba(201,149,106,0.1)]" />

            <div className="space-y-10">
              {MILESTONES.map((milestone, i) => (
                <div key={i} className="relative">
                  {/* Dot with glow */}
                  <div className="absolute -left-8 top-1.5 w-[10px] h-[10px] rounded-full bg-[var(--accent-primary)] shadow-[0_0_8px_rgba(201,149,106,0.3)]" />

                  <span className="text-2xl font-bold text-[var(--text-dark-primary)]">
                    {milestone.year}
                  </span>
                  <div className="mt-2 space-y-1.5">
                    {milestone.events.map((event, j) => (
                      <p
                        key={j}
                        className="text-[17px] text-[var(--text-dark-secondary)] leading-relaxed"
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

          <div className="flex flex-wrap items-center gap-10 mb-20">
            {PARTNERS.map((partner) => (
              <Image
                key={partner.name}
                src={partner.logo}
                alt={partner.name}
                width={160}
                height={partner.sectionHeight}
                className="w-auto opacity-30 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                style={{ height: partner.sectionHeight }}
              />
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
