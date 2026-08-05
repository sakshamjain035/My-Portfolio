"use client";

import Link from "next/link";
import { Cpu, ArrowUp, Search } from "lucide-react";
import { PERSONAL_INFO } from "@/lib/constants";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#04060e] border-t border-white/10 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand & Status */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
              <Cpu className="w-4 h-4 text-cyan-400" />
            </div>
            <span className="font-display font-bold text-white text-base">
              {PERSONAL_INFO.name}
            </span>
          </div>

          <div className="hidden sm:block text-slate-700">|</div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span>AI Node.js Backend Active</span>
          </div>
        </div>

        {/* SEO Hub Navigation & Copyright */}
        <div className="flex flex-col items-center gap-2 text-center">
          <Link
            href="/seo"
            className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20"
          >
            <Search className="w-3.5 h-3.5" />
            <span>Saksham SEO Knowledge Base (25 Guides)</span>
          </Link>

          <p className="text-xs text-slate-500 font-light">
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. Architecting AI Growth & WebGL Experiences.
          </p>
        </div>

        {/* Back to Top */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 px-3.5 py-2 rounded-xl glass-card border border-white/10 text-xs font-medium text-slate-300 hover:text-cyan-400 hover:border-cyan-500/30 transition-all"
        >
          <span>Back to top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>

      </div>
    </footer>
  );
}
