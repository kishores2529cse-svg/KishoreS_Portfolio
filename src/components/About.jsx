import React from 'react';
import { Code2, Cpu, Rocket, Sparkles, Terminal, Award } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function About() {
  const stats = [
    { label: 'Core Focus', value: 'Full-Stack Architecture', icon: Code2 },
    { label: 'Philosophy', value: 'Speed & Kinetic Motion', icon: Sparkles },
    { label: 'Approach', value: 'Human-Centric Engineering', icon: Rocket },
    { label: 'Standard', value: 'Uncompromising Craft', icon: Award },
  ];

  return (
    <section
      id="about"
      className="relative py-24 sm:py-32 px-4 sm:px-8 bg-[var(--bg-page)] text-[var(--text-heading)] transition-colors duration-350 border-t border-[var(--border-section)]"
    >
      <div className="max-w-6xl mx-auto">
        {/* ========================================================
            THRESHOLD CONTROL: Day/Night Toggle Just After Scrolling Page
           ======================================================== */}
        <div className="flex flex-col items-center justify-center mb-16 sm:mb-20">
          <div className="mb-4">
            <ThemeToggle />
          </div>
          <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-[var(--text-muted)]">
            Select Visual Mode
          </span>
        </div>

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full badge-luxury text-xs font-mono mb-6 tracking-wider">
            <Terminal className="w-3.5 h-3.5 text-[var(--text-heading)]" />
            <span>01 // ABOUT ME</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[var(--text-heading)] uppercase">
            Engineering with Intent & Passion
          </h2>

          <p className="mt-5 text-[var(--text-body)] max-w-2xl text-base sm:text-lg leading-relaxed font-normal">
            I am <strong className="text-[var(--text-heading)] font-semibold">Kishore S</strong>, a developer driven by the pursuit of translating complex computational challenges into razor-sharp, frictionless digital realities.
          </p>
        </div>

        {/* 2-Column Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Story Card */}
          <div className="lg:col-span-7 glass-panel p-8 sm:p-12 rounded-3xl flex flex-col justify-between">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-heading)] mb-5 tracking-tight">
                The Creative & Analytical Developer
              </h3>
              <p className="text-[var(--text-body)] leading-relaxed text-sm sm:text-base mb-4 font-normal">
                My work centers around modern web architecture where brutal technical performance meets gallery-grade aesthetics. I build systems that don't just execute flawlessly, but provide users with immediate, tactile fluidity.
              </p>
              <p className="text-[var(--text-muted)] leading-relaxed text-sm sm:text-base font-normal">
                From micro-benchmarked responsive frontends to clean microservices and frame-by-frame kinetic interactions, I approach every codebase with rigorous standards, clean patterns, and pride of craftsmanship.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[var(--border-section)] flex flex-wrap items-center gap-3 text-xs font-mono text-[var(--text-body)]">
              <span className="w-2 h-2 rounded-full bg-[var(--text-heading)] animate-pulse" />
              <span>Available for high-impact software engineering roles & partnerships</span>
            </div>
          </div>

          {/* Quick Stats & Highlights */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="glass-panel p-6 sm:p-7 rounded-2xl flex flex-col justify-between hover:scale-[1.02] group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[var(--badge-bg)] border border-[var(--badge-border)] flex items-center justify-center text-[var(--text-heading)] group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="mt-8">
                    <div className="text-[11px] font-mono uppercase tracking-widest text-[var(--text-muted)]">
                      {stat.label}
                    </div>
                    <div className="text-base sm:text-lg font-bold text-[var(--text-heading)] mt-1.5 tracking-tight">
                      {stat.value}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
