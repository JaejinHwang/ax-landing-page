"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { NAV_ITEMS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export function Header() {
  const scrollY = useScrollPosition();
  const isScrolled = scrollY > 100;
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,border-color] duration-300 ${
          isScrolled
            ? "bg-[rgba(12,15,20,0.97)] border-b border-[var(--border-subtle)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="text-white font-bold text-xl tracking-tight">
            QANDA <span className="text-[var(--accent-primary)]">AX</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-white/70 hover:text-[var(--accent-primary)] transition-colors duration-[0.25s]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA + Mobile menu */}
          <div className="flex items-center gap-4">
            <span className="hidden md:inline-flex">
              <Button
                href="#cta"
                variant="primary"
                className="!px-5 !py-2.5 !text-sm"
              >
                무료 상담 신청
              </Button>
            </span>
            <a
              href="#cta"
              className="md:hidden text-sm font-semibold text-[var(--accent-primary)]"
            >
              문의
            </a>
            <button
              className="md:hidden text-white/70 hover:text-white transition-colors cursor-pointer"
              onClick={() => setMenuOpen(true)}
              aria-label="메뉴 열기"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-[100] bg-[var(--bg-primary)] flex flex-col">
          <div className="px-6 h-16 flex items-center justify-between">
            <a
              href="#"
              className="text-white font-bold text-xl tracking-tight"
              onClick={() => setMenuOpen(false)}
            >
              QANDA <span className="text-[var(--accent-primary)]">AX</span>
            </a>
            <button
              className="text-white/70 hover:text-white transition-colors cursor-pointer"
              onClick={() => setMenuOpen(false)}
              aria-label="메뉴 닫기"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <nav className="flex flex-col items-start px-6 pt-12 gap-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-3xl font-bold text-white/80 hover:text-[var(--accent-primary)] transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button
              href="#cta"
              variant="primary"
              size="large"
              className="mt-8 w-full"
            >
              무료 상담 신청
            </Button>
          </nav>
        </div>
      )}
    </>
  );
}
