import { useState } from 'react';

const NAV_LINKS = ['Home', 'Technologies', 'Projects', 'About', 'Contact'];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('Home');

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-[var(--color-line)]">
      <nav className="max-w-7xl mx-auto px-5 sm:px-8 h-[72px] flex items-center justify-between">
        {/* Mobile: hamburger left */}
        <button
          className="md:hidden w-9 h-9 flex items-center justify-center rounded-md border border-[var(--color-line)] text-[var(--color-ink)]"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            {open ? (
              <path d="M3 3L15 15M15 3L3 15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            ) : (
              <path d="M2 5H16M2 9H16M2 13H16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            )}
          </svg>
        </button>

        {/* Logo: desktop left, mobile center */}
        <a href="#top" className="md:order-none order-2 md:mx-0 mx-auto">
          <img src="/assets/logo-text.png" alt="Dev Stack" className="h-7 w-auto" />
        </a>

        {/* Desktop center links */}
        <ul className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                onClick={() => setActive(link)}
                className="text-sm font-medium transition-colors"
                style={{ color: active === link ? 'var(--color-brand-2)' : 'var(--color-ink)' }}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Right: auth buttons */}
        <div className="flex items-center gap-4 sm:gap-5 order-3">
          <button className="hidden sm:block text-sm font-medium text-[var(--color-ink)] hover:text-[var(--color-muted)] transition-colors">
            Sign In
          </button>
          <button className="text-sm font-semibold px-5 py-2.5 rounded-full text-white transition-opacity hover:opacity-90" style={{ background: 'var(--color-brand-2)' }}>
            Sign Up
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden border-t border-[var(--color-line)] bg-white px-5 py-4">
          <ul className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  onClick={() => { setActive(link); setOpen(false); }}
                  className="block text-sm py-1"
                  style={{ color: active === link ? 'var(--color-brand-2)' : 'var(--color-ink)' }}
                >
                  {link}
                </a>
              </li>
            ))}
            <li className="pt-2 border-t border-[var(--color-line)]">
              <button className="text-sm font-medium text-[var(--color-ink)] py-1">Sign In</button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
