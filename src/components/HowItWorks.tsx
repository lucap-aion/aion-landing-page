"use client";

import { motion } from "framer-motion";

const steps = [
  {
    n: "01",
    title: "Coverage at checkout",
    body: "Delight your customers with complimentary coverage included at the moment of purchase — a quiet, premium gesture.",
  },
  {
    n: "02",
    title: "Simple online activation",
    body: "Activation in just a few clicks. Your customer, their treasure, protected — with no friction.",
  },
  {
    n: "03",
    title: "Effortless claims",
    body: "Submit claims through an intuitive platform with photographic evidence and instant status updates.",
  },
  {
    n: "04",
    title: "Dedicated assistance",
    body: "Personalized support from our expert team — concierge-grade response, available wherever your client is.",
  },
];

export function HowItWorks() {
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
            <span className="eyebrow">How it works</span>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.05] text-ink">
              From checkout to claim,{" "}
              <span className="italic text-primary">effortless</span>.
            </h2>
            <p className="mt-6 text-lg text-ink-soft leading-relaxed">
              A four-step journey designed with the precision your brand
              demands and the simplicity your customer expects.
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
