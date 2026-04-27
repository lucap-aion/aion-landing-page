"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Heart, TrendingUp } from "lucide-react";
import { useI18n } from "./LanguageProvider";

export function Brands() {
  const { t } = useI18n();

  const features = [
    {
      icon: Sparkles,
      title: t.brands.feature1Title,
      body: t.brands.feature1Body,
    },
    {
      icon: Heart,
      title: t.brands.feature2Title,
      body: t.brands.feature2Body,
    },
    {
      icon: TrendingUp,
      title: t.brands.feature3Title,
      body: t.brands.feature3Body,
    },
  ];

  return (
    <section id="features" className="py-24 lg:py-36 bg-cream relative">
      <div className="container max-w-6xl">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-elev"
            >
              <Image
                src="https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&q=92&w=1200"
                alt={t.brands.titleAccent}
                fill
                quality={92}
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover"
              />
            </motion.div>
          </div>

          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <span className="eyebrow">{t.brands.eyebrow}</span>
              <h2 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.05] text-ink">
                {t.brands.titleA}
                <span className="italic text-primary">
                  {t.brands.titleAccent}
                </span>
                {t.brands.titleB}
              </h2>
              <p className="mt-6 max-w-xl text-lg text-ink-soft leading-relaxed">
                {t.brands.description}
              </p>
            </motion.div>

            <ul className="mt-12 space-y-8">
              {features.map((f, i) => (
                <motion.li
                  key={f.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="flex gap-5"
                >
                  <div className="shrink-0 w-12 h-12 rounded-2xl bg-primary-light flex items-center justify-center text-primary-dark">
                    <f.icon size={20} strokeWidth={1.6} />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl text-ink">{f.title}</h3>
                    <p className="mt-2 text-ink-soft leading-relaxed">
                      {f.body}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
