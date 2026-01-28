"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { CountUpNumber } from "@/components/ui/CountUpNumber";
import { Button } from "@/components/ui/Button";
import { TRUST_NUMBERS, MILESTONES, PARTNERS } from "@/lib/constants";
import {
  fadeUp,
  staggerContainer,
  staggerItem,
  defaultViewport,
} from "@/lib/animations";

// Fluent Emoji 3D icons for each trust number card
const numberEmojis = [
  "/images/emoji/person.png",
  "/images/emoji/abacus.png",
  "/images/emoji/globe.png",
  "/images/emoji/trophy.png",
];


export function TrustSection() {
  return (
    <section id="trust" className="relative bg-[var(--bg-light)] overflow-hidden">
      {/* 1-5: Dark→Light transition gradient overlay at top */}
      <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-[var(--bg-secondary)] via-[rgba(13,21,40,0.5)] to-transparent pointer-events-none z-10" />

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

      <div className="relative max-w-[1200px] mx-auto px-6 pt-72 pb-24 md:pt-80 md:pb-36">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          <SectionLabel index="06" dark={false} />

          <h2 className="text-[36px] md:text-[48px] font-bold leading-[1.25] tracking-[-1px] text-[var(--text-dark-primary)] mb-6">
            QANDA가 걸어온 길
          </h2>

          <p className="text-lg md:text-xl text-[var(--text-dark-secondary)] max-w-[550px] mb-14 leading-relaxed">
            1억 명 이상의 사용자와 함께 만든 글로벌 AI 리더십
          </p>
        </motion.div>

        {/* Key Numbers (2-8: enhanced visual) */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          <div className="mb-6">
            <span className="text-sm font-semibold tracking-[1.5px] uppercase text-[var(--accent-primary)]">
              Key Numbers
            </span>
          </div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
          >
            {TRUST_NUMBERS.map((item, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                className="relative bg-white/70 backdrop-blur-xl rounded-2xl p-8 shadow-[0_4px_24px_rgba(201,149,106,0.06),0_1px_2px_rgba(0,0,0,0.04)] text-center border border-[rgba(201,149,106,0.06)] hover:shadow-[0_8px_32px_rgba(201,149,106,0.1)] hover:border-[rgba(201,149,106,0.12)] transition-all duration-300 overflow-hidden group"
              >
                {/* Fluent Emoji decoration */}
                <Image
                  src={numberEmojis[i]}
                  alt=""
                  width={56}
                  height={56}
                  className="absolute top-3 right-3 pointer-events-none select-none opacity-[0.15] group-hover:opacity-[0.25] transition-opacity duration-300"
                />
                <CountUpNumber
                  value={item.value}
                  suffix={item.suffix}
                  className="text-[40px] md:text-[48px] font-extrabold gradient-text"
                />
                <p className="text-sm font-medium text-[var(--accent-primary)] tracking-[0.5px] mt-1">
                  {item.label}
                </p>
                <p className="text-[15px] text-[var(--text-dark-secondary)] mt-0.5">
                  {item.sublabel}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Milestones */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="mb-20"
        >
          <div className="mb-10">
            <span className="text-sm font-semibold tracking-[1.5px] uppercase text-[var(--accent-primary)]">
              Milestones
            </span>
          </div>

          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
            {/* Left: Catchphrase */}
            <div className="lg:w-[280px] flex-shrink-0">
              <h3 className="text-[28px] md:text-[34px] font-extrabold leading-[1.35] text-[var(--text-dark-primary)]">
                대한민국 No.1
                <br />
                <span className="gradient-text">AI Agent</span> 빌더
              </h3>
            </div>

            {/* Right: Timeline */}
            <div className="flex-1 space-y-10 border-l-2 border-[rgba(201,149,106,0.15)] pl-8 md:pl-10">
              {MILESTONES.map((milestone, i) => (
                <div key={i} className="relative flex gap-6 md:gap-10">
                  {/* Dot on border */}
                  <div className="absolute -left-[calc(2rem+5px)] md:-left-[calc(2.5rem+5px)] top-2.5 w-[8px] h-[8px] rounded-full bg-[var(--accent-primary)]" />

                  {/* Year */}
                  <div className="w-[70px] md:w-[90px] flex-shrink-0">
                    <span className="text-[26px] md:text-[34px] font-extrabold gradient-text">
                      {milestone.year}
                    </span>
                  </div>

                  {/* Events */}
                  <div className="flex-1 space-y-2 pt-1">
                    {milestone.events.map((event, j) => (
                      <p key={j} className="text-[16px] md:text-[18px] font-semibold text-[var(--text-dark-secondary)] leading-relaxed">
                        {event}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Partners */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          <div className="text-center mb-20">
            <span className="text-sm font-semibold tracking-[1.5px] uppercase text-[var(--accent-primary)]">
              Partners
            </span>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-14 gap-y-8">
              {PARTNERS.map((partner) => (
                <Image
                  key={partner.name}
                  src={partner.logo}
                  alt={partner.name}
                  width={160}
                  height={partner.sectionHeight}
                  className="w-auto opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                  style={{ height: partner.sectionHeight }}
                />
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button href="#cta" variant="primary" size="large">
              지금 상담 시작하기
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
