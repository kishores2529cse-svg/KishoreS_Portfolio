import React from 'react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle({ className = '' }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? 'Switch to Day mode' : 'Switch to Night mode'}
      title={isDark ? 'Switch to Day mode' : 'Switch to Night mode'}
      className={`group relative inline-flex items-center w-[78px] h-[38px] rounded-full p-[2px] transition-all duration-500 ease-out cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 hover:scale-105 active:scale-95 ${
        isDark
          ? 'bg-black border-2 border-white shadow-[0_0_20px_rgba(255,255,255,0.15)]'
          : 'bg-[#6ea8fe] border-2 border-[#6ea8fe] shadow-[0_4px_16px_rgba(110,168,254,0.35)]'
      } ${className}`}
    >
      {/* =========================================================
          NIGHT SKY DECORATIONS (Stars - visible in dark mode)
         ========================================================= */}
      <div
        className={`absolute inset-0 pointer-events-none transition-all duration-500 overflow-hidden rounded-full ${
          isDark ? 'opacity-100 scale-100' : 'opacity-0 scale-75 translate-x-3'
        }`}
      >
        {/* Primary 4-pointed Sparkle Star */}
        <div className="absolute top-[8px] right-[18px]">
          <svg
            viewBox="0 0 24 24"
            fill="white"
            className="w-[9px] h-[9px] drop-shadow-[0_0_3px_rgba(255,255,255,0.9)] animate-pulse"
          >
            <path d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z" />
          </svg>
        </div>

        {/* Small Twinkle Star Dot 1 */}
        <div className="absolute top-[18px] right-[10px] w-[3px] h-[3px] rounded-full bg-white shadow-[0_0_3px_rgba(255,255,255,0.9)]" />

        {/* Small Twinkle Star Dot 2 */}
        <div className="absolute bottom-[9px] right-[27px] w-[2px] h-[2px] rounded-full bg-white/90 shadow-[0_0_2px_rgba(255,255,255,0.8)]" />

        {/* Subtle Micro-Star 3 */}
        <div className="absolute top-[13px] right-[30px] w-[1.5px] h-[1.5px] rounded-full bg-white/70" />
      </div>

      {/* =========================================================
          DAY SKY DECORATIONS (Clouds - visible in light mode)
         ========================================================= */}
      <div
        className={`absolute inset-0 pointer-events-none transition-all duration-500 overflow-hidden rounded-full ${
          !isDark ? 'opacity-100 scale-100' : 'opacity-0 scale-75 -translate-x-3'
        }`}
      >
        {/* Upper Cloud (slightly to the right) */}
        <div className="absolute top-[7px] left-[32px] transition-transform duration-500">
          <svg
            viewBox="0 0 24 13"
            fill="none"
            className="w-[18px] h-[10px] text-white fill-current drop-shadow-[0_1px_2px_rgba(0,0,0,0.06)]"
          >
            <path d="M4.5 12h14a3.5 3.5 0 0 0 .5-6.96A4.5 4.5 0 0 0 10.5 2a4 4 0 0 0-6 4A3.5 3.5 0 0 0 4.5 12z" />
          </svg>
        </div>

        {/* Lower Cloud (slightly to the left) */}
        <div className="absolute bottom-[6px] left-[13px] transition-transform duration-500">
          <svg
            viewBox="0 0 24 13"
            fill="none"
            className="w-[20px] h-[11px] text-white fill-current drop-shadow-[0_1px_2px_rgba(0,0,0,0.06)]"
          >
            <path d="M5 12h13.5a3.5 3.5 0 0 0 .8-6.9A4.5 4.5 0 0 0 11 1.5a4 4 0 0 0-6 4.3A3.5 3.5 0 0 0 5 12z" />
          </svg>
        </div>
      </div>

      {/* =========================================================
          THE KNOT / THUMB (Moon in Dark Mode, Sun in Light Mode)
         ========================================================= */}
      <div
        className={`relative z-10 w-[30px] h-[30px] rounded-full transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
          isDark
            ? 'translate-x-0 bg-white shadow-[0_0_16px_3px_rgba(255,255,255,0.9),0_0_4px_1px_rgba(255,255,255,1)]'
            : 'translate-x-[40px] bg-[#ffd538] shadow-[0_0_14px_rgba(255,213,56,0.85)]'
        }`}
      />
    </button>
  );
}
