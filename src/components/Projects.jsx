import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);

  const projectList = [
    {
      title: 'CCC ~ AI Secure System Monitoring',
      category: 'AI & Security',
      badge: 'Flagship Architecture',
      image: '/projects/ccc.png',
      description:
        'My primary flagship project uplifting full-stack and security engineering skills: An autonomous AI-driven monitoring architecture featuring real-time telemetry, continuous threat assessment, and automated anomaly mitigation.',
      tags: ['AI Security', 'System Telemetry', 'Full-Stack', 'Real-Time Web', 'Vercel'],
      github: 'https://system-monitoring-phi.vercel.app/',
      live: 'http://system-monitoring-phi.vercel.app/',
    },
    {
      title: 'FFS | Fair. Flash. Sale.',
      category: 'Real-Time Sync',
      badge: 'High-Concurrency Engine',
      image: '/projects/FFS.png',
      description:
        'High-concurrency e-commerce flash sale engine engineered with ultra-reliable real-time data synchronization, preventing race conditions, overselling, and inventory drift under intense traffic spikes.',
      tags: ['Real-Time Sync', 'High Concurrency', 'Distributed State', 'WebSockets', 'Vercel'],
      github: 'https://fair-flash-gate.vercel.app/',
      live: 'https://fair-flash-gate.vercel.app/',
    },
    {
      title: 'PlacementPrep',
      category: 'DBMS & Platforms',
      badge: 'Honourable GDG CIT Hackathon',
      image: '/projects/PlacementPrep.png',
      description:
        'Award-honored career readiness platform engineered during the prestigious GDG CIT Coimbatore Hackathon, empowering university students with streamlined mock rounds, company-wise preparation tracks, and candidate benchmarking.',
      tags: ['GDG CIT Hackathon', 'EdTech', 'Interview Readiness', 'React', 'Vercel'],
      github: 'https://placement360-mu.vercel.app/',
      live: 'https://placement360-mu.vercel.app/',
    },
    {
      title: 'Placement360',
      category: 'DBMS & Platforms',
      badge: 'Zero Redundancy DBMS',
      image: '/projects/Placement360.png',
      description:
        'Institutional placement management system resolving critical database integrity and redundancy challenges. Accurately tracks placed, not-placed, and non-placement student cohorts with strict relational audit trails.',
      tags: ['DBMS', 'Data Integrity', 'Relational Normalization', 'Audit Trails', 'Vercel'],
      github: 'https://placement360dbms.vercel.app/',
      live: 'https://placement360dbms.vercel.app/',
    },
    {
      title: 'CivicConnect',
      category: 'Civic Tech',
      badge: 'Citizen-Gov Platform',
      image: '/projects/civicconnect.png',
      description:
        'A public governance and civic empowerment platform enabling residents of the nation to report local infrastructure hazards, civic faults, and societal issues directly for prioritized government resolution.',
      tags: ['Civic Tech', 'Citizen Portal', 'Public Infrastructure', 'Social Impact', 'GovTech'],
      github: 'https://github.com',
      live: '#',
    },
  ];

  const activeProject = projectList[activeIndex] || projectList[0];

  return (
    <section
      id="projects"
      className="py-24 sm:py-32 px-4 sm:px-8 bg-[#050807] text-white relative"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 text-sm font-mono mb-6 tracking-wider text-neutral-400">
            <span className="w-2 h-2 rounded-full bg-[#7CFF3B]" />
            <span>02 // Selected Works</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white uppercase">
            Featured Creations
          </h2>
          <p className="mt-4 text-neutral-400 max-w-xl text-base sm:text-lg font-normal leading-relaxed">
            Production architectures, real-time synchronization engines, hackathon achievements, and civic technologies.
          </p>
        </div>

        {/* 12-Column Interactive Split-Stage Case-Study Index */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-10 border-t border-white/[0.08] items-start">
          {/* Left Column (5 Cols): Interactive Project Selector Stack */}
          <div className="lg:col-span-5">
            <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
              {projectList.map((project, index) => {
                const isActive = activeIndex === index;
                return (
                  <div
                    key={project.title}
                    onClick={() => setActiveIndex(index)}
                    onMouseEnter={() => setActiveIndex(index)}
                    className={`py-5 px-4 cursor-pointer transition-colors duration-200 ease-out relative flex flex-col gap-1.5 ${
                      isActive ? 'bg-white/[0.03]' : 'hover:bg-white/[0.02]'
                    }`}
                  >
                    {/* Active Telemetry 2px Left Bar */}
                    {isActive && (
                      <span className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#7CFF3B]" />
                    )}

                    <div className="flex items-baseline gap-3">
                      <span className="text-sm font-mono text-[#7CFF3B]">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <h3
                        className={`text-xl font-bold tracking-tight transition-colors duration-200 ease-out ${
                          isActive ? 'text-white' : 'text-neutral-300'
                        }`}
                      >
                        {project.title}
                      </h3>
                    </div>

                    <div className="text-sm text-neutral-400 font-normal pl-7">
                      {project.category} • {project.badge}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column (7 Cols): Sticky Architectural Viewport & Dossier */}
          <div className="lg:col-span-7 lg:sticky lg:top-28">
            {/* Viewport Screenshot Frame */}
            <div className="aspect-[16/10] overflow-hidden rounded-xl border border-white/[0.1] bg-[#0B0E0D] relative">
              <img
                key={activeProject.image}
                src={activeProject.image}
                alt={activeProject.title}
                className="w-full h-full object-cover scale-100 transition-opacity duration-300 ease-out"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>

            {/* Unboxed Architectural Dossier Block */}
            <div className="mt-6">
              <h3 className="text-2xl font-bold text-white tracking-tight">
                {activeProject.title}
              </h3>

              <p className="mt-3 text-base text-neutral-300 leading-relaxed font-normal">
                {activeProject.description}
              </p>

              {/* Inline Middot Tech Stack (No Pill Badges) */}
              <p className="mt-4 text-sm font-mono text-neutral-400 font-normal">
                {activeProject.tags.join(' · ')}
              </p>

              {/* Action Links */}
              <div className="mt-6 pt-5 border-t border-white/[0.08] flex items-center justify-between">
                <a
                  href={activeProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-neutral-300 hover:text-[#7CFF3B] transition-colors duration-200 ease-out group"
                >
                  <GithubIcon className="w-4 h-4 text-neutral-400 group-hover:text-[#7CFF3B] transition-colors duration-200 ease-out" />
                  <span>{activeProject.live === '#' ? 'Repository' : 'Source / Live'}</span>
                </a>

                {activeProject.live !== '#' ? (
                  <a
                    href={activeProject.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-white hover:text-[#7CFF3B] transition-colors duration-200 ease-out group"
                  >
                    <span>Launch Live</span>
                    <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-[#7CFF3B] transition-colors duration-200 ease-out" />
                  </a>
                ) : (
                  <span className="text-sm font-mono text-neutral-500">
                    Active Initiative
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
