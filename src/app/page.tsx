"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { companies, typeColors, typeLabels, stats, type CompanyType } from "@/lib/data";

// Fade-in wrapper
function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const rm = useReducedMotion();
  return (
    <motion.div
      initial={rm ? {} : { opacity: 0, y: 24 }}
      whileInView={rm ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Animated counter
function Counter({ value, label, accent }: { value: string; label: string; accent: string }) {
  return (
    <div className="text-center">
      <div className="text-4xl sm:text-5xl md:text-6xl font-black tracking-[-0.04em]" style={{ color: accent }}>
        {value}
      </div>
      <div className="mt-2 text-sm text-[var(--color-text-muted)] uppercase tracking-widest font-medium">
        {label}
      </div>
    </div>
  );
}

export default function Home() {
  const rm = useReducedMotion();
  const [filter, setFilter] = useState<CompanyType | "all">("all");
  const filtered = filter === "all" ? companies : companies.filter(c => c.type === filter);

  return (
    <div className="min-h-screen">

      {/* ═══════════════════════════════════════════════════════════ */}
      {/*  HERO                                                      */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full bg-[var(--color-accent-indigo)]/[0.06] blur-[150px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-[var(--color-accent-cyan)]/[0.04] blur-[150px]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          {/* Eyebrow */}
          <motion.p
            initial={rm ? {} : { opacity: 0, y: 16 }}
            animate={rm ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[var(--color-text-muted)] text-sm uppercase tracking-[0.2em] font-medium mb-8"
          >
            AI Venture Factory
          </motion.p>

          {/* Headline */}
          <motion.h1
            initial={rm ? {} : { opacity: 0, y: 24 }}
            animate={rm ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.92] tracking-[-0.04em] [text-wrap:balance]"
          >
            <span className="text-[var(--color-text)]">17 Companies.</span>
            <br />
            <span className="bg-gradient-to-r from-[var(--color-accent-indigo)] to-[var(--color-accent-cyan)] bg-clip-text text-transparent">
              91 Agents.
            </span>
            <br />
            <span className="text-[var(--color-text)]">One Operator.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={rm ? {} : { opacity: 0, y: 16 }}
            animate={rm ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 text-lg sm:text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto leading-relaxed"
          >
            I partner with domain experts to build AI-powered businesses.
            <br className="hidden sm:block" />
            You bring the expertise. I bring the factory.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={rm ? {} : { opacity: 0, y: 16 }}
            animate={rm ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#contact"
              className="px-8 py-4 rounded-lg bg-white text-[#0a0a0f] font-semibold text-base hover:bg-[var(--color-text)] transition-colors duration-200"
            >
              Apply to Partner
            </a>
            <a
              href="#companies"
              className="px-8 py-4 rounded-lg border border-[var(--color-border)] text-[var(--color-text-secondary)] font-medium text-base hover:border-[var(--color-border-hover)] hover:text-[var(--color-text)] transition-colors duration-200"
            >
              See the Portfolio
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-40">
          <motion.div
            animate={rm ? {} : { y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            className="w-5 h-8 rounded-full border border-[var(--color-border)] flex items-start justify-center pt-1.5"
          >
            <div className="w-1 h-2 rounded-full bg-[var(--color-text-muted)]" />
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════ */}
      {/*  BY THE NUMBERS                                            */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <section className="py-24 sm:py-32 border-t border-[var(--color-border)]/10">
        <div className="max-w-5xl mx-auto px-6">
          <Reveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              <Counter value="17" label="Companies" accent="var(--color-accent-indigo)" />
              <Counter value="91" label="AI Agents" accent="var(--color-accent-cyan)" />
              <Counter value="$3K" label="Monthly Cost" accent="var(--color-accent-amber)" />
              <Counter value="1" label="Operator" accent="var(--color-accent-green)" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════ */}
      {/*  THE STORY                                                 */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <section className="py-24 sm:py-32">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-muted)] mb-4 font-medium">
              The Story
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold [text-wrap:balance]">
              From 12 crews to 91 agents
            </h2>
          </Reveal>

          <div className="mt-16 space-y-0">
            {[
              { year: "2014", title: "The Origin", text: "Built a Christmas light installation company from scratch. Father of three, with a drive to build systems that run without constant oversight." },
              { year: "2019", title: "The Scale", text: "Grew to 12 crews, 2,000+ jobs per season, $3M+ annual revenue. Managed operations across South Florida. Sold the company." },
              { year: "2024", title: "The Pivot", text: "Realized: the same systems thinking that orchestrated 2,000 jobs and 12 crews could orchestrate AI agents running entire businesses." },
              { year: "Now", title: "The Factory", text: "17 companies, 91 autonomous agents, one operator, one laptop. Every company runs on shared infrastructure, shared intelligence, shared tools." },
            ].map((item, i) => (
              <Reveal key={item.year} delay={i * 0.1}>
                <div className="flex gap-6 sm:gap-10 py-8 border-t border-[var(--color-border)]/10 group">
                  <div className="shrink-0 w-16 text-right">
                    <span className="text-sm font-mono text-[var(--color-text-muted)] group-hover:text-[var(--color-accent-indigo)] transition-colors duration-200">
                      {item.year}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2">{item.title}</h3>
                    <p className="text-[var(--color-text-secondary)] leading-relaxed max-w-2xl">{item.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════ */}
      {/*  THE PORTFOLIO                                             */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <section id="companies" className="py-24 sm:py-32 bg-[var(--color-bg-elevated)]/30">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-muted)] mb-4 font-medium">
              The Portfolio
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 [text-wrap:balance]">
              17 companies. One interconnected system.
            </h2>
            <p className="text-[var(--color-text-secondary)] max-w-2xl leading-relaxed mb-12">
              Every company shares intelligence, tools, and infrastructure. The whole is greater than the sum.
            </p>
          </Reveal>

          {/* Filter pills */}
          <Reveal delay={0.1}>
            <div className="flex flex-wrap gap-2 mb-10">
              {(["all", "product", "platform", "partnership", "leadgen"] as const).map((type) => (
                <button
                  key={type}
                  onClick={() => setFilter(type)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                    filter === type
                      ? "bg-[var(--color-bg-card)] text-[var(--color-text)] border border-[var(--color-border-hover)]"
                      : "text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)] border border-transparent"
                  }`}
                >
                  {type === "all" ? "All" : typeLabels[type]}
                </button>
              ))}
            </div>
          </Reveal>

          {/* Company grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((company, i) => {
              const color = typeColors[company.type];
              return (
                <Reveal key={company.name} delay={Math.min(i * 0.05, 0.3)}>
                  <a
                    href={`https://${company.domain}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block rounded-xl bg-[var(--color-bg-card)] p-5 transition-all duration-200 hover:bg-[var(--color-bg-elevated)] hover:translate-y-[-2px]"
                    style={{ borderLeft: `2px solid ${color}` }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold text-[var(--color-text)] group-hover:text-white transition-colors">
                        {company.name}
                      </h3>
                      <span
                        className="text-[10px] uppercase tracking-wider font-medium px-2 py-0.5 rounded"
                        style={{ color, backgroundColor: color + "15" }}
                      >
                        {typeLabels[company.type]}
                      </span>
                    </div>
                    <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-3">
                      {company.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-[var(--color-text-muted)]">
                        {company.agents} agents
                        {company.partner && ` · with ${company.partner}`}
                      </span>
                      <span className="text-xs text-[var(--color-text-muted)] opacity-0 group-hover:opacity-100 transition-opacity">
                        {company.domain} →
                      </span>
                    </div>
                  </a>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════ */}
      {/*  HOW PARTNERSHIPS WORK                                     */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <section className="py-24 sm:py-32">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-muted)] mb-4 font-medium">
              Partnerships
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 [text-wrap:balance]">
              You bring the knowledge.
              <br />
              <span className="bg-gradient-to-r from-[var(--color-accent-indigo)] to-[var(--color-accent-cyan)] bg-clip-text text-transparent">
                I bring the AI.
              </span>
            </h2>
            <p className="text-[var(--color-text-secondary)] max-w-2xl leading-relaxed mb-16">
              I don&apos;t charge you to build it. We split the revenue 50/50. Zero upfront cost.
              Your expertise + my AI agents = a business that runs itself.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { step: "01", title: "You bring expertise", text: "A decade of domain knowledge. A proven skill set. An audience or network that trusts you." },
              { step: "02", title: "I build the product", text: "AI agents handle development, design, marketing, operations. Shipping in weeks, not months." },
              { step: "03", title: "We split 50/50", text: "Revenue share forever. Zero upfront cost. Full code ownership. A real partnership, not a contract." },
            ].map((item, i) => (
              <Reveal key={item.step} delay={i * 0.1}>
                <div className="rounded-xl bg-[var(--color-bg-card)] p-6 h-full">
                  <div className="text-3xl font-black text-[var(--color-border-hover)] mb-4 font-mono">{item.step}</div>
                  <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2">{item.title}</h3>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Active partnerships proof */}
          <Reveal delay={0.2}>
            <div className="mt-12 rounded-xl bg-[var(--color-bg-card)] p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-muted)] mb-4 font-medium">
                Active Partnerships
              </p>
              <div className="space-y-4">
                {companies.filter(c => c.partner).map(c => (
                  <div key={c.name} className="flex items-center justify-between py-2 border-b border-[var(--color-border)]/10 last:border-0">
                    <div>
                      <span className="font-medium text-[var(--color-text)]">{c.name}</span>
                      <span className="text-[var(--color-text-muted)] text-sm ml-2">with {c.partner}</span>
                    </div>
                    <span className="text-xs text-[var(--color-text-muted)]">{c.domain}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════ */}
      {/*  CONTACT / CTA                                             */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <section id="contact" className="py-24 sm:py-32 bg-[var(--color-bg-elevated)]/30">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 [text-wrap:balance]">
              Ready to build something?
            </h2>
            <p className="text-[var(--color-text-secondary)] text-lg mb-12 max-w-xl mx-auto leading-relaxed">
              Whether it&apos;s consulting, a partnership, or just a conversation about what AI can do for your business.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href="mailto:justin@affixed.ai"
                className="px-8 py-4 rounded-lg bg-white text-[#0a0a0f] font-semibold text-base hover:bg-[var(--color-text)] transition-colors duration-200"
              >
                justin@affixed.ai
              </a>
              <a
                href="tel:+13305189552"
                className="px-8 py-4 rounded-lg border border-[var(--color-border)] text-[var(--color-text-secondary)] font-medium text-base hover:border-[var(--color-border-hover)] hover:text-[var(--color-text)] transition-colors duration-200"
              >
                (330) 518-9552
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-sm text-[var(--color-text-muted)]">
              Justin Thompson · 17 companies · 91 agents · One operator
              <br />
              The venture factory is always building.
            </p>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
