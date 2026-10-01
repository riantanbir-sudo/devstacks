export default function YourStack({ stack, onRemove, onRemoveAll }) {
  return (
    <aside className="lg:sticky lg:top-24 rounded-2xl border border-[var(--color-line)] bg-white p-5 h-fit">
      <h3 className="font-display font-bold text-[var(--color-ink)]">Your Stack</h3>
      <p className="text-sm text-[var(--color-muted)] mt-1">
        {stack.length === 0 ? 'No technologies selected yet.' : `${stack.length} Technology Selected`}
      </p>

      <div className="mt-4 flex flex-col gap-2.5 max-h-[380px] overflow-y-auto scrollbar-thin pr-1">
        {stack.length === 0 ? (
          <div className="rounded-xl border border-dashed border-[var(--color-line)] py-8 text-center">
            <p className="text-sm text-[var(--color-muted)]">Your stack is empty.</p>
          </div>
        ) : (
          stack.map((tech) => (
            <div
              key={tech.id}
              className="flex items-center gap-3 rounded-xl border border-[var(--color-line)] px-3 py-2.5"
            >
              <img src={tech.icon} alt={`${tech.name} icon`} className="w-7 h-7 object-contain shrink-0" />
              <div className="min-w-0">
                <p className="text-sm font-semibold text-[var(--color-ink)] truncate">{tech.name}</p>
                <p className="text-xs text-[var(--color-muted)] truncate">{tech.category}</p>
              </div>
              <button
                onClick={() => onRemove(tech.id)}
                aria-label={`Remove ${tech.name}`}
                className="ml-auto w-6 h-6 flex items-center justify-center text-[var(--color-muted-2)] hover:text-[var(--color-ink)] transition-colors shrink-0"
              >
                ✕
              </button>
            </div>
          ))
        )}
      </div>

      {stack.length > 0 && (
        <button
          onClick={onRemoveAll}
          className="mt-4 w-full py-3 rounded-xl text-sm font-semibold border transition-colors"
          style={{ borderColor: '#f3b4c4', color: 'var(--color-brand-2)' }}
        >
          Remove All
        </button>
      )}
    </aside>
  );
}
