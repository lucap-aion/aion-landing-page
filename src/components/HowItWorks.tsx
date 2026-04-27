"use client";

import { motion } from "framer-motion";
import { useI18n } from "./LanguageProvider";

export function HowItWorks() {
  const { t } = useI18n();

  const steps = [
    { n: "01", title: t.howItWorks.s1Title, body: t.howItWorks.s1Body },
    { n: "02", title: t.howItWorks.s2Title, body: t.howItWorks.s2Body },
    { n: "03", title: t.howItWorks.s3Title, body: t.howItWorks.s3Body },
    { n: "04", title: t.howItWorks.s4Title, body: t.howItWorks.s4Body },
  ];

  return (
    <section id="how-it-works" className="py-24 lg:py-36 bg-background">
      <div className="container max-w-6xl">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="eyebrow">{t.howItWorks.eyebrow}</span>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.05] text-ink">
              {t.howItWorks.titleA}
              <span className="italic text-primary">
                {t.howItWorks.titleAccent}
              </span>
              {t.howItWorks.titleB}
            </h2>
            <p className="mt-6 text-lg text-ink-soft leading-relaxed">
              {t.howItWorks.description}
            </p>
          </motion.div>
        </div>

        <ol className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-3xl overflow-hidden border border-border">
          {steps.map((s, i) => (
            <motion.li
              key={s.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="bg-background p-8 lg:p-10 flex flex-col gap-4 hover:bg-cream transition-colors duration-500"
            >
              <span className="font-serif text-primary text-3xl">{s.n}</span>
              <h3 className="font-serif text-2xl text-ink leading-tight">
                {s.title}
              </h3>
              <p className="text-ink-soft text-[15px] leading-relaxed">
                {s.body}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
