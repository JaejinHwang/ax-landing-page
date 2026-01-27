"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface AccordionItemProps {
  question: string;
  answer: string;
}

export function AccordionItem({ question, answer }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`glass-card-glow transition-colors duration-[0.25s] ${
        isOpen
          ? "!border-[var(--border-accent)]"
          : ""
      }`}
    >
      <button
        className="w-full flex items-center justify-between px-8 py-6 text-left cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="text-lg font-semibold text-white pr-4">
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-[var(--accent-light)] shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-[max-height,opacity] duration-[0.35s] ease-[cubic-bezier(0.4,0,0.2,1)] ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="px-8 pb-6 text-base text-white/60 leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
}
