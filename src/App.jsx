import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Technologies from './components/Technologies';
import Footer from './components/Footer';

export default function App() {
  return (
    <div id="top" className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Technologies />
        <section id="about" className="max-w-7xl mx-auto px-5 sm:px-8 pb-20">
          <div className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface-muted)] p-8 md:p-10">
            <h2 className="font-display font-bold text-2xl text-[var(--color-ink)]">
              About <span style={{ color: 'var(--color-brand-2)' }}>Dev Stack</span>
            </h2>
            <p className="mt-3 text-[var(--color-muted)] max-w-2xl text-sm sm:text-base leading-relaxed">
              Dev Stack is a small tool for developers and students planning their next
              project: browse real frontend, backend, database, and tooling options,
              compare them side by side, and put together the exact combination you're
              going to build with — before writing a single line of code.
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <ToastContainer position="bottom-right" theme="light" />
    </div>
  );
}
