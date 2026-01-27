"use client";

import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[var(--bg-primary)]"
    >
      {/* Background glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(124,77,255,0.12) 0%, transparent 55%)",
            willChange: "transform, opacity",
            animation: "glowPulse 6s ease-in-out infinite alternate",
          }}
        />
        <div
          className="absolute top-[30%] left-[30%] w-[560px] h-[560px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(68,138,255,0.06) 0%, transparent 55%)",
            willChange: "transform, opacity",
            animation: "glowPulse 8s ease-in-out 2s infinite alternate",
          }}
        />
        <div
          className="absolute top-[60%] right-[25%] w-[450px] h-[450px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(0,188,212,0.05) 0%, transparent 55%)",
            willChange: "transform, opacity",
            animation: "glowPulse 7s ease-in-out 1s infinite alternate",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 text-center">
        <div className="animate-[fadeIn_0.5s_ease-out_0.3s_both]">
          <SectionLabel index="01" />
        </div>

        <h1 className="text-[40px] md:text-[64px] font-extrabold leading-[1.15] tracking-[-1.5px] text-white mb-6 animate-[fadeIn_0.8s_ease-out_0.5s_both]">
          AI로 일하는 방식을 바꾸다
        </h1>

        <p className="text-lg md:text-2xl font-normal text-white/70 tracking-[0.5px] mb-4 animate-[fadeIn_0.8s_ease-out_0.7s_both]">
          From AI Literacy to AI Autonomy
        </p>

        <p className="text-base font-medium text-white/40 mb-10 animate-[fadeIn_0.8s_ease-out_0.9s_both]">
          Backed by{" "}
          <span className="text-white/60 font-semibold">Google</span> ·{" "}
          <span className="text-white/60 font-semibold">Bytedance</span> ·{" "}
          <span className="text-white/60 font-semibold">Samsung</span>
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-[fadeIn_0.8s_ease-out_1.1s_both]">
          <Button href="#cta" variant="primary" size="large">
            무료 상담 신청
          </Button>
          <Button href="#services" variant="secondary">
            서비스 소개 ↓
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 text-[13px] animate-[fadeIn_1s_ease-out_1.5s_both]"
      >
        <span>Scroll to explore</span>
        <ArrowDown
          className="w-4 h-4"
          style={{ animation: "bounce 2s infinite" }}
        />
      </div>
    </section>
  );
}
