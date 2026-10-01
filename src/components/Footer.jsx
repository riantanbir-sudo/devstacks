const LINK_GROUPS = [
  { title: 'PRODUCT', links: ['Home', 'Technologies', 'Projects'] },
  { title: 'COMPANY', links: ['About', 'Contact', 'Careers'] },
  { title: 'LEGAL', links: ['Privacy Policy', 'Terms of Service'] },
];

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-[var(--color-line)] bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-14 grid gap-10 md:grid-cols-[1.4fr_repeat(3,1fr)]">
        <div className="max-w-xs">
          <a href="#top">
            <img src="/assets/logo-text.png" alt="Dev Stack" className="h-7 w-auto" />
          </a>
          <p className="mt-4 text-sm text-[var(--color-muted)] leading-relaxed">
            Curated tools, technologies, and resources for developers building modern software.
          </p>
          <div className="mt-4 flex items-center gap-5 text-sm font-medium text-[var(--color-ink)]">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-[var(--color-brand-2)] transition-colors">GitHub</a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-[var(--color-brand-2)] transition-colors">Twitter</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-[var(--color-brand-2)] transition-colors">LinkedIn</a>
          </div>
        </div>

        {LINK_GROUPS.map((group) => (
          <div key={group.title}>
            <h4 className="text-xs font-bold tracking-wide text-[var(--color-ink)]">{group.title}</h4>
            <ul className="mt-4 flex flex-col gap-3">
              {group.links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-[var(--color-muted)] hover:text-[var(--color-ink)] transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-[var(--color-line)]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-[var(--color-muted)]">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-[var(--color-ink)] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[var(--color-ink)] transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
