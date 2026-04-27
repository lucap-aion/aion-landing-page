"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import { Button } from "./Button";
import { cn } from "@/lib/cn";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { useI18n } from "./LanguageProvider";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const { t } = useI18n();
  const { theme, toggle: toggleTheme } = useTheme();
  const { locale, setLocale } = useI18n();

  const links = [
    { href: "#features", label: t.nav.features },
    { href: "#how-it-works", label: t.nav.howItWorks },
    { href: "#solution", label: t.nav.solution },
    { href: "#testimonials", label: t.nav.testimonials },
    { href: "/contact", label: t.nav.contact },
  ];

  const resolveHref = (href: string) =>
    href.startsWith("#") && !isHome ? `/${href}` : href;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const Toggles = ({ className }: { className?: string }) => (
    <div className={cn("flex items-center gap-1.5", className)}>
      <div
        className="flex items-center text-[11px] font-medium tracking-wider uppercase rounded-full border border-border overflow-hidden"
        role="group"
        aria-label={t.common.toggleLanguage}
      >
        <button
          type="button"
          onClick={() => setLocale("en")}
          className={cn(
            "px-2.5 py-1 transition-colors",
            locale === "en"
              ? "bg-primary-dark text-white"
              : "text-ink-soft hover:text-ink"
          )}
        >
          EN
        </button>
        <button
          type="button"
          onClick={() => setLocale("it")}
          className={cn(
            "px-2.5 py-1 transition-colors",
            locale === "it"
              ? "bg-primary-dark text-white"
              : "text-ink-soft hover:text-ink"
          )}
        >
          IT
        </button>
      </div>
      <button
        type="button"
        onClick={toggleTheme}
        aria-label={t.common.toggleTheme}
        className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-ink-soft hover:text-ink hover:border-ink-soft/40 transition-colors"
      >
        {theme === "dark" ? (
          <Sun size={14} strokeWidth={1.8} />
        ) : (
          <Moon size={14} strokeWidth={1.8} />
        )}
      </button>
    </div>
  );

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
              href={resolveHref(l.href)}
              className="text-sm text-ink-soft hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Toggles />
          <Button
            href="https://app.aioncover.com"
            variant="primary"
            className="px-5 py-2.5"
          >
            {t.nav.goToPlatform}
          </Button>
        </div>

        <button
          className="lg:hidden p-2 -mr-2 text-ink"
          onClick={() => setOpen(!open)}
          aria-label={t.nav.menu}
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
                href={resolveHref(l.href)}
                onClick={() => setOpen(false)}
                className="text-base text-ink-soft hover:text-primary transition-colors py-1"
              >
                {l.label}
              </a>
            ))}
            <Toggles className="pt-2" />
            <Button
              href="https://app.aioncover.com"
              variant="primary"
              className="mt-2 w-full"
            >
              {t.nav.goToPlatform}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
