import React, { useState } from 'react';
import { Mail, Check, Copy, Send, ArrowUpRight, MessageSquare } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const emailAddress = 'contact.kishores@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSent(true);
    setTimeout(() => setFormSent(false), 4000);
  };

  return (
    <section
      id="contact"
      className="py-24 sm:py-32 px-4 sm:px-8 bg-[#050807] text-white relative"
    >
      <div className="max-w-5xl mx-auto">
        {/* Top Section Header: Preserved verbatim */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-sm font-mono mb-6 tracking-wider text-neutral-400">
            <span className="w-2 h-2 rounded-full bg-[#7CFF3B]" />
            <span>04 // Initiate Contact</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white uppercase">
            Let's Create Something Extraordinary
          </h2>
          <p className="mt-4 text-neutral-400 max-w-xl text-base sm:text-lg font-normal leading-relaxed">
            Have an ambitious initiative, high-concurrency architecture, or engineering leadership opportunity? Connect directly.
          </p>
        </div>

        {/* Open 2-Column Architectural Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-10 border-t border-white/[0.08]">
          {/* Column 1: Direct Dispatch (5 Cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 tracking-tight">
                Direct Dispatch
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed font-normal mb-6">
                Click below to copy my verified email address directly to your clipboard.
              </p>

              {/* Flat Email Hairline Row */}
              <div className="flex items-center justify-between py-4 border-y border-white/[0.08] gap-4">
                <div className="flex items-center gap-3 min-w-0">
                  <Mail className="w-5 h-5 text-[#7CFF3B] shrink-0" />
                  <span className="text-base font-mono text-white truncate">
                    {emailAddress}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="shrink-0 rounded-lg bg-white text-black px-3.5 py-2 text-sm font-medium hover:bg-[#7CFF3B] transition-colors flex items-center gap-1.5"
                  title="Copy Email"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Verified Channels (Flat Hairline Rows) */}
            <div className="space-y-3">
              <h4 className="text-sm font-medium text-neutral-400">
                Verified Channels
              </h4>
              <div className="divide-y divide-white/[0.08] border-b border-white/[0.08]">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between py-4 text-sm font-medium text-neutral-200 hover:text-[#7CFF3B] transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <GithubIcon className="w-4 h-4 text-neutral-400 group-hover:text-[#7CFF3B] transition-colors" />
                    <span>GitHub Repository</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-[#7CFF3B] transition-transform group-hover:translate-x-0.5" />
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between py-4 text-sm font-medium text-neutral-200 hover:text-[#7CFF3B] transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <LinkedinIcon className="w-4 h-4 text-neutral-400 group-hover:text-[#7CFF3B] transition-colors" />
                    <span>LinkedIn Professional</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-[#7CFF3B] transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Direct Inquiry (7 Cols, Unnested Form) */}
          <div className="lg:col-span-7">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2 tracking-tight">
              Direct Inquiry
            </h3>
            <p className="text-sm text-neutral-400 mb-8 font-normal leading-relaxed">
              Drop a note and I will respond promptly with engineering specs or scheduling availability.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Vance"
                    className="w-full bg-white/[0.03] border border-white/[0.1] rounded-lg px-4 py-3 text-sm text-white placeholder:text-neutral-500 focus:border-[#7CFF3B] focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@domain.com"
                    className="w-full bg-white/[0.03] border border-white/[0.1] rounded-lg px-4 py-3 text-sm text-white placeholder:text-neutral-500 focus:border-[#7CFF3B] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-300 mb-2">
                  Project / Context
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Next-generation platform development"
                  className="w-full bg-white/[0.03] border border-white/[0.1] rounded-lg px-4 py-3 text-sm text-white placeholder:text-neutral-500 focus:border-[#7CFF3B] focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-300 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Describe your architecture requirements or goals..."
                  className="w-full bg-white/[0.03] border border-white/[0.1] rounded-lg px-4 py-3 text-sm text-white placeholder:text-neutral-500 focus:border-[#7CFF3B] focus:outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-lg bg-white text-black font-semibold text-sm hover:bg-[#7CFF3B] transition-colors"
              >
                {formSent ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Inquiry Transmitted</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Transmit Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
