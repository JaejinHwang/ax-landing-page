"use client";

import { type ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: "default" | "large";
  href?: string;
  className?: string;
  onClick?: () => void;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--accent-primary)] text-white border-transparent shadow-[0_0_20px_rgba(124,77,255,0.2)] hover:shadow-[0_4px_20px_rgba(124,77,255,0.35),0_0_50px_rgba(124,77,255,0.2)] hover:bg-[#6B3FE8] hover:-translate-y-0.5",
  secondary:
    "bg-transparent text-white border-white/30 hover:bg-white/5 hover:border-white/50",
  ghost:
    "bg-transparent text-[var(--accent-primary)] border-transparent p-0 hover:gap-3",
};

const sizeStyles = {
  default: "px-8 py-3.5 text-base",
  large: "px-12 py-5 text-lg",
};

export function Button({
  children,
  variant = "primary",
  size = "default",
  href,
  className = "",
  onClick,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-lg border transition-[color,background-color,border-color,box-shadow,transform,gap] duration-[0.25s] ease-[cubic-bezier(0.4,0,0.2,1)] cursor-pointer";
  const styles = `${baseStyles} ${variantStyles[variant]} ${
    variant !== "ghost" ? sizeStyles[size] : ""
  } ${className}`;

  if (href) {
    return (
      <a href={href} className={styles}>
        {children}
      </a>
    );
  }

  return (
    <button className={styles} onClick={onClick}>
      {children}
    </button>
  );
}
