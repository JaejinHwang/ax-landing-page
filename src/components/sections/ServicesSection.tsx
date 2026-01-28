"use client";

import Image from "next/image";
import { GraduationCap, Bot, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SERVICES, BERSIN_STAGES } from "@/lib/constants";
import {
  fadeUp,
  staggerContainer,
  staggerItem,
  defaultViewport,
} from "@/lib/animations";

const iconMap = { GraduationCap, Bot } as const;

const serviceImages = [
  "/images/services/ai-literacy.jpg",
  "/images/services/ai-agent.jpg",
];

// Color themes per service card (2-3)
const serviceThemes = [
  {
    iconBg: "from-[rgba(212,168,120,0.18)] to-[rgba(212,184,150,0.10)]",
    iconBgHover: "group-hover:from-[rgba(212,168,120,0.28)] group-hover:to-[rgba(212,184,150,0.16)]",
  },
  {
    iconBg: "from-[rgba(140,180,220,0.15)] to-[rgba(160,200,240,0.08)]",
    iconBgHover: "group-hover:from-[rgba(140,180,220,0.25)] group-hover:to-[rgba(160,200,240,0.14)]",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="relative py-24 md:py-36 overflow-hidden" style={{ background: "#0A0F1A" }}>
      {/* Background glow */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(201,149,106,0.04) 0%, transparent 60%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(201,149,106,0.025) 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-[1200px] mx-auto px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          <SectionLabel index="03" />

          <h2 className="text-[36px] md:text-[48px] font-bold leading-[1.25] tracking-[-1px] text-white mb-6">
            QANDA AX가 제공하는 서비스
          </h2>

          <p className="text-lg md:text-xl text-white/50 max-w-[650px] mb-14 leading-relaxed">
            AI Literacy 교육부터 AI Agent 개발까지, 조직의 AI 전환을 처음부터
            끝까지 함께합니다.
          </p>
        </motion.div>

        {/* Service Cards (2-3: differentiated color themes) */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-28"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon];
            const theme = serviceThemes[i];
            return (
              <motion.div
                key={i}
                variants={staggerItem}
                className="glass-card-glow p-8 md:p-12 group relative overflow-hidden"
              >
                {/* Background photo + dim overlay */}
                <Image
                  src={serviceImages[i]}
                  alt=""
                  fill
                  className="object-cover pointer-events-none"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-black/80 group-hover:bg-black/70 transition-colors duration-500 pointer-events-none" />

                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${theme.iconBg} ${theme.iconBgHover} backdrop-blur-sm flex items-center justify-center mb-6 transition-all duration-300`}>
                    <Icon className="w-7 h-7 text-[var(--accent-light)]" />
                  </div>
                  <h3 className="text-[24px] md:text-[28px] font-bold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-[17px] text-white/55 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="border-t border-[rgba(255,255,255,0.08)] pt-6 mb-8">
                    <ul className="space-y-3">
                      {service.features.map((feature, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-3 text-base text-white/60"
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
              </motion.div>
            );
          })}
        </motion.div>

        {/* Josh Bersin Framework — Ascending Path */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          <div className="mb-10">
            <span className="text-sm font-semibold tracking-[1.5px] uppercase gradient-text">
              AI Agent Efficiency Framework
            </span>
          </div>

          {/* Desktop: Ascending curve visualization — full viewport */}
          <div
            className="hidden lg:block relative"
            style={{
              height: 540,
              width: "100vw",
              marginLeft: "calc(-50vw + 50%)",
            }}
          >
            {/* SVG curve + fill — full viewport */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              fill="none"
            >
              <defs>
                <linearGradient id="curveFill" x1="0" y1="1" x2="1" y2="0">
                  <stop offset="0%" stopColor="rgba(201,149,106,0)" />
                  <stop offset="50%" stopColor="rgba(201,149,106,0.06)" />
                  <stop offset="100%" stopColor="rgba(201,149,106,0.14)" />
                </linearGradient>
              </defs>

              {/* Filled area under curve — edge to edge */}
              <motion.path
                d="M 0,95 C 5,95 5,90 12.5,90 C 25,90 25,72 37.5,72 C 50,72 50,48 62.5,48 C 75,48 75,35 87.5,35 L 100,30 L 100,100 L 0,100 Z"
                fill="url(#curveFill)"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 1 }}
              />

              {/* Curve line */}
              <motion.path
                d="M 12.5,90 C 25,90 25,72 37.5,72 C 50,72 50,48 62.5,48 C 75,48 75,35 87.5,35"
                stroke="rgba(201,149,106,0.4)"
                strokeWidth="0.3"
                strokeLinecap="round"
                strokeLinejoin="round"
                vectorEffect="non-scaling-stroke"
                fill="none"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </svg>

            {/* Node dots */}
            {[
              { left: "12.5%", top: "90%" },
              { left: "37.5%", top: "72%" },
              { left: "62.5%", top: "48%" },
              { left: "87.5%", top: "35%" },
            ].map((pos, idx) => (
              <motion.div
                key={`node-${idx}`}
                className="absolute z-20 flex items-center justify-center"
                style={{
                  left: pos.left,
                  top: pos.top,
                  width: 12,
                  height: 12,
                  transform: "translate(-50%, -50%)",
                }}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.3 + idx * 0.3,
                  duration: 0.4,
                  ease: [0.175, 0.885, 0.32, 1.275],
                }}
              >
                {/* Outer glow */}
                <div
                  className="absolute rounded-full"
                  style={{
                    width: 28,
                    height: 28,
                    background: `radial-gradient(circle, rgba(201,149,106,${0.15 + idx * 0.08}) 0%, transparent 70%)`,
                  }}
                />
                {/* Core dot */}
                <div
                  className="rounded-full"
                  style={{
                    width: 12,
                    height: 12,
                    background: `rgba(201,149,106,${0.5 + idx * 0.15})`,
                    boxShadow:
                      idx === 3
                        ? "0 0 16px rgba(201,149,106,0.5)"
                        : "none",
                  }}
                />
                {/* Last node pulse ring */}
                {idx === 3 && (
                  <motion.div
                    className="absolute rounded-full"
                    style={{
                      width: 32,
                      height: 32,
                      border: "1px solid rgba(201,149,106,0.3)",
                    }}
                    animate={{
                      scale: [1, 2.2, 1],
                      opacity: [0.4, 0, 0.4],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 2.5,
                      ease: "easeInOut",
                    }}
                  />
                )}
              </motion.div>
            ))}

            {/* Content grid overlay — text positioned ABOVE each node */}
            <div className="relative z-10 grid grid-cols-4 gap-6 h-full px-6">
              {BERSIN_STAGES.map((stage, i) => {
                const paddings = [339, 234, 99, 18];
                const effSizes = [
                  "text-[26px]",
                  "text-[30px]",
                  "text-[34px]",
                  "text-[40px]",
                ];
                const blockOpacity = [0.45, 0.62, 0.82, 1.0][i];
                return (
                  <motion.div
                    key={i}
                    style={{ paddingTop: paddings[i] }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: blockOpacity, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.4 + i * 0.25,
                      duration: 0.5,
                    }}
                  >
                    <span
                      className="text-[13px] font-semibold tracking-wider text-white/50"
                    >
                      Stage {stage.stage}
                    </span>
                    <h4 className="text-[18px] lg:text-[20px] font-bold text-white mt-1 mb-2">
                      {stage.name}
                    </h4>
                    <div
                      className={`${effSizes[i]} font-extrabold gradient-text mb-1`}
                    >
                      {stage.efficiency}
                    </div>
                    <p className="text-[13px] text-white/50 leading-relaxed">
                      {stage.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Mobile: Vertical timeline */}
          <div className="lg:hidden relative pl-10">
            {/* Vertical gradient line */}
            <div
              className="absolute left-[14px] top-2 bottom-2 w-[2px] rounded-full"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(201,149,106,0.15), rgba(201,149,106,0.6))",
              }}
            />

            <div className="space-y-10">
              {BERSIN_STAGES.map((stage, i) => {
                const blockOpacity = [0.45, 0.62, 0.82, 1.0][i];
                return (
                  <motion.div
                    key={i}
                    className="relative"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: blockOpacity, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: i * 0.12, duration: 0.4 }}
                  >
                    {/* Node dot */}
                    <div
                      className="absolute -left-10 top-[6px] flex items-center justify-center"
                      style={{ width: 12, height: 12 }}
                    >
                      <div
                        className="rounded-full"
                        style={{
                          width: i === 3 ? 12 : 10,
                          height: i === 3 ? 12 : 10,
                          background: `rgba(201,149,106,${0.3 + i * 0.2})`,
                          boxShadow:
                            i === 3
                              ? "0 0 12px rgba(201,149,106,0.5)"
                              : "none",
                        }}
                      />
                    </div>

                    <span
                      className="text-[12px] font-semibold tracking-wider text-white/40"
                    >
                      Stage {stage.stage}
                    </span>
                    <h4 className="text-[18px] font-bold text-white mt-1">
                      {stage.name}
                    </h4>
                    <div className="text-[24px] font-extrabold gradient-text mt-1">
                      {stage.efficiency}
                    </div>
                    <p className="text-[13px] text-white/40 mt-1">
                      {stage.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <p className="text-[13px] text-white/20 italic mt-8">
            Source: Josh Bersin Company, Evolving Job Redesign, 2025
          </p>
        </motion.div>
      </div>
    </section>
  );
}
