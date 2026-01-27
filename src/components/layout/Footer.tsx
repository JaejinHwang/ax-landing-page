import Image from "next/image";
import { NAV_ITEMS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="relative bg-[var(--bg-footer)] border-t border-[rgba(201,149,106,0.06)]">
      {/* Gradient glow top edge */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(201,149,106,0.2)] to-transparent" />

      <div className="max-w-[1200px] mx-auto px-6 py-16">
        {/* Logo */}
        <div className="mb-8">
          <Image
            src="/images/qanda-cx.png"
            alt="QANDA AX"
            width={160}
            height={32}
          />
        </div>

        {/* Nav links */}
        <div className="flex flex-wrap gap-6 mb-10">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-white/30 hover:text-[var(--accent-light)] transition-colors duration-300"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#faq"
            className="text-sm text-white/30 hover:text-[var(--accent-light)] transition-colors duration-300"
          >
            FAQ
          </a>
        </div>

        {/* Divider */}
        <div className="border-t border-[rgba(255,255,255,0.04)] pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-white/20">
            &copy; {new Date().getFullYear()} Mathpresso Inc. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
