"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { NetworkBackground } from "./NetworkBackground";

export function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 600], [0, 120]);

  const fadeUp = (delay: number) =>
    prefersReducedMotion
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
        };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-0">
      {/* Parallax network background */}
      <motion.div style={prefersReducedMotion ? {} : { y: bgY }} className="absolute inset-0">
        <NetworkBackground />
      </motion.div>

      {/* Radial gradient overlay — tighter, more layered */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_800px_600px_at_center,transparent_10%,var(--color-bg)_70%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--color-bg)]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div {...fadeUp(0)}>
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[var(--color-border)]/40 bg-[var(--color-bg-elevated)]/20 backdrop-blur-md mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-text-secondary)] animate-pulse opacity-50" />
            <span className="text-xs font-medium tracking-[-0.005em] text-[var(--color-text-muted)]">
              17 companies running autonomously
            </span>
          </div>
        </motion.div>

        <motion.h1
          {...(prefersReducedMotion
            ? {}
            : {
                initial: { opacity: 0, scale: 0.96 },
                animate: { opacity: 1, scale: 1 },
                transition: {
                  duration: 0.9,
                  delay: 0.1,
                  ease: [0.16, 1, 0.3, 1],
                },
              })}
          className="text-5xl sm:text-6xl md:text-8xl font-black tracking-[-0.04em] leading-[0.95] mb-8 md:mb-10 [text-wrap:balance]"
        >
          I build and operate{" "}
          <span className="bg-gradient-to-r from-[var(--color-text)] via-[var(--color-text)] to-[var(--color-accent-indigo)] bg-clip-text text-transparent">
            AI-run companies
          </span>
        </motion.h1>

        <motion.p
          {...fadeUp(0.3)}
          className="text-lg sm:text-xl md:text-2xl font-normal tracking-[-0.01em] text-[var(--color-text-secondary)] max-w-2xl mx-auto mb-12 md:mb-16 leading-[1.6] [text-wrap:pretty]"
        >
          17 businesses. 91 autonomous agents. $3K infrastructure.
          <br className="hidden sm:block" /> One person running it all.
        </motion.p>

        <motion.div
          {...(prefersReducedMotion
            ? {}
            : {
                initial: { opacity: 0, y: 24 },
                animate: { opacity: 1, y: 0 },
                transition: {
                  duration: 0.7,
                  delay: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                },
              })}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            href="#ecosystem"
            whileHover={prefersReducedMotion ? {} : { scale: 1.03, y: -1 }}
            whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            className="px-8 py-3.5 rounded-lg bg-[var(--color-accent-indigo)] text-white font-medium transition-shadow duration-200 hover:shadow-lg hover:shadow-[var(--color-accent-indigo)]/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent-indigo)]"
          >
            See the Ecosystem
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
            whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            className="px-8 py-3.5 rounded-lg border border-[var(--color-border)]/50 text-[var(--color-text-secondary)] transition-colors duration-200 hover:border-[var(--color-border)] hover:text-[var(--color-text)] hover:bg-[var(--color-bg-elevated)]/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent-indigo)]"
          >
            Let&apos;s Build Together
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
