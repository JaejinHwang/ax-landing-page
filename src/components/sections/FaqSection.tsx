"use client";

import { SectionLabel } from "@/components/ui/SectionLabel";
import { AccordionItem } from "@/components/ui/Accordion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { FAQ_ITEMS } from "@/lib/constants";

export function FaqSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="faq" className="relative bg-[var(--bg-primary)] py-28 md:py-44">
      <div className="absolute inset-0 mesh-grid opacity-15 pointer-events-none" />

      <div
        ref={ref}
        className={`relative max-w-[800px] mx-auto px-6 scroll-reveal ${
          isVisible ? "visible" : ""
        }`}
      >
        <SectionLabel index="07" />

        <h2 className="text-[36px] md:text-[48px] font-bold leading-[1.25] tracking-[-1px] text-white mb-16">
          자주 묻는 질문
        </h2>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item, i) => (
            <AccordionItem
              key={i}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
