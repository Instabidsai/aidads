"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--color-accent-indigo)]/[0.03]" />

      <div className="max-w-3xl mx-auto px-6 text-center relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Let&apos;s build something together
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)] mb-10 max-w-xl mx-auto">
            Whether you want AI consulting, a 50/50 partnership, or you&apos;re
            just curious about how one person runs 17 companies — I&apos;d love
            to talk.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <a
            href="mailto:justin@affixed.ai"
            className="px-8 py-3.5 rounded-lg bg-[var(--color-accent-indigo)] text-white font-medium hover:bg-[var(--color-accent-indigo)]/80 transition-all hover:shadow-lg hover:shadow-[var(--color-accent-indigo)]/20 text-sm"
          >
            justin@affixed.ai
          </a>
          <a
            href="https://linkedin.com/in/justinthompson"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-lg border border-[var(--color-border)] text-[var(--color-text)] hover:border-[var(--color-border-hover)] hover:bg-[var(--color-bg-elevated)] transition-all text-sm"
          >
            Connect on LinkedIn
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
          className="text-sm text-[var(--color-text-muted)]"
        >
          Built with AI. Operated by one person.
        </motion.p>
      </div>
    </section>
  );
}
