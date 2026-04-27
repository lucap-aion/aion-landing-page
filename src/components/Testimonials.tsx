"use client";

import { motion } from "framer-motion";

const quotes = [
  {
    quote:
      "This is genius. We had so many complaints from customers paying for repairs — AION solved it overnight.",
    name: "Jewelry Brand",
    role: "Chief Marketing Officer",
  },
  {
    quote:
      "For a luxury furniture brand we advised, introducing AION's extended warranty increased registration rates three-fold.",
    name: "Luxury Brands Advisor",
    role: "Senior Partner",
  },
  {
    quote:
      "I’ve worked in this industry for decades — I’ve never seen anything quite this effective.",
    name: "Fashion Brand",
    role: "Operations Manager",
  },
];

export function Testimonials() {
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
            <span className="eyebrow">Voices from the industry</span>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.05] text-ink">
              Whispered in{" "}
              <span className="italic text-primary">private rooms</span>.
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
