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
        spec: 'Award-winning rapid feature shipping, zero-downtime MVP scoping, and speed-to-market execution.',
      },
      {
        name: 'Problem Solving & Debugging',
        isPrimary: false,
        spec: 'First-principles root-cause isolation, network call profiling, and deterministic bug remediation.',
      },
    ],
  },
];

function DomainColumn({ domain }) {
  const [activeSpec, setActiveSpec] = useState(null);
  const Icon = domain.icon;

  return (
    <div className="border-t border-white/[0.08] pt-8 flex flex-col justify-between bg-transparent rounded-none">
      {/* Main Content Area */}
      <div className="flex-1">
        {/* Domain Header: Monospace Index & Title */}
        <div className="flex items-center gap-3 pb-5 border-b border-white/[0.08]">
          <Icon className="w-5 h-5 text-[#7CFF3B] shrink-0" />
          <div className="flex items-baseline gap-2.5 flex-wrap">
            <span className="text-sm font-mono font-medium text-[#7CFF3B]">
              // {domain.id}
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
              {domain.title}
            </h3>
          </div>
        </div>

        {/* Domain Content: Split Tiers for Domains 01-03, Flat Hairlines for Domain 04 */}
        {!domain.isStandardMatrix ? (
          <div className="pt-5 space-y-6">
            {/* Tier 1: Core Primitives (Flat Tactile Chips) */}
            <div>
              <h4 className="text-sm font-medium text-neutral-400 mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7CFF3B]" />
                <span>Core Primitives</span>
              </h4>
              <div className="flex flex-wrap gap-2.5">
                {domain.corePrimitives.map((tool) => (
                  <button
                    key={tool.name}
                    type="button"
                    onMouseEnter={() => setActiveSpec(`${tool.name}: ${tool.spec}`)}
                    onMouseLeave={() => setActiveSpec(null)}
                    onFocus={() => setActiveSpec(`${tool.name}: ${tool.spec}`)}
                    onBlur={() => setActiveSpec(null)}
                    className="px-3 py-1.5 rounded-md border border-white/[0.1] bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/[0.2] text-sm font-mono text-neutral-200 hover:text-white transition-colors cursor-crosshair flex items-center gap-2 group/chip"
                  >
                    <span className="text-neutral-500 text-sm group-hover/chip:text-[#7CFF3B] transition-colors">&gt;</span>
                    <span>{tool.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Tier 2: Engineering Disciplines (Flat Hairlines, Zero Outer Border) */}
            <div>
              <h4 className="text-sm font-medium text-neutral-400 mb-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7CFF3B]" />
                <span>Engineering Disciplines</span>
              </h4>
              <div className="divide-y divide-white/[0.06]">
                {domain.disciplines.map((disc) => (
                  <div
                    key={disc.name}
                    onMouseEnter={() => setActiveSpec(`${disc.name}: ${disc.spec}`)}
                    onMouseLeave={() => setActiveSpec(null)}
                    onFocus={() => setActiveSpec(`${disc.name}: ${disc.spec}`)}
                    onBlur={() => setActiveSpec(null)}
                    tabIndex={0}
                    className="py-3 hover:bg-white/[0.03] px-2 rounded-none transition-colors cursor-crosshair flex items-center justify-between gap-4 group/row outline-none"
                  >
                    <span className="text-sm font-medium text-neutral-200 group-hover/row:text-white transition-colors truncate">
                      {disc.name}
                    </span>

                    {disc.isPrimary && (
                      <div className="flex items-center gap-1.5 shrink-0">
                        <span className="w-2 h-2 rounded-full bg-[#7CFF3B]" />
                        <span className="text-sm font-mono text-[#7CFF3B] font-medium">Primary</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* Domain 04: Engineering Standards (Flat Hairlines, Zero Outer Border) */
          <div className="pt-5">
            <h4 className="text-sm font-medium text-neutral-400 mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7CFF3B]" />
              <span>Core Engineering Standards</span>
            </h4>
            <div className="divide-y divide-white/[0.06]">
              {domain.matrixItems.map((item) => (
                <div
                  key={item.name}
                  onMouseEnter={() => setActiveSpec(`${item.name}: ${item.spec}`)}
                  onMouseLeave={() => setActiveSpec(null)}
                  onFocus={() => setActiveSpec(`${item.name}: ${item.spec}`)}
                  onBlur={() => setActiveSpec(null)}
                  tabIndex={0}
                  className="py-3 hover:bg-white/[0.03] px-2 rounded-none transition-colors cursor-crosshair flex items-center justify-between gap-4 group/matrix outline-none"
                >
                  <span className="text-sm font-medium text-neutral-200 group-hover/matrix:text-white transition-colors truncate">
                    {item.name}
                  </span>

                  {item.isPrimary && (
                    <div className="flex items-center gap-1.5 shrink-0">
                      <span className="w-2 h-2 rounded-full bg-[#7CFF3B]" />
                      <span className="text-sm font-mono text-[#7CFF3B] font-medium">Primary</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <p className="mt-5 text-sm font-mono text-neutral-400 truncate">
        <span className="text-[#7CFF3B] mr-2">&gt;</span>
        {activeSpec || "Hover any module to inspect architectural focus"}
        <span className="text-[#7CFF3B] ml-1">_</span>
      </p>
    </div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 sm:py-32 px-4 sm:px-8 bg-[#050807] text-white relative"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header: Preserved verbatim */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-sm font-mono mb-6 tracking-wider text-neutral-400">
            <span className="w-2 h-2 rounded-full bg-[#7CFF3B]" />
            <span>03 // Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white uppercase">
            TECHNICAL STACK &amp; EXPERTISE
          </h2>
          <p className="mt-4 text-neutral-400 max-w-2xl text-base sm:text-lg font-normal leading-relaxed">
            The architectural frameworks, toolchains, and engineering disciplines leveraged to craft high-concurrency digital platforms.
          </p>
        </div>

        {/* Open 2x2 Architectural Grid (No Card Enclosures, Top Hairlines Only) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-12 items-stretch">
          {DOMAINS_DATA.map((domain) => (
            <DomainColumn key={domain.id} domain={domain} />
          ))}
        </div>
      </div>
    </section>
  );
}
