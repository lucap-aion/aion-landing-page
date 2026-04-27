"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Layers,
  BarChart3,
  ArrowUpRight,
  Sparkles,
  MapPin,
  Globe,
  Store,
  Monitor,
  ConciergeBell,
  Check,
} from "lucide-react";
import { useI18n } from "./LanguageProvider";

// HSL component strings (use with hsl(... / alpha) syntax)
const E = "32 40% 24%";
const G = "36 45% 38%";
const GL = "36 45% 52%";
const S = "140 30% 38%";
const SD = "140 30% 48%";
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

function WindowChrome({
  title,
  badge,
}: {
  title: string;
  badge?: React.ReactNode;
}) {
  return (
    <div
      className="flex items-center justify-between px-4 py-2.5 border-b shrink-0"
      style={{ borderColor: ea(0.1) }}
    >
      <div className="flex items-center gap-2.5">
        <div className="flex gap-1">
          <span
            className="w-2 h-2 rounded-full"
            style={{ background: "hsl(8 55% 62%)" }}
          />
          <span
            className="w-2 h-2 rounded-full"
            style={{ background: "hsl(38 70% 58%)" }}
          />
          <span
            className="w-2 h-2 rounded-full"
            style={{ background: "hsl(140 30% 55%)" }}
          />
        </div>
        <span
          className="font-serif text-[11px] tracking-tight"
          style={{ color: earth }}
        >
          {title}
        </span>
      </div>
      {badge}
    </div>
  );
}

function GraphicShell({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="absolute inset-0 flex flex-col"
      style={{
        background: `linear-gradient(160deg, ${cream} 0%, ${creamMid} 60%, ${creamWarm} 100%)`,
      }}
    >
      {children}
    </div>
  );
}

function LiveBadge({ label }: { label: string }) {
  return (
    <span
      className="flex items-center gap-1 px-1.5 py-0.5 rounded-md text-[8.5px] uppercase tracking-[0.14em] font-semibold"
      style={{ color: success, background: sa(0.14) }}
    >
      <span
        className="w-1 h-1 rounded-full animate-pulse"
        style={{ background: `hsl(${SD})` }}
      />
      {label}
    </span>
  );
}

function CoverageWindow() {
  const { t } = useI18n();
  const c = t.solution.coverage;
  return (
    <GraphicShell>
      <WindowChrome
        title={c.windowTitle}
        badge={
          <div className="flex items-center gap-1.5">
            <span
              className="flex items-center gap-1 px-1.5 py-0.5 rounded-md text-[8.5px] uppercase tracking-[0.14em] font-semibold"
              style={{ color: gold, background: ga(0.1) }}
            >
              <Globe size={9} strokeWidth={2.2} /> 47
            </span>
            <LiveBadge label={c.badgeActive} />
          </div>
        }
      />

      <div className="flex-1 px-4 py-3.5 grid grid-cols-[0.95fr_1.05fr] gap-3 min-h-0">
        <div className="flex flex-col gap-2.5 min-w-0">
          <div>
            <div
              className="text-[9px] uppercase tracking-[0.18em] font-semibold"
              style={{ color: gold }}
            >
              {c.policy} · #4821
            </div>
            <div
              className="font-serif text-[16px] leading-tight mt-1"
              style={{ color: earth }}
            >
              {c.asset}
            </div>
            <div className="flex flex-wrap gap-1 mt-2">
              {[c.tagTheft, c.tagDamage, c.tagWorldwide].map((tag) => (
                <span
                  key={tag}
                  className="text-[8.5px] px-1.5 py-0.5 rounded uppercase tracking-[0.12em] font-semibold"
                  style={{ color: gold, background: ga(0.12) }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div
            className="rounded-md px-2.5 py-2 mt-auto"
            style={{
              background: "rgba(255,255,255,0.65)",
              border: `1px solid ${ea(0.14)}`,
            }}
          >
            <div
              className="text-[9px] uppercase tracking-[0.18em] font-semibold"
              style={{ color: ea(0.7) }}
            >
              {c.insuredValue}
            </div>
            <div
              className="font-serif text-[18px] leading-none mt-1.5"
              style={{ color: earth }}
            >
              €128,400
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-1.5 min-w-0">
          <div
            className="text-[9px] uppercase tracking-[0.18em] font-semibold flex items-center justify-between"
            style={{ color: ea(0.7) }}
          >
            <span>{c.recentEvents}</span>
            <span style={{ color: gold }}>+2</span>
          </div>
          {[
            { loc: "Paris", kind: c.eventTheft, t: c.eventResolved, tone: success, bg: sa(0.14) },
            { loc: "Madrid", kind: c.eventDamage, t: c.eventReview, tone: warn, bg: wa(0.14) },
            { loc: "Tokyo", kind: c.eventDamage, t: c.eventResolved, tone: success, bg: sa(0.14) },
          ].map((e) => (
            <div
              key={`${e.loc}-${e.kind}`}
              className="flex items-center justify-between gap-2 px-2 py-1.5 rounded"
              style={{
                background: "rgba(255,255,255,0.6)",
                border: `1px solid ${ea(0.12)}`,
                color: earth,
              }}
            >
              <span className="flex items-center gap-1.5 min-w-0 flex-1">
                <MapPin
                  size={10}
                  strokeWidth={2}
                  style={{ color: ea(0.55), flexShrink: 0 }}
                />
                <span className="min-w-0 leading-tight">
                  <span className="block text-[10px] font-medium">
                    {e.loc}
                  </span>
                  <span
                    className="block text-[8.5px]"
                    style={{ color: ea(0.65) }}
                  >
                    {e.kind}
                  </span>
                </span>
              </span>
              <span
                className="text-[8.5px] uppercase tracking-[0.12em] font-semibold px-1.5 py-0.5 rounded shrink-0"
                style={{ color: e.tone, background: e.bg }}
              >
                {e.t}
              </span>
            </div>
          ))}
        </div>
      </div>
    </GraphicShell>
  );
}

function PlatformWindow() {
  const { t } = useI18n();
  const p = t.solution.platform;
  const channels = [
    { Icon: Store, label: p.boutiqueLabel, host: p.boutiqueHost },
    { Icon: Monitor, label: p.webLabel, host: p.webHost },
    { Icon: ConciergeBell, label: p.conciergeLabel, host: p.conciergeHost },
  ];
  return (
    <GraphicShell>
      <WindowChrome
        title={p.windowTitle}
        badge={
          <span
            className="text-[8.5px] uppercase tracking-[0.14em] font-semibold flex items-center gap-1"
            style={{ color: ea(0.7) }}
          >
            <Sparkles size={9} strokeWidth={2.2} style={{ color: gold }} />
            {p.yourBrand}
          </span>
        }
      />

      <div className="flex-1 px-4 py-3.5 grid grid-cols-[1fr_1fr] gap-3 min-h-0">
        <div className="flex flex-col gap-1.5 min-w-0">
          <div
            className="text-[9px] uppercase tracking-[0.18em] font-semibold"
            style={{ color: ea(0.7) }}
          >
            {p.surfaces}
          </div>
          {channels.map((c) => (
            <div
              key={c.label}
              className="flex items-center justify-between gap-2 px-2 py-1.5 rounded"
              style={{
                background: "rgba(255,255,255,0.7)",
                border: `1px solid ${ea(0.14)}`,
              }}
            >
              <span
                className="flex items-center gap-2 min-w-0 flex-1"
                style={{ color: earth }}
              >
                <c.Icon
                  size={13}
                  strokeWidth={1.8}
                  style={{ color: gold, flexShrink: 0 }}
                />
                <span className="min-w-0 leading-tight">
                  <span className="block text-[10.5px] font-medium">
                    {c.label}
                  </span>
                  <span
                    className="block text-[8.5px] truncate"
                    style={{ color: ea(0.6) }}
                  >
                    {c.host}
                  </span>
                </span>
              </span>
              <Check
                size={11}
                strokeWidth={2.6}
                style={{ color: success, flexShrink: 0 }}
              />
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-1.5 min-w-0">
          <div
            className="text-[9px] uppercase tracking-[0.18em] font-semibold"
            style={{ color: ea(0.7) }}
          >
            {p.brandTheme}
          </div>
          <div
            className="flex-1 rounded-md p-2.5 flex flex-col gap-2"
            style={{
              background: "rgba(255,255,255,0.7)",
              border: `1px solid ${ea(0.14)}`,
            }}
          >
            <div className="flex items-center justify-between">
              <span
                className="text-[8.5px] uppercase tracking-[0.14em] font-semibold"
                style={{ color: ea(0.7) }}
              >
                {p.display}
              </span>
              <span
                className="font-serif text-[18px] leading-none"
                style={{ color: earth }}
              >
                Aa
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              {[earth, gold, goldLight, creamWarm, cream].map((c, i) => (
                <span
                  key={i}
                  className="w-3.5 h-3.5 rounded-full"
                  style={{
                    background: c,
                    border: `1px solid ${ea(0.18)}`,
                  }}
                />
              ))}
            </div>
            <div className="h-px w-full" style={{ background: ea(0.12) }} />
            <div className="flex items-center justify-between">
              <span
                className="text-[8.5px] uppercase tracking-[0.14em] font-semibold"
                style={{ color: ea(0.7) }}
              >
                {p.logo}
              </span>
              <span
                className="font-serif text-[10.5px] tracking-[0.22em]"
                style={{ color: earth }}
              >
                BRAND
              </span>
            </div>
          </div>
        </div>
      </div>
    </GraphicShell>
  );
}

function InsightsWindow() {
  const { t } = useI18n();
  const i = t.solution.insights;
  const bars = [38, 52, 46, 64, 58, 76, 70, 88];
  return (
    <GraphicShell>
      <WindowChrome
        title={i.windowTitle}
        badge={
          <div className="flex items-center gap-1.5">
            <span
              className="flex items-center gap-1 px-1.5 py-0.5 rounded-md text-[8.5px] uppercase tracking-[0.14em] font-semibold"
              style={{ color: gold, background: ga(0.1) }}
            >
              <Sparkles size={9} strokeWidth={2.2} />
              {i.ai}
            </span>
            <LiveBadge label={i.live} />
          </div>
        }
      />

      <div className="flex-1 px-4 py-3.5 flex flex-col gap-2.5 min-h-0">
        <div className="grid grid-cols-3 gap-1.5">
          {[
            { v: "94%", l: i.kpiSatisfaction, d: "+3.2" },
            { v: "71%", l: i.kpiRetention, d: "+8.6" },
            { v: "312", l: i.kpiClaims, d: "+12" },
          ].map((s) => (
            <div
              key={s.l}
              className="rounded-md px-2 py-1.5"
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
                  className="font-serif text-[17px] leading-none"
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

        <div
          className="flex items-end gap-1 flex-1 min-h-[40px]"
          style={{ borderBottom: `1px dashed ${ea(0.18)}` }}
        >
          {bars.map((h, idx) => (
            <div
              key={idx}
              className="flex-1 rounded-t-sm"
              style={{
                height: `${h}%`,
                background: `linear-gradient(to top, ${gold}, ${goldLight})`,
                opacity: 0.55 + idx * 0.05,
              }}
            />
          ))}
        </div>

        <div
          className="rounded-md px-2.5 py-1.5"
          style={{
            background: ga(0.12),
            border: `1px solid ${ga(0.28)}`,
          }}
        >
          <div
            className="text-[8.5px] uppercase tracking-[0.16em] font-semibold flex items-center gap-1"
            style={{ color: gold }}
          >
            <Sparkles size={9} strokeWidth={2.4} />
            {i.patternLabel}
          </div>
          <div
            className="text-[10px] leading-tight mt-0.5"
            style={{ color: earth }}
          >
            {i.patternTextA}
            <span style={{ color: gold, fontWeight: 600 }}>
              {i.patternHighlight}
            </span>
            {i.patternTextB}
          </div>
        </div>
      </div>
    </GraphicShell>
  );
}

export function Solution() {
  const { t } = useI18n();

  const solutions = [
    {
      icon: Shield,
      title: t.solution.coverage.title,
      body: t.solution.coverage.body,
      Graphic: CoverageWindow,
    },
    {
      icon: Layers,
      title: t.solution.platform.title,
      body: t.solution.platform.body,
      Graphic: PlatformWindow,
    },
    {
      icon: BarChart3,
      title: t.solution.insights.title,
      body: t.solution.insights.body,
      Graphic: InsightsWindow,
    },
  ];

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
            <span className="eyebrow !text-primary-light/90">
              {t.solution.eyebrow}
            </span>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.05]">
              {t.solution.titleA}
              <span className="italic text-primary-light">
                {t.solution.titleAccent}
              </span>
              {t.solution.titleB}
            </h2>
            <p className="mt-6 text-lg text-white/70 leading-relaxed">
              {t.solution.description}
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
                <s.Graphic />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/30 via-transparent to-transparent" />
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
