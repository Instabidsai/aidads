"use client";

import { motion, useReducedMotion } from "framer-motion";

const timeline = [
  {
    label: "The Origin",
    text: "Built a Christmas light installation company from scratch. Family man, father of three, with a drive to build systems.",
  },
  {
    label: "The Scale",
    text: "Grew to 12 crews, 2,000+ jobs per season, $3M+ revenue per quarter. Sold the company.",
  },
  {
    label: "The Pivot",
    text: "Realized: the same systems brain that orchestrated 2,000 jobs and 12 crews could orchestrate AI agents running entire businesses.",
  },
  {
    label: "The Factory",
    text: "Went full-time into AI. 2.5 years later: 17 companies, 91 agents, one operator, one laptop.",
  },
];

export function StorySection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="story" className="py-24 sm:py-32 relative border-t border-[var(--color-border)]/10">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs font-medium text-[var(--color-text-muted)] mb-3 tracking-widest uppercase">
            The Story
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            From 12 crews to 91 agents
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl">
            I&apos;ve always been a systems operator. The system just changed
            from crews to AI agents.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--color-border-hover)] to-[var(--color-border)]" />

          <div className="space-y-12">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={prefersReducedMotion ? {} : { opacity: 0, x: -40 }}
                whileInView={prefersReducedMotion ? {} : { opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.12 * i, ease: "easeOut" }}
                className="relative pl-14 sm:pl-20"
              >
                {/* Dot */}
                <div className="absolute left-2.5 sm:left-6.5 top-1 w-3 h-3 rounded-full bg-[var(--color-text-muted)] ring-4 ring-[var(--color-bg)]" />

                <div className="card p-6">
                  <span className="text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wider">
                    {item.label}
                  </span>
                  <p className="mt-2 text-[var(--color-text-secondary)] leading-[1.7]">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
