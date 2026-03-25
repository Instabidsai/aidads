import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-bg)]">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--color-accent-indigo)] to-[var(--color-accent-cyan)] flex items-center justify-center text-white font-bold text-sm">
                JT
              </div>
              <span className="font-semibold text-[var(--color-text)]">
                Justin Thompson
              </span>
            </div>
            <p className="text-sm text-[var(--color-text-secondary)] max-w-sm leading-relaxed">
              Building and operating AI-run companies. 17 businesses, 91 agents,
              one operator. The venture factory is always building.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-[var(--color-text)] mb-3">
              Navigate
            </h4>
            <div className="flex flex-col gap-2">
              <Link href="/ecosystem" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors">
                Ecosystem
              </Link>
              <Link href="/partnerships" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors">
                Partnerships
              </Link>
              <a href="https://affixed.ai" target="_blank" rel="noopener noreferrer" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors">
                Consulting
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-[var(--color-text)] mb-3">
              Connect
            </h4>
            <div className="flex flex-col gap-2">
              <a href="mailto:justin@aidads.com" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors">
                justin@aidads.com
              </a>
              <a href="tel:+15615587020" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors">
                (561) 558-7020
              </a>
              <a href="https://linkedin.com/in/justinthompson" target="_blank" rel="noopener noreferrer" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors">
                LinkedIn
              </a>
              <a href="/api/contact" className="text-sm text-[var(--color-accent-indigo)] hover:text-[var(--color-accent-cyan)] transition-colors">
                Save to Contacts
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-[var(--color-border)] mt-8 pt-8 text-center text-xs text-[var(--color-text-muted)]">
          &copy; {new Date().getFullYear()} Justin Thompson. Built with AI.
          Operated by one person.
        </div>
      </div>
    </footer>
  );
}
