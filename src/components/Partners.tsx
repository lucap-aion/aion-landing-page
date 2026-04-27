"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useI18n } from "./LanguageProvider";
import { useTheme } from "./ThemeProvider";

const partners = [
  {
    name: "Chubb",
    src: "/partners/chubb.png",
  },
  {
    name: "Roberto Coin",
    src: "/partners/roberto-coin.svg",
  },
];

export function Partners() {
  const { t } = useI18n();
  const { theme } = useTheme();
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="eyebrow">{t.partners.eyebrow}</span>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.05] text-ink">
            {t.partners.titleA}
            <span className="italic text-primary">
              {t.partners.titleAccent}
            </span>
            {t.partners.titleB}
          </h2>
          <p className="mt-6 max-w-xl mx-auto text-lg text-ink-soft leading-relaxed">
            {t.partners.description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-16 lg:mt-20 grid grid-cols-2 gap-10 lg:gap-20 items-center justify-items-center"
        >
          {partners.map((p) => (
            <div
              key={p.name}
              className={`relative w-full max-w-[260px] h-16 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500 ${
                theme === "dark" ? "invert" : ""
              }`}
            >
              <Image
                src={p.src}
                alt={`${p.name} logo`}
                fill
                sizes="260px"
                className="object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
