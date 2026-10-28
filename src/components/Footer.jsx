import React from 'react';
import { ArrowUp } from 'lucide-react';
import { getLenis } from '../utils/smoothScroll';

export default function Footer() {
  const scrollToTop = () => {
    const lenis = getLenis();
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.5 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-12 px-4 sm:px-8 bg-[var(--bg-page)] text-[var(--text-muted)] transition-colors duration-350 border-t border-[var(--border-section)] text-xs">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-full btn-luxury flex items-center justify-center font-bold text-[10px]">
            K
          </div>
          <div>
            <span className="text-[var(--text-heading)] font-semibold">Kishore S</span>
            <span className="mx-2">•</span>
            <span>Architectural Portfolio</span>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <span>© {new Date().getFullYear()} Kishore S. All rights reserved.</span>
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-full badge-luxury text-[var(--text-heading)] transition-all flex items-center gap-1.5 font-mono text-[11px] hover:scale-105"
            title="Scroll to top"
          >
            <span>TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
