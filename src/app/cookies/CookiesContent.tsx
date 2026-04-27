"use client";

import Link from "next/link";
import {
  LegalLayout,
  H2,
  H3,
  P,
  UL,
  Strong,
  Section,
} from "@/components/LegalLayout";
import { useI18n } from "@/components/LanguageProvider";

export function CookiesContent() {
  const { t } = useI18n();
  const c = t.legal.cookies;

  const categories = [
    {
      name: c.catNecessary,
      purpose: c.catNecessaryPurpose,
      basis: c.catNecessaryBasis,
      examples: [
        {
          provider: "AION Cover",
          cookie: "__Host-session",
          retention: c.retentionSession,
          purpose: c.cookieSession,
        },
        {
          provider: "AION Cover",
          cookie: "csrf_token",
          retention: c.retentionSession,
          purpose: c.cookieCsrf,
        },
      ],
    },
    {
      name: c.catFunctional,
      purpose: c.catFunctionalPurpose,
      basis: c.catFunctionalBasis,
      examples: [
        {
          provider: "AION Cover",
          cookie: "aion_locale",
          retention: c.retention12mo,
          purpose: c.cookieLang,
        },
        {
          provider: "AION Cover",
          cookie: "aion_theme",
          retention: c.retention12mo,
          purpose: c.cookieTheme,
        },
      ],
    },
    {
      name: c.catAnalytics,
      purpose: c.catAnalyticsPurpose,
      basis: c.catAnalyticsBasis,
      examples: [
        {
          provider: "Vercel Inc.",
          cookie: "_va_*",
          retention: c.retentionShort,
          purpose: c.cookieAnalytics,
        },
      ],
    },
    {
      name: c.catMarketing,
      purpose: c.catMarketingPurpose,
      basis: c.catMarketingBasis,
      examples: [],
    },
  ];

  return (
    <LegalLayout
      title={c.title}
      intro={
        <>
          {c.introA.replace(/\.$/, "")}{" "}
          <Link
            className="text-primary hover:text-primary-dark transition-colors"
            href="/privacy"
          >
            {t.footer.legalPrivacy}
          </Link>
          .
        </>
      }
    >
      <Section>
        <H2>{c.s1Title}</H2>
        <P>{c.s1P}</P>
      </Section>

      <Section>
        <H2>{c.s2Title}</H2>
        <P>{c.s2P}</P>

        {categories.map((cat) => (
          <div key={cat.name} className="mt-8">
            <H3>{cat.name}</H3>
            <P>{cat.purpose}</P>
            <P>
              <Strong>{c.legalBasisLabel}:</Strong> {cat.basis}
            </P>

            {cat.examples.length > 0 ? (
              <div className="mt-4 overflow-x-auto rounded-xl border border-border">
                <table className="w-full text-sm text-left text-ink-soft">
                  <thead className="text-[11px] uppercase tracking-[0.14em] bg-muted/50 text-ink/70">
                    <tr>
                      <th className="px-4 py-3 font-semibold">
                        {c.tableProvider}
                      </th>
                      <th className="px-4 py-3 font-semibold">
                        {c.tableCookie}
                      </th>
                      <th className="px-4 py-3 font-semibold">{c.tableType}</th>
                      <th className="px-4 py-3 font-semibold">
                        {c.tableRetention}
                      </th>
                      <th className="px-4 py-3 font-semibold">
                        {c.tablePurpose}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {cat.examples.map((e) => (
                      <tr
                        key={`${cat.name}-${e.cookie}`}
                        className="border-t border-border align-top"
                      >
                        <td className="px-4 py-3 text-ink">{e.provider}</td>
                        <td className="px-4 py-3 font-mono text-[12px]">
                          {e.cookie}
                        </td>
                        <td className="px-4 py-3">{c.typeFirst}</td>
                        <td className="px-4 py-3">{e.retention}</td>
                        <td className="px-4 py-3">{e.purpose}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <P>
                <em>{c.noneActive}</em>
              </P>
            )}
          </div>
        ))}
      </Section>

      <Section>
        <H2>{c.s3Title}</H2>
        <P>{c.s3P}</P>
      </Section>

      <Section>
        <H2>{c.s4Title}</H2>
        <P>{c.s4P}</P>
        <UL>
          <li>
            <a
              className="text-primary hover:text-primary-dark transition-colors"
              href="https://support.google.com/chrome/answer/95647"
              target="_blank"
              rel="noreferrer noopener"
            >
              Google Chrome
            </a>
          </li>
          <li>
            <a
              className="text-primary hover:text-primary-dark transition-colors"
              href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Apple Safari
            </a>
          </li>
          <li>
            <a
              className="text-primary hover:text-primary-dark transition-colors"
              href="https://support.mozilla.org/kb/clear-cookies-and-site-data-firefox"
              target="_blank"
              rel="noreferrer noopener"
            >
              Mozilla Firefox
            </a>
          </li>
          <li>
            <a
              className="text-primary hover:text-primary-dark transition-colors"
              href="https://support.microsoft.com/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
              target="_blank"
              rel="noreferrer noopener"
            >
              Microsoft Edge
            </a>
          </li>
        </UL>
        <P>{c.s4Note}</P>
      </Section>

      <Section>
        <H2>{c.s5Title}</H2>
        <P>{c.s5P}</P>
      </Section>

      <Section>
        <H2>{c.s6Title}</H2>
        <P>{c.s6P}</P>
      </Section>

      <Section>
        <H2>{c.s7Title}</H2>
        <P>{c.s7P}</P>
      </Section>
    </LegalLayout>
  );
}
