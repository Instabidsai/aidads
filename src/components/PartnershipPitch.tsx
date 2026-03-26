"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

export function PartnershipPitch() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="py-24 sm:py-32 relative border-t border-[var(--color-border)]/10">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
            Want to do the same with your expertise?
          </h2>
          <p className="text-[var(--color-text-secondary)] text-lg leading-[1.7] mb-4 max-w-2xl mx-auto">
            I partner 50/50 with domain experts. You bring the knowledge and the
            network. I build the product with AI. Zero upfront cost — we split
            the revenue.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm mb-10 max-w-lg mx-auto">
            Already doing this with a medical billing expert, a fitness coach,
            and peptide researchers. Three partnerships live and generating revenue.
          </p>
          <Link
            href="/partnerships"
            className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)] transition-colors"
          >
            Learn about partnerships &rarr;
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
