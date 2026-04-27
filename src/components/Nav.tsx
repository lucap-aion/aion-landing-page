"use client";

import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { Button } from "./Button";
import { cn } from "@/lib/cn";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#solution", label: "Solution" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border/60"
          : "bg-transparent"
      )}
    >
      <div className="container max-w-6xl flex h-16 lg:h-20 items-center justify-between">
        <Logo />

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-ink-soft hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Button
            href="https://app.aioncover.com"
            variant="primary"
            className="px-5 py-2.5"
          >
            Go to Platform
          </Button>
        </div>

        <button
          className="lg:hidden p-2 -mr-2 text-ink"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border/60 bg-background/95 backdrop-blur-md">
          <div className="container max-w-6xl py-6 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base text-ink-soft hover:text-primary transition-colors py-1"
              >
                {l.label}
              </a>
            ))}
            <Button
              href="https://app.aioncover.com"
              variant="primary"
              className="mt-2 w-full"
            >
              Go to Platform
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
