"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "./Button";

const stats = [
  { value: "Global", label: "Coverage footprint" },
  { value: "B2B", label: "White-label" },
  { value: "24/7", label: "Claims assistance" },
];

export function Hero() {
  return (
    <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-28 overflow-hidden gradient-edge">
      <div className="container max-w-6xl relative">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <span className="eyebrow">Embedded protection · B2B</span>
            <h1 className="mt-5 font-serif text-5xl sm:text-6xl lg:text-7xl leading-[1.02] tracking-tightest text-ink">
              Global protection for{" "}
              <span className="italic text-primary">luxury</span> products.
            </h1>
            <p className="mt-7 max-w-xl text-lg text-ink-soft leading-relaxed">
              AION empowers iconic brands to safeguard their customers&apos;
              treasures from theft and accidental damages — a B2B white-label
              service that turns aftersales into lifelong loyalty.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Button href="https://app.aioncover.com" variant="primary">
                Get started <ArrowRight size={16} />
              </Button>
              <Button href="#features" variant="outline">
                See features
              </Button>
            </div>

            <dl className="mt-14 grid grid-cols-3 gap-6 max-w-lg border-t border-border pt-8">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="font-serif text-2xl text-primary-dark">
                    {s.value}
                  </dt>
                  <dd className="mt-1 text-xs uppercase tracking-[0.14em] text-ink-soft">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-elev">
              <Image
                src="https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&q=92&w=2400"
                alt="Luxury timepiece resting on a leather-bound book"
                fill
                priority
                quality={92}
                sizes="(min-width: 1024px) 42vw, 92vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/30 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-8 -left-8 hidden sm:block w-48 h-48 rounded-2xl overflow-hidden shadow-elev border-4 border-background">
              <Image
                src="https://images.unsplash.com/photo-1591348278863-a8fb3887e2aa?auto=format&fit=crop&q=92&w=1200"
                alt="Designer handbags on neutral linen"
                fill
                quality={92}
                sizes="200px"
                className="object-cover"
              />
            </div>
            <div className="absolute -top-6 -right-6 hidden sm:block w-32 h-32 rounded-2xl overflow-hidden shadow-elev border-4 border-background">
              <Image
                src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=92&w=800"
                alt="Solitaire diamond ring on a black box"
                fill
                quality={92}
                sizes="128px"
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>

        <div className="mt-20 lg:mt-28 flex flex-col items-center">
          <p className="text-xs uppercase tracking-[0.22em] text-ink-soft">
            Trusted across luxury verticals
          </p>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-x-12 gap-y-6 items-center justify-items-center">
            {["Jewelry", "Watches", "Leather Goods", "Furniture"].map((v) => (
              <span
                key={v}
                className="font-serif text-lg text-ink/40 tracking-wider"
              >
                {v}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
