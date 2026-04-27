"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "./Button";

export function CTA() {
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
          <div className="absolute inset-0 opacity-25">
            <Image
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=92&w=2400"
              alt=""
              fill
              quality={92}
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary-dark/90 to-primary-dark/60" />

          <div className="relative px-8 sm:px-12 lg:px-20 py-20 lg:py-28 max-w-3xl">
            <span className="eyebrow !text-primary-light/90">Get in touch</span>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">
              Join AION Cover.
              <br />
              <span className="italic text-primary-light">
                Elevate your aftersales.
              </span>
            </h2>
            <p className="mt-6 max-w-xl text-lg text-white/75 leading-relaxed">
              Tell us about your brand. We&apos;ll show you what an integrated
              protection programme looks like — bespoke to your category and
              clientele.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Button
                href="mailto:hello@aioncover.com"
                variant="light"
                className="text-ink"
              >
                hello@aioncover.com <ArrowRight size={16} />
              </Button>
              <Button
                href="https://app.aioncover.com"
                variant="ghost"
                className="!text-white hover:!text-primary-light"
              >
                Go to platform →
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
