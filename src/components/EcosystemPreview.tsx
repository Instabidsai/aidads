"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { companies, typeColors, typeLabels, type Company } from "@/lib/data";

function CompanyCard({ company, index }: { company: Company; index: number }) {
  const [hovered, setHovered] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const color = typeColors[company.type];

  return (
    <motion.a
      href={`https://${company.domain}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={prefersReducedMotion ? {} : { opacity: 0, y: 16 }}
      whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: 0.05 * index }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="card p-4 sm:p-5 group cursor-pointer block focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent-indigo)]"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-xs"
            style={{ backgroundColor: color + "10", color }}
          >
            {company.name.slice(0, 2).toUpperCase()}
          </div>
          <div>
            <h3 className="font-semibold text-base text-[var(--color-text)] group-hover:text-white transition-colors mb-1">
              {company.name}
            </h3>
            <span className="text-xs text-[var(--color-text-muted)]">
              {company.domain}
            </span>
          </div>
        </div>
        <span
          className="text-xs font-semibold px-2.5 py-1 rounded-full"
          style={{ backgroundColor: color + "08", color }}
        >
          {typeLabels[company.type]}
        </span>
      </div>

      <p className="text-sm text-[var(--color-text-secondary)] leading-[1.6] mb-4">
        {company.description}
      </p>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <div className="flex -space-x-1">
            {Array.from({ length: Math.min(company.agents, 5) }).map((_, i) => (
              <div
                key={i}
                className="w-4 h-4 rounded-full border border-[var(--color-bg-card)]"
                style={{ backgroundColor: color + "20" }}
              />
            ))}
          </div>
          <span className="text-sm text-[var(--color-text-muted)]">
            {company.agents} agents
          </span>
        </div>
        {company.partner && (
          <span className="text-xs text-[var(--color-accent-amber)]">
            w/ {company.partner}
          </span>
        )}
        {company.mobileComingSoon && (
          <span className="text-[10px] text-[var(--color-accent-cyan)] border border-[var(--color-accent-cyan)]/20 px-1.5 py-0.5 rounded">
            Mobile soon
          </span>
        )}
      </div>

      {/* Hover glow */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0 }}
        className="absolute inset-0 rounded-xl pointer-events-none"
        style={{
          boxShadow: `0 0 40px ${color}08, inset 0 0 40px ${color}04`,
        }}
      />
    </motion.a>
  );
}

export function EcosystemPreview() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="ecosystem" className="py-24 sm:py-32 relative border-t border-[var(--color-border)]/10 bg-[var(--color-bg-elevated)]/30">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--color-accent-indigo)]/[0.02] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-medium text-[var(--color-text-muted)] mb-3 tracking-widest uppercase">
            The Ecosystem
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            17 companies. One interconnected system.
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            Every company feeds the others. Shared intelligence, shared tools,
            shared growth loops. The whole is greater than the sum.
          </p>
        </motion.div>

        {/* Type legend */}
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-10"
        >
          {(Object.keys(typeColors) as Array<keyof typeof typeColors>).map((type) => (
            <div key={type} className="flex items-center gap-2">
              <div
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: typeColors[type] }}
              />
              <span className="text-xs text-[var(--color-text-secondary)]">
                {typeLabels[type]}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Company grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-5">
          {companies.map((company, i) => (
            <CompanyCard key={company.name} company={company} index={i} />
          ))}
        </div>

        {/* CTA to full ecosystem page */}
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link
            href="/ecosystem"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[var(--color-border)] text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text)] hover:border-[var(--color-border-hover)] transition-colors focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent-indigo)]"
          >
            Explore the full ecosystem map
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 12l4-4-4-4" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
