import { NAV_ITEMS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-[var(--bg-footer)] border-t border-[var(--border-subtle)]">
      <div className="max-w-[1200px] mx-auto px-6 py-12">
        {/* Logo */}
        <div className="text-white font-bold text-xl tracking-tight mb-8">
          QANDA <span className="text-[var(--accent-primary)]">AX</span>
        </div>

        {/* Nav links */}
        <div className="flex flex-wrap gap-6 mb-10">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-white/50 hover:text-white/80 transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#faq"
            className="text-sm text-white/50 hover:text-white/80 transition-colors"
          >
            FAQ
          </a>
        </div>

        {/* Divider */}
        <div className="border-t border-[var(--border-subtle)] pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} Mathpresso Inc. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-xs text-white/30 hover:text-white/50 transition-colors"
            >
              개인정보처리방침
            </a>
            <a
              href="#"
              className="text-xs text-white/30 hover:text-white/50 transition-colors"
            >
              이용약관
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
