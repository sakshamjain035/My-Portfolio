"use client";

import { BrainCircuit, TrendingUp, Search, Code2, Sparkles } from "lucide-react";
import { SKILL_CATEGORIES } from "@/lib/constants";

export default function SkillsSection() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "BrainCircuit":
        return <BrainCircuit className="w-6 h-6 text-cyan-400" />;
      case "TrendingUp":
        return <TrendingUp className="w-6 h-6 text-purple-400" />;
      case "Search":
        return <Search className="w-6 h-6 text-emerald-400" />;
      case "Code2":
        return <Code2 className="w-6 h-6 text-amber-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative bg-[#070b18] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-medium">
            <BrainCircuit className="w-4 h-4 text-cyan-400" />
            <span>AI & DIGITAL MARKETING CORE PILLARS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white">
            Comprehensive <span className="text-gradient-cyan">Capabilities Matrix</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base font-light">
            Merging algorithmic machine learning models with performance advertising & full-stack web technology.
          </p>
        </div>

        {/* 4 Pillar Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILL_CATEGORIES.map((category, idx) => (
            <div
              key={idx}
              className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-cyan-500/40 transition-all duration-300 space-y-6 group"
            >
              {/* Category Header */}
              <div className="flex items-start gap-4">
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-300">
                  {getIcon(category.iconName)}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-xs text-slate-400 font-light mt-1 leading-relaxed">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Skill Bars */}
              <div className="space-y-4 pt-2">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="space-y-1.5">
                    <div className="flex justify-between text-xs font-medium">
                      <span className="text-slate-200 flex items-center gap-1.5">
                        {skill.highlight && <Sparkles className="w-3.5 h-3.5 text-cyan-400 shrink-0" />}
                        {skill.name}
                      </span>
                      <span className="text-slate-400 font-mono">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-slate-800/80 rounded-full overflow-hidden p-[1px]">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
