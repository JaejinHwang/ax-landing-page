"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { NAV_ITEMS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export function Header() {
  const { scrollY, isScrollingDown } = useScrollPosition();
  const isCompact = scrollY > 50 && isScrollingDown;
  const isScrolled = scrollY > 50;
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header
        className={`fixed z-50 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          isCompact
            ? "top-3 left-4 right-4 md:left-[10%] md:right-[10%] rounded-[28px] bg-[rgba(6,8,13,0.55)] backdrop-blur-3xl border border-[rgba(255,255,255,0.1)] shadow-[0_8px_40px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.08),0_0_0_1px_rgba(201,149,106,0.12),0_0_60px_rgba(201,149,106,0.04)]"
            : `top-0 left-0 right-0 rounded-[0px] ${
                isScrolled
                  ? "bg-[rgba(6,8,13,0.5)] backdrop-blur-3xl border-b border-[rgba(255,255,255,0.08)] shadow-[0_4px_30px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.06),0_0_40px_rgba(201,149,106,0.03)]"
                  : "bg-transparent border-b border-transparent"
              }`
        }`}
      >
        <div
          className={`max-w-[1200px] mx-auto flex items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
            isCompact ? "h-14 pl-6 pr-3" : "h-16 px-6"
          }`}
        >
          {/* Logo */}
          <a href="#" className="flex items-center">
            <Image src="/images/qanda-cx.png" alt="QANDA CX" width={120} height={28} priority />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-white/50 hover:text-[var(--accent-light)] transition-colors duration-300"
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
                className={`transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                  isCompact
                    ? "!px-4 !py-2 !text-xs !rounded-full"
                    : "!px-5 !py-2.5 !text-sm"
                }`}
              >
                무료 상담 신청
              </Button>
            </span>
            <a
              href="#cta"
              className="md:hidden text-sm font-semibold text-[var(--accent-light)]"
            >
              문의
            </a>
            <button
              className="md:hidden text-white/50 hover:text-white transition-colors cursor-pointer"
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
        <div className="fixed inset-0 z-[100] bg-[rgba(6,8,13,0.95)] backdrop-blur-2xl flex flex-col">
          <div className="px-6 h-16 flex items-center justify-between">
            <a
              href="#"
              className="flex items-center"
              onClick={() => setMenuOpen(false)}
            >
              <Image src="/images/qanda-cx.png" alt="QANDA CX" width={120} height={28} />
            </a>
            <button
              className="text-white/50 hover:text-white transition-colors cursor-pointer"
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
                className="text-3xl font-bold text-white/70 hover:text-[var(--accent-light)] transition-colors"
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
