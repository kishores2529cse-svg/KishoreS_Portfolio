import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle({ className = '' }) {
  const { theme, setTheme } = useTheme();

  return (
    <div
      className={`inline-flex items-center p-1 rounded-full backdrop-blur-2xl transition-all duration-300 bg-[var(--card-bg)] border border-[var(--border-card)] shadow-lg ${className}`}
      role="group"
      aria-label="Theme selector"
    >
      {/* Night Button */}
      <button
        onClick={() => setTheme('dark')}
        className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 ${
          theme === 'dark'
            ? 'bg-white text-black shadow-md shadow-white/10 scale-100 font-bold'
            : 'text-neutral-400 hover:text-black dark:hover:text-white scale-95'
        }`}
        title="Switch to Night Mode (Obsidian Luxury)"
      >
        <Moon className={`w-3.5 h-3.5 transition-transform ${theme === 'dark' ? 'rotate-0' : '-rotate-45'}`} />
        <span className="uppercase text-[11px] font-mono">Night</span>
      </button>

      {/* Day Button */}
      <button
        onClick={() => setTheme('light')}
        className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 ${
          theme === 'light'
            ? 'bg-black text-white shadow-md shadow-black/20 scale-100 font-bold'
            : 'text-neutral-500 hover:text-black dark:hover:text-white scale-95'
        }`}
        title="Switch to Day Mode (Alabaster Luxury)"
      >
        <Sun className={`w-3.5 h-3.5 transition-transform ${theme === 'light' ? 'rotate-0' : 'rotate-90'}`} />
        <span className="uppercase text-[11px] font-mono">Day</span>
      </button>
    </div>
  );
}
