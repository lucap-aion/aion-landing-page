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

  const verified = [
    { quote: t.testimonials.v1Quote, role: t.testimonials.v1Role },
    { quote: t.testimonials.v2Quote, role: t.testimonials.v2Role },
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
                {q.role ? (
                  <div className="text-xs uppercase tracking-[0.14em] text-ink-soft mt-1">
                    {q.role}
                  </div>
                ) : null}
              </figcaption>
            </motion.figure>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="mt-24 lg:mt-32 max-w-2xl mx-auto text-center"
        >
          <span className="eyebrow">{t.testimonials.verifiedEyebrow}</span>
          <h3 className="mt-4 font-serif text-3xl sm:text-4xl leading-[1.1] text-ink">
            {t.testimonials.verifiedTitle}
            <span className="italic text-primary">
              {t.testimonials.verifiedTitleAccent}
            </span>
            {t.testimonials.verifiedTitleTail}
          </h3>
        </motion.div>

        <div className="mt-12 grid md:grid-cols-2 gap-px bg-border border-y border-border max-w-4xl mx-auto">
          {verified.map((v, i) => (
            <motion.figure
              key={v.quote}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-background py-10 lg:py-12 px-8 md:first:pl-0 md:last:pr-0"
            >
              <blockquote className="font-serif text-ink text-xl lg:text-[1.4rem] leading-snug italic">
                &ldquo;{v.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5 text-xs uppercase tracking-[0.14em] text-ink-soft">
                {v.role}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
