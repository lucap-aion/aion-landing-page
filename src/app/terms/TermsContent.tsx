"use client";

import Link from "next/link";
import {
  LegalLayout,
  H2,
  H3,
  P,
  UL,
  Section,
} from "@/components/LegalLayout";
import { useI18n } from "@/components/LanguageProvider";

export function TermsContent() {
  const { t } = useI18n();
  const x = t.legal.terms;
  return (
    <LegalLayout title={x.title} intro={<>{x.introA}</>}>
      <Section>
        <H2>{x.s1Title}</H2>
        <P>{x.s1P1}</P>
        <P>{x.s1P2}</P>
      </Section>

      <Section>
        <H2>{x.s2Title}</H2>
        <UL>
          <li>{x.s2L1}</li>
          <li>{x.s2L2}</li>
          <li>{x.s2L3}</li>
          <li>{x.s2L4}</li>
          <li>{x.s2L5}</li>
          <li>{x.s2L6}</li>
        </UL>
      </Section>

      <Section>
        <H2>{x.s3Title}</H2>
        <P>{x.s3P1}</P>
        <P>{x.s3P2}</P>
      </Section>

      <Section>
        <H2>{x.s4Title}</H2>
        <P>{x.s4P}</P>
      </Section>

      <Section>
        <H2>{x.s5Title}</H2>
        <P>{x.s5P}</P>
        <UL>
          <li>{x.s5L1}</li>
          <li>{x.s5L2}</li>
          <li>{x.s5L3}</li>
          <li>{x.s5L4}</li>
          <li>{x.s5L5}</li>
        </UL>
      </Section>

      <Section>
        <H2>{x.s6Title}</H2>
        <P>{x.s6P}</P>
        <UL>
          <li>{x.s6L1}</li>
          <li>{x.s6L2}</li>
          <li>{x.s6L3}</li>
          <li>{x.s6L4}</li>
        </UL>
      </Section>

      <Section>
        <H2>{x.s7Title}</H2>
        <P>{x.s7P1}</P>
        <P>{x.s7P2}</P>
        <P>
          {x.s7P3.replace("Privacy Policy", "")}
          <Link
            className="text-primary hover:text-primary-dark transition-colors"
            href="/privacy"
          >
            {t.footer.legalPrivacy}
          </Link>
          .
        </P>
      </Section>

      <Section>
        <H2>{x.s8Title}</H2>
        <P>{x.s8P1}</P>
        <P>{x.s8P2}</P>
      </Section>

      <Section>
        <H2>{x.s9Title}</H2>
        <P>{x.s9P1}</P>
        <P>{x.s9P2}</P>
      </Section>

      <Section>
        <H2>{x.s10Title}</H2>
        <P>{x.s10P}</P>
        <UL>
          <li>{x.s10L1}</li>
          <li>{x.s10L2}</li>
        </UL>
        <P>{x.s10P2}</P>
      </Section>

      <Section>
        <H2>{x.s11Title}</H2>
        <P>{x.s11P}</P>
      </Section>

      <Section>
        <H2>{x.s12Title}</H2>
        <P>{x.s12P}</P>
      </Section>

      <Section>
        <H2>{x.s13Title}</H2>
        <P>{x.s13P}</P>
      </Section>

      <Section>
        <H2>{x.s14Title}</H2>
        <P>{x.s14P1}</P>
        <P>{x.s14P2}</P>
        <P>{x.s14P3}</P>
      </Section>

      <Section>
        <H2>{x.s15Title}</H2>
        <P>{x.s15P}</P>
      </Section>

      <Section>
        <H2>{x.s16Title}</H2>
        <H3>{x.s16Sub1}</H3>
        <P>{x.s16P1}</P>
        <H3>{x.s16Sub2}</H3>
        <P>{x.s16P2}</P>
        <H3>{x.s16Sub3}</H3>
        <P>{x.s16P3}</P>
        <H3>{x.s16Sub4}</H3>
        <P>{x.s16P4}</P>
        <H3>{x.s16Sub5}</H3>
        <P>{x.s16P5}</P>
        <H3>{x.s16Sub6}</H3>
        <P>{x.s16P6}</P>
      </Section>

      <Section>
        <H2>{x.s17Title}</H2>
        <P>{x.s17P1}</P>
        <P>{x.s17P2}</P>
      </Section>

      <Section>
        <H2>{x.s18Title}</H2>
        <P>{x.s18P}</P>
      </Section>
    </LegalLayout>
  );
}
