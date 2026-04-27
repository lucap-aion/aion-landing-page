"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { useI18n } from "./LanguageProvider";

export function FAQ() {
  const { t } = useI18n();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24 lg:py-36 bg-cream">
      <div className="container max-w-4xl">
        <div className="text-center max-w-2xl mx-auto">
          <span className="eyebrow">{t.faq.eyebrow}</span>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.05] text-ink">
            {t.faq.titleA}
            <span className="italic text-primary">{t.faq.titleAccent}</span>
            {t.faq.titleB}
          </h2>
        </div>

        <ul className="mt-14 divide-y divide-border border-y border-border">
          {t.faq.items.map((f, i) => {
            const isOpen = open === i;
            return (
              <li key={f.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-start justify-between gap-6 py-6 lg:py-7 text-left group"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-xl lg:text-2xl text-ink leading-snug group-hover:text-primary transition-colors">
                    {f.q}
                  </span>
                  <span
                    className={`shrink-0 mt-1 w-9 h-9 rounded-full border border-border flex items-center justify-center transition-all duration-500 ${
                      isOpen
                        ? "bg-primary-dark border-primary-dark text-white rotate-45"
                        : "text-ink"
                    }`}
                  >
                    <Plus size={16} strokeWidth={1.8} />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-7 pr-14 text-ink-soft leading-relaxed">
                        {f.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
