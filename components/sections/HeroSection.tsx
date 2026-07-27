"use client";

import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { Sparkles, ArrowRight, Zap, Bot } from "lucide-react";
import { PERSONAL_INFO } from "@/lib/constants";
import gsap from "gsap";

// Dynamic import for 3D Canvas to avoid SSR window issues
const HeroCanvas = dynamic(() => import("../3d/HeroCanvas"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center min-h-[400px]">
      <div className="flex flex-col items-center gap-3">
        <div className="w-12 h-12 rounded-full border-2 border-cyan-400 border-t-transparent animate-spin"></div>
        <span className="text-xs font-mono text-cyan-400">Initializing 3D Neural Engine...</span>
      </div>
    </div>
  ),
});

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-animate-in", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen pt-28 pb-16 flex items-center cyber-grid mesh-gradient-bg overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text Content & CTAs */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Status Pill Badge */}
            <div className="hero-animate-in inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-medium backdrop-blur-md">
              <Bot className="w-4 h-4 text-cyan-400 animate-pulse" />
              <span>AI-POWERED DIGITAL MARKETING & GROWTH ARCHITECT</span>
            </div>

            {/* H1 Main Headline */}
            <h1
              ref={headlineRef}
              className="hero-animate-in text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-white leading-[1.1]"
            >
              Architecting the <br />
              <span className="text-gradient-cyan">Future of Marketing</span> <br />
              With Artificial Intelligence
            </h1>

            {/* Paragraph Subtitle */}
            <p className="hero-animate-in text-base sm:text-lg text-slate-300 max-w-2xl font-light leading-relaxed">
              Hi, I&apos;m <strong className="text-white font-semibold">{PERSONAL_INFO.name}</strong>. I combine neural audience bidding, programmatic AI content pipelines, and immersive 3D web experiences to scale brands at 3.5X industry speed.
            </p>

            {/* CTA Buttons */}
            <div className="hero-animate-in flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#ai-audit"
                className="group flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 rounded-xl shadow-xl shadow-cyan-500/25 hover:shadow-cyan-400/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                <Sparkles className="w-4 h-4 text-slate-950 group-hover:rotate-12 transition-transform" />
                <span>Launch Free AI Audit</span>
                <ArrowRight className="w-4 h-4 text-slate-950 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#case-studies"
                className="flex items-center gap-2 px-6 py-3.5 text-sm font-medium text-slate-200 glass-card rounded-xl hover:text-cyan-400 hover:border-cyan-500/30 transition-all duration-300"
              >
                <span>View Proven Case Studies</span>
              </a>
            </div>

            {/* Key Stats Bar */}
            <div className="hero-animate-in grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10">
              {PERSONAL_INFO.stats.map((stat, idx) => (
                <div key={idx} className="glass-card p-3.5 rounded-xl border border-white/5">
                  <div className="font-display font-bold text-xl sm:text-2xl text-gradient-cyan">
                    {stat.value}
                  </div>
                  <div className="text-[11px] font-medium text-slate-400 uppercase tracking-wider mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: 3D Neural Scene */}
          <div className="lg:col-span-5 relative flex items-center justify-center min-h-[420px] lg:min-h-[520px]">
            <div className="w-full h-full relative glass-panel rounded-3xl p-4 border border-cyan-500/20 shadow-2xl shadow-cyan-500/10">
              <HeroCanvas />
              
              {/* Floating Badge Overlay 1 */}
              <div className="absolute top-6 left-6 glass-card px-3.5 py-2 rounded-xl border border-white/10 flex items-center gap-2 animate-float pointer-events-none">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></div>
                <span className="text-xs font-mono text-slate-200">AI Predictive Bidding: <strong className="text-emerald-400">+380% ROAS</strong></span>
              </div>

              {/* Floating Badge Overlay 2 */}
              <div className="absolute bottom-6 right-6 glass-card px-3.5 py-2 rounded-xl border border-white/10 flex items-center gap-2 animate-float [animation-delay:2s] pointer-events-none">
                <Zap className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-mono text-slate-200">Programmatic SEO: <strong className="text-cyan-400">800+ Pages</strong></span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
