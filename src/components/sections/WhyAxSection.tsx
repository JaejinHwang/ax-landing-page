"use client";

import { useState } from "react";
import { Trophy, Globe, Target, Handshake } from "lucide-react";
import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { WHY_AX } from "@/lib/constants";
import {
  fadeUp,
  staggerContainer,
  staggerItem,
  defaultViewport,
} from "@/lib/animations";

// 2-4: Unique icons per card
const cardIcons = [Trophy, Globe, Target, Handshake];

export function WhyAxSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="why-ax" className="relative bg-[var(--bg-primary)] py-24 md:py-36 overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(212,184,150,0.04) 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-[1200px] mx-auto px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          <SectionLabel index="04" />

          <h2 className="text-[36px] md:text-[48px] font-bold leading-[1.25] tracking-[-1px] text-white mb-14">
            왜 <span className="gradient-text">QANDA AX</span>인가
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          {WHY_AX.map((item, i) => {
            const CardIcon = cardIcons[i];
            return (
              <motion.div
                key={i}
                variants={staggerItem}
                className="relative glass-card-glow p-8 md:p-10 cursor-default"
                style={{
                  opacity:
                    hoveredIndex !== null && hoveredIndex !== i ? 0.45 : 1,
                  transform:
                    hoveredIndex === i ? "translateY(-4px)" : "translateY(0)",
                  boxShadow:
                    hoveredIndex === i
                      ? "0 12px 40px rgba(0,0,0,0.4), 0 0 30px rgba(201,149,106,0.1)"
                      : "none",
                  borderColor:
                    hoveredIndex === i
                      ? "rgba(201,149,106,0.2)"
                      : undefined,
                }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Gradient accent line top */}
                <div className="absolute top-0 left-8 w-[60px] h-[2px] rounded-b-full bg-gradient-to-r from-[var(--accent-primary)] via-[var(--secondary)] to-transparent opacity-60" />

                {/* 2-4: Unique icon badge */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-[rgba(201,149,106,0.08)] flex items-center justify-center">
                    <CardIcon className="w-[18px] h-[18px] text-[var(--accent-light)] opacity-70" />
                  </div>
                  <span className="inline-block font-mono text-sm font-semibold gradient-text tracking-[1px]">
                    {item.number}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-5 whitespace-pre-line leading-tight">
                  {item.title}
                </h3>

                {item.points.length > 0 && (
                  <ul className="space-y-2.5">
                    {item.points.map((point, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-3 text-base text-white/50 leading-relaxed"
                      >
                        <span className="text-[var(--secondary)] mt-0.5 text-sm">
                          ▸
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>
                )}

              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
