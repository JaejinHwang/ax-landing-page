"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { AccordionItem } from "@/components/ui/Accordion";
import { FAQ_ITEMS } from "@/lib/constants";
import { fadeUp, staggerContainer, staggerItem, defaultViewport } from "@/lib/animations";

export function FaqSection() {
  return (
    <section id="faq" className="relative bg-[var(--bg-primary)] py-24 md:py-36">
      <div className="absolute inset-0 mesh-grid opacity-15 pointer-events-none" />

      <div className="relative max-w-[800px] mx-auto px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          <SectionLabel index="07" />

          <h2 className="text-[36px] md:text-[48px] font-bold leading-[1.25] tracking-[-1px] text-white mb-16">
            자주 묻는 질문
          </h2>
        </motion.div>

        <motion.div
          className="space-y-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          {FAQ_ITEMS.map((item, i) => (
            <motion.div key={i} variants={staggerItem}>
              <AccordionItem
                question={item.question}
                answer={item.answer}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
