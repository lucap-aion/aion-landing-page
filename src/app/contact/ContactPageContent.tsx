"use client";

import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { useI18n } from "@/components/LanguageProvider";

export function ContactPageContent() {
  const { t } = useI18n();
  return (
    <main className="min-h-screen bg-background">
      <Nav />
      <section className="pt-32 lg:pt-40 pb-24 lg:pb-32">
        <div className="container max-w-4xl">
          <div className="text-center max-w-2xl mx-auto">
            <span className="eyebrow">{t.contactPage.eyebrow}</span>
            <h1 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-ink">
              {t.contactPage.titleA}
              <span className="italic text-primary">
                {t.contactPage.titleAccent}
              </span>
              {t.contactPage.titleB}
            </h1>
            <p className="mt-6 text-lg text-ink-soft leading-relaxed">
              {t.contactPage.description}
            </p>
          </div>

          <div className="mt-14 lg:mt-20">
            <ContactForm />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
