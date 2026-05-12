"use client";

import { Logo } from "./Logo";
import { useI18n } from "./LanguageProvider";

export function Footer() {
  const { t } = useI18n();

  const legal = [
    { label: t.footer.legalTerms, href: "/terms" },
    { label: t.footer.legalPrivacy, href: "/privacy" },
    { label: t.footer.legalCookies, href: "/cookies" },
  ];

  const nav = [
    { label: t.nav.features, href: "#features" },
    { label: t.nav.howItWorks, href: "#how-it-works" },
    { label: t.nav.solution, href: "#solution" },
    { label: t.nav.testimonials, href: "#testimonials" },
  ];

  return (
    <footer className="bg-[hsl(28_6%_16%)] text-white/80 pt-20 pb-10">
      <div className="container max-w-6xl">
        <div className="grid md:grid-cols-12 gap-10 lg:gap-16">
          <div className="md:col-span-5">
            <Logo light />
            <p className="mt-5 max-w-sm text-white/60 leading-relaxed">
              {t.footer.tagline}
            </p>
          </div>

          <div className="md:col-span-3 md:col-start-7">
            <div className="text-xs uppercase tracking-[0.18em] text-white/40">
              {t.footer.explore}
            </div>
            <ul className="mt-5 space-y-3">
              {nav.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="hover:text-primary-light transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="https://app.aioncover.com/all"
                  className="hover:text-primary-light transition-colors"
                >
                  {t.nav.goToPlatform}
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="text-xs uppercase tracking-[0.18em] text-white/40">
              {t.footer.legal}
            </div>
            <ul className="mt-5 space-y-3">
              {legal.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="hover:text-primary-light transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-white/40">
          <span>
            © {new Date().getFullYear()} AION Cover. {t.footer.rights}
          </span>
          <span>{t.footer.crafted}</span>
        </div>
      </div>
    </footer>
  );
}
