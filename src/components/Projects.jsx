import React, { useState } from 'react';
import { Sparkles, FolderGit2, ArrowUpRight, Trophy, Zap, ShieldCheck, Landmark } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'AI & Security', 'Real-Time Sync', 'DBMS & Platforms', 'Civic Tech'];

  const projectList = [
    {
      title: 'CCC ~ AI Secure System Monitoring',
      category: 'AI & Security',
      badge: 'Flagship Architecture',
      badgeIcon: Sparkles,
      image: '/projects/ccc.png',
      description:
        'My primary flagship project uplifting full-stack and security engineering skills: An autonomous AI-driven monitoring architecture featuring real-time telemetry, continuous threat assessment, and automated anomaly mitigation.',
      tags: ['AI Security', 'System Telemetry', 'Full-Stack', 'Real-Time Web', 'Vercel'],
      github: 'https://system-monitoring-phi.vercel.app/',
      live: 'http://system-monitoring-phi.vercel.app/',
      featured: true,
    },
    {
      title: 'FFS | Fair. Flash. Sale.',
      category: 'Real-Time Sync',
      badge: 'Real-Time Data Sync',
      badgeIcon: Zap,
      image: '/projects/FFS.png',
      description:
        'High-concurrency e-commerce flash sale engine engineered with ultra-reliable real-time data synchronization, preventing race conditions, overselling, and inventory drift under intense traffic spikes.',
      tags: ['Real-Time Sync', 'High Concurrency', 'Distributed State', 'WebSockets', 'Vercel'],
      github: 'https://fair-flash-gate.vercel.app/',
      live: 'https://fair-flash-gate.vercel.app/',
      featured: true,
    },
    {
      title: 'PlacementPrep',
      category: 'DBMS & Platforms',
      badge: 'Honourable GDG CIT Hackathon',
      badgeIcon: Trophy,
      image: '/projects/PlacementPrep.png',
      description:
        'Award-honored career readiness platform engineered during the prestigious GDG CIT Coimbatore Hackathon, empowering university students with streamlined mock rounds, company-wise preparation tracks, and candidate benchmarking.',
      tags: ['GDG CIT Hackathon', 'EdTech', 'Interview Readiness', 'React', 'Vercel'],
      github: 'https://placement360-mu.vercel.app/',
      live: 'https://placement360-mu.vercel.app/',
      featured: true,
    },
    {
      title: 'Placement360',
      category: 'DBMS & Platforms',
      badge: 'Zero Redundancy DBMS',
      badgeIcon: ShieldCheck,
      image: '/projects/Placement360.png',
      description:
        'Institutional placement management system resolving critical database integrity and redundancy challenges. Accurately tracks placed, not-placed, and non-placement student cohorts with strict relational audit trails.',
      tags: ['DBMS', 'Data Integrity', 'Relational Normalization', 'Audit Trails', 'Vercel'],
      github: 'https://placement360dbms.vercel.app/',
      live: 'https://placement360dbms.vercel.app/',
      featured: false,
    },
    {
      title: 'CivicConnect',
      category: 'Civic Tech',
      badge: 'Citizen-Gov Platform',
      badgeIcon: Landmark,
      image: '/projects/civicconnect.png',
      description:
        'A public governance and civic empowerment platform enabling residents of the nation to report local infrastructure hazards, civic faults, and societal issues directly for prioritized government resolution.',
      tags: ['Civic Tech', 'Citizen Portal', 'Public Infrastructure', 'Social Impact', 'GovTech'],
      github: 'https://github.com',
      live: '#',
      featured: false,
    },
  ];

  const filteredProjects =
    activeFilter === 'All'
      ? projectList
      : projectList.filter((p) => p.category === activeFilter);

  return (
    <section
      id="projects"
      className="py-24 sm:py-32 px-4 sm:px-8 bg-[var(--bg-page)] text-[var(--text-heading)] transition-colors duration-350 border-t border-[var(--border-section)] relative"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header and Filter navigation */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full badge-luxury text-xs font-mono mb-6 tracking-wider">
              <FolderGit2 className="w-3.5 h-3.5 text-[var(--text-heading)]" />
              <span>02 // FLAGSHIP & SELECTED WORK</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[var(--text-heading)] uppercase">
              Featured Creations
            </h2>
            <p className="mt-4 text-[var(--text-body)] max-w-xl text-base sm:text-lg font-normal">
              Production architectures, real-time synchronization engines, hackathon achievements, and civic technologies.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 ${
                  activeFilter === cat
                    ? 'btn-luxury shadow-lg scale-100'
                    : 'bg-[var(--badge-bg)] text-[var(--text-body)] hover:text-[var(--text-heading)] border border-[var(--badge-border)] scale-95'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => {
            const BadgeIcon = project.badgeIcon;
            return (
              <div
                key={project.title}
                className="glass-panel rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:scale-[1.01] group overflow-hidden"
              >
                <div>
                  {/* Category & Badge Header */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span className="text-[11px] font-mono tracking-widest uppercase px-3 py-1 rounded-full badge-luxury">
                      {project.category}
                    </span>
                    {project.badge && (
                      <span className="flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider text-[var(--text-heading)] badge-luxury px-3 py-1 rounded-full font-semibold">
                        <BadgeIcon className="w-3 h-3 text-[var(--text-heading)]" /> {project.badge}
                      </span>
                    )}
                  </div>

                  {/* Optional Project Thumbnail */}
                  {project.image && (
                    <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-5 bg-neutral-200/50 dark:bg-neutral-900/60 border border-[var(--border-section)]">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          // Hide frame gracefully if image not yet pasted
                          e.currentTarget.parentElement.style.display = 'none';
                        }}
                      />
                    </div>
                  )}

                  <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-heading)] group-hover:underline underline-offset-4 transition-all tracking-tight">
                    {project.title}
                  </h3>

                  <p className="mt-3.5 text-sm sm:text-base text-[var(--text-body)] leading-relaxed font-normal">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono px-3 py-1 rounded-md badge-luxury"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Links */}
                <div className="mt-8 pt-6 border-t border-[var(--border-section)] flex items-center justify-between">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-[var(--text-body)] hover:text-[var(--text-heading)] transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>{project.live === '#' ? 'Repository' : 'Source / Live'}</span>
                  </a>
                  {project.live !== '#' ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--text-heading)] group-hover:translate-x-1 transition-transform"
                    >
                      <span>Launch Live</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  ) : (
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--text-muted)]">
                      Active Initiative
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
