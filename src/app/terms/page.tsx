import type { Metadata } from "next";
import { cookies } from "next/headers";
import { dictionaries, type Locale } from "@/lib/i18n/dictionaries";
import { TermsContent } from "./TermsContent";

export async function generateMetadata(): Promise<Metadata> {
  const localeCookie = cookies().get("aion_locale")?.value;
  const locale: Locale = localeCookie === "it" ? "it" : "en";
  const dict = dictionaries[locale];
  return {
    title: dict.legal.terms.title,
    description: dict.legal.terms.metaDescription,
  };
}

export default function TermsPage() {
  return <TermsContent />;
}
