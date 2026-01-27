"use client";

import { useState /* useEffect */ } from "react";
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

  /* 2-7: Scroll progress indicator (disabled – uncomment to restore)
  const [scrollProgress, setScrollProgress] = useState(0);
  useEffect(() => {
    const updateProgress = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        setScrollProgress(Math.min(window.scrollY / docHeight, 1));
      }
    };
    window.addEventListener("scroll", updateProgress, { passive: true });
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);
  */

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
            isCompact ? "h-14 pl-6 pr-5 md:pr-3" : "h-16 px-6"
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
            <Button
              href="#cta"
              variant="primary"
              className={`transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                isCompact
                  ? "!px-4 !py-2 !text-xs !rounded-full"
                  : "!px-4 !py-2 !text-xs md:!px-5 md:!py-2.5 md:!text-sm"
              }`}
            >
              무료 상담 신청
            </Button>
            <button
              className="md:hidden text-white/50 hover:text-white transition-colors cursor-pointer"
              onClick={() => setMenuOpen(true)}
              aria-label="메뉴 열기"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* 2-7: Scroll progress bar (disabled – uncomment to restore)
        <div
          className={`absolute bottom-0 h-[2px] bg-gradient-to-r from-[var(--accent-primary)] to-[var(--secondary)] transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
            isScrolled ? "opacity-100" : "opacity-0"
          }`}
          style={{
            left: isCompact ? "28px" : "0",
            width: isCompact
              ? `calc(${scrollProgress * 100}% - ${scrollProgress * 56}px)`
              : `${scrollProgress * 100}%`,
          }}
        />
        */}
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
