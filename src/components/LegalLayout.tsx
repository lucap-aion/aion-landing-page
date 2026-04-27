"use client";

import type { ReactNode } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { useI18n } from "./LanguageProvider";

export function LegalLayout({
  title,
  intro,
  children,
}: {
  title: string;
  intro: ReactNode;
  children: ReactNode;
}) {
  const { t } = useI18n();
  return (
    <main className="min-h-screen bg-background">
      <Nav />
      <section className="pt-32 lg:pt-40 pb-20 lg:pb-28">
        <div className="container max-w-3xl">
          <span className="eyebrow">{t.legal.common.eyebrow}</span>
          <h1 className="mt-4 font-serif text-4xl sm:text-5xl leading-[1.05] text-ink">
            {title}
          </h1>
          <div className="mt-6 text-lg text-ink-soft leading-relaxed">
            {intro}
          </div>
          <p className="mt-5 text-sm text-ink-soft/70">
            {t.legal.common.lastUpdated} · {t.legal.common.lastUpdatedDate}
          </p>

          <div className="mt-14 lg:mt-16 space-y-12">{children}</div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

export const H2 = ({
  children,
  id,
}: {
  children: ReactNode;
  id?: string;
}) => (
  <h2
    id={id}
    className="font-serif text-2xl sm:text-[28px] text-ink leading-tight scroll-mt-32"
  >
    {children}
  </h2>
);

export const H3 = ({ children }: { children: ReactNode }) => (
  <h3 className="mt-6 font-serif text-lg sm:text-xl text-ink leading-snug">
    {children}
  </h3>
);

export const P = ({ children }: { children: ReactNode }) => (
  <p className="mt-4 text-ink-soft leading-relaxed">{children}</p>
);

export const UL = ({ children }: { children: ReactNode }) => (
  <ul className="mt-4 space-y-2 list-disc pl-5 text-ink-soft leading-relaxed marker:text-primary">
    {children}
  </ul>
);

export const Strong = ({ children }: { children: ReactNode }) => (
  <strong className="text-ink font-medium">{children}</strong>
);

export const Section = ({ children }: { children: ReactNode }) => (
  <section className="space-y-1">{children}</section>
);
