import React from 'react';

const PILLARS = [
  {
    label: 'Core Stack',
    title: 'Full-Stack & Real-Time Systems',
    detail: 'React, TypeScript, Next.js, Java, Go, PostgreSQL, Redis, and WebSockets.',
  },
  {
    label: 'System Design',
    title: 'Concurrency & Race Prevention',
    detail: 'Atomic state handling, sub-50ms event sync, and fault-tolerant APIs.',
  },
  {
    label: 'Track Record',
    title: 'National Hackathon Finalist',
    detail: 'FORGEXAI 2026 Grand Finalist and Hackspora 2.0 Top 100 Finalist.',
  },
  {
    label: 'Frontend Craft',
    title: 'Kinetic & Accessible UI',
    detail: '60fps GSAP scroll choreography paired with clean, semantic DOM structure.',
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-24 sm:py-32 px-4 sm:px-8 bg-[#050807] text-white relative"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header: Main Heading & Authentic Kishore S Subtitle */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-sm font-mono mb-6 tracking-wider text-neutral-400">
            <span className="w-2 h-2 rounded-full bg-[#7CFF3B]" />
            <span>01 // About Me</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white uppercase">
            ENGINEERING WITH INTENT &amp; PASSION
          </h2>

          <p className="mt-4 text-neutral-400 max-w-2xl text-base sm:text-lg font-normal leading-relaxed">
            I am <strong className="text-white font-semibold">Kishore S</strong>, a Computer Science &amp; Engineering student and full-stack developer building low-latency web platforms, real-time synchronization engines, and resilient backend architectures.
          </p>
        </div>

        {/* Open Asymmetric 12-Column Architectural Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-10 border-t border-white/[0.08] items-start">
          {/* Left Column (7 Cols): Narrative Overview & Availability Status */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-5">
                Architecture-First Full-Stack Engineering
              </h3>
              <p className="text-base text-neutral-300 leading-relaxed mb-5 font-normal">
                My work bridges high-concurrency backend systems with responsive, kinetic frontends. From designing race-condition-safe ticketing pipelines in Go, Node.js, and Redis to crafting type-safe React and TypeScript interfaces, I focus on predictable performance under real-world load.
              </p>
              <p className="text-base text-neutral-400 leading-relaxed font-normal">
                Tested under 24-hour national hackathon constraints—including reaching the Grand Finale at FORGEXAI 2026 with Flash-Fair-Gate and placing Top 100 out of 300+ teams at Hackspora 2.0 with VeriSure—I build modular, maintainable codebases engineered to ship fast and scale cleanly.
              </p>
            </div>

            {/* Bottom Status Line (Flat Hairline, Solid #7CFF3B Dot) */}
            <div className="border-t border-white/[0.08] pt-5 mt-8 flex items-center gap-3 text-sm text-neutral-300 font-normal">
              <span className="w-2 h-2 rounded-full bg-[#7CFF3B] shrink-0" />
              <span>CSE Undergraduate • Open to Full-Stack Software Engineering Internships &amp; Collaborations</span>
            </div>
          </div>

          {/* Right Column (5 Cols): 2x2 Architectural Pillars (Flat Hairlines, Zero Cards, Zero Icons) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-8">
            {PILLARS.map((pillar) => (
              <div
                key={pillar.title}
                className="border-t border-white/[0.08] pt-4 space-y-2 bg-transparent rounded-none"
              >
                <div className="text-sm font-medium text-neutral-400">
                  {pillar.label}
                </div>
                <div className="text-lg font-semibold text-white tracking-tight">
                  {pillar.title}
                </div>
                <p className="text-sm text-neutral-400 leading-relaxed font-normal">
                  {pillar.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
