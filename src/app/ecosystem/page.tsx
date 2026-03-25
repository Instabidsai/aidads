"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  companies,
  connections,
  typeColors,
  typeLabels,
  type Company,
  type CompanyType,
} from "@/lib/data";
import { EcosystemGraph } from "@/components/EcosystemGraph";

export default function EcosystemPage() {
  const [selected, setSelected] = useState<Company | null>(null);
  const [filter, setFilter] = useState<CompanyType | "all">("all");

  const filtered =
    filter === "all"
      ? companies
      : companies.filter((c) => c.type === filter);

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4">
            The Ecosystem
          </h1>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            17 interconnected AI companies. Every company feeds the others through shared
            intelligence, shared tools, and shared growth loops.
          </p>
        </motion.div>

        {/* Interactive graph */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="gradient-border p-4 mb-12"
        >
          <EcosystemGraph
            companies={companies}
            connections={connections}
            onSelectCompany={setSelected}
            selectedCompany={selected}
          />
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <button
            onClick={() => setFilter("all")}
            className={`text-xs px-4 py-2 rounded-full border transition-all ${
              filter === "all"
                ? "border-[var(--color-accent-indigo)] text-[var(--color-accent-indigo)] bg-[var(--color-accent-indigo)]/10"
                : "border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-border-hover)]"
            }`}
          >
            All ({companies.length})
          </button>
          {(Object.keys(typeColors) as CompanyType[]).map((type) => {
            const count = companies.filter((c) => c.type === type).length;
            return (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`text-xs px-4 py-2 rounded-full border transition-all ${
                  filter === type
                    ? `border-current bg-current/10`
                    : "border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-border-hover)]"
                }`}
                style={filter === type ? { color: typeColors[type] } : {}}
              >
                {typeLabels[type]} ({count})
              </button>
            );
          })}
        </div>

        {/* Company list */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((company) => {
              const color = typeColors[company.type];
              return (
                <motion.a
                  key={company.name}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  href={`https://${company.domain}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gradient-border p-5 group block"
                  onMouseEnter={() => setSelected(company)}
                  onMouseLeave={() => setSelected(null)}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-xs"
                      style={{ backgroundColor: color + "20", color }}
                    >
                      {company.name.slice(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm group-hover:text-white transition-colors">
                        {company.name}
                      </h3>
                      <span className="text-xs text-[var(--color-text-muted)]">
                        {company.domain}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-3">
                    {company.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-[var(--color-text-muted)]">
                      {company.agents} agents
                    </span>
                    <span
                      className="text-[10px] font-medium px-2 py-0.5 rounded-full"
                      style={{ backgroundColor: color + "15", color }}
                    >
                      {typeLabels[company.type]}
                    </span>
                  </div>
                  {company.partner && (
                    <div className="mt-2 text-xs text-[var(--color-accent-amber)]">
                      Partnership with {company.partner}
                    </div>
                  )}
                  {company.mobileComingSoon && (
                    <div className="mt-2">
                      <span className="text-[10px] text-[var(--color-accent-cyan)] border border-[var(--color-accent-cyan)]/20 px-1.5 py-0.5 rounded">
                        Mobile app coming soon
                      </span>
                    </div>
                  )}
                </motion.a>
              );
            })}
          </AnimatePresence>
        </div>

        {/* How they connect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16 gradient-border p-8"
        >
          <h2 className="text-xl font-bold mb-6">How They Connect</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                from: "AffixedAI",
                desc: "Finds clients and sells them DropClose, CallTwin, and BuiltMonthly",
              },
              {
                from: "JarvisSDK",
                desc: "Equips every agent across every company with modules and roles",
              },
              {
                from: "JarvisBrain",
                desc: "Shared intelligence connects all 17 companies in real time",
              },
              {
                from: "AdzForge",
                desc: "Runs AI-generated ad campaigns for all companies",
              },
              {
                from: "BlitzGTM",
                desc: "Marketing engine powering go-to-market across the portfolio",
              },
              {
                from: "YourFeeds.ai",
                desc: "External intelligence subscriptions fed to every company",
              },
            ].map((conn) => (
              <div key={conn.from} className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[var(--color-accent-cyan)] mt-2 flex-shrink-0" />
                <div>
                  <span className="text-sm font-medium text-[var(--color-text)]">
                    {conn.from}
                  </span>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    {conn.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
