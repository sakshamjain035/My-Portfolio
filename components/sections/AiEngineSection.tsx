"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { Cpu, TrendingUp, DollarSign, Target, Layers, Zap } from "lucide-react";

const PerformanceGraph3D = dynamic(() => import("../3d/PerformanceGraph3D"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full min-h-[300px] flex items-center justify-center bg-white/5 rounded-2xl">
      <span className="text-xs font-mono text-cyan-400">Rendering 3D AI Data Landscape...</span>
    </div>
  ),
});

export default function AiEngineSection() {
  const [budget, setBudget] = useState<number>(10000);
  const [precision, setPrecision] = useState<number>(88);
  const [variations, setVariations] = useState<number>(45);

  // Real-time calculations
  const projectedRoas = (2.2 + (precision / 100) * 2.8 + (variations / 100) * 0.8).toFixed(1);
  const projectedRevenue = Math.round(budget * parseFloat(projectedRoas));
  const cacReduction = Math.round(15 + (precision / 100) * 40);

  const applyPreset = (b: number, p: number, v: number) => {
    setBudget(b);
    setPrecision(p);
    setVariations(v);
  };

  return (
    <section id="ai-engine" className="py-24 relative bg-[#070b18] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-medium">
            <Cpu className="w-4 h-4 text-purple-400" />
            <span>INTERACTIVE AI MARKETING SIMULATOR</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white">
            Simulate Your Brand&apos;s <span className="text-gradient-cyan">AI Growth Curve</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base font-light">
            Adjust ad spend, target precision, and AI creative variations to observe real-time predictive ROI modeling in 3D.
          </p>
        </div>

        {/* Interactive Controls & 3D Visualization Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Controls Column */}
          <div className="lg:col-span-6 glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6">
            
            {/* Quick Presets */}
            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5 block">
                Instant Strategy Presets:
              </label>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => applyPreset(5000, 82, 25)}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium bg-white/5 border border-white/10 hover:border-cyan-400 text-slate-200 hover:text-cyan-300 transition-all"
                >
                  🚀 Startup Launch ($5K)
                </button>
                <button
                  onClick={() => applyPreset(15000, 92, 60)}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium bg-white/5 border border-white/10 hover:border-purple-400 text-slate-200 hover:text-purple-300 transition-all"
                >
                  📈 E-Commerce Scale ($15K)
                </button>
                <button
                  onClick={() => applyPreset(35000, 96, 95)}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium bg-white/5 border border-white/10 hover:border-emerald-400 text-slate-200 hover:text-emerald-300 transition-all"
                >
                  👑 Enterprise Domination ($35K)
                </button>
              </div>
            </div>

            {/* Slider 1: Monthly Budget */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-medium">
                <span className="text-slate-300 flex items-center gap-1.5">
                  <DollarSign className="w-4 h-4 text-cyan-400" /> Monthly Media Spend:
                </span>
                <span className="font-mono text-cyan-400 font-bold text-sm">${budget.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min={1000}
                max={50000}
                step={1000}
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-500">
                <span>$1,000</span>
                <span>$25,000</span>
                <span>$50,000</span>
              </div>
            </div>

            {/* Slider 2: AI Audience Precision */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-medium">
                <span className="text-slate-300 flex items-center gap-1.5">
                  <Target className="w-4 h-4 text-purple-400" /> AI Audience Precision Index:
                </span>
                <span className="font-mono text-purple-400 font-bold text-sm">{precision}%</span>
              </div>
              <input
                type="range"
                min={50}
                max={99}
                value={precision}
                onChange={(e) => setPrecision(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-purple-400"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-500">
                <span>Broad (50%)</span>
                <span>Standard (75%)</span>
                <span>Hyper-Targeted (99%)</span>
              </div>
            </div>

            {/* Slider 3: AI Creative Variations */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-medium">
                <span className="text-slate-300 flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-emerald-400" /> AI Ad Creative Variants / Mo:
                </span>
                <span className="font-mono text-emerald-400 font-bold text-sm">{variations} Assets</span>
              </div>
              <input
                type="range"
                min={5}
                max={100}
                value={variations}
                onChange={(e) => setVariations(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-500">
                <span>5 Ads</span>
                <span>50 Ads</span>
                <span>100 Ads</span>
              </div>
            </div>

            {/* Realtime Output KPI Badges */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/10">
              <div className="p-3 bg-white/5 rounded-xl text-center border border-white/5">
                <span className="text-[10px] text-slate-400 uppercase font-mono block">Projected ROAS</span>
                <span className="font-display font-extrabold text-xl text-cyan-400">{projectedRoas}X</span>
              </div>
              <div className="p-3 bg-white/5 rounded-xl text-center border border-white/5">
                <span className="text-[10px] text-slate-400 uppercase font-mono block">Est Revenue</span>
                <span className="font-display font-extrabold text-xl text-emerald-400">${projectedRevenue.toLocaleString()}</span>
              </div>
              <div className="p-3 bg-white/5 rounded-xl text-center border border-white/5">
                <span className="text-[10px] text-slate-400 uppercase font-mono block">CAC Reduction</span>
                <span className="font-display font-extrabold text-xl text-purple-400">-{cacReduction}%</span>
              </div>
            </div>

          </div>

          {/* 3D Visualizer & Explanation Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="glass-panel rounded-3xl p-4 border border-purple-500/20 shadow-xl shadow-purple-500/10 min-h-[340px] flex items-center justify-center relative">
              <PerformanceGraph3D budget={budget} targetPrecision={precision} />
              
              <div className="absolute bottom-4 left-4 right-4 bg-[#050711]/90 backdrop-blur-md p-3 rounded-xl border border-white/10 flex items-center justify-between text-xs">
                <span className="text-slate-300 font-mono flex items-center gap-1.5">
                  <Zap className="w-4 h-4 text-cyan-400" /> Live 3D Terrain: High-intent conversion probability density
                </span>
                <span className="text-cyan-400 font-bold font-mono">Active</span>
              </div>
            </div>

            <div className="glass-card p-5 rounded-2xl border border-white/10 flex items-start gap-4">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">How Saksham&apos;s AI Engine Works</h4>
                <p className="text-xs text-slate-300 font-light mt-1">
                  Instead of static ad placement, our AI models ingest real-time conversion feedback loop signals. By auto-optimizing creative hooks and micro-audience bids every 6 hours, ad waste is eliminated.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
