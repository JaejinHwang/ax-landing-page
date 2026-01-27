"use client";

import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import { Cormorant_Garamond } from "next/font/google";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { PARTNERS } from "@/lib/constants";
import {
  fadeUp,
  heroTextReveal,
  letterContainer,
  letterItem,
} from "@/lib/animations";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["normal", "italic"],
  display: "swap",
});

export function HeroSection() {
  const headingText = "AI로 일하는 방식을 바꾸다";
  const mainText = headingText.slice(0, -3); // "AI로 일하는 방식을 "
  const accentText = headingText.slice(-3); // "바꾸다"

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

      {/* AI Network Node Graphic (2-1) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] md:w-[1100px] md:h-[1100px] opacity-[0.07]"
          viewBox="0 0 800 800"
          fill="none"
        >
          {/* Central hub */}
          <circle cx="400" cy="400" r="6" fill="var(--accent-primary)" opacity="0.8" />
          <circle cx="400" cy="400" r="40" stroke="var(--accent-primary)" strokeWidth="0.5" opacity="0.4">
            <animateTransform attributeName="transform" type="rotate" from="0 400 400" to="360 400 400" dur="120s" repeatCount="indefinite" />
          </circle>

          {/* Nodes */}
          <circle cx="250" cy="280" r="3" fill="var(--accent-light)" opacity="0.6">
            <animate attributeName="opacity" values="0.6;1;0.6" dur="4s" repeatCount="indefinite" />
          </circle>
          <circle cx="550" cy="310" r="4" fill="var(--accent-primary)" opacity="0.5">
            <animate attributeName="opacity" values="0.5;0.9;0.5" dur="5s" repeatCount="indefinite" />
          </circle>
          <circle cx="320" cy="530" r="3.5" fill="var(--secondary)" opacity="0.5">
            <animate attributeName="opacity" values="0.5;0.8;0.5" dur="6s" repeatCount="indefinite" />
          </circle>
          <circle cx="520" cy="520" r="3" fill="var(--accent-light)" opacity="0.4">
            <animate attributeName="opacity" values="0.4;0.8;0.4" dur="4.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="180" cy="420" r="2.5" fill="var(--accent-primary)" opacity="0.5">
            <animate attributeName="opacity" values="0.5;0.9;0.5" dur="5.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="620" cy="430" r="3" fill="var(--secondary)" opacity="0.4">
            <animate attributeName="opacity" values="0.4;0.7;0.4" dur="7s" repeatCount="indefinite" />
          </circle>
          <circle cx="350" cy="200" r="2" fill="var(--accent-light)" opacity="0.3" />
          <circle cx="480" cy="600" r="2.5" fill="var(--accent-primary)" opacity="0.35" />

          {/* Connection lines */}
          <line x1="400" y1="400" x2="250" y2="280" stroke="var(--accent-primary)" strokeWidth="0.5" opacity="0.3">
            <animate attributeName="opacity" values="0.3;0.6;0.3" dur="4s" repeatCount="indefinite" />
          </line>
          <line x1="400" y1="400" x2="550" y2="310" stroke="var(--accent-primary)" strokeWidth="0.5" opacity="0.25" />
          <line x1="400" y1="400" x2="320" y2="530" stroke="var(--secondary)" strokeWidth="0.5" opacity="0.2" />
          <line x1="400" y1="400" x2="520" y2="520" stroke="var(--accent-light)" strokeWidth="0.5" opacity="0.2" />
          <line x1="400" y1="400" x2="180" y2="420" stroke="var(--accent-primary)" strokeWidth="0.5" opacity="0.2" />
          <line x1="400" y1="400" x2="620" y2="430" stroke="var(--secondary)" strokeWidth="0.5" opacity="0.15" />
          <line x1="250" y1="280" x2="350" y2="200" stroke="var(--accent-light)" strokeWidth="0.3" opacity="0.15" />
          <line x1="550" y1="310" x2="620" y2="430" stroke="var(--accent-primary)" strokeWidth="0.3" opacity="0.15" />
          <line x1="320" y1="530" x2="480" y2="600" stroke="var(--secondary)" strokeWidth="0.3" opacity="0.15" />
          <line x1="250" y1="280" x2="180" y2="420" stroke="var(--accent-light)" strokeWidth="0.3" opacity="0.12" />
          <line x1="520" y1="520" x2="480" y2="600" stroke="var(--accent-primary)" strokeWidth="0.3" opacity="0.12" />

          {/* Outer ring pulses */}
          <circle cx="400" cy="400" r="200" stroke="var(--accent-primary)" strokeWidth="0.3" opacity="0.15" strokeDasharray="8 12">
            <animateTransform attributeName="transform" type="rotate" from="0 400 400" to="-360 400 400" dur="90s" repeatCount="indefinite" />
          </circle>
          <circle cx="400" cy="400" r="300" stroke="var(--secondary)" strokeWidth="0.3" opacity="0.08" strokeDasharray="4 16">
            <animateTransform attributeName="transform" type="rotate" from="0 400 400" to="360 400 400" dur="150s" repeatCount="indefinite" />
          </circle>
        </svg>
      </div>

      {/* Orbiting ring decoration */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-[rgba(201,149,106,0.12)] pointer-events-none"
        style={{ animation: "orbitSlow 60s linear infinite" }}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[var(--accent-primary)] opacity-70" />
      </div>
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-[rgba(212,184,150,0.08)] pointer-events-none"
        style={{ animation: "orbitSlow 45s linear infinite reverse" }}
      >
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[var(--secondary)] opacity-60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
        >
          <SectionLabel index="01" />
        </motion.div>

        {/* Hero heading with letter stagger animation (1-1: mobile font size fix) */}
        <motion.h1
          className="text-[32px] sm:text-[40px] md:text-[64px] font-extrabold leading-[1.15] tracking-[-1.5px] text-white mb-4"
          variants={letterContainer}
          initial="hidden"
          animate="visible"
        >
          {mainText.split("").map((char, i) => (
            <motion.span key={i} variants={letterItem} className="inline-block" style={char === " " ? { width: "0.3em" } : undefined}>
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
          <br className="sm:hidden" />
          {accentText.split("").map((char, i) => (
            <motion.span key={`accent-${i}`} variants={letterItem} className="inline-block gradient-text">
              {char}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          className={`${cormorant.className} text-xl md:text-[28px] font-light text-white/50 tracking-[1.5px] mb-16`}
          variants={heroTextReveal}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.7 }}
        >
          From AI Literacy to AI Autonomy
        </motion.p>

        <motion.div
          className="flex flex-col items-center gap-4 mb-14"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.9 }}
        >
          <span className="text-xs font-medium tracking-[2px] uppercase text-white/25">Backed by</span>
          <div className="flex items-center gap-6">
            {PARTNERS.slice(0, 3).map((partner) => (
              <Image
                key={partner.name}
                src={partner.logo}
                alt={partner.name}
                width={100}
                height={partner.heroHeight}
                className="w-auto opacity-50 brightness-0 invert"
                style={{ height: partner.heroHeight }}
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.1 }}
        >
          <Button href="#cta" variant="primary" size="large">
            무료 상담 신청
          </Button>
          <Button href="#services" variant="secondary" size="large">
            서비스 소개 ↓
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20 text-[13px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="tracking-widest uppercase text-[11px]">Scroll</span>
        <ArrowDown
          className="w-4 h-4"
          style={{ animation: "bounce 2s infinite" }}
        />
      </motion.div>
    </section>
  );
}
