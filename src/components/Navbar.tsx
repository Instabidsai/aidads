"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/#story", label: "Story" },
  { href: "/#ecosystem", label: "Ecosystem" },
  { href: "/#partnerships", label: "Partnerships" },
  { href: "/#services", label: "Services" },
  { href: "/#numbers", label: "Numbers" },
  { href: "/#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-[background-color,border-color,backdrop-filter] duration-300 ${
        scrolled
          ? "bg-[var(--color-bg)]/80 backdrop-blur-xl border-b border-[var(--color-border)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--color-accent-indigo)] to-[var(--color-accent-cyan)] flex items-center justify-center text-white font-bold text-sm">
            JT
          </div>
          <span className="font-semibold text-[var(--color-text)] text-sm tracking-tight hidden sm:block">
            aidads.com
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/#contact"
            className="text-sm px-4 py-2 rounded-lg bg-[var(--color-accent-indigo)] text-white hover:bg-[var(--color-accent-indigo)]/80 transition-colors"
          >
            Let&apos;s Talk
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-3 text-[var(--color-text-secondary)]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[var(--color-bg-elevated)] border-b border-[var(--color-border)] overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text)] py-2"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/#contact"
                onClick={() => setMobileOpen(false)}
                className="text-sm px-4 py-2 rounded-lg bg-[var(--color-accent-indigo)] text-white text-center mt-2"
              >
                Let&apos;s Talk
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
