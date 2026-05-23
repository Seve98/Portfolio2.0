"use client";

import { type ReactNode, forwardRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type CommonProps = {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
};

type ButtonProps = CommonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children"> & {
    as?: "button";
  };

type LinkProps = CommonProps & {
  as: "a";
  href: string;
  target?: string;
  rel?: string;
};

export type ButtonComponentProps = ButtonProps | LinkProps;

const sizes = {
  sm: "h-9 px-4 text-xs",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-sm",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap press select-none border transition-colors";

const variants = {
  primary:
    "bg-[rgb(var(--bg-elev))] text-white border-[rgb(var(--border-strong))] hover:bg-[rgb(var(--border))] hover:border-zinc-600",
  outline:
    "bg-transparent text-accent-red border-accent-red hover:bg-accent-red hover:text-black",
  ghost:
    "bg-transparent text-zinc-400 border-transparent hover:text-white hover:bg-[rgb(var(--card))]",
};

export const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonComponentProps
>(function Button(props, ref) {
  const { children, className, variant = "primary", size = "md" } = props;
  const cls = cn(base, sizes[size], variants[variant], className);

  if (props.as === "a") {
    const { href, target, rel } = props;
    return (
      <Link
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        target={target}
        rel={rel}
        className={cls}
      >
        {children}
      </Link>
    );
  }

  const {
    as: _as,
    variant: _v,
    size: _s,
    className: _c,
    children: _ch,
    ...rest
  } = props as ButtonProps;

  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      className={cls}
      {...rest}
    >
      {children}
    </button>
  );
});
