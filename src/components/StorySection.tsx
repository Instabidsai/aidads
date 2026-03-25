"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="story" className="py-24 sm:py-32 relative">
      <div className="max-w-5xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sm font-medium text-[var(--color-accent-indigo)] mb-3 tracking-wide uppercase">
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
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--color-accent-indigo)] via-[var(--color-accent-cyan)] to-[var(--color-accent-green)]" />

          <div className="space-y-12">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 * i }}
                className="relative pl-14 sm:pl-20"
              >
                {/* Dot */}
                <div className="absolute left-2.5 sm:left-6.5 top-1 w-3 h-3 rounded-full bg-[var(--color-accent-indigo)] ring-4 ring-[var(--color-bg)]" />

                <div className="gradient-border p-6">
                  <span className="text-xs font-semibold text-[var(--color-accent-indigo)] uppercase tracking-wider">
                    {item.label}
                  </span>
                  <p className="mt-2 text-[var(--color-text-secondary)] leading-relaxed">
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
