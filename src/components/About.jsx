import React, { useState } from 'react';

const PILLARS = [
  {
    label: 'Core Toolchain',
    title: 'Java & Full-Stack Systems',
    detail: 'Java, Spring Boot, React, TypeScript, SQL (DBMS), REST APIs, Git & GitHub, and Cloud Computing.',
  },
  {
    label: 'Algorithmic Rigor',
    title: '120+ Solved • 50-Day Badge',
    detail: '50-Days LeetCode Consistency Badge, Rank 3,657 / 50,000 in HackerRank Orchestrate, and competitive programming.',
  },
  {
    label: 'Track Record',
    title: 'Podium & Hackathon Honors',
    detail: 'Render Rush 3rd Position, HackSprint\'26 Special Mention Award, and 24-hr Finalist at FORGEXAI & Hackspora.',
  },
  {
    label: 'Applied AI & Security',
    title: 'Assessment & Telemetry AI',
    detail: 'Secure browser enforcement, role-based access control (RBAC), and real-time exam monitoring.',
  },
];

const ACHIEVEMENTS_LEDGER = [
  {
    index: '01',
    category: 'podium',
    categoryLabel: "24-Hr Hackathon",
    title: "HackSprint'26 24'hrs Hackathon",
    scope: "24-Hour Intensive Development Sprint • Sri Shakthi Institute of Engineering and Technology",
    architectureNote: "Engineered high-throughput concurrent architecture with real-time state synchronization.",
    recognition: "Special Mention Award",
    badgeColor: "gold",
    date: "22/07/2026",
  },
  {
    index: '02',
    category: 'podium',
    categoryLabel: "Technical Event",
    title: "Render Rush Technical Event",
    scope: "Graphics Performance & Kinetic Frontend Systems • Finalist Round",
    architectureNote: "60fps GPU canvas acceleration, low-latency DOM synchronization, and visual telemetry.",
    recognition: "3rd Position (Podium)",
    badgeColor: "gold",
    date: "12/03/2026",
  },
  {
    index: '03',
    category: 'podium',
    categoryLabel: "National Hackathon",
    title: "24'hrs FORGEXAI Hackathon",
    scope: "National Artificial Intelligence & Automation Hackathon • Flash-Fair-Gate",
    architectureNote: "Designed race-condition-safe inventory engine with Redis distributed locking and WebSockets.",
    recognition: "National Finalist",
    badgeColor: "emerald",
    date: "23/09/2026",
  },
  {
    index: '04',
    category: 'podium',
    categoryLabel: "National Hackathon",
    title: "24'hrs Hackspora Hackathon",
    scope: "Department of AI & Data Science (KAHE) • VeriSure AI Anomaly Detection",
    architectureNote: "Real-time UPI transaction fraud detection platform with automated risk scoring.",
    recognition: "National Finalist",
    badgeColor: "emerald",
    date: "20/09/2026",
  },
  {
    index: '05',
    category: 'competitive',
    categoryLabel: "Global Challenge",
    title: "HackerRank Orchestrate (October Edition)",
    scope: "Global Algorithmic & Problem Solving Challenge • 50,000+ Participants Globally",
    architectureNote: "Solved complex algorithmic challenges across graph theory, dynamic programming, and complexity bounds.",
    recognition: "Rank 3,657 / 50,000",
    badgeColor: "gold",
    date: "30/10/2026",
  },
  {
    index: '06',
    category: 'competitive',
    categoryLabel: "DSA Consistency",
    title: "LeetCode 50-Days Consistency Badge",
    scope: "120+ Algorithmic Problems Solved Across Data Structures & Computational Logic",
    architectureNote: "Continuous 50-day streak maintaining rigorous daily problem solving and algorithmic optimization.",
    recognition: "50-Day Consistency Badge",
    badgeColor: "emerald",
    date: "11/07/2026",
  },
  {
    index: '07',
    category: 'podium',
    categoryLabel: "Technical Event",
    title: "CoderArt Technical Event",
    scope: "Advanced Creative Coding & Algorithmic Problem Solving",
    architectureNote: "Built clean, maintainable modular implementations under strict real-time test constraints.",
    recognition: "Event Finalist",
    badgeColor: "emerald",
    date: "12/03/2026",
  },
  {
    index: '08',
    category: 'hackathon',
    categoryLabel: "GDG Hackathon",
    title: "CIT Hackathon [Google Developer Groups - GDG]",
    scope: "Career Readiness Platform Development • PlacementPrep",
    architectureNote: "Empowering university cohorts with streamlined mock evaluation rounds and candidate benchmarking.",
    recognition: "Hackathon Honoree",
    badgeColor: "emerald",
    date: "26/09/2026",
  },
  {
    index: '09',
    category: 'hackathon',
    categoryLabel: "AI Innovation",
    title: "AI Innovation Hackathon by Bharat Academix",
    scope: "National Artificial Intelligence Application Prototyping",
    architectureNote: "Engineered scalable AI workflows grounded strictly on domain data and prompt engineering.",
    recognition: "Top 1,000 / 50,000",
    badgeColor: "gold",
    date: "14/08/2026",
  },
  {
    index: '10',
    category: 'academic',
    categoryLabel: "Global Research",
    title: "Konyang University Project Elucidation",
    scope: "International Academic Research & Systems Presentation",
    architectureNote: "Presented system architecture and engineering methodologies before international academic faculty.",
    recognition: "Research Presentation",
    badgeColor: "wheat",
    date: "19/07/2026",
  },
  {
    index: '11',
    category: 'academic',
    categoryLabel: "Mentorship",
    title: "Technical Keynote Session at Freshers Day",
    scope: "Departmental Speaker & Engineering Mentorship Keynote",
    architectureNote: "Delivered keynote inspiring junior cohorts on full-stack architecture, Git workflows, and competitive programming.",
    recognition: "Technical Speaker",
    badgeColor: "wheat",
    date: "07/09/2026",
  },
  {
    index: '12',
    category: 'competitive',
    categoryLabel: "Coding Contest",
    title: "Loop Legends Python Competition",
    scope: "Rapid Algorithmic Problem Solving in Python",
    architectureNote: "Implemented high-speed, memory-efficient Python algorithms under timed competitive constraints.",
    recognition: "Contest Participant",
    badgeColor: "wheat",
    date: "09/11/2026",
  },
];

const getBadgeStyles = (color) => {
  switch (color) {
    case 'gold':
      return {
        text: 'text-amber-800 dark:text-[#FFD700]',
        border: 'border-amber-500/40 dark:border-[#FFD700]/35',
        bg: 'bg-amber-400/10 dark:bg-[#FFD700]/10',
        dot: 'bg-amber-600 dark:bg-[#FFD700]',
      };
    case 'emerald':
      return {
        text: 'text-emerald-800 dark:text-emerald-400',
        border: 'border-emerald-500/40 dark:border-emerald-500/35',
        bg: 'bg-emerald-500/10 dark:bg-emerald-500/10',
        dot: 'bg-emerald-600 dark:bg-emerald-400',
      };
    case 'wheat':
    default:
      return {
        text: 'text-neutral-800 dark:text-[#F5DEB3]',
        border: 'border-neutral-300 dark:border-[#F5DEB3]/35',
        bg: 'bg-neutral-100 dark:bg-[#F5DEB3]/10',
        dot: 'bg-neutral-500 dark:bg-[#F5DEB3]',
      };
  }
};

export default function About() {
  const [filter, setFilter] = useState('all'); // 'all' | 'podium' | 'competitive' | 'hackathon'

  const displayedAchievements =
    filter === 'all'
      ? ACHIEVEMENTS_LEDGER
      : filter === 'podium'
      ? ACHIEVEMENTS_LEDGER.filter((a) => a.badgeColor === 'gold' || a.badgeColor === 'emerald')
      : filter === 'competitive'
      ? ACHIEVEMENTS_LEDGER.filter((a) => a.category === 'competitive')
      : ACHIEVEMENTS_LEDGER.filter((a) => a.category === 'hackathon' || a.category === 'podium');

  return (
    <section
      id="about"
      className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 lg:px-10 bg-[#faf9f6] dark:bg-[#050807] text-neutral-900 dark:text-white transition-colors duration-350 relative font-['Times_New_Roman',Times,serif]"
    >
      <div className="max-w-6xl 2xl:max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-['Times_New_Roman',Times,serif] mb-4 sm:mb-6 tracking-wider text-neutral-600 dark:text-neutral-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400" />
            <span className="text-[#854d0e] dark:text-[#F5DEB3]">01 • Profile &amp; Academic Background</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl font-bold tracking-tight text-neutral-900 dark:text-white uppercase font-['Times_New_Roman',Times,serif] leading-[1.1]">
            ENGINEERING WITH INTENT &amp; PASSION
          </h2>

          <p className="mt-4 text-neutral-700 dark:text-[#F5DEB3]/90 max-w-2xl text-sm sm:text-base md:text-lg font-normal leading-relaxed font-sans">
            I am <strong className="text-[#92400e] dark:text-[#FFD700] font-semibold">Kishore S</strong>, a 2nd Year Computer Science &amp; Engineering undergraduate at <strong className="text-neutral-900 dark:text-white font-medium">Sri Shakthi Institute of Engineering and Technology</strong> (Coimbatore, India), building scalable software systems, algorithmic engines, and AI-integrated platforms.
          </p>
        </div>

        {/* Open Asymmetric 12-Column Architectural Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 pt-8 sm:pt-10 border-t border-black/[0.08] dark:border-white/[0.08] items-start">
          {/* Left Column (7 Cols): Narrative Overview & Availability Status */}
          <div className="lg:col-span-7 flex flex-col justify-between font-sans">
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white tracking-tight mb-4 sm:mb-5 font-['Times_New_Roman',Times,serif]">
                Architecture-First Full-Stack &amp; Algorithmic Engineering
              </h3>
              <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4 sm:mb-5 font-normal">
                My primary expertise lies in <strong className="text-[#92400e] dark:text-[#FFD700] font-medium">Java Full-Stack Development</strong>, <strong className="text-neutral-900 dark:text-white font-medium">Data Structures &amp; Algorithms</strong>, and modern web architectures. Having solved <strong className="text-emerald-700 dark:text-emerald-400 font-medium">120+ LeetCode problems</strong> (awarded the 50-Days Consistency Badge) and ranked <strong className="text-[#92400e] dark:text-[#FFD700] font-medium">3,657 out of 50,000+</strong> globally in HackerRank Orchestrate, I continually strengthen my analytical thinking, algorithmic optimization, and computational fundamentals across Java, Spring Boot, React, and TypeScript.
              </p>
              <p className="text-sm sm:text-base text-neutral-600 dark:text-[#F5DEB3]/80 leading-relaxed font-normal">
                I enjoy building production-oriented applications using Java, React, TypeScript, SQL, and REST APIs while enforcing secure authentication, database optimization, and responsive design. Proven under strict 24-hour hackathon conditions—securing the <strong className="text-[#92400e] dark:text-[#FFD700] font-medium">Special Mention Award at HackSprint'26</strong>, <strong className="text-[#92400e] dark:text-[#FFD700] font-medium">3rd Position at Render Rush</strong>, and <strong className="text-emerald-700 dark:text-emerald-400 font-medium">Finalist selections at FORGEXAI and Hackspora 2.0</strong>—I build modular, resilient codebases designed to ship fast and scale cleanly.
              </p>
            </div>

            {/* Bottom Status Line */}
            <div className="border-t border-black/[0.08] dark:border-white/[0.08] pt-4 sm:pt-5 mt-6 sm:mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs sm:text-sm text-neutral-700 dark:text-[#F5DEB3] font-normal">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 shrink-0" />
                <span>2nd Year CSE @ Sri Shakthi Institute of Engineering and Technology</span>
              </div>
              <span className="text-neutral-600 dark:text-[#F5DEB3] font-['Times_New_Roman',Times,serif] text-xs sm:text-sm">Coimbatore, India • Open to Work</span>
            </div>
          </div>

          {/* Right Column (5 Cols): 2x2 Architectural Pillars */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {PILLARS.map((pillar) => (
              <div
                key={pillar.title}
                className="border-t border-black/[0.08] dark:border-white/[0.08] pt-3.5 sm:pt-4 space-y-1.5 sm:space-y-2 bg-transparent rounded-none"
              >
                <div className="text-xs sm:text-sm font-medium text-[#92400e] dark:text-[#F5DEB3] font-['Times_New_Roman',Times,serif]">
                  {pillar.label}
                </div>
                <div className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white tracking-tight font-['Times_New_Roman',Times,serif]">
                  {pillar.title}
                </div>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-[#F5DEB3]/80 leading-relaxed font-normal font-sans">
                  {pillar.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* =========================================================================
            VERIFIED TECHNICAL EVENTS & HACKATHON LEDGER (EDITORIAL MATRICES)
            - Times New Roman typography
            - Zero " // "
            - Dissolved yellow style background on number badges
            - Palette: Wheat, Gold, and Emerald Green (Zero Turquoise)
           ========================================================================= */}
        <div className="mt-16 sm:mt-20 pt-8 sm:pt-10 border-t border-black/[0.08] dark:border-white/[0.08]">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-8 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-['Times_New_Roman',Times,serif] tracking-wider text-[#854d0e] dark:text-[#F5DEB3] mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400" />
                <span>Verified Ledger • Competitive Milestones &amp; Hackathons</span>
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white tracking-tight font-['Times_New_Roman',Times,serif]">
                Official Co-Curricular &amp; Technical Honours
              </h3>
            </div>

            {/* Filter Toggle */}
            <div className="inline-flex flex-wrap items-center p-1 border border-black/[0.1] dark:border-white/[0.1] rounded-lg bg-black/[0.02] dark:bg-white/[0.02] text-xs sm:text-sm font-['Times_New_Roman',Times,serif] gap-1">
              <button
                type="button"
                onClick={() => setFilter('all')}
                className={`px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-md transition-colors cursor-pointer ${
                  filter === 'all'
                    ? 'bg-[#FFD700] text-black font-bold shadow-sm'
                    : 'text-neutral-600 dark:text-[#F5DEB3]/70 hover:text-black dark:hover:text-white'
                }`}
              >
                All ({ACHIEVEMENTS_LEDGER.length})
              </button>
              <button
                type="button"
                onClick={() => setFilter('podium')}
                className={`px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-md transition-colors cursor-pointer ${
                  filter === 'podium'
                    ? 'bg-[#FFD700] text-black font-bold shadow-sm'
                    : 'text-neutral-600 dark:text-[#F5DEB3]/70 hover:text-black dark:hover:text-white'
                }`}
              >
                Honours &amp; Finalists (6)
              </button>
              <button
                type="button"
                onClick={() => setFilter('competitive')}
                className={`px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-md transition-colors cursor-pointer ${
                  filter === 'competitive'
                    ? 'bg-[#FFD700] text-black font-bold shadow-sm'
                    : 'text-neutral-600 dark:text-[#F5DEB3]/70 hover:text-black dark:hover:text-white'
                }`}
              >
                Competitive &amp; DSA (3)
              </button>
              <button
                type="button"
                onClick={() => setFilter('hackathon')}
                className={`px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-md transition-colors cursor-pointer ${
                  filter === 'hackathon'
                    ? 'bg-emerald-500 dark:bg-emerald-400 text-black font-bold shadow-sm'
                    : 'text-neutral-600 dark:text-[#F5DEB3]/70 hover:text-black dark:hover:text-white'
                }`}
              >
                Hackathons (6)
              </button>
            </div>
          </div>

          {/* Top Architectural Telemetry Ribbon (Flat Hairlines, 4 Columns) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 py-5 sm:py-6 border-y border-black/[0.08] dark:border-white/[0.08] mb-6">
            <div className="space-y-1">
              <div className="text-xs sm:text-sm font-['Times_New_Roman',Times,serif] text-[#92400e] dark:text-[#FFD700]">01 PODIUM &amp; HONOURS</div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#92400e] dark:text-[#FFD700] tracking-tight flex items-baseline gap-1.5 sm:gap-2 font-['Times_New_Roman',Times,serif] flex-wrap">
                <span>03</span>
                <span className="text-xs sm:text-sm text-neutral-600 dark:text-[#F5DEB3] font-normal">Honours</span>
              </div>
              <div className="text-xs sm:text-sm text-neutral-600 dark:text-[#F5DEB3]/80 font-sans">Render Rush 3rd, HackSprint'26</div>
            </div>

            <div className="space-y-1">
              <div className="text-xs sm:text-sm font-['Times_New_Roman',Times,serif] text-emerald-700 dark:text-emerald-400">02 24-HR FINALISTS</div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-emerald-700 dark:text-emerald-400 tracking-tight flex items-baseline gap-1.5 sm:gap-2 font-['Times_New_Roman',Times,serif] flex-wrap">
                <span>03</span>
                <span className="text-xs sm:text-sm text-neutral-600 dark:text-[#F5DEB3] font-normal">Finalists</span>
              </div>
              <div className="text-xs sm:text-sm text-neutral-600 dark:text-[#F5DEB3]/80 font-sans">FORGEXAI, Hackspora, CoderArt</div>
            </div>

            <div className="space-y-1">
              <div className="text-xs sm:text-sm font-['Times_New_Roman',Times,serif] text-[#92400e] dark:text-[#FFD700]">03 GLOBAL RANK</div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#92400e] dark:text-[#FFD700] tracking-tight flex items-baseline gap-1.5 sm:gap-2 font-['Times_New_Roman',Times,serif] flex-wrap">
                <span>#3,657</span>
                <span className="text-xs sm:text-sm text-neutral-600 dark:text-[#F5DEB3]/80 font-normal">/ 50,000</span>
              </div>
              <div className="text-xs sm:text-sm text-neutral-600 dark:text-[#F5DEB3]/80 font-sans">HackerRank Orchestrate '26</div>
            </div>

            <div className="space-y-1">
              <div className="text-xs sm:text-sm font-['Times_New_Roman',Times,serif] text-[#78350f] dark:text-[#F5DEB3]">04 DSA STREAK</div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#78350f] dark:text-[#F5DEB3] tracking-tight flex items-baseline gap-1.5 sm:gap-2 font-['Times_New_Roman',Times,serif] flex-wrap">
                <span>120+</span>
                <span className="text-xs sm:text-sm text-[#92400e] dark:text-[#FFD700] font-normal">Solved</span>
              </div>
              <div className="text-xs sm:text-sm text-neutral-600 dark:text-[#F5DEB3]/80 font-sans">50-Days LeetCode Consistency</div>
            </div>
          </div>

          {/* Flat Hairline Ledger Stack */}
          <div className="divide-y divide-black/[0.08] dark:divide-white/[0.08] border-b border-black/[0.08] dark:border-white/[0.08]">
            {displayedAchievements.map((item) => {
              const badgeStyle = getBadgeStyles(item.badgeColor);
              return (
                <div
                  key={item.title}
                  className="py-4 sm:py-5 px-2.5 sm:px-4 border-l-2 border-l-transparent hover:border-l-[#92400e] dark:hover:border-l-[#FFD700] flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4 hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-colors duration-150 ease-out group"
                >
                  {/* Left: Dissolved Yellow Number, Title, Scope & Architecture Note */}
                  <div className="flex items-start gap-3 sm:gap-4 min-w-0">
                    {/* Dissolved Yellow Style Number Badge */}
                    <div
                      className="relative shrink-0 flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full font-['Times_New_Roman',Times,serif] text-sm sm:text-base font-bold text-[#854d0e] dark:text-yellow-200 select-none border border-yellow-500/35 dark:border-yellow-400/25 shadow-[0_0_16px_rgba(250,204,21,0.22)]"
                      style={{
                        background:
                          'radial-gradient(circle at center, rgba(250, 204, 21, 0.35) 0%, rgba(234, 179, 8, 0.14) 60%, rgba(234, 179, 8, 0) 100%)',
                      }}
                    >
                      {item.index}
                    </div>

                    <div className="space-y-1 min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-base sm:text-lg md:text-xl font-bold text-neutral-900 dark:text-white group-hover:text-[#92400e] dark:group-hover:text-[#FFD700] transition-colors tracking-tight font-['Times_New_Roman',Times,serif]">
                          {item.title}
                        </span>
                        <span className="text-xs sm:text-sm font-['Times_New_Roman',Times,serif] px-2 sm:px-2.5 py-0.5 rounded text-[#854d0e] dark:text-[#F5DEB3] bg-black/[0.04] dark:bg-[#F5DEB3]/10 border border-black/[0.08] dark:border-[#F5DEB3]/25">
                          {item.categoryLabel}
                        </span>
                      </div>
                      <div className="text-xs sm:text-sm text-neutral-600 dark:text-[#F5DEB3]/85 leading-relaxed font-sans font-normal">
                        {item.scope}
                      </div>
                      <div className="text-xs sm:text-sm text-neutral-700 dark:text-[#F5DEB3]/90 font-sans flex items-start sm:items-center gap-1.5 pt-0.5">
                        <span className="text-emerald-600 dark:text-emerald-400 font-bold shrink-0">&gt;</span>
                        <span>{item.architectureNote}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right: Recognition Badge & Date */}
                  <div className="flex flex-wrap items-center justify-between md:justify-end gap-3 sm:gap-5 shrink-0 pl-13 sm:pl-15 md:pl-0 font-['Times_New_Roman',Times,serif] mt-1 md:mt-0">
                    <div className="flex items-center gap-2">
                      <span
                        className={`inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-md text-xs sm:text-sm font-bold ${badgeStyle.text} ${badgeStyle.border} ${badgeStyle.bg} border`}
                      >
                        <span className={`w-1.5 h-1.5 rounded-full ${badgeStyle.dot}`} />
                        <span>{item.recognition}</span>
                      </span>
                    </div>
                    <span className="text-xs sm:text-sm text-neutral-500 dark:text-[#F5DEB3]/70 shrink-0 text-right">
                      {item.date}
                    </span>
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
