"use client";

import { motion, useReducedMotion } from "framer-motion";
import { stats } from "@/lib/data";

export function NumbersSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="numbers" className="py-24 sm:py-32 relative border-t border-[var(--color-border)]/10">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-medium text-[var(--color-text-muted)] mb-3 tracking-widest uppercase">
            The Numbers
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Let them speak for themselves
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.85 }}
              whileInView={prefersReducedMotion ? {} : { opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: 0.1 * i,
                type: "spring",
                stiffness: 120,
                damping: 14,
              }}
              className="card-stat p-8 sm:p-10 text-center"
            >
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-br from-[var(--color-text)] to-[var(--color-text-secondary)] bg-clip-text text-transparent mb-3 [font-variant-numeric:tabular-nums]">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-[var(--color-text-muted)]">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-[var(--color-text-muted)] max-w-lg mx-auto">
            Every company shares intelligence. Every agent learns from the others.
            The ecosystem compounds — each new company makes all existing ones stronger.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
