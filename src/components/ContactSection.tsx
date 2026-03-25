"use client";

import { motion, useReducedMotion } from "framer-motion";

export function ContactSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="contact" className="py-24 sm:py-32 relative border-t border-[var(--color-border)]/10 bg-[var(--color-bg-elevated)]/30">
      <div className="max-w-2xl mx-auto px-6 text-center relative">
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Let&apos;s talk
          </h2>
          <p className="text-[var(--color-text-secondary)] mb-10 max-w-md mx-auto leading-[1.7]">
            Whether it&apos;s consulting, a partnership, or just curiosity — I&apos;m
            one message away.
          </p>
        </motion.div>

        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="space-y-4"
        >
          {/* Primary: Save to Contacts */}
          <div>
            <a
              href="/api/contact"
              className="inline-flex items-center gap-2 px-10 py-4 rounded-lg bg-[var(--color-accent-indigo)] text-white font-medium transition-shadow duration-200 hover:shadow-lg hover:shadow-[var(--color-accent-indigo)]/10 text-sm focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent-indigo)]"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
          </div>

          {/* Secondary links */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
            <a
              href="mailto:justin@aidads.com"
              className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors"
            >
              justin@aidads.com
            </a>
            <span className="hidden sm:inline text-[var(--color-border)]">|</span>
            <a
              href="tel:+15615587020"
              className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors"
            >
              (561) 558-7020
            </a>
            <span className="hidden sm:inline text-[var(--color-border)]">|</span>
            <a
              href="https://linkedin.com/in/justinthompson"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
