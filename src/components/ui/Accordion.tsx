"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
      {/* Accent left bar when open (2-6) – disabled
      <div
        className={`absolute left-0 top-0 bottom-0 w-[3px] rounded-l-xl bg-gradient-to-b from-[var(--accent-primary)] to-[var(--secondary)] transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      />
      */}

      <button
        className="w-full flex items-center justify-between px-8 py-6 text-left cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className={`text-lg font-semibold pr-4 transition-colors duration-300 ${isOpen ? "text-[var(--accent-light)]" : "text-white"}`}>
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          className="shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-[var(--accent-light)]" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <p className="px-8 pb-6 text-base text-white/60 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
