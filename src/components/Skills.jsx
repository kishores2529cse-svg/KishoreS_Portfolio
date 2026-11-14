import React, { useState } from 'react';
import { Layers, Cpu, Database, Wrench } from 'lucide-react';

const DOMAINS_DATA = [
  {
    id: '01',
    title: 'Frontend & Kinetic Motion',
    icon: Layers,
    isStandardMatrix: false,
    corePrimitives: [
      {
        name: 'React 19 / Modern Hooks',
        spec: 'Concurrent rendering, custom state primitives, and compiler optimization.',
      },
      {
        name: 'Next.js (App Router)',
        spec: 'Server component streaming, hybrid rendering pipelines, and modular routing.',
      },
      {
        name: 'JavaScript (ES6+) / TypeScript',
        spec: 'Strict static type contracts, modern ECMAScript idioms, and zero-runtime overhead.',
      },
      {
        name: 'Tailwind CSS v4',
        spec: 'Zero-runtime CSS variables engine, JIT compilation, and utility-first styling.',
      },
    ],
    disciplines: [
      {
        name: 'GSAP & ScrollTrigger',
        isPrimary: true,
        spec: 'Hardware-accelerated 60fps+ kinetic motion timelines and frame-scrubbed canvas synchronization.',
      },
      {
        name: 'HTML5 Semantic Canvas / Media',
        isPrimary: false,
        spec: 'Direct GPU 2D context rendering, frame buffer cycling, and multi-track audio sync pipelines.',
      },
      {
        name: 'Responsive & Mobile-First UI',
        isPrimary: false,
        spec: 'Adaptive fluid typography, sub-millisecond layout reflows, and ergonomic touch targets.',
      },
    ],
  },
  {
    id: '02',
    title: 'Backend & System Architecture',
    icon: Cpu,
    isStandardMatrix: false,
    corePrimitives: [
      {
        name: 'Java & Spring Boot',
        spec: 'Enterprise service layer, MVC architecture, IoC dependency injection, and REST controllers.',
      },
      {
        name: 'Node.js & Express',
        spec: 'Non-blocking asynchronous I/O event loops, microservices, and lean middleware chains.',
      },
      {
        name: 'RESTful API Engineering',
        spec: 'Stateless idempotent endpoints, strict schema contracts, and structured error boundaries.',
      },
    ],
    disciplines: [
      {
        name: 'Real-Time WebSockets & Data Sync',
        isPrimary: true,
        spec: 'Bi-directional event dispatching and zero-drift state replication across distributed clients.',
      },
      {
        name: 'High-Concurrency Architecture',
        isPrimary: true,
        spec: 'Non-blocking worker queues, load-balanced pipelines, and race-free contention control.',
      },
      {
        name: 'AI System Telemetry & Monitoring',
        isPrimary: false,
        spec: 'Real-time threat mitigation loops, anomaly detection, and autonomous telemetry logging.',
      },
      {
        name: 'Authentication & Security Mitigations',
        isPrimary: false,
        spec: 'Cryptographic token rotation, CSRF/XSS defense-in-depth, and rate-limiting barriers.',
      },
    ],
  },
  {
    id: '03',
    title: 'Data & Cloud Infrastructure',
    icon: Database,
    isStandardMatrix: false,
    corePrimitives: [
      {
        name: 'PostgreSQL / SQL Architecture',
        spec: 'ACID-compliant relational modeling, indexed query plans, and transactional boundary isolation.',
      },
      {
        name: 'Docker Containers',
        spec: 'Multi-stage isolated build images, deterministic runtime sandboxes, and minimal attack surface.',
      },
      {
        name: 'Git & GitHub Workflows',
        spec: 'Atomic commits, trunk-based feature branching, and strict PR automated review gates.',
      },
      {
        name: 'Vercel & CI/CD Pipelines',
        spec: 'Edge network deployment, automated preview branches, and instant cache invalidation.',
      },
    ],
    disciplines: [
      {
        name: 'Redis Caching & Race Prevention',
        isPrimary: true,
        spec: 'Sub-millisecond distributed caching, atomic distributed locks, and flash-sale race condition prevention.',
      },
      {
        name: 'DBMS Normalization & Integrity',
        isPrimary: false,
        spec: 'Third-normal-form relational normalization, foreign-key cascades, and redundancy elimination.',
      },
    ],
  },
  {
    id: '04',
    title: 'Engineering Standards',
    icon: Wrench,
    isStandardMatrix: true,
    matrixItems: [
      {
        name: 'Performance Profiling & Optimization',
        isPrimary: true,
        spec: 'Lighthouse 100 benchmark enforcement, memory leak elimination, and network payload minification.',
      },
      {
        name: 'Component Architecture & Reusability',
        isPrimary: false,
        spec: 'Atomic design hierarchy, headless composable interfaces, and strict prop contract boundaries.',
      },
      {
        name: 'Pixel-Perfect Design Precision',
        isPrimary: false,
        spec: 'Spatial grid discipline, micro-interaction feedback curves, and typographic rhythm.',
      },
      {
        name: 'Clean, Maintainable Codebases',
        isPrimary: false,
        spec: 'Self-documenting domain models, single-responsibility modules, and low cognitive complexity.',
      },
      {
        name: 'Hackathon Rapid Prototyping',
        isPrimary: true,
        spec: "HackSprint'26 Special Mention, Render Rush 3rd position, and 24-hr national hackathon execution at FORGEXAI & Hackspora.",
      },
      {
        name: 'Problem Solving & DSA Optimization',
        isPrimary: false,
        spec: '120+ LeetCode problems (50-Day Consistency Badge) and Rank 3,657 / 50,000 in HackerRank Orchestrate.',
      },
    ],
  },
];

function DomainColumn({ domain }) {
  const [activeSpec, setActiveSpec] = useState(null);
  const Icon = domain.icon;

  return (
    <div className="border-t border-black/[0.08] dark:border-white/[0.08] pt-8 flex flex-col justify-between bg-transparent rounded-none">
      {/* Main Content Area */}
      <div className="flex-1">
        {/* Domain Header: Monospace Index & Title */}
        <div className="flex items-center gap-3 pb-5 border-b border-black/[0.08] dark:border-white/[0.08]">
          <Icon className="w-5 h-5 text-emerald-600 dark:text-[#7CFF3B] shrink-0" />
          <div className="flex items-baseline gap-2.5 flex-wrap">
            <span className="text-sm font-mono font-medium text-emerald-600 dark:text-[#7CFF3B]">
              // {domain.id}
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white tracking-tight">
              {domain.title}
            </h3>
          </div>
        </div>

        {/* Domain Content: Split Tiers for Domains 01-03, Flat Hairlines for Domain 04 */}
        {!domain.isStandardMatrix ? (
          <div className="pt-4 sm:pt-5 space-y-5 sm:space-y-6">
            {/* Tier 1: Core Primitives (Flat Tactile Chips) */}
            <div>
              <h4 className="text-xs sm:text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-2.5 sm:mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-[#7CFF3B]" />
                <span>Core Primitives</span>
              </h4>
              <div className="flex flex-wrap gap-2 sm:gap-2.5">
                {domain.corePrimitives.map((tool) => (
                  <button
                    key={tool.name}
                    type="button"
                    onClick={() => setActiveSpec(activeSpec === `${tool.name}: ${tool.spec}` ? null : `${tool.name}: ${tool.spec}`)}
                    onMouseEnter={() => setActiveSpec(`${tool.name}: ${tool.spec}`)}
                    onMouseLeave={() => setActiveSpec(null)}
                    onFocus={() => setActiveSpec(`${tool.name}: ${tool.spec}`)}
                    onBlur={() => setActiveSpec(null)}
                    className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-md border border-black/[0.1] dark:border-white/[0.1] bg-black/[0.02] dark:bg-white/[0.02] hover:bg-black/[0.06] dark:hover:bg-white/[0.06] hover:border-black/[0.2] dark:hover:border-white/[0.2] text-xs sm:text-sm font-mono text-neutral-800 dark:text-neutral-200 hover:text-black dark:hover:text-white transition-colors cursor-pointer touch-manipulation flex items-center gap-1.5 sm:gap-2 group/chip"
                  >
                    <span className="text-neutral-400 dark:text-neutral-500 text-xs sm:text-sm group-hover/chip:text-emerald-600 dark:group-hover/chip:text-[#7CFF3B] transition-colors">&gt;</span>
                    <span>{tool.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Tier 2: Engineering Disciplines (Flat Hairlines, Zero Outer Border) */}
            <div>
              <h4 className="text-xs sm:text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-[#7CFF3B]" />
                <span>Engineering Disciplines</span>
              </h4>
              <div className="divide-y divide-black/[0.06] dark:divide-white/[0.06]">
                {domain.disciplines.map((disc) => (
                  <div
                    key={disc.name}
                    onClick={() => setActiveSpec(activeSpec === `${disc.name}: ${disc.spec}` ? null : `${disc.name}: ${disc.spec}`)}
                    onMouseEnter={() => setActiveSpec(`${disc.name}: ${disc.spec}`)}
                    onMouseLeave={() => setActiveSpec(null)}
                    onFocus={() => setActiveSpec(`${disc.name}: ${disc.spec}`)}
                    onBlur={() => setActiveSpec(null)}
                    tabIndex={0}
                    className="py-2.5 sm:py-3 hover:bg-black/[0.03] dark:hover:bg-white/[0.03] px-2 rounded-none transition-colors cursor-pointer touch-manipulation flex items-center justify-between gap-3 sm:gap-4 group/row outline-none"
                  >
                    <span className="text-xs sm:text-sm font-medium text-neutral-800 dark:text-neutral-200 group-hover/row:text-black dark:group-hover/row:text-white transition-colors truncate">
                      {disc.name}
                    </span>

                    {disc.isPrimary && (
                      <div className="flex items-center gap-1.5 shrink-0">
                        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-500 dark:bg-[#7CFF3B]" />
                        <span className="text-xs sm:text-sm font-mono text-emerald-700 dark:text-[#7CFF3B] font-medium">Primary</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* Domain 04: Engineering Standards (Flat Hairlines, Zero Outer Border) */
          <div className="pt-4 sm:pt-5">
            <h4 className="text-xs sm:text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-[#7CFF3B]" />
              <span>Core Engineering Standards</span>
            </h4>
            <div className="divide-y divide-black/[0.06] dark:divide-white/[0.06]">
              {domain.matrixItems.map((item) => (
                <div
                  key={item.name}
                  onClick={() => setActiveSpec(activeSpec === `${item.name}: ${item.spec}` ? null : `${item.name}: ${item.spec}`)}
                  onMouseEnter={() => setActiveSpec(`${item.name}: ${item.spec}`)}
                  onMouseLeave={() => setActiveSpec(null)}
                  onFocus={() => setActiveSpec(`${item.name}: ${item.spec}`)}
                  onBlur={() => setActiveSpec(null)}
                  tabIndex={0}
                  className="py-2.5 sm:py-3 hover:bg-black/[0.03] dark:hover:bg-white/[0.03] px-2 rounded-none transition-colors cursor-pointer touch-manipulation flex items-center justify-between gap-3 sm:gap-4 group/matrix outline-none"
                >
                  <span className="text-xs sm:text-sm font-medium text-neutral-800 dark:text-neutral-200 group-hover/matrix:text-black dark:group-hover/matrix:text-white transition-colors truncate">
                    {item.name}
                  </span>

                  {item.isPrimary && (
                    <div className="flex items-center gap-1.5 shrink-0">
                      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-500 dark:bg-[#7CFF3B]" />
                      <span className="text-xs sm:text-sm font-mono text-emerald-700 dark:text-[#7CFF3B] font-medium">Primary</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <p className="mt-4 sm:mt-5 text-xs sm:text-sm font-mono text-neutral-600 dark:text-neutral-400 break-words min-h-[2rem]">
        <span className="text-emerald-600 dark:text-[#7CFF3B] mr-2">&gt;</span>
        {activeSpec || "Tap or hover any module to inspect architectural focus"}
        <span className="text-emerald-600 dark:text-[#7CFF3B] ml-1">_</span>
      </p>
    </div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 lg:px-10 bg-[#faf9f6] dark:bg-[#050807] text-neutral-900 dark:text-white transition-colors duration-350 relative"
    >
      <div className="max-w-6xl 2xl:max-w-7xl mx-auto w-full">
        {/* Section Header: Preserved verbatim */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono mb-4 sm:mb-6 tracking-wider text-neutral-600 dark:text-neutral-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-[#7CFF3B]" />
            <span>03 // Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl font-extrabold tracking-tight text-neutral-900 dark:text-white uppercase leading-[1.1]">
            TECHNICAL STACK &amp; EXPERTISE
          </h2>
          <p className="mt-3 sm:mt-4 text-neutral-600 dark:text-neutral-400 max-w-2xl text-sm sm:text-base md:text-lg font-normal leading-relaxed">
            The architectural frameworks, toolchains, and engineering disciplines leveraged to craft high-concurrency digital platforms.
          </p>
        </div>

        {/* Open 2x2 Architectural Grid (No Card Enclosures, Top Hairlines Only) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-stretch">
          {DOMAINS_DATA.map((domain) => (
            <DomainColumn key={domain.id} domain={domain} />
          ))}
        </div>
      </div>
    </section>
  );
}
