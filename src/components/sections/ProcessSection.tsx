"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { PROCESS_STEPS } from "@/lib/constants";
import {
  fadeUp,
  staggerContainer,
  staggerItem,
  defaultViewport,
} from "@/lib/animations";

export function ProcessSection() {
  return (
    <section id="process" className="relative bg-[var(--bg-secondary)] py-24 md:py-36 overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(201,149,106,0.04) 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-[1200px] mx-auto px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          <SectionLabel index="05" />

          <h2 className="text-[36px] md:text-[48px] font-bold leading-[1.25] tracking-[-1px] text-white mb-6">
            도입 프로세스
          </h2>

          <p className="text-lg md:text-xl text-white/50 max-w-[600px] mb-14 leading-relaxed">
            체계적인 4단계 프로세스로 AI 전환을 안전하게 이끌어갑니다.
          </p>
        </motion.div>

        {/* Desktop: Horizontal (2-5: progressive gradient + SVG arrows + last card glow) */}
        <motion.div
          className="hidden md:grid grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          {PROCESS_STEPS.map((step, i) => {
            const isLast = i === 3;
            const accentOpacity = 0.08 + i * 0.04;
            return (
              <motion.div key={i} variants={staggerItem} className="relative group">
                {/* SVG Arrow connector (1-7 + 2-5) */}
                {i < 3 && (
                  <div className="absolute -right-3.5 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-7 h-7">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                      <path
                        d="M5 11H17M17 11L12 6M17 11L12 16"
                        stroke="var(--accent-light)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        opacity="0.55"
                      />
                    </svg>
                  </div>
                )}

                <div
                  className={`glass-card-glow p-7 h-full group-hover:!border-t-[rgba(201,149,106,0.4)] group-hover:shadow-[0_-4px_30px_rgba(201,149,106,0.12)] transition-all duration-300 ${
                    isLast
                      ? "!border-[rgba(201,149,106,0.2)] shadow-[0_0_24px_rgba(201,149,106,0.08)]"
                      : ""
                  }`}
                  style={{
                    background: `linear-gradient(135deg, rgba(201, 149, 106, ${accentOpacity}), rgba(212, 184, 150, ${accentOpacity * 0.4}))`,
                  }}
                >
                  <span className="text-[13px] font-bold tracking-[2px] gradient-text">
                    STEP {step.step}
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-3 mb-5">
                    {step.title}
                  </h3>
                  <ul className="space-y-2 mb-6">
                    {step.items.map((item, j) => (
                      <li
                        key={j}
                        className="text-[15px] text-white/50 leading-relaxed"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                  <span className="inline-block text-[13px] px-3.5 py-1.5 bg-gradient-to-r from-[rgba(201,149,106,0.12)] to-[rgba(212,184,150,0.06)] backdrop-blur-sm rounded-full text-[var(--accent-light)] font-medium border border-[rgba(201,149,106,0.1)]">
                    {step.duration}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Mobile: Vertical timeline */}
        <motion.div
          className="md:hidden space-y-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          {PROCESS_STEPS.map((step, i) => {
            const isLast = i === 3;
            const accentOpacity = 0.08 + i * 0.04;
            return (
              <motion.div key={i} variants={staggerItem} className="flex gap-4">
                {/* Timeline line */}
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-[var(--accent-primary)] shrink-0 mt-1 shadow-[0_0_8px_rgba(201,149,106,0.4)]" />
                  {i < 3 && (
                    <div className="w-0.5 flex-1 bg-gradient-to-b from-[rgba(201,149,106,0.3)] to-[rgba(212,184,150,0.1)]" />
                  )}
                </div>

                <div
                  className={`glass-card-glow p-6 flex-1 mb-2 ${
                    isLast
                      ? "!border-[rgba(201,149,106,0.2)] shadow-[0_0_20px_rgba(201,149,106,0.08)]"
                      : ""
                  }`}
                  style={{
                    background: `linear-gradient(135deg, rgba(201, 149, 106, ${accentOpacity}), rgba(212, 184, 150, ${accentOpacity * 0.4}))`,
                  }}
                >
                  <span className="text-[13px] font-bold tracking-[2px] gradient-text">
                    STEP {step.step}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-2 mb-3">
                    {step.title}
                  </h3>
                  <ul className="space-y-1.5 mb-4">
                    {step.items.map((item, j) => (
                      <li key={j} className="text-sm text-white/50">
                        {item}
                      </li>
                    ))}
                  </ul>
                  <span className="inline-block text-xs px-3 py-1 bg-gradient-to-r from-[rgba(201,149,106,0.12)] to-[rgba(212,184,150,0.06)] rounded-full text-[var(--accent-light)] font-medium border border-[rgba(201,149,106,0.1)]">
                    {step.duration}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
