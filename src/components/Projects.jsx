import React, { useState } from 'react';
import { Sparkles, FolderGit2, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Full-Stack', 'Creative / Motion', 'AI & Tools'];

  const projectList = [
    {
      title: 'CCC ~ AI SECURE SYSTEM MONITORING!',
      category: 'Creative / Motion',
      description:
        'A high-performance interactive monitoring architecture engineered with real-time telemetry, automated anomaly mitigation, and an intuitive kinetic interface.',
      tags: ['React', 'Telemetry', 'Security', 'WebSockets', 'Vercel'],
      github: 'https://system-monitoring-phi.vercel.app/',
      live: 'https://system-monitoring-phi.vercel.app/',
      featured: true,
    },
    {
      title: 'OmniDash — Modern Cloud Platform',
      category: 'Full-Stack',
      description:
        'A full-stack reactive analytical dashboard with real-time metrics reporting, database pooling, and an architectural component design system.',
      tags: ['React', 'Node.js', 'PostgreSQL', 'WebSockets'],
      github: 'https://github.com',
      live: '#',
      featured: false,
    },
    {
      title: 'NeuralFlow — AI Workflow Assistant',
      category: 'AI & Tools',
      description:
        'Intelligent agent interface streamlining developer productivity with structured context extraction, automated code synthesis, and API integration.',
      tags: ['TypeScript', 'FastAPI', 'Gemini API', 'Tailwind'],
      github: 'https://github.com',
      live: '#',
      featured: false,
    },
    {
      title: 'HyperLink — High-Throughput REST Gateway',
      category: 'Full-Stack',
      description:
        'Resilient microservices gateway with JWT authentication, Redis rate limiting, and automated health checks designed for high-concurrency environments.',
      tags: ['Node.js', 'Express', 'Redis', 'Docker'],
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
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full badge-luxury text-xs font-mono mb-6 tracking-wider">
              <FolderGit2 className="w-3.5 h-3.5 text-[var(--text-heading)]" />
              <span>02 // SELECTED WORK</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[var(--text-heading)] uppercase">
              Featured Creations
            </h2>
            <p className="mt-4 text-[var(--text-body)] max-w-xl text-base sm:text-lg font-normal">
              A curated selection of engineering experiments, full-stack systems, and interactive architectures.
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
          {filteredProjects.map((project) => (
            <div
              key={project.title}
              className="glass-panel rounded-3xl p-8 sm:p-10 flex flex-col justify-between hover:scale-[1.01] group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-[11px] font-mono tracking-widest uppercase px-3 py-1 rounded-full badge-luxury">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider text-[var(--text-heading)] badge-luxury px-3 py-1 rounded-full font-semibold">
                      <Sparkles className="w-3 h-3 text-[var(--text-heading)]" /> Featured
                    </span>
                  )}
                </div>

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
                  <span>Repository</span>
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--text-heading)] group-hover:translate-x-1 transition-transform"
                >
                  <span>Launch Live</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
