"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "./Button";
import { useI18n } from "./LanguageProvider";

export function CTA() {
  const { t } = useI18n();
  return (
    <section id="contact" className="py-24 lg:py-32 bg-background">
      <div className="container max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative rounded-[2rem] overflow-hidden bg-primary-dark text-white shadow-elev"
        >
          <div className="absolute inset-0 opacity-55">
            <Image
              src="https://images.unsplash.com/photo-1689397136362-dce64e557fcc?auto=format&fit=crop&q=92&w=1800"
              alt=""
              fill
              quality={92}
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary-dark/85 to-primary-dark/35" />

          <div className="relative px-8 sm:px-12 lg:px-20 py-20 lg:py-28 max-w-3xl">
            <span className="eyebrow !text-primary-light/90">
              {t.cta.eyebrow}
            </span>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">
              {t.cta.titleA}
              <br />
              <span className="italic text-primary-light">
                {t.cta.titleB}
              </span>
            </h2>
            <p className="mt-6 max-w-xl text-lg text-white/75 leading-relaxed">
              {t.cta.description}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Button href="/contact" variant="light">
                {t.cta.ctaPrimary} <ArrowRight size={16} />
              </Button>
              <Button
                href="https://app.aioncover.com/all"
                variant="ghost"
                className="!text-white hover:!text-primary-light"
              >
                {t.cta.ctaSecondary} →
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
