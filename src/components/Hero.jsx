export default function Hero() {
  return (
    <section id="home" className="max-w-7xl mx-auto px-5 sm:px-8 pt-14 pb-20 md:pt-20 md:pb-24 grid md:grid-cols-2 gap-10 items-center">
      <div>
        <h1 className="rise-in font-display font-extrabold text-[2.6rem] sm:text-5xl leading-[1.1] tracking-tight text-[var(--color-ink)]">
          Build Your Ideal
          <br />
          <span className="text-gradient">Development Stack</span>
        </h1>
        <p className="rise-in mt-5 text-[var(--color-muted)] text-base sm:text-lg max-w-md" style={{ animationDelay: '80ms' }}>
          Explore frontend, backend, database, and tooling options, compare them
          side by side, and put together the stack that fits your next project.
        </p>
        <div className="rise-in mt-8 flex flex-wrap items-center gap-4" style={{ animationDelay: '150ms' }}>
          <a
            href="#technologies"
            className="px-6 py-3 rounded-full font-semibold text-sm text-white bg-brand-gradient hover:opacity-90 transition-opacity"
          >
            Explore Technologies
          </a>
          <a
            href="#about"
            className="px-6 py-3 rounded-full font-semibold text-sm border border-[var(--color-line)] text-[var(--color-ink)] hover:border-[var(--color-muted-2)] transition-colors"
          >
            Learn More
          </a>
        </div>
      </div>

      <div className="rise-in flex justify-center md:justify-end" style={{ animationDelay: '100ms' }}>
        <img
          src="/assets/banner-stack.png"
          alt="Illustration of a layered development stack"
          className="w-full max-w-sm md:max-w-md"
        />
      </div>
    </section>
  );
}
