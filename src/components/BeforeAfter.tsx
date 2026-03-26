"use client";

import { motion, useReducedMotion } from "framer-motion";

export function BeforeAfter() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="py-24 sm:py-32 relative border-t border-[var(--color-border)]/10">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            The same skill, new tools
          </h2>
          <p className="text-[var(--color-text-secondary)] max-w-lg mx-auto leading-[1.7]">
            Orchestrating 12 crews across 2,000 jobs taught me how to build
            systems that run without me. AI just made the system faster.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, x: -20 }}
            whileInView={prefersReducedMotion ? {} : { opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="card p-8"
          >
            <div className="text-xs font-medium text-[var(--color-text-muted)] mb-6 tracking-widest uppercase">
              Before
            </div>
            <div className="space-y-6">
              <div>
                <div className="text-4xl sm:text-5xl font-bold text-[var(--color-text)] mb-1 [font-variant-numeric:tabular-nums]">12</div>
                <div className="text-sm text-[var(--color-text-secondary)]">crews on the ground</div>
              </div>
              <div>
                <div className="text-4xl sm:text-5xl font-bold text-[var(--color-text)] mb-1 [font-variant-numeric:tabular-nums]">2,000+</div>
                <div className="text-sm text-[var(--color-text-secondary)]">jobs per season</div>
              </div>
              <div>
                <div className="text-4xl sm:text-5xl font-bold text-[var(--color-text)] mb-1 [font-variant-numeric:tabular-nums]">$3M+</div>
                <div className="text-sm text-[var(--color-text-secondary)]">revenue per quarter</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, x: 20 }}
            whileInView={prefersReducedMotion ? {} : { opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="card p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-accent-indigo)]/5 rounded-full blur-3xl" />
            <div className="text-xs font-medium text-[var(--color-accent-indigo)] mb-6 tracking-widest uppercase relative">
              Now
            </div>
            <div className="space-y-6 relative">
              <div>
                <div className="text-4xl sm:text-5xl font-bold text-[var(--color-text)] mb-1 [font-variant-numeric:tabular-nums]">91</div>
                <div className="text-sm text-[var(--color-text-secondary)]">AI agents running autonomously</div>
              </div>
              <div>
                <div className="text-4xl sm:text-5xl font-bold text-[var(--color-text)] mb-1 [font-variant-numeric:tabular-nums]">17</div>
                <div className="text-sm text-[var(--color-text-secondary)]">companies built and operating</div>
              </div>
              <div>
                <div className="text-4xl sm:text-5xl font-bold text-[var(--color-text)] mb-1 [font-variant-numeric:tabular-nums]">$3K</div>
                <div className="text-sm text-[var(--color-text-secondary)]">total monthly infrastructure</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
