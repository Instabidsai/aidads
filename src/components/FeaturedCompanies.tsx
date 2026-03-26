"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

const featured = [
  { name: "DropClose", domain: "dropclose.ai", line: "AI sales pipeline that closes deals for you" },
  { name: "CallTwin", domain: "calltwin.ai", line: "AI clone of your voice answers every call" },
  { name: "CodeItRight", domain: "codeitright.ai", line: "AI medical coding compliance for therapy practices" },
  { name: "AffixedAI", domain: "affixed.ai", line: "AI consulting — we build systems that run your business" },
];

export function FeaturedCompanies() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="py-24 sm:py-32 relative border-t border-[var(--color-border)]/10 bg-[var(--color-bg-elevated)]/30">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            A few of the companies
          </h2>
          <p className="text-[var(--color-text-secondary)] leading-[1.7]">
            Each one built with AI agents, running autonomously, serving real customers.
          </p>
        </motion.div>

        <div className="space-y-4">
          {featured.map((company, i) => (
            <motion.a
              key={company.name}
              href={`https://${company.domain}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 12 }}
              whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: 0.08 * i }}
              className="card p-6 flex items-center justify-between group block focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent-indigo)]"
            >
              <div>
                <h3 className="font-semibold text-base text-[var(--color-text)] group-hover:text-white transition-colors mb-1">
                  {company.name}
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)]">{company.line}</p>
              </div>
              <div className="hidden sm:flex items-center gap-2 text-sm text-[var(--color-text-muted)] group-hover:text-[var(--color-text-secondary)] transition-colors flex-shrink-0 ml-4">
                {company.domain}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <path d="M6 12l4-4-4-4" />
                </svg>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-8 text-center"
        >
          <Link href="/ecosystem" className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)] transition-colors">
            See all 17 companies &rarr;
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
