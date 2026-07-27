"use client";

import { useState } from "react";
import { CASE_STUDIES, CaseStudy } from "@/lib/constants";
import { TrendingUp, ArrowUpRight, Check, Cpu, X } from "lucide-react";

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<CaseStudy | null>(null);

  return (
    <section id="case-studies" className="py-24 relative bg-[#050711] cyber-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-medium">
            <TrendingUp className="w-4 h-4 text-emerald-400" />
            <span>QUANTIFIABLE GROWTH CASE STUDIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white">
            Proven <span className="text-gradient-cyan">AI Campaign Outcomes</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base font-light">
            Real data from scaling client revenues, lowering customer acquisition costs, and building high-converting WebGL experiences.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {CASE_STUDIES.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between cursor-pointer group hover:-translate-y-2 shadow-xl hover:shadow-cyan-500/10"
            >
              <div className="space-y-6">
                
                {/* Header Badge */}
                <div className="flex justify-between items-center">
                  <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-widest px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                    {project.badge}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">{project.category}</span>
                </div>

                {/* Title & Description */}
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors flex items-center justify-between">
                    {project.title}
                    <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </h3>
                  <p className="text-xs text-slate-300 font-light line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Key Metrics Grid */}
                <div className="grid grid-cols-3 gap-2 py-3 border-y border-white/10">
                  {project.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="text-center p-2 rounded-xl bg-white/5">
                      <span className="text-[10px] text-slate-400 block font-mono uppercase">{m.label}</span>
                      <span className="text-sm font-bold text-cyan-400 font-display">{m.value}</span>
                    </div>
                  ))}
                </div>

                {/* AI Strategy Highlights */}
                <div className="space-y-2">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">AI Strategy Applied:</span>
                  <ul className="space-y-1.5">
                    {project.aiStrategy.slice(0, 2).map((strat, sIdx) => (
                      <li key={sIdx} className="text-xs text-slate-300 flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{strat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Tools Tags */}
              <div className="flex flex-wrap gap-1.5 pt-6">
                {project.toolsUsed.map((tool, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-[10px] font-mono text-slate-300"
                  >
                    {tool}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Detailed Modal Lightbox */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-300">
          <div className="glass-panel max-w-2xl w-full p-6 sm:p-8 rounded-3xl border border-cyan-500/30 space-y-6 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 p-2 rounded-xl bg-white/5 text-slate-400 hover:text-white hover:bg-white/10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
                {selectedProject.category} • {selectedProject.clientType}
              </span>
              <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
              <p className="text-sm text-slate-300 font-light">{selectedProject.description}</p>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/20">
              {selectedProject.metrics.map((m, idx) => (
                <div key={idx} className="text-center">
                  <span className="text-[11px] text-slate-400 uppercase font-mono block">{m.label}</span>
                  <span className="text-xl font-bold text-cyan-300 font-display">{m.value}</span>
                </div>
              ))}
            </div>

            {/* AI Architecture Strategy */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Cpu className="w-4 h-4 text-cyan-400" /> Full AI Execution Breakdown
              </h4>
              <ul className="space-y-2">
                {selectedProject.aiStrategy.map((strat, idx) => (
                  <li key={idx} className="text-xs text-slate-200 flex items-start gap-2.5 p-2.5 rounded-xl bg-white/5">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{strat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="w-full py-3 rounded-xl font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors text-xs"
            >
              Close Breakdown
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
