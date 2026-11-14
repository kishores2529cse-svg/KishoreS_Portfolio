import React, { useState } from 'react';
import { Mail, Check, Copy, Send, ArrowUpRight, Loader2, AlertCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle'); // 'idle' | 'success' | 'error'
  const emailAddress = 'kishores2529cse@gmail.com';
  // FormSubmit secure hash token generated for kishores2529cse@gmail.com
  const formSubmitToken = '450574d8d880fe36a882d4db5c3c8f93';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    message: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Silent Background In-App Delivery via FormSubmit secure token endpoint
      const response = await fetch(`https://formsubmit.co/ajax/${formSubmitToken}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: `Portfolio Inquiry from ${formData.name}: ${formData.project || 'Engineering Opportunity'}`,
          project: formData.project,
          message: formData.message,
          _captcha: 'false',
          _template: 'table',
        }),
      });

      const data = await response.json();

      if (response.ok && (data.success === 'true' || data.success === true)) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', project: '', message: '' });
        setTimeout(() => setSubmitStatus('idle'), 6000);
      } else {
        throw new Error(data.message || 'Dispatch failed');
      }
    } catch (err) {
      console.error('Silent submission error:', err);
      // Fallback: If network / CORS fails, offer direct mailto fallback
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 6000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 lg:px-10 bg-[#faf9f6] dark:bg-[#050807] text-neutral-900 dark:text-white transition-colors duration-350 relative"
    >
      <div className="max-w-5xl 2xl:max-w-6xl mx-auto w-full">
        {/* Top Section Header: Preserved verbatim */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono mb-4 sm:mb-6 tracking-wider text-neutral-600 dark:text-neutral-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-[#7CFF3B]" />
            <span>04 // Initiate Contact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl font-extrabold tracking-tight text-neutral-900 dark:text-white uppercase leading-[1.1]">
            Let's Create Something Extraordinary
          </h2>
          <p className="mt-3 sm:mt-4 text-neutral-600 dark:text-neutral-400 max-w-xl text-sm sm:text-base md:text-lg font-normal leading-relaxed">
            Have an ambitious initiative, high-concurrency architecture, or engineering leadership opportunity? Connect directly.
          </p>
        </div>

        {/* Open 2-Column Architectural Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 pt-8 sm:pt-10 border-t border-black/[0.08] dark:border-white/[0.08]">
          {/* Column 1: Direct Dispatch (5 Cols) */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white mb-2 tracking-tight">
                Direct Dispatch
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal mb-5 sm:mb-6">
                Click below to copy my verified email address directly to your clipboard.
              </p>

              {/* Flat Email Hairline Row (Responsive Stack on Small Mobile) */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between py-3.5 sm:py-4 border-y border-black/[0.08] dark:border-white/[0.08] gap-3 sm:gap-4">
                <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                  <Mail className="w-5 h-5 text-emerald-600 dark:text-[#7CFF3B] shrink-0" />
                  <span className="text-xs sm:text-sm md:text-base font-mono text-neutral-900 dark:text-white break-all sm:break-normal">
                    {emailAddress}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="w-full sm:w-auto shrink-0 justify-center rounded-lg bg-neutral-900 text-white hover:bg-black dark:bg-white dark:text-black dark:hover:bg-[#7CFF3B] px-3.5 py-2 text-xs sm:text-sm font-medium transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm touch-manipulation"
                  title="Copy Email"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400 dark:text-black" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Verified Channels (Flat Hairline Rows) */}
            <div className="space-y-3">
              <h4 className="text-xs sm:text-sm font-medium text-neutral-600 dark:text-neutral-400">
                Verified Channels
              </h4>
              <div className="divide-y divide-black/[0.08] dark:divide-white/[0.08] border-b border-black/[0.08] dark:border-white/[0.08]">
                <a
                  href="https://github.com/kishores2529cse-svg"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between py-3.5 sm:py-4 text-xs sm:text-sm font-medium text-neutral-800 dark:text-neutral-200 hover:text-emerald-700 dark:hover:text-[#7CFF3B] transition-colors group touch-manipulation"
                >
                  <div className="flex items-center gap-3">
                    <GithubIcon className="w-4 h-4 text-neutral-500 dark:text-neutral-400 group-hover:text-emerald-700 dark:group-hover:text-[#7CFF3B] transition-colors" />
                    <span>GitHub Repository</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-neutral-400 dark:text-neutral-500 group-hover:text-emerald-700 dark:group-hover:text-[#7CFF3B] transition-transform group-hover:translate-x-0.5" />
                </a>

                <a
                  href="https://www.linkedin.com/in/kishore-s-cse/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between py-3.5 sm:py-4 text-xs sm:text-sm font-medium text-neutral-800 dark:text-neutral-200 hover:text-emerald-700 dark:hover:text-[#7CFF3B] transition-colors group touch-manipulation"
                >
                  <div className="flex items-center gap-3">
                    <LinkedinIcon className="w-4 h-4 text-neutral-500 dark:text-neutral-400 group-hover:text-emerald-700 dark:group-hover:text-[#7CFF3B] transition-colors" />
                    <span>LinkedIn Professional</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-neutral-400 dark:text-neutral-500 group-hover:text-emerald-700 dark:group-hover:text-[#7CFF3B] transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Direct Inquiry (7 Cols, Unnested Form) */}
          <div className="lg:col-span-7">
            <h3 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white mb-2 tracking-tight">
              Direct Inquiry
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mb-6 sm:mb-8 font-normal leading-relaxed">
              Drop a note and I will respond promptly with engineering specs or scheduling availability.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5 sm:mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="e.g. Alex Vance"
                    className="w-full bg-black/[0.03] dark:bg-white/[0.03] border border-black/[0.12] dark:border-white/[0.1] rounded-lg px-3.5 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:border-emerald-600 dark:focus:border-[#7CFF3B] focus:outline-none focus:bg-white dark:focus:bg-white/[0.06] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5 sm:mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="alex@domain.com"
                    className="w-full bg-black/[0.03] dark:bg-white/[0.03] border border-black/[0.12] dark:border-white/[0.1] rounded-lg px-3.5 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:border-emerald-600 dark:focus:border-[#7CFF3B] focus:outline-none focus:bg-white dark:focus:bg-white/[0.06] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5 sm:mb-2">
                  Project / Context
                </label>
                <input
                  type="text"
                  name="project"
                  value={formData.project}
                  onChange={handleChange}
                  required
                  placeholder="e.g. Next-generation platform development"
                  className="w-full bg-black/[0.03] dark:bg-white/[0.03] border border-black/[0.12] dark:border-white/[0.1] rounded-lg px-3.5 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:border-emerald-600 dark:focus:border-[#7CFF3B] focus:outline-none focus:bg-white dark:focus:bg-white/[0.06] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5 sm:mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Describe your architecture requirements or goals..."
                  className="w-full bg-black/[0.03] dark:bg-white/[0.03] border border-black/[0.12] dark:border-white/[0.1] rounded-lg px-3.5 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:border-emerald-600 dark:focus:border-[#7CFF3B] focus:outline-none focus:bg-white dark:focus:bg-white/[0.06] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg bg-neutral-900 text-white hover:bg-black dark:bg-white dark:text-black dark:hover:bg-[#7CFF3B] font-semibold text-xs sm:text-sm transition-colors disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer shadow-sm touch-manipulation min-h-[44px]"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-white dark:text-black" />
                    <span>Transmitting Dispatch...</span>
                  </>
                ) : submitStatus === 'success' ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400 dark:text-black" />
                    <span>Inquiry Transmitted to Inbox</span>
                  </>
                ) : submitStatus === 'error' ? (
                  <>
                    <AlertCircle className="w-4 h-4 text-red-400 dark:text-black" />
                    <span>Dispatch Failed — Click to Retry</span>
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
