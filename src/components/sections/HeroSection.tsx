"use client";

import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { PARTNERS } from "@/lib/constants";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[var(--bg-primary)]"
    >
      {/* Mesh grid background */}
      <div className="absolute inset-0 mesh-grid opacity-40 pointer-events-none" />

      {/* Background glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(201,149,106,0.12) 0%, transparent 50%)",
            willChange: "transform, opacity",
            animation: "glowPulse 6s ease-in-out infinite alternate",
          }}
        />
        <div
          className="absolute top-[30%] left-[25%] w-[600px] h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(212,184,150,0.06) 0%, transparent 50%)",
            willChange: "transform, opacity",
            animation: "glowPulse 8s ease-in-out 2s infinite alternate",
          }}
        />
        <div
          className="absolute top-[60%] right-[20%] w-[500px] h-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(201,149,106,0.05) 0%, transparent 50%)",
            willChange: "transform, opacity",
            animation: "glowPulse 7s ease-in-out 1s infinite alternate",
          }}
        />
      </div>

      {/* Orbiting ring decoration */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-[rgba(201,149,106,0.06)] pointer-events-none"
        style={{ animation: "orbitSlow 60s linear infinite" }}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[var(--accent-primary)] opacity-40" />
      </div>
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-[rgba(212,184,150,0.04)] pointer-events-none"
        style={{ animation: "orbitSlow 45s linear infinite reverse" }}
      >
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[var(--secondary)] opacity-30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 text-center">
        <div className="animate-[fadeIn_0.5s_ease-out_0.3s_both]">
          <SectionLabel index="01" />
        </div>

        <h1 className="text-[40px] md:text-[64px] font-extrabold leading-[1.15] tracking-[-1.5px] text-white mb-8 animate-[fadeIn_0.8s_ease-out_0.5s_both]">
          AI로 일하는 방식을{" "}
          <span className="gradient-text">바꾸다</span>
        </h1>

        <p className="text-lg md:text-2xl font-normal text-white/55 tracking-[0.5px] mb-5 animate-[fadeIn_0.8s_ease-out_0.7s_both]">
          From AI Literacy to AI Autonomy
        </p>

        <div className="flex items-center justify-center gap-6 mb-14 animate-[fadeIn_0.8s_ease-out_0.9s_both]">
          <span className="text-base font-medium text-white/30">Backed by</span>
          {PARTNERS.slice(0, 3).map((partner) => (
            <Image
              key={partner.name}
              src={partner.logo}
              alt={partner.name}
              width={100}
              height={partner.heroHeight}
              className="w-auto opacity-40 brightness-0 invert"
              style={{ height: partner.heroHeight }}
            />
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-[fadeIn_0.8s_ease-out_1.1s_both]">
          <Button href="#cta" variant="primary" size="large">
            무료 상담 신청
          </Button>
          <Button href="#services" variant="secondary" size="large">
            서비스 소개 ↓
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20 text-[13px] animate-[fadeIn_1s_ease-out_1.5s_both]"
      >
        <span className="tracking-widest uppercase text-[11px]">Scroll</span>
        <ArrowDown
          className="w-4 h-4"
          style={{ animation: "bounce 2s infinite" }}
        />
      </div>
    </section>
  );
}
