import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import TechCard from './TechCard';
import YourStack from './YourStack';

export default function Technologies() {
  const [techs, setTechs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stack, setStack] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch('/technologies.json')
      .then((res) => res.json())
      .then((data) => setTechs(data))
      .catch(() => toast.error('Could not load technologies.'))
      .finally(() => setLoading(false));
  }, []);

  const handleAdd = (tech) => {
    const alreadyAdded = stack.some((item) => item.id === tech.id);
    if (alreadyAdded) {
      toast.warn(`${tech.name} is already in your stack.`);
      return;
    }
    setStack((prev) => [...prev, tech]);
    toast.success(`${tech.name} added to your stack.`);
  };

  const handleRemove = (id) => {
    const tech = stack.find((item) => item.id === id);
    setStack((prev) => prev.filter((item) => item.id !== id));
    if (tech) toast.info(`${tech.name} removed from your stack.`);
  };

  const handleRemoveAll = () => {
    setStack([]);
    toast.info('Stack cleared.');
  };

  return (
    <section id="technologies" className="max-w-7xl mx-auto px-5 sm:px-8 py-16 md:py-20">
      <div className="mb-10 max-w-xl">
        <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[var(--color-ink)]">
          Explore the <span style={{ color: 'var(--color-brand-2)' }}>Technologies</span>
        </h2>
        <p className="mt-2 text-[var(--color-muted)] text-sm sm:text-base">
          Browse every category and add what fits into your ideal stack.
        </p>
      </div>

      <div className="grid lg:grid-cols-[1fr_300px] gap-8 items-start">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-24 gap-3 text-[var(--color-muted)]">
            <span className="w-8 h-8 rounded-full border-2 border-[var(--color-line)] border-t-[var(--color-brand-2)] animate-spin" />
            <p className="text-sm">Loading technologies…</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
            {techs.map((tech) => (
              <TechCard
                key={tech.id}
                tech={tech}
                isAdded={stack.some((item) => item.id === tech.id)}
                onAdd={handleAdd}
              />
            ))}
          </div>
        )}

        <YourStack stack={stack} onRemove={handleRemove} onRemoveAll={handleRemoveAll} />
      </div>
    </section>
  );
}
