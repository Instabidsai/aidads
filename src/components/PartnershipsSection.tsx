"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const partnerships = [
  {
    name: "CodeItRight",
    partner: "Cathy",
    domain: "codeitright.ai",
    description:
      "Cathy is a medical billing expert. Justin built the AI. Together: an AI compliance tool that checks every therapy claim before it goes out.",
    expertise: "Medical Billing",
  },
  {
    name: "The Performance Edge",
    partner: "Don",
    domain: "coachingedge.vip",
    description:
      "Don is a fitness coach with decades of experience. Justin built the platform. Together: an AI coaching app in both app stores.",
    expertise: "Fitness Coaching",
  },
  {
    name: "PureUSPeptide + PeptideAI",
    partner: "Research Partners",
    domain: "pureuspeptide.com",
    description:
      "Domain experts in peptide research paired with AI inventory management and consultation tools. Live and generating revenue.",
    expertise: "Peptide Research",
  },
];

export function PartnershipsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="partnerships" className="py-24 sm:py-32 relative">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left — explanation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-medium text-[var(--color-accent-amber)] mb-3 tracking-wide uppercase">
              50/50 Partnerships
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
              You bring the knowledge.
              <br />I bring the AI.
            </h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed mb-6">
              I don&apos;t charge you to build it. We split the revenue 50/50.
              Your expertise plus my AI systems equals a product neither of us
              could build alone.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Zero upfront cost to you",
                "I build the entire product with AI agents",
                "Revenue split 50/50",
                "You stay the domain expert",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[var(--color-accent-amber)]/10 flex items-center justify-center flex-shrink-0">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M3 6l2 2 4-4"
                        stroke="var(--color-accent-amber)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="text-sm text-[var(--color-text-secondary)]">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <Link
              href="/partnerships"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[var(--color-accent-amber)] text-black font-medium hover:bg-[var(--color-accent-amber)]/80 transition-all text-sm"
            >
              Apply for a Partnership
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6 12l4-4-4-4" />
              </svg>
            </Link>
          </motion.div>

          {/* Right — active partnerships */}
          <div className="space-y-4">
            {partnerships.map((p, i) => (
              <motion.a
                key={p.name}
                href={`https://${p.domain}`}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className="gradient-border p-6 block group"
              >
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-[var(--color-text)] group-hover:text-white transition-colors">
                      {p.name}
                    </h3>
                    <span className="text-xs text-[var(--color-text-muted)]">
                      {p.domain}
                    </span>
                  </div>
                  <span className="text-xs font-medium text-[var(--color-accent-amber)] bg-[var(--color-accent-amber)]/10 px-2 py-1 rounded">
                    w/ {p.partner}
                  </span>
                </div>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-2">
                  {p.description}
                </p>
                <span className="text-xs text-[var(--color-text-muted)]">
                  Domain expertise: {p.expertise}
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
