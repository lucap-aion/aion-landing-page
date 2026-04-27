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

export function PrivacyContent() {
  const { t } = useI18n();
  const p = t.legal.privacy;

  const link = (href: string, label: string) => (
    <a
      className="text-primary hover:text-primary-dark transition-colors"
      href={href}
    >
      {label}
    </a>
  );

  return (
    <LegalLayout title={p.title} intro={<>{p.introA}</>}>
      <Section>
        <H2>{p.s1Title}</H2>
        <P>
          {p.s1P1A}
          <Strong>{p.s1Entity}</Strong>
          {p.s1P1B}
          {link(`mailto:${p.s1Email}`, p.s1Email)}
          {p.s1P1C}
        </P>
        <P>{p.s1P2}</P>
      </Section>

      <Section>
        <H2>{p.s2Title}</H2>
        <P>{p.s2P1}</P>
        <UL>
          <li>{p.s2L1}</li>
          <li>{p.s2L2}</li>
          <li>{p.s2L3}</li>
          <li>{p.s2L4}</li>
        </UL>
        <P>{p.s2P2}</P>
      </Section>

      <Section>
        <H2>{p.s3Title}</H2>
        <H3>{p.s3SubA}</H3>
        <UL>
          <li>{p.s3aL1}</li>
          <li>{p.s3aL2}</li>
          <li>{p.s3aL3}</li>
        </UL>
        <H3>{p.s3SubB}</H3>
        <UL>
          <li>{p.s3bL1}</li>
          <li>{p.s3bL2}</li>
          <li>
            {p.s3bL3.split(":")[0]}:{" "}
            <Link
              className="text-primary hover:text-primary-dark transition-colors"
              href="/cookies"
            >
              {t.footer.legalCookies}
            </Link>
            .
          </li>
        </UL>
        <H3>{p.s3SubC}</H3>
        <P>{p.s3cP}</P>
      </Section>

      <Section>
        <H2>{p.s4Title}</H2>
        <P>{p.s4P}</P>
        <UL>
          <li>{p.s4L1}</li>
          <li>{p.s4L2}</li>
          <li>{p.s4L3}</li>
          <li>{p.s4L4}</li>
          <li>{p.s4L5}</li>
          <li>{p.s4L6}</li>
          <li>{p.s4L7}</li>
        </UL>
        <P>{p.s4P2}</P>
      </Section>

      <Section>
        <H2>{p.s5Title}</H2>
        <P>{p.s5P}</P>
        <UL>
          <li>{p.s5L1}</li>
          <li>{p.s5L2}</li>
          <li>{p.s5L3}</li>
          <li>{p.s5L4}</li>
          <li>{p.s5L5}</li>
          <li>{p.s5L6}</li>
          <li>{p.s5L7}</li>
        </UL>
        <P>{p.s5P2}</P>
      </Section>

      <Section>
        <H2>{p.s6Title}</H2>
        <P>{p.s6P}</P>
      </Section>

      <Section>
        <H2>{p.s7Title}</H2>
        <P>{p.s7P}</P>
        <UL>
          <li>{p.s7L1}</li>
          <li>{p.s7L2}</li>
          <li>{p.s7L3}</li>
          <li>{p.s7L4}</li>
        </UL>
      </Section>

      <Section>
        <H2>{p.s8Title}</H2>
        <P>{p.s8P1}</P>
        <P>{p.s8P2}</P>
      </Section>

      <Section>
        <H2>{p.s9Title}</H2>
        <P>{p.s9P}</P>
        <UL>
          <li>{p.s9L1}</li>
          <li>{p.s9L2}</li>
          <li>{p.s9L3}</li>
          <li>{p.s9L4}</li>
          <li>{p.s9L5}</li>
          <li>{p.s9L6}</li>
          <li>{p.s9L7}</li>
          <li>{p.s9L8}</li>
        </UL>
        <P>{p.s9P2}</P>
      </Section>

      <Section>
        <H2>{p.s10Title}</H2>
        <P>{p.s10P}</P>
      </Section>

      <Section>
        <H2>{p.s11Title}</H2>
        <P>{p.s11P}</P>
      </Section>

      <Section>
        <H2>{p.s12Title}</H2>
        <P>{p.s12P}</P>
      </Section>

      <Section>
        <H2>{p.s13Title}</H2>
        <P>{p.s13P}</P>
      </Section>
    </LegalLayout>
  );
}
