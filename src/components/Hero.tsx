"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Shield,
  Sparkles,
  Heart,
  CheckCircle2,
  Gem,
} from "lucide-react";
import { useI18n } from "./LanguageProvider";

// HSL component strings (use with hsl(... / alpha) syntax)
const E = "32 40% 24%";
const G = "36 45% 38%";
const GL = "36 45% 52%";
const S = "140 30% 38%";
const W = "38 70% 42%";

const earth = `hsl(${E})`;
const gold = `hsl(${G})`;
const goldLight = `hsl(${GL})`;
const success = `hsl(${S})`;
const warn = `hsl(${W})`;
const ea = (a: number) => `hsl(${E} / ${a})`;
const ga = (a: number) => `hsl(${G} / ${a})`;
const sa = (a: number) => `hsl(${S} / ${a})`;
const wa = (a: number) => `hsl(${W} / ${a})`;

const cream = "hsl(36 35% 96%)";
const creamMid = "hsl(36 40% 93%)";
const creamWarm = "hsl(36 55% 88%)";

export function Hero() {
  const { t } = useI18n();

  const stats = [
    { value: t.hero.stat1Value, label: t.hero.stat1Label },
    { value: t.hero.stat2Value, label: t.hero.stat2Label },
    { value: t.hero.stat3Value, label: t.hero.stat3Label },
  ];

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
            <span className="eyebrow">{t.hero.eyebrow}</span>
            <h1 className="mt-5 font-serif text-5xl sm:text-6xl lg:text-7xl leading-[1.02] tracking-tightest text-ink">
              {t.hero.titleA}
              <span className="italic text-primary">{t.hero.titleAccent}</span>
              {t.hero.titleB}
            </h1>
            <p className="mt-7 max-w-xl text-lg text-ink-soft leading-relaxed">
              {t.hero.description}
            </p>

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
              <AdminWindow />
            </div>
            <div className="absolute -bottom-8 -left-8 hidden sm:block w-52 rounded-2xl overflow-hidden shadow-elev border-4 border-background">
              <CoverageCard />
            </div>
            <div className="absolute -top-6 -right-6 hidden sm:block w-52 rounded-2xl overflow-hidden shadow-elev border-4 border-background">
              <ActivityCard />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function AdminWindow() {
  const { t } = useI18n();
  const a = t.hero.admin;
  return (
    <div
      className="absolute inset-0 flex flex-col"
      style={{
        background: `linear-gradient(160deg, ${cream} 0%, ${creamMid} 60%, ${creamWarm} 100%)`,
      }}
    >
      <div
        className="flex items-center justify-between px-5 py-3.5 border-b"
        style={{ borderColor: ea(0.1) }}
      >
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <span
              className="w-2.5 h-2.5 rounded-full"
              style={{ background: "hsl(8 55% 62%)" }}
            />
            <span
              className="w-2.5 h-2.5 rounded-full"
              style={{ background: "hsl(38 70% 58%)" }}
            />
            <span
              className="w-2.5 h-2.5 rounded-full"
              style={{ background: "hsl(140 30% 55%)" }}
            />
          </div>
          <span
            className="font-serif text-[13px] tracking-tight"
            style={{ color: earth }}
          >
            {a.title}
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <span
            className="flex items-center gap-1 px-1.5 py-0.5 rounded-md text-[9px] uppercase tracking-[0.14em] font-semibold"
            style={{ color: gold, background: ga(0.1) }}
          >
            <Sparkles size={9} strokeWidth={2.4} />
            {a.ai}
          </span>
          <span
            className="flex items-center gap-1 px-1.5 py-0.5 rounded-md text-[9px] uppercase tracking-[0.14em] font-semibold"
            style={{ color: success, background: sa(0.14) }}
          >
            <span
              className="w-1 h-1 rounded-full animate-pulse"
              style={{ background: "hsl(140 30% 48%)" }}
            />
            {a.live}
          </span>
        </div>
      </div>

      <div className="flex-1 px-5 py-4 flex flex-col gap-4 min-h-0">
        <div>
          <div
            className="text-[9px] uppercase tracking-[0.22em] font-semibold"
            style={{ color: gold }}
          >
            {a.thisQuarter}
          </div>
          <div
            className="mt-1.5 font-serif text-[32px] leading-none"
            style={{ color: earth }}
          >
            €2.4M
          </div>
          <div className="mt-1 text-[10px]" style={{ color: ea(0.7) }}>
            {a.heroSubtitle}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-1.5">
          {[
            { v: "4,218", l: a.kpiCustomers, d: "+12%" },
            { v: "94%", l: a.kpiLoyal, d: "+3.2" },
            { v: "312", l: a.kpiClaims, d: "+8" },
            { v: "98%", l: a.kpiResolved, d: "+1.4" },
          ].map((s) => (
            <div
              key={s.l}
              className="rounded-md px-2.5 py-2"
              style={{
                background: "rgba(255,255,255,0.7)",
                border: `1px solid ${ea(0.14)}`,
              }}
            >
              <div
                className="text-[8.5px] uppercase tracking-[0.14em] font-semibold"
                style={{ color: ea(0.7) }}
              >
                {s.l}
              </div>
              <div className="mt-1 flex items-baseline gap-1">
                <span
                  className="font-serif text-base leading-none"
                  style={{ color: earth }}
                >
                  {s.v}
                </span>
                <span
                  className="text-[9px] flex items-center gap-0.5"
                  style={{ color: gold }}
                >
                  <ArrowUpRight size={8} strokeWidth={2.4} />
                  {s.d}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div>
          <div
            className="text-[9px] uppercase tracking-[0.22em] font-semibold mb-1.5"
            style={{ color: ea(0.7) }}
          >
            {a.registrations}
          </div>
          <div
            className="rounded-md overflow-hidden"
            style={{
              background: "rgba(255,255,255,0.65)",
              border: `1px solid ${ea(0.14)}`,
            }}
          >
            {[
              { name: "Sarah M.", item: t.hero.activity.newRegistrationSub.split(" · ")[0], s: a.statusInsured, tone: gold, bg: ga(0.12) },
              { name: "Marc D.", item: "Timepiece", s: a.statusInTransit, tone: warn, bg: wa(0.14) },
              { name: "Anya R.", item: "Fine ring", s: a.statusInsured, tone: gold, bg: ga(0.12) },
            ].map((row, i) => (
              <div
                key={row.name}
                className="flex items-center justify-between px-2.5 py-1.5 text-[10.5px]"
                style={{
                  borderTop: i === 0 ? "none" : `1px solid ${ea(0.08)}`,
                  color: earth,
                }}
              >
                <div className="flex items-center gap-2 min-w-0">
                  <Gem
                    size={10}
                    strokeWidth={1.8}
                    style={{ color: gold, flexShrink: 0 }}
                  />
                  <span className="font-medium">{row.name}</span>
                  <span style={{ color: ea(0.4) }}>·</span>
                  <span style={{ color: ea(0.7) }}>{row.item}</span>
                </div>
                <span
                  className="text-[8.5px] uppercase tracking-[0.12em] font-semibold px-1.5 py-0.5 rounded shrink-0"
                  style={{ color: row.tone, background: row.bg }}
                >
                  {row.s}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-auto">
          <div
            className="text-[9px] uppercase tracking-[0.22em] font-semibold mb-2 flex items-center justify-between"
            style={{ color: ea(0.7) }}
          >
            <span>{a.chartLabel}</span>
            <span style={{ color: gold }}>+24%</span>
          </div>
          <div className="flex items-end gap-1 h-9">
            {[40, 55, 48, 62, 58, 72, 68, 82, 78, 90, 86, 96].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-sm"
                style={{
                  height: `${h}%`,
                  background: `linear-gradient(to top, ${gold}, ${goldLight})`,
                  opacity: 0.55 + i * 0.04,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function CoverageCard() {
  const { t } = useI18n();
  const c = t.hero.coverage;
  return (
    <div
      className="px-4 pt-4 pb-4 flex flex-col gap-2.5"
      style={{
        background: `linear-gradient(150deg, ${cream} 0%, ${creamWarm} 100%)`,
      }}
    >
      <div className="flex items-center justify-between">
        <div
          className="flex items-center gap-1.5 text-[9px] uppercase tracking-[0.18em] font-semibold"
          style={{ color: ea(0.7) }}
        >
          <Shield size={11} strokeWidth={1.8} style={{ color: gold }} />
          {c.label}
        </div>
        <span
          className="w-1.5 h-1.5 rounded-full animate-pulse"
          style={{ background: "hsl(140 40% 45%)" }}
        />
      </div>

      <div>
        <div
          className="font-serif text-[34px] leading-none"
          style={{ color: earth }}
        >
          98%
        </div>
        <div className="mt-1 text-[10px]" style={{ color: ea(0.7) }}>
          {c.subtitle}
        </div>
      </div>

      <div className="flex items-end gap-[3px] h-6 mt-1">
        {[3, 4, 3, 5, 4, 6, 5, 7, 6, 8, 7, 9, 8, 10, 9].map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-sm"
            style={{
              height: `${h * 10}%`,
              background: gold,
              opacity: 0.5 + i * 0.03,
            }}
          />
        ))}
      </div>

      <div
        className="flex items-center justify-between text-[9.5px] pt-2 border-t"
        style={{
          color: ea(0.7),
          borderColor: ea(0.14),
        }}
      >
        <span className="uppercase tracking-[0.12em] font-semibold">
          {c.footerLabel}
        </span>
        <span className="font-serif text-[12px]" style={{ color: earth }}>
          2.4h
        </span>
      </div>
    </div>
  );
}

function ActivityCard() {
  const { t } = useI18n();
  const ac = t.hero.activity;
  return (
    <div
      className="px-3.5 py-3 flex flex-col gap-2"
      style={{
        background: `linear-gradient(150deg, ${cream} 0%, ${creamWarm} 100%)`,
      }}
    >
      <div
        className="flex items-center justify-between text-[9px] uppercase tracking-[0.18em] font-semibold"
        style={{ color: ea(0.7) }}
      >
        <span className="flex items-center gap-1.5">
          <Sparkles size={10} strokeWidth={1.8} style={{ color: gold }} />
          {ac.label}
        </span>
        <span
          className="w-1.5 h-1.5 rounded-full animate-pulse"
          style={{ background: "hsl(140 40% 45%)" }}
        />
      </div>

      <div className="space-y-1.5">
        {[
          {
            Icon: Gem,
            title: ac.newRegistration,
            sub: ac.newRegistrationSub,
            tint: gold,
            bg: ga(0.14),
          },
          {
            Icon: CheckCircle2,
            title: ac.claimApproved,
            sub: ac.claimApprovedSub,
            tint: success,
            bg: sa(0.14),
          },
          {
            Icon: Heart,
            title: ac.loyalty,
            sub: ac.loyaltySub,
            tint: gold,
            bg: ga(0.14),
          },
        ].map((r) => (
          <div
            key={r.title}
            className="flex items-center gap-2"
            style={{ color: earth }}
          >
            <span
              className="w-5 h-5 rounded-md flex items-center justify-center shrink-0"
              style={{
                background: r.bg,
                color: r.tint,
              }}
            >
              <r.Icon size={10} strokeWidth={2} />
            </span>
            <div className="min-w-0 flex-1">
              <div className="text-[10px] font-medium leading-tight">
                {r.title}
              </div>
              <div
                className="text-[9px] leading-tight"
                style={{ color: ea(0.6) }}
              >
                {r.sub}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div
        className="rounded-md mt-1 px-2 py-1.5"
        style={{
          background: ga(0.12),
          border: `1px solid ${ga(0.28)}`,
        }}
      >
        <div
          className="text-[8.5px] uppercase tracking-[0.16em] font-semibold"
          style={{ color: gold }}
        >
          {ac.insightLabel}
        </div>
        <div
          className="text-[9.5px] leading-tight mt-0.5"
          style={{ color: earth }}
        >
          {ac.insightTextA}
          <span style={{ color: gold, fontWeight: 600 }}>4×</span>
          {ac.insightTextB}
        </div>
      </div>
    </div>
  );
}
