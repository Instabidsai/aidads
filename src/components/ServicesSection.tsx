"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    title: "AI Consulting",
    subtitle: "Through AffixedAI",
    description:
      "I help businesses systematize their expertise into AI-powered products and operations. Strategy, architecture, and implementation.",
    features: [
      "AI strategy and implementation",
      "Agent system architecture",
      "Process automation",
      "Custom AI product builds",
    ],
    cta: "Learn More",
    ctaHref: "https://affixed.ai",
    color: "#6366f1",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "50/50 Partnerships",
    subtitle: "Build Together",
    description:
      "You bring the knowledge. I bring the AI. We build and monetize together. Zero upfront cost — revenue split 50/50.",
    features: [
      "Zero cost to you",
      "Full product built with AI",
      "50/50 revenue split",
      "You keep your domain expertise",
    ],
    cta: "Apply Now",
    ctaHref: "/partnerships",
    color: "#f59e0b",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zm14 10v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "AI Venture Factory",
    subtitle: "Coming Soon",
    description:
      "Launch your own AI-staffed company in minutes. Pre-configured agent teams, shared intelligence brain, self-improving loops built in.",
    features: [
      "Pre-configured agent teams",
      "Shared intelligence brain",
      "Self-improving loops",
      "Launch in minutes",
    ],
    cta: "Join the Waitlist",
    ctaHref: "https://myjarvisbrain.com",
    color: "#06b6d4",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export function ServicesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--color-accent-cyan)]/[0.02] to-transparent" />

      <div className="max-w-6xl mx-auto px-6 relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-[var(--color-accent-cyan)] mb-3 tracking-wide uppercase">
            What I Offer
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Three ways to work together
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="gradient-border p-6 flex flex-col"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ backgroundColor: service.color + "15", color: service.color }}
              >
                {service.icon}
              </div>

              <h3 className="font-bold text-lg text-[var(--color-text)] mb-1">
                {service.title}
              </h3>
              <span className="text-xs font-medium mb-4" style={{ color: service.color }}>
                {service.subtitle}
              </span>

              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-6">
                {service.description}
              </p>

              <ul className="space-y-2 mb-8 flex-1">
                {service.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]">
                    <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: service.color }} />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={service.ctaHref}
                target={service.ctaHref.startsWith("http") ? "_blank" : undefined}
                rel={service.ctaHref.startsWith("http") ? "noopener noreferrer" : undefined}
                className="text-sm font-medium px-4 py-2.5 rounded-lg border text-center transition-all hover:brightness-110"
                style={{
                  borderColor: service.color + "30",
                  color: service.color,
                  backgroundColor: service.color + "08",
                }}
              >
                {service.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
