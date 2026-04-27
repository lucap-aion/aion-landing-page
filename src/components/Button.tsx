import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "outline" | "ghost" | "light";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 will-change-transform active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary/40";

const variants: Record<Variant, string> = {
  primary:
    "bg-primary-dark text-white hover:bg-primary hover:shadow-elev",
  outline:
    "border border-ink/15 text-ink hover:border-primary hover:text-primary",
  ghost: "text-ink hover:text-primary",
  light:
    "bg-white text-[hsl(24_10%_10%)] hover:bg-[hsl(36_35%_96%)] border border-border shadow-card",
};

type CommonProps = {
  variant?: Variant;
  className?: string;
  children: ReactNode;
};

type AnchorProps = CommonProps &
  Omit<ComponentPropsWithoutRef<typeof Link>, "className" | "children"> & {
    href: string;
  };

type ButtonProps = CommonProps &
  Omit<ComponentPropsWithoutRef<"button">, "className" | "children"> & {
    href?: undefined;
  };

export function Button(props: AnchorProps | ButtonProps) {
  const { variant = "primary", className, children, ...rest } = props;
  const cls = cn(base, variants[variant], className);

  if ("href" in rest && rest.href) {
    return (
      <Link className={cls} {...(rest as AnchorProps)}>
        {children}
      </Link>
    );
  }
  return (
    <button className={cls} {...(rest as ButtonProps)}>
      {children}
    </button>
  );
}
