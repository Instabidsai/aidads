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
          className="flex flex-col sm:flex-row gap-4 justify-center mb-6"
        >
          <a
            href="mailto:justin@aidads.com"
            className="px-8 py-3.5 rounded-lg bg-[var(--color-accent-indigo)] text-white font-medium hover:bg-[var(--color-accent-indigo)]/80 transition-all hover:shadow-lg hover:shadow-[var(--color-accent-indigo)]/20 text-sm"
          >
            justin@aidads.com
          </a>
          <a
            href="tel:+15615587020"
            className="px-8 py-3.5 rounded-lg border border-[var(--color-border)] text-[var(--color-text)] hover:border-[var(--color-border-hover)] hover:bg-[var(--color-bg-elevated)] transition-all text-sm"
          >
            (561) 558-7020
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

        {/* Save to Contacts — works on iOS and Android */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mb-12"
        >
          <a
            href="/api/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-gradient-to-r from-[var(--color-accent-indigo)] to-[var(--color-accent-cyan)] text-white font-medium hover:opacity-90 transition-all text-sm shadow-lg shadow-[var(--color-accent-indigo)]/20"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <line x1="19" y1="8" x2="19" y2="14" />
              <line x1="22" y1="11" x2="16" y2="11" />
            </svg>
            Save Justin to Contacts
          </a>
          <p className="text-xs text-[var(--color-text-muted)] mt-2">
            One tap — works on iPhone and Android
          </p>
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
