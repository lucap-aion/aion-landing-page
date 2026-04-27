"use client";

import { motion } from "framer-motion";
import { useI18n } from "./LanguageProvider";

export function Testimonials() {
  const { t } = useI18n();

  const quotes = [
    { quote: t.testimonials.q1Quote, name: t.testimonials.q1Name, role: t.testimonials.q1Role },
    { quote: t.testimonials.q2Quote, name: t.testimonials.q2Name, role: t.testimonials.q2Role },
    { quote: t.testimonials.q3Quote, name: t.testimonials.q3Name, role: t.testimonials.q3Role },
  ];

  return (
    <section id="testimonials" className="py-24 lg:py-36 bg-background">
      <div className="container max-w-6xl">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="eyebrow">{t.testimonials.eyebrow}</span>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.05] text-ink">
              {t.testimonials.titleA}
              <span className="italic text-primary">
                {t.testimonials.titleAccent}
              </span>
              {t.testimonials.titleB}
            </h2>
          </motion.div>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {quotes.map((q, i) => (
            <motion.figure
              key={q.name + q.role}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="rounded-3xl bg-cream p-8 lg:p-10 border border-border shadow-card flex flex-col"
            >
              <span
                className="font-serif text-primary text-6xl leading-none"
                aria-hidden
              >
                &ldquo;
              </span>
              <blockquote className="mt-2 text-ink-soft leading-relaxed text-[17px] flex-1">
                {q.quote}
              </blockquote>
              <figcaption className="mt-6 pt-6 border-t border-border">
                <div className="font-serif text-lg text-ink">{q.name}</div>
                <div className="text-xs uppercase tracking-[0.14em] text-ink-soft mt-1">
                  {q.role}
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
