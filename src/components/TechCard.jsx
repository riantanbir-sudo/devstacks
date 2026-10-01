const BADGE_STYLE = {
  Popular: { bg: '#eaf4ff', text: '#2f80ed' },
  Fast: { bg: '#fff1e6', text: '#ff7a30' },
  Essential: { bg: '#e8f9f0', text: '#1fae6a' },
  'Top SQL': { bg: '#eaf4ff', text: '#2f80ed' },
  Containers: { bg: '#eef0ff', text: '#6c63ff' },
};
const DEFAULT_BADGE = { bg: '#f5f0ff', text: '#8b3ff5' };

export default function TechCard({ tech, isAdded, onAdd }) {
  const badge = BADGE_STYLE[tech.badge] || DEFAULT_BADGE;

  return (
    <div className="rounded-2xl bg-white border border-[var(--color-line)] p-5 flex flex-col gap-4 transition-shadow hover:shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
      <div className="flex items-start justify-between gap-3">
        <img src={tech.icon} alt={`${tech.name} icon`} className="w-9 h-9 object-contain" loading="lazy" />
        <span
          className="text-xs font-semibold px-3 py-1.5 rounded-full"
          style={{ background: badge.bg, color: badge.text }}
        >
          {tech.badge}
        </span>
      </div>

      <div>
        <h3 className="font-display font-bold text-[var(--color-ink)] text-lg">{tech.name}</h3>
        <p className="mt-1.5 text-sm text-[var(--color-muted)] leading-relaxed">{tech.description}</p>
      </div>

      <div className="flex items-center gap-3 text-sm pt-4 border-t border-[var(--color-line)]">
        <span className="text-xs font-medium px-2.5 py-1 rounded-md bg-[var(--color-surface-muted)] text-[var(--color-muted)]">
          {tech.category}
        </span>
        <span className="text-[var(--color-muted)] text-xs">{tech.difficulty}</span>
        <span className="ml-auto flex items-center gap-1 text-[var(--color-ink)] font-medium text-xs">
          <svg width="13" height="13" viewBox="0 0 12 12" fill="#f5a623">
            <path d="M6 0.5l1.65 3.53 3.85.42-2.9 2.62.78 3.93L6 9.1 2.62 11l.78-3.93L.5 4.45l3.85-.42L6 .5z" />
          </svg>
          {tech.rating}
        </span>
      </div>

      <button
        onClick={() => onAdd(tech)}
        disabled={isAdded}
        className={`w-full py-3 rounded-xl text-sm font-semibold transition-colors ${
          isAdded
            ? 'bg-[var(--color-surface-muted)] text-[var(--color-muted-2)] cursor-not-allowed'
            : 'bg-[var(--color-ink)] text-white hover:opacity-90'
        }`}
      >
        {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
      </button>
    </div>
  );
}
