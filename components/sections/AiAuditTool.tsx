"use client";

import { useState } from "react";
import { Sparkles, Bot, ArrowRight, CheckCircle2, Loader2, BarChart3, AlertCircle } from "lucide-react";

interface AiAuditResponse {
  businessName: string;
  businessType: string;
  targetGoal: string;
  monthlyBudget: string;
  metrics: {
    projectedRoas: string;
    estimatedMonthlyLeads: string;
    estimatedCpc: string;
    aiOptimizationScore: string;
  };
  channelAllocation: { name: string; percentage: number; reasoning: string }[];
  actionBlueprint: { step: string; action: string }[];
  recommendedAiTools: string[];
  consultantNotes: string;
}

export default function AiAuditTool() {
  const [businessName, setBusinessName] = useState("");
  const [businessType, setBusinessType] = useState("E-Commerce");
  const [targetGoal, setTargetGoal] = useState("Scale ROAS & Profitability");
  const [monthlyBudget, setMonthlyBudget] = useState("5000");
  const [targetNiche, setTargetNiche] = useState("");

  const [loading, setLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState("");
  const [result, setResult] = useState<AiAuditResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!businessName.trim()) {
      setError("Please enter your business or brand name.");
      return;
    }

    setError(null);
    setLoading(true);
    setResult(null);

    // Dynamic loading steps simulation
    setLoadingStep("1/3: Analyzing vector market embeddings...");
    await new Promise((r) => setTimeout(r, 600));
    setLoadingStep("2/3: Calculating predictive audience bidding models...");
    await new Promise((r) => setTimeout(r, 600));
    setLoadingStep("3/3: Assembling customized AI growth blueprint...");

    try {
      const response = await fetch("/api/ai-strategy", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          businessName,
          businessType,
          targetGoal,
          monthlyBudget,
          targetNiche,
        }),
      });

      const data = await response.json();
      if (response.ok && data.success) {
        setResult(data.data);
      } else {
        setError(data.error || "Failed to generate strategy blueprint.");
      }
    } catch (err) {
      console.error(err);
      setError("Network error connecting to AI Strategy Engine.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-audit" className="py-24 relative bg-[#050711] cyber-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-medium">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>NODE.JS BACKEND POWERED ENGINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white">
            Ask Saksham&apos;s <span className="text-gradient-cyan">AI Strategy Consultant</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base font-light">
            Receive an instant custom-tailored AI Digital Marketing Audit & 30-Day Growth Plan for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Input Form Column */}
          <div className="lg:col-span-5 glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-5">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Bot className="w-5 h-5 text-cyan-400" /> Business Parameters
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs font-medium">
              
              {/* Business Name */}
              <div className="space-y-1.5">
                <label className="text-slate-300">Brand / Business Name *</label>
                <input
                  type="text"
                  placeholder="e.g. Apex Athletics or Lumina SaaS"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                />
              </div>

              {/* Business Type */}
              <div className="space-y-1.5">
                <label className="text-slate-300">Business Model</label>
                <select
                  value={businessType}
                  onChange={(e) => setBusinessType(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#0b1021] border border-white/10 text-white focus:outline-none focus:border-cyan-400"
                >
                  <option value="E-Commerce">E-Commerce & DTC</option>
                  <option value="SaaS">SaaS & B2B Tech</option>
                  <option value="FinTech">FinTech & Professional Services</option>
                  <option value="Local Business">Local High-Ticket Business</option>
                  <option value="Personal Brand">Personal Brand / Creator</option>
                </select>
              </div>

              {/* Primary Goal */}
              <div className="space-y-1.5">
                <label className="text-slate-300">Primary Objective</label>
                <select
                  value={targetGoal}
                  onChange={(e) => setTargetGoal(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#0b1021] border border-white/10 text-white focus:outline-none focus:border-cyan-400"
                >
                  <option value="Scale ROAS & Profitability">Scale ROAS & Lower CAC</option>
                  <option value="High-Intent Lead Generation">High-Intent Lead Generation</option>
                  <option value="Programmatic SEO Traffic">Programmatic Organic SEO Dominance</option>
                  <option value="Brand Expansion">Brand Expansion & Market Share</option>
                </select>
              </div>

              {/* Budget */}
              <div className="space-y-1.5">
                <label className="text-slate-300">Monthly Ad Budget Target</label>
                <select
                  value={monthlyBudget}
                  onChange={(e) => setMonthlyBudget(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#0b1021] border border-white/10 text-white focus:outline-none focus:border-cyan-400"
                >
                  <option value="2500">$2,500 / month</option>
                  <option value="5000">$5,000 / month</option>
                  <option value="15000">$15,000 / month</option>
                  <option value="35000">$35,000+ / month</option>
                </select>
              </div>

              {/* Target Niche */}
              <div className="space-y-1.5">
                <label className="text-slate-300">Target Audience / Niche Keywords (Optional)</label>
                <input
                  type="text"
                  placeholder="e.g. Eco-friendly activewear, B2B HR software"
                  value={targetNiche}
                  onChange={(e) => setTargetNiche(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                />
              </div>

              {error && (
                <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 px-4 rounded-xl font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/40 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-slate-950" />
                    <span>Processing AI Audit...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 text-slate-950" />
                    <span>Generate AI Strategy Blueprint</span>
                    <ArrowRight className="w-4 h-4 text-slate-950" />
                  </>
                )}
              </button>

              {loading && (
                <p className="text-[11px] font-mono text-center text-cyan-400 animate-pulse pt-1">
                  {loadingStep}
                </p>
              )}

            </form>
          </div>

          {/* Result Output Column */}
          <div className="lg:col-span-7 min-h-[480px]">
            {result ? (
              <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-cyan-500/30 space-y-6 animate-in fade-in duration-500 shadow-2xl shadow-cyan-950/40">
                
                {/* Result Header */}
                <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/10">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400">
                      AI Audit Blueprint for:
                    </span>
                    <h3 className="text-2xl font-bold text-white">{result.businessName}</h3>
                    <span className="text-xs text-slate-400">{result.businessType} • {result.monthlyBudget} Budget</span>
                  </div>
                  <div className="px-4 py-2 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-center">
                    <span className="text-[10px] font-mono uppercase text-slate-400 block">Optimization Score</span>
                    <span className="text-xl font-extrabold text-cyan-400">{result.metrics.aiOptimizationScore}</span>
                  </div>
                </div>

                {/* Key Metric Highlights */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="p-3 bg-white/5 rounded-2xl border border-white/5 text-center">
                    <span className="text-[10px] text-slate-400 block font-mono">Projected ROAS</span>
                    <span className="text-lg font-bold text-emerald-400">{result.metrics.projectedRoas}</span>
                  </div>
                  <div className="p-3 bg-white/5 rounded-2xl border border-white/5 text-center">
                    <span className="text-[10px] text-slate-400 block font-mono">Est Monthly Leads</span>
                    <span className="text-lg font-bold text-cyan-400">{result.metrics.estimatedMonthlyLeads}</span>
                  </div>
                  <div className="p-3 bg-white/5 rounded-2xl border border-white/5 text-center">
                    <span className="text-[10px] text-slate-400 block font-mono">Target CPC</span>
                    <span className="text-lg font-bold text-purple-400">{result.metrics.estimatedCpc}</span>
                  </div>
                </div>

                {/* AI Channel Allocation Progress Bars */}
                <div className="space-y-3">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 flex items-center gap-2">
                    <BarChart3 className="w-4 h-4 text-cyan-400" /> Recommended AI Channel Allocation
                  </h4>
                  <div className="space-y-2.5">
                    {result.channelAllocation.map((ch, idx) => (
                      <div key={idx} className="space-y-1">
                        <div className="flex justify-between text-xs font-medium">
                          <span className="text-slate-200">{ch.name}</span>
                          <span className="text-cyan-400 font-mono font-bold">{ch.percentage}%</span>
                        </div>
                        <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full"
                            style={{ width: `${ch.percentage}%` }}
                          ></div>
                        </div>
                        <p className="text-[11px] text-slate-400 font-light">{ch.reasoning}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Plan */}
                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" /> 30-Day Execution Roadmap
                  </h4>
                  <div className="space-y-2.5">
                    {result.actionBlueprint.map((plan, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-1">
                        <span className="text-xs font-bold text-cyan-300 font-mono">{plan.step}</span>
                        <p className="text-xs text-slate-300">{plan.action}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Architect Note */}
                <div className="p-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-xs text-slate-300 font-light">
                  <strong className="text-cyan-300 block mb-1 font-semibold">Architect Note from Saksham Jain:</strong>
                  {result.consultantNotes}
                </div>

              </div>
            ) : (
              <div className="w-full h-full min-h-[480px] glass-card rounded-3xl border border-white/10 flex flex-col items-center justify-center p-8 text-center space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20">
                  <Bot className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Ready for Your Custom AI Growth Blueprint?</h3>
                <p className="text-sm text-slate-400 max-w-md font-light">
                  Fill in your business details on the left to trigger Saksham&apos;s Node.js backend AI strategy algorithm in real-time.
                </p>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
