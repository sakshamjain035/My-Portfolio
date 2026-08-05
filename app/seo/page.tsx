import type { Metadata } from "next";
import Link from "next/link";
import { SEO_PAGES } from "@/lib/seo-data";
import {
  Sparkles,
  BookOpen,
  Search,
  ArrowRight,
  BrainCircuit,
  TrendingUp,
  Code2,
  Cpu,
} from "lucide-react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://sakshamjain.online";

export const metadata: Metadata = {
  title: "Saksham SEO Knowledge Base | 25 Enterprise AI Growth Guides",
  description:
    "Explore Saksham Jain's comprehensive SEO hub featuring 25 in-depth technical guides on AI digital marketing, programmatic SEO, 3D WebGL development, and predictive ROAS optimization.",
  keywords: [
    "Saksham",
    "Saksham Jain",
    "Saksham SEO",
    "Saksham AI Marketing",
    "Saksham Growth Architecture",
    "Saksham Programmatic SEO",
  ],
  alternates: {
    canonical: `${siteUrl}/seo`,
  },
  openGraph: {
    type: "website",
    url: `${siteUrl}/seo`,
    title: "Saksham SEO Knowledge Base | 25 Enterprise AI Growth Guides",
    description:
      "Explore 25 enterprise-grade AI marketing and SEO guides authored by Saksham Jain.",
    images: [`${siteUrl}/opengraph-image`],
  },
};

const CATEGORIES = [
  { name: "AI Marketing", icon: BrainCircuit, color: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10" },
  { name: "Performance Media", icon: TrendingUp, color: "text-purple-400 border-purple-500/30 bg-purple-500/10" },
  { name: "SEO & Growth", icon: Search, color: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10" },
  { name: "Tech Stack & Dev", icon: Code2, color: "text-amber-400 border-amber-500/30 bg-amber-500/10" },
];

export default function SeoDirectoryPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#050711] text-slate-100 pt-28 pb-20 relative overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-cyan-500/10 blur-[140px] rounded-full pointer-events-none -z-10" />
        <div className="absolute top-96 right-10 w-[600px] h-[600px] bg-purple-500/10 blur-[160px] rounded-full pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-4xl mx-auto mb-16 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Saksham SEO Directory • 25 Enterprise Guides</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight leading-tight">
              Saksham's Enterprise <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                AI Growth & SEO Knowledge Base
              </span>
            </h1>

            <p className="text-base sm:text-xl text-slate-300 font-light leading-relaxed">
              Explore 25 detailed, technical guides authored by <strong className="text-white font-medium">Saksham Jain</strong>. Learn how to architect programmatic SEO pipelines, automate high-ROAS ad campaigns, fine-tune LLMs, and build high-converting 3D WebGL experiences.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-slate-400 pt-2">
              <span className="px-3 py-1 rounded-lg bg-slate-900 border border-white/10">Target Keyword: <strong className="text-cyan-400">Saksham</strong></span>
              <span className="px-3 py-1 rounded-lg bg-slate-900 border border-white/10">Total Words: <strong className="text-emerald-400">125,000+ Words</strong></span>
              <span className="px-3 py-1 rounded-lg bg-slate-900 border border-white/10">Index Rate: <strong className="text-purple-400">100% Static Pre-rendered</strong></span>
            </div>
          </div>

          {/* Categories Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-14">
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              const count = SEO_PAGES.filter((p) => p.category === cat.name).length;
              return (
                <div
                  key={cat.name}
                  className={`p-4 rounded-2xl border ${cat.color} flex items-center gap-3 backdrop-blur-md`}
                >
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  <div>
                    <span className="block text-xs font-bold text-white">{cat.name}</span>
                    <span className="text-[11px] text-slate-400">{count} Technical Guides</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* 25 SEO Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SEO_PAGES.map((page, index) => (
              <article
                key={page.slug}
                className="group bg-[#080c1d]/80 rounded-3xl border border-white/10 hover:border-cyan-500/40 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-bl-full pointer-events-none group-hover:bg-cyan-500/10 transition-colors" />

                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono text-cyan-400 font-bold">
                      #{String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-slate-900 border border-white/10 text-slate-400 text-[11px]">
                      {page.category}
                    </span>
                  </div>

                  <h2 className="text-xl font-display font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                    <Link href={`/seo/${page.slug}`}>
                      {page.title}
                    </Link>
                  </h2>

                  <p className="text-xs sm:text-sm text-slate-400 font-light line-clamp-3 leading-relaxed">
                    {page.heroSubheadline}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                  <div className="text-[11px] font-mono text-slate-400">
                    Keyword: <span className="text-slate-200 font-semibold">{page.targetKeyword.split(" ")[0]}</span>
                  </div>

                  <Link
                    href={`/seo/${page.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-400 group-hover:text-cyan-300 transition-colors"
                  >
                    <span>Read Guide</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Footer Callout */}
          <div className="mt-16 text-center text-xs text-slate-500 font-mono">
            All 25 guides authored by Saksham Jain are indexed dynamically in Google XML Sitemap and formatted with structured JSON-LD schemas.
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
