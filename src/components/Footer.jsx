export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-line)] bg-white py-12">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <div>
            <a href="#top" className="inline-block mb-4">
              <img 
                src={`${import.meta.env.BASE_URL}assets/logo-text.png`} 
                alt="Dev Stack" 
                className="h-7 w-auto" 
              />
            </a>
            <p className="text-sm text-[var(--color-muted)] max-w-xs leading-relaxed mb-4">
              Curated tools, technologies, and resources for developers building modern software.
            </p>
            <div className="flex items-center gap-4 text-sm font-medium text-[var(--color-ink)]">
              <a href="#" className="hover:underline">GitHub</a>
              <a href="#" className="hover:underline">Twitter</a>
              <a href="#" className="hover:underline">LinkedIn</a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-xs uppercase tracking-wider text-[var(--color-ink)] mb-4">Product</h3>
            <ul className="space-y-2.5 text-sm text-[var(--color-muted)]">
              <li><a href="#home" className="hover:text-[var(--color-ink)] transition-colors">Home</a></li>
              <li><a href="#technologies" className="hover:text-[var(--color-ink)] transition-colors">Technologies</a></li>
              <li><a href="#projects" className="hover:text-[var(--color-ink)] transition-colors">Projects</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-xs uppercase tracking-wider text-[var(--color-ink)] mb-4">Company</h3>
            <ul className="space-y-2.5 text-sm text-[var(--color-muted)]">
              <li><a href="#about" className="hover:text-[var(--color-ink)] transition-colors">About</a></li>
              <li><a href="#contact" className="hover:text-[var(--color-ink)] transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-[var(--color-ink)] transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-xs uppercase tracking-wider text-[var(--color-ink)] mb-4">Legal</h3>
            <ul className="space-y-2.5 text-sm text-[var(--color-muted)]">
              <li><a href="#" className="hover:text-[var(--color-ink)] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[var(--color-ink)] transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[var(--color-line)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--color-muted)]">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}