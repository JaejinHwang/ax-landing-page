"use client";

import { Button } from "@/components/ui/Button";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function CtaSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="cta"
      className="relative bg-[var(--bg-primary)] py-24 md:py-36 overflow-hidden"
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, rgba(124,77,255,0.12) 0%, transparent 60%)",
        }}
      />

      <div
        ref={ref}
        className={`relative z-10 max-w-[800px] mx-auto px-6 text-center scroll-reveal ${
          isVisible ? "visible" : ""
        }`}
      >
        <h2 className="text-[40px] md:text-[56px] font-extrabold leading-[1.2] tracking-[-1px] text-white mb-6">
          AI 전환, 지금 시작하세요
        </h2>

        <p className="text-lg md:text-xl text-white/60 mb-10 leading-relaxed">
          QANDA AX가 조직의 AI 여정을
          <br className="hidden sm:block" />
          처음부터 끝까지 함께합니다.
        </p>

        <Button
          href="mailto:contact@qanda-ax.com"
          variant="primary"
          size="large"
          className="shadow-[0_0_30px_rgba(124,77,255,0.3)] hover:shadow-[0_0_50px_rgba(124,77,255,0.5)]"
        >
          무료 상담 신청
        </Button>

        <p className="text-[15px] text-white/30 mt-6">
          contact@qanda-ax.com
        </p>
      </div>
    </section>
  );
}
