"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";
import { companies, typeColors, typeLabels, type Company } from "@/lib/data";

function CompanyCard({ company, index, inView }: { company: Company; index: number; inView: boolean }) {
  const [hovered, setHovered] = useState(false);
  const color = typeColors[company.type];

  return (
    <motion.a
      href={`https://${company.domain}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: 0.03 * index }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="gradient-border p-5 group cursor-pointer block"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-xs"
            style={{ backgroundColor: color + "20", color }}
          >
            {company.name.slice(0, 2).toUpperCase()}
          </div>
          <div>
            <h3 className="font-semibold text-sm text-[var(--color-text)] group-hover:text-white transition-colors">
              {company.name}
            </h3>
            <span className="text-xs text-[var(--color-text-muted)]">
              {company.domain}
            </span>
          </div>
        </div>
        <span
          className="text-[10px] font-medium px-2 py-0.5 rounded-full"
          style={{ backgroundColor: color + "15", color }}
        >
          {typeLabels[company.type]}
        </span>
      </div>

      <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-3">
        {company.description}
      </p>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <div className="flex -space-x-1">
            {Array.from({ length: Math.min(company.agents, 5) }).map((_, i) => (
              <div
                key={i}
                className="w-4 h-4 rounded-full border border-[var(--color-bg-card)]"
                style={{ backgroundColor: color + "40" }}
              />
            ))}
          </div>
          <span className="text-xs text-[var(--color-text-muted)]">
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
          boxShadow: `0 0 40px ${color}10, inset 0 0 40px ${color}05`,
        }}
      />
    </motion.a>
  );
}

export function EcosystemPreview() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="ecosystem" className="py-24 sm:py-32 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--color-accent-indigo)]/[0.02] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-[var(--color-accent-cyan)] mb-3 tracking-wide uppercase">
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
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {companies.map((company, i) => (
            <CompanyCard
              key={company.name}
              company={company}
              index={i}
              inView={inView}
            />
          ))}
        </div>

        {/* CTA to full ecosystem page */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link
            href="/ecosystem"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[var(--color-border)] text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text)] hover:border-[var(--color-border-hover)] transition-all"
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
