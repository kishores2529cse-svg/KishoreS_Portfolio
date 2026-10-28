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
      className="py-24 sm:py-32 px-4 sm:px-8 bg-[var(--bg-page)] text-[var(--text-heading)] transition-colors duration-350 border-t border-[var(--border-section)] relative"
    >
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full badge-luxury text-xs font-mono mb-6 tracking-wider">
            <MessageSquare className="w-3.5 h-3.5 text-[var(--text-heading)]" />
            <span>04 // INITIATE CONTACT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[var(--text-heading)] uppercase">
            Let's Create Something Extraordinary
          </h2>
          <p className="mt-4 text-[var(--text-body)] max-w-xl text-base sm:text-lg font-normal">
            Have an ambitious initiative, high-concurrency architecture, or engineering leadership opportunity? Connect directly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Direct Info Card */}
          <div className="md:col-span-5 glass-panel p-8 sm:p-10 rounded-3xl space-y-7">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-[var(--text-heading)] mb-2 tracking-tight">
                Direct Dispatch
              </h3>
              <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed font-normal">
                Click below to copy my verified email address directly to your clipboard.
              </p>
            </div>

            {/* Copy Email Box */}
            <div className="p-4 rounded-2xl bg-[var(--badge-bg)] border border-[var(--badge-border)] flex items-center justify-between gap-2">
              <div className="flex items-center gap-2.5 overflow-hidden">
                <Mail className="w-4 h-4 text-[var(--text-heading)] shrink-0" />
                <span className="text-xs sm:text-sm font-mono text-[var(--text-heading)] truncate font-semibold">
                  {emailAddress}
                </span>
              </div>
              <button
                onClick={handleCopyEmail}
                className="shrink-0 p-2.5 rounded-xl btn-luxury"
                title="Copy Email"
              >
                {copied ? (
                  <Check className="w-4 h-4" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Social Network Links */}
            <div className="pt-6 border-t border-[var(--border-section)] space-y-3">
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[var(--text-muted)]">
                Verified Channels
              </span>
              <div className="flex flex-col gap-2.5">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[var(--badge-bg)] border border-[var(--badge-border)] text-sm text-[var(--text-heading)] transition-all group hover:scale-[1.01]"
                >
                  <div className="flex items-center gap-3">
                    <GithubIcon className="w-4 h-4 text-[var(--text-heading)]" />
                    <span className="font-medium">GitHub Repository</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[var(--text-heading)] transition-transform group-hover:translate-x-0.5" />
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[var(--badge-bg)] border border-[var(--badge-border)] text-sm text-[var(--text-heading)] transition-all group hover:scale-[1.01]"
                >
                  <div className="flex items-center gap-3">
                    <LinkedinIcon className="w-4 h-4 text-[var(--text-heading)]" />
                    <span className="font-medium">LinkedIn Professional</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[var(--text-heading)] transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Clean Message Transmission Form */}
          <div className="md:col-span-7 glass-panel p-8 sm:p-12 rounded-3xl">
            <h3 className="text-lg sm:text-xl font-bold text-[var(--text-heading)] mb-2 tracking-tight">
              Direct Inquiry
            </h3>
            <p className="text-xs sm:text-sm text-[var(--text-muted)] mb-8 font-normal">
              Drop a note and I will respond promptly with engineering specs or scheduling availability.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-[var(--text-heading)] uppercase tracking-wider mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Vance"
                    className="w-full px-4 py-3 rounded-xl bg-[var(--input-bg)] border border-[var(--input-border)] text-[var(--text-heading)] placeholder-[var(--text-muted)] text-sm focus:outline-none focus:border-[var(--input-focus)] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-[var(--text-heading)] uppercase tracking-wider mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@domain.com"
                    className="w-full px-4 py-3 rounded-xl bg-[var(--input-bg)] border border-[var(--input-border)] text-[var(--text-heading)] placeholder-[var(--text-muted)] text-sm focus:outline-none focus:border-[var(--input-focus)] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-[var(--text-heading)] uppercase tracking-wider mb-2">
                  Project / Context
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Next-generation platform development"
                  className="w-full px-4 py-3 rounded-xl bg-[var(--input-bg)] border border-[var(--input-border)] text-[var(--text-heading)] placeholder-[var(--text-muted)] text-sm focus:outline-none focus:border-[var(--input-focus)] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-[var(--text-heading)] uppercase tracking-wider mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Describe your architecture requirements or goals..."
                  className="w-full px-4 py-3 rounded-xl bg-[var(--input-bg)] border border-[var(--input-border)] text-[var(--text-heading)] placeholder-[var(--text-muted)] text-sm focus:outline-none focus:border-[var(--input-focus)] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full btn-luxury font-bold text-xs uppercase tracking-wider transition-all shadow-xl"
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
