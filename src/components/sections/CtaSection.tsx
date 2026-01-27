"use client";

import { Button } from "@/components/ui/Button";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function CtaSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="cta"
      className="relative bg-[var(--bg-primary)] py-32 md:py-48 overflow-hidden"
    >
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at center, rgba(201,149,106,0.12) 0%, transparent 50%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "40%",
            left: "30%",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(212,184,150,0.05) 0%, transparent 60%)",
            animation: "glowPulse 8s ease-in-out infinite alternate",
          }}
        />
      </div>

      {/* Mesh grid */}
      <div className="absolute inset-0 mesh-grid opacity-20 pointer-events-none" />

      {/* Orbiting ring */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-[rgba(201,149,106,0.06)] pointer-events-none"
        style={{ animation: "orbitSlow 50s linear infinite" }}
      />

      <div
        ref={ref}
        className={`relative z-10 max-w-[800px] mx-auto px-6 text-center scroll-reveal ${
          isVisible ? "visible" : ""
        }`}
      >
        <h2 className="text-[40px] md:text-[56px] font-extrabold leading-[1.2] tracking-[-1px] text-white mb-8">
          AI 전환,{" "}
          <span className="gradient-text">지금 시작하세요</span>
        </h2>

        <p className="text-lg md:text-xl text-white/50 mb-12 leading-relaxed">
          QANDA AX가 조직의 AI 여정을
          <br className="hidden sm:block" />
          처음부터 끝까지 함께합니다.
        </p>

        <Button
          href="mailto:contact@qanda-ax.com"
          variant="primary"
          size="large"
          className="shadow-[0_0_40px_rgba(201,149,106,0.3)] hover:shadow-[0_0_60px_rgba(201,149,106,0.45)]"
        >
          무료 상담 신청
        </Button>

        <p className="text-[15px] text-white/20 mt-6 font-mono tracking-wide">
          contact@qanda-ax.com
        </p>
      </div>
    </section>
  );
}
