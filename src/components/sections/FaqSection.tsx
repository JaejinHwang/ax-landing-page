"use client";

import { SectionLabel } from "@/components/ui/SectionLabel";
import { AccordionItem } from "@/components/ui/Accordion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { FAQ_ITEMS } from "@/lib/constants";

export function FaqSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="faq" className="bg-[var(--bg-primary)] py-20 md:py-32">
      <div
        ref={ref}
        className={`max-w-[800px] mx-auto px-6 scroll-reveal ${
          isVisible ? "visible" : ""
        }`}
      >
        <SectionLabel index="07" />

        <h2 className="text-[36px] md:text-[48px] font-bold leading-[1.25] tracking-[-1px] text-white mb-12">
          자주 묻는 질문
        </h2>

        <div className="space-y-3">
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
