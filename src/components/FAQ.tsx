"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "How is AION integrated into my brand experience?",
    a: "AION is fully white-label. The platform sits behind your brand identity — your customer never leaves your world. We integrate at checkout (in-boutique or online) and operate under your visual language, tone, and assistance standards.",
  },
  {
    q: "What does the coverage actually include?",
    a: "Our partner insurers cover theft and accidental damage globally. Coverage scope, value thresholds, and claim processes are tailored to each brand — from limited-edition watches to bespoke furniture.",
  },
  {
    q: "How long does it take to launch?",
    a: "Most brand integrations go live within 4–6 weeks. We provide a dedicated launch team, brand-customized assets, staff training, and an analytics dashboard from day one.",
  },
  {
    q: "Who handles claims and customer assistance?",
    a: "Our specialised aftersales team manages every claim end-to-end with concierge-grade response. You retain full visibility through the AION dashboard while we operate seamlessly in the background.",
  },
  {
    q: "What insights will I get back?",
    a: "Real-time customer data: purchase patterns, retention trends, service requests, geographies, satisfaction signals. All exportable, all yours, all GDPR-compliant.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24 lg:py-36 bg-cream">
      <div className="container max-w-4xl">
        <div className="text-center max-w-2xl mx-auto">
          <span className="eyebrow">Questions</span>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.05] text-ink">
            Things brands{" "}
            <span className="italic text-primary">often ask</span>.
          </h2>
        </div>

        <ul className="mt-14 divide-y divide-border border-y border-border">
          {faqs.map((f, i) => {
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
