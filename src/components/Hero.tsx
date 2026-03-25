"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { NetworkBackground } from "./NetworkBackground";

export function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 600], [0, 120]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-0">
      <motion.div style={prefersReducedMotion ? {} : { y: bgY }} className="absolute inset-0">
        <NetworkBackground />
      </motion.div>

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_800px_600px_at_center,transparent_10%,var(--color-bg)_70%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--color-bg)]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* The anchor — everyone understands this */}
        <motion.p
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const }}
          className="text-[var(--color-text-secondary)] text-lg sm:text-xl mb-8 leading-relaxed max-w-2xl mx-auto [text-wrap:pretty]"
        >
          I used to manage 12 crews and 2,000 jobs
          <br className="hidden sm:block" />
          installing Christmas lights across South Florida.
        </motion.p>

        {/* The pivot */}
        <motion.h1
          initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.96 }}
          animate={prefersReducedMotion ? {} : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black tracking-[-0.04em] leading-[0.95] mb-8 md:mb-10 [text-wrap:balance]"
        >
          Now I manage{" "}
          <span className="bg-gradient-to-r from-[var(--color-text)] via-[var(--color-text)] to-[var(--color-accent-indigo)] bg-clip-text text-transparent shimmer-text">
            91 AI agents
          </span>
        </motion.h1>

        {/* The proof */}
        <motion.p
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.25, 0.46, 0.45, 0.94] as const }}
          className="text-[var(--color-text-muted)] text-base sm:text-lg mb-14 md:mb-16 max-w-xl mx-auto leading-relaxed"
        >
          Same brain. Different tools.
          <br />
          17 companies. One operator. $3K/month to run it all.
        </motion.p>

        {/* One CTA */}
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.a
            href="#contact"
            whileHover={prefersReducedMotion ? {} : { scale: 1.03, y: -1 }}
            whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            className="inline-block px-10 py-4 rounded-lg bg-[var(--color-accent-indigo)] text-white font-medium text-center transition-shadow duration-200 hover:shadow-lg hover:shadow-[var(--color-accent-indigo)]/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent-indigo)]"
          >
            Let&apos;s Talk
          </motion.a>
        </motion.div>
      </div>

      {/* Minimal scroll indicator */}
      <motion.div
        initial={prefersReducedMotion ? {} : { opacity: 0 }}
        animate={prefersReducedMotion ? {} : { opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={prefersReducedMotion ? {} : { y: [0, 4, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          className="w-5 h-7 rounded-full border border-[var(--color-border)]/50 flex items-start justify-center p-1"
        >
          <motion.div
            animate={prefersReducedMotion ? {} : { opacity: [0.6, 0.2, 0.6] }}
            transition={{ repeat: Infinity, duration: 2.5 }}
            className="w-1 h-1.5 rounded-full bg-[var(--color-text-muted)]"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
