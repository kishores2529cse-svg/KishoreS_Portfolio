import React from 'react';
import { Layers, Cpu, Database, Wrench, CheckCircle2 } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend & Kinetic Motion',
      icon: Layers,
      skills: [
        'React 19 / Modern Hooks',
        'Next.js (App Router)',
        'GSAP & ScrollTrigger',
        'Tailwind CSS v4',
        'JavaScript (ES6+) / TypeScript',
        'HTML5 Semantic Canvas / Media',
        'Responsive & Mobile-First UI',
      ],
    },
    {
      title: 'Backend & System Architecture',
      icon: Cpu,
      skills: [
        'Node.js & Express',
        'RESTful API Engineering',
        'Real-Time WebSockets & Data Sync',
        'AI System Telemetry & Monitoring',
        'Authentication & Security Mitigations',
        'High-Concurrency Architecture',
      ],
    },
    {
      title: 'Data & Cloud Infrastructure',
      icon: Database,
      skills: [
        'DBMS Normalization & Integrity',
        'PostgreSQL / SQL Architecture',
        'Redis Caching & Race Prevention',
        'Docker Containers',
        'Git & GitHub Workflows',
        'Vercel & CI/CD Pipelines',
      ],
    },
    {
      title: 'Engineering Standards',
      icon: Wrench,
      skills: [
        'Performance Profiling & Optimization',
        'Component Architecture & Reusability',
        'Pixel-Perfect Design Precision',
        'Clean, Maintainable Codebases',
        'Hackathon Rapid Prototyping',
        'Problem Solving & Debugging',
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-24 sm:py-32 px-4 sm:px-8 bg-[var(--bg-page)] text-[var(--text-heading)] transition-colors duration-350 border-t border-[var(--border-section)] relative"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full badge-luxury text-xs font-mono mb-6 tracking-wider">
            <Cpu className="w-3.5 h-3.5 text-[var(--text-heading)]" />
            <span>03 // CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[var(--text-heading)] uppercase">
            Technical Stack & Expertise
          </h2>
          <p className="mt-4 text-[var(--text-body)] max-w-2xl text-base sm:text-lg font-normal">
            The architectural frameworks, toolchains, and engineering disciplines leveraged to craft high-concurrency digital platforms.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.title}
                className="glass-panel p-8 sm:p-10 rounded-3xl"
              >
                <div className="flex items-center gap-3.5 mb-8">
                  <div className="p-3 rounded-2xl bg-[var(--badge-bg)] border border-[var(--badge-border)] text-[var(--text-heading)]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[var(--text-heading)] tracking-tight">
                    {cat.title}
                  </h3>
                </div>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {cat.skills.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center gap-2.5 text-xs sm:text-sm text-[var(--text-heading)] bg-[var(--badge-bg)] p-3 rounded-xl border border-[var(--badge-border)] font-medium"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[var(--text-heading)] shrink-0" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
