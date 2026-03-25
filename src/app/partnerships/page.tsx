"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

const activePartnerships = [
  {
    name: "CodeItRight",
    partner: "Cathy",
    domain: "codeitright.ai",
    expertise: "Medical Billing",
    story:
      "Cathy has decades of medical billing expertise. She knew exactly which compliance checks therapy practices need. Justin built the AI system in weeks. Together, they created an AI tool that catches billing errors before claims go out — saving practices thousands in denied claims.",
    status: "Live",
  },
  {
    name: "The Performance Edge",
    partner: "Don",
    domain: "coachingedge.vip",
    expertise: "Fitness Coaching",
    story:
      "Don is a veteran fitness coach who knows exactly what clients need. Justin built an AI coaching platform with mobile apps for both iOS and Android. Don's expertise trains the AI. The result: personalized fitness coaching at scale.",
    status: "Live — Mobile apps in stores",
  },
  {
    name: "PureUSPeptide + PeptideAI",
    partner: "Research Partners",
    domain: "pureuspeptide.com",
    expertise: "Peptide Research",
    story:
      "Deep domain expertise in peptide research paired with AI-powered inventory management, consultation tools, and a 337-page educational site. Two products, one partnership, generating revenue.",
    status: "Live — Revenue generating",
  },
];

export default function PartnershipsPage() {
  const [formSent, setFormSent] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Hero */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-[var(--color-accent-amber)] mb-3 tracking-wide uppercase">
            50/50 Partnerships
          </p>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight mb-6">
            You bring the knowledge.
            <br />
            <span className="bg-gradient-to-r from-[var(--color-accent-amber)] to-[var(--color-accent-rose)] bg-clip-text text-transparent">
              I bring the AI.
            </span>
          </h1>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            I don&apos;t charge you to build it. We split the revenue 50/50.
            Your expertise plus my AI systems equals a product neither of us
            could build alone.
          </p>
        </motion.div>

        {/* How it works */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={prefersReducedMotion ? { duration: 0 } : { delay: 0.1 }}
          className="card p-8 mb-16"
        >
          <h2 className="text-xl font-bold mb-6">How It Works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "You have expertise",
                desc: "You know your industry inside and out. You have the knowledge, the network, and the vision.",
              },
              {
                step: "02",
                title: "We design together",
                desc: "We map your expertise into a product. What problems do your people face? What would they pay to solve?",
              },
              {
                step: "03",
                title: "AI builds it",
                desc: "My AI systems build the entire product — the website, the app, the backend, the marketing. In weeks, not months.",
              },
              {
                step: "04",
                title: "We grow together",
                desc: "Revenue splits 50/50. You stay the face and domain expert. I keep the tech running and improving.",
              },
            ].map((item) => (
              <div key={item.step}>
                <div className="text-2xl font-bold text-[var(--color-accent-amber)]/30 mb-2">
                  {item.step}
                </div>
                <h3 className="font-semibold text-sm mb-2">{item.title}</h3>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Active partnerships */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={prefersReducedMotion ? { duration: 0 } : { delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-8">Active Partnerships</h2>
          <div className="space-y-6">
            {activePartnerships.map((p, i) => (
              <motion.div
                key={p.name}
                initial={prefersReducedMotion ? false : { opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={prefersReducedMotion ? { duration: 0 } : { delay: 0.1 * i + 0.3 }}
                className="card p-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-lg">{p.name}</h3>
                    <a
                      href={`https://${p.domain}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[var(--color-accent-indigo)] hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent-indigo)]"
                    >
                      {p.domain}
                    </a>
                  </div>
                  <div className="flex items-center gap-3 mt-2 sm:mt-0">
                    <span className="text-xs font-medium text-[var(--color-accent-amber)] bg-[var(--color-accent-amber)]/10 px-2 py-1 rounded">
                      w/ {p.partner}
                    </span>
                    <span className="text-xs text-[var(--color-accent-green)]">
                      {p.status}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  {p.story}
                </p>
                <div className="mt-3 text-xs text-[var(--color-text-muted)]">
                  Domain expertise: {p.expertise}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Application form */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={prefersReducedMotion ? { duration: 0 } : { delay: 0.4 }}
          id="apply"
          className="card p-8"
        >
          <h2 className="text-2xl font-bold mb-2">Apply for a Partnership</h2>
          <p className="text-sm text-[var(--color-text-secondary)] mb-8">
            Have domain expertise and a network? Tell me about what you know.
          </p>

          {formSent ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-[var(--color-accent-green)]/10 flex items-center justify-center mx-auto mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent-green)" strokeWidth="2">
                  <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Application Received</h3>
              <p className="text-sm text-[var(--color-text-secondary)]">
                I&apos;ll review your application and get back to you within 48 hours.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target as HTMLFormElement;
                const data = new FormData(form);
                // In production, this would POST to an API
                const mailto = `mailto:justin@aidads.com?subject=Partnership Application: ${data.get("name")}&body=Name: ${data.get("name")}%0AExpertise: ${data.get("expertise")}%0ANetwork Size: ${data.get("network")}%0A%0A${data.get("pitch")}`;
                window.open(mailto);
                setFormSent(true);
              }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Your Name</label>
                  <input
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)] text-sm text-[var(--color-text)] focus:outline-none focus:border-[var(--color-accent-amber)] focus-visible:ring-2 focus-visible:ring-[var(--color-accent-amber)]/50 focus-visible:ring-offset-1 focus-visible:ring-offset-[var(--color-bg)] transition-colors"
                    placeholder="Jane Smith"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Your Expertise</label>
                  <input
                    name="expertise"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)] text-sm text-[var(--color-text)] focus:outline-none focus:border-[var(--color-accent-amber)] focus-visible:ring-2 focus-visible:ring-[var(--color-accent-amber)]/50 focus-visible:ring-offset-1 focus-visible:ring-offset-[var(--color-bg)] transition-colors"
                    placeholder="Real estate, healthcare, fitness..."
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  How big is your network in this space?
                </label>
                <input
                  name="network"
                  className="w-full px-4 py-3 rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)] text-sm text-[var(--color-text)] focus:outline-none focus:border-[var(--color-accent-amber)] focus-visible:ring-2 focus-visible:ring-[var(--color-accent-amber)]/50 focus-visible:ring-offset-1 focus-visible:ring-offset-[var(--color-bg)] transition-colors"
                  placeholder="500+ contacts, run a community, have a mailing list..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  What would we build together?
                </label>
                <textarea
                  name="pitch"
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)] text-sm text-[var(--color-text)] focus:outline-none focus:border-[var(--color-accent-amber)] focus-visible:ring-2 focus-visible:ring-[var(--color-accent-amber)]/50 focus-visible:ring-offset-1 focus-visible:ring-offset-[var(--color-bg)] transition-colors resize-none"
                  placeholder="Describe the problem you see in your industry and what an AI product could solve..."
                />
              </div>
              <button
                type="submit"
                className="px-8 py-3 rounded-lg bg-[var(--color-accent-amber)] text-black font-medium hover:bg-[var(--color-accent-amber)]/80 transition-colors text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent-amber)]"
              >
                Submit Application
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
}
