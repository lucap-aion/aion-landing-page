"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Shield, Layers, BarChart3 } from "lucide-react";

const solutions = [
  {
    icon: Shield,
    title: "Comprehensive coverage",
    body: "Partnered with leading global insurers to cover theft and accidental damage — wherever your customers travel.",
    image:
      "https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&q=92&w=1800",
    alt: "Layered fine gold chain necklaces",
  },
  {
    icon: Layers,
    title: "White-label platform",
    body: "A customisable, omnichannel solution that integrates seamlessly into your brand — across boutique, web, and concierge.",
    image:
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&q=92&w=1800",
    alt: "Refined jewelry editorial portrait",
  },
  {
    icon: BarChart3,
    title: "Actionable insights",
    body: "Real-time intelligence on customer satisfaction, retention trends, and service requests — reported the way your team works.",
    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=92&w=1800",
    alt: "Gold chain pendants on a neutral surface",
  },
];

export function Solution() {
  return (
    <section
      id="solution"
      className="relative py-24 lg:py-36 bg-primary-dark text-white overflow-hidden noise"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-primary-dark via-primary-dark to-[hsl(32,40%,18%)]" />
      <div className="container max-w-6xl relative">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="eyebrow !text-primary-light/90">Our solution</span>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.05]">
              Three pillars,{" "}
              <span className="italic text-primary-light">one platform</span>.
            </h2>
            <p className="mt-6 text-lg text-white/70 leading-relaxed">
              Every component crafted to operate beneath your brand — visible
              only when it matters most.
            </p>
          </motion.div>
        </div>

        <div className="mt-16 grid lg:grid-cols-3 gap-6">
          {solutions.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="group rounded-3xl overflow-hidden bg-white/[0.04] backdrop-blur-sm border border-white/10 hover:border-primary-light/40 transition-all duration-500"
            >
              <div className="relative aspect-[5/3] overflow-hidden">
                <Image
                  src={s.image}
                  alt={s.alt}
                  fill
                  quality={92}
                  sizes="(min-width: 1024px) 33vw, 90vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-[1.4s] ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-primary-dark/20 to-transparent" />
              </div>
              <div className="p-7 lg:p-8">
                <div className="w-11 h-11 rounded-xl bg-primary/20 text-primary-light flex items-center justify-center">
                  <s.icon size={20} strokeWidth={1.6} />
                </div>
                <h3 className="mt-5 font-serif text-2xl">{s.title}</h3>
                <p className="mt-3 text-white/70 text-[15px] leading-relaxed">
                  {s.body}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
