"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Heart, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Enhance customer insights",
    body: "Gather rich, first-party customer data through complimentary protection — building an address book your CRM has been missing.",
  },
  {
    icon: Heart,
    title: "Foster customer loyalty",
    body: "Offer global coverage that safeguards your customers anywhere. Build trust and create relationships that endure beyond the sale.",
  },
  {
    icon: TrendingUp,
    title: "Drive revenue growth",
    body: "Boost in-store walk-ins, lift conversion rates, and unlock new upselling and cross-selling opportunities through aftersales touchpoints.",
  },
];

export function Brands() {
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
                src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=85&w=1200"
                alt="Luxury boutique customer experience"
                fill
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
              <span className="eyebrow">For brands</span>
              <h2 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.05] text-ink">
                An end-to-end{" "}
                <span className="italic text-primary">luxury</span> experience.
              </h2>
              <p className="mt-6 max-w-xl text-lg text-ink-soft leading-relaxed">
                Elevate your aftersales with world-class service. AION
                integrates with your customer journey — invisible to your
                brand, indispensable to your client.
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
