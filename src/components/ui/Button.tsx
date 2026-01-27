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
    "relative overflow-hidden bg-[var(--accent-primary)] text-white border-transparent shadow-[0_0_24px_rgba(201,149,106,0.25),inset_0_1px_0_rgba(255,255,255,0.15)] hover:shadow-[0_4px_28px_rgba(201,149,106,0.4),0_0_60px_rgba(201,149,106,0.2),inset_0_1px_0_rgba(255,255,255,0.2)] hover:bg-[#B58456] hover:-translate-y-0.5 active:translate-y-0 group",
  secondary:
    "bg-[rgba(255,255,255,0.04)] text-white border-[rgba(255,255,255,0.12)] backdrop-blur-xl hover:bg-[rgba(255,255,255,0.08)] hover:border-[rgba(201,149,106,0.3)] hover:shadow-[0_0_20px_rgba(201,149,106,0.1)]",
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
    "inline-flex items-center justify-center gap-2 font-semibold rounded-xl border transition-[color,background-color,border-color,box-shadow,transform,gap] duration-[0.3s] ease-[cubic-bezier(0.4,0,0.2,1)] cursor-pointer";
  const styles = `${baseStyles} ${variantStyles[variant]} ${
    variant !== "ghost" ? sizeStyles[size] : ""
  } ${className}`;

  // 2-9: Shimmer overlay for primary buttons
  const shimmer = variant === "primary" ? (
    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out pointer-events-none" />
  ) : null;

  if (href) {
    return (
      <a href={href} className={styles}>
        {shimmer}
        <span className="relative">{children}</span>
      </a>
    );
  }

  return (
    <button className={styles} onClick={onClick}>
      {shimmer}
      <span className="relative">{children}</span>
    </button>
  );
}
