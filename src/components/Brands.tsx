"use client";

import { motion } from "framer-motion";
import { useI18n } from "./LanguageProvider";

export function Brands() {
  const { t } = useI18n();

  const features = [
    { title: t.brands.feature1Title, body: t.brands.feature1Body },
    { title: t.brands.feature2Title, body: t.brands.feature2Body },
    { title: t.brands.feature3Title, body: t.brands.feature3Body },
  ];

  return (
    <section id="features" className="py-24 lg:py-36 bg-cream relative">
      <div className="container max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <span className="eyebrow">{t.brands.eyebrow}</span>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.05] text-ink">
            {t.brands.titleA}
            <span className="italic text-primary">
              {t.brands.titleAccent}
            </span>
            {t.brands.titleB}
          </h2>
          <p className="mt-6 text-lg text-ink-soft leading-relaxed">
            {t.brands.description}
          </p>
        </motion.div>

        <ul className="mt-16 lg:mt-20 grid md:grid-cols-3 gap-px bg-border border-y border-border">
          {features.map((f, i) => (
            <motion.li
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-cream py-10 lg:py-12 pr-6"
            >
              <span
                className="block w-10 h-px bg-primary"
                aria-hidden
              />
              <h3 className="mt-6 font-serif text-2xl text-ink leading-tight">
                {f.title}
              </h3>
              <p className="mt-3 text-ink-soft leading-relaxed">{f.body}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
