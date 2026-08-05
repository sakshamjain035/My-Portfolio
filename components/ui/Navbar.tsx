"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sparkles, Menu, X, Cpu, ChevronDown, Search, ArrowRight, BrainCircuit, TrendingUp, Code2 } from "lucide-react";
import { PERSONAL_INFO } from "@/lib/constants";
import { SEO_PAGES } from "@/lib/seo-data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [seoDropdownOpen, setSeoDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setSeoDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { name: "AI Core", href: "/#hero" },
    { name: "Campaign Simulator", href: "/#ai-engine" },
    { name: "AI Strategy Tool", href: "/#ai-audit" },
    { name: "Skill Matrix", href: "/#skills" },
    { name: "Case Studies", href: "/#case-studies" },
    { name: "Contact", href: "/#contact" },
  ];

  const categories = [
    { name: "AI Marketing", icon: BrainCircuit, color: "text-cyan-400" },
    { name: "Performance Media", icon: TrendingUp, color: "text-purple-400" },
    { name: "SEO & Growth", icon: Search, color: "text-emerald-400" },
    { name: "Tech Stack & Dev", icon: Code2, color: "text-amber-400" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-[#050711]/90 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-cyan-950/30"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 p-[1px] shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-[#070b18] rounded-[11px] flex items-center justify-center">
              <Cpu className="w-5 h-5 text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-lg tracking-tight text-white flex items-center gap-1.5">
              {PERSONAL_INFO.name}
              <span className="inline-block w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            </span>
            <span className="text-[10px] uppercase tracking-widest text-cyan-400/80 font-mono font-medium">
              AI Growth Architect
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 glass-panel px-4 py-1.5 rounded-full border-white/10 relative">
          {navLinks.slice(0, 3).map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-cyan-400 transition-colors rounded-full hover:bg-white/5"
            >
              {link.name}
            </Link>
          ))}

          {/* 🌟 NEW "SEO HUB (25 GUIDES)" DROPDOWN MEGA-MENU TAB */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setSeoDropdownOpen(!seoDropdownOpen)}
              onMouseEnter={() => setSeoDropdownOpen(true)}
              className={`px-3.5 py-1.5 text-xs font-bold transition-all rounded-full flex items-center gap-1.5 ${
                pathname?.startsWith("/seo")
                  ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                  : "bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20 border border-cyan-500/20"
              }`}
            >
              <Search className="w-3.5 h-3.5" />
              <span>SEO Hub (25 Guides)</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  seoDropdownOpen ? "rotate-180 text-cyan-300" : ""
                }`}
              />
            </button>

            {/* Dropdown Mega Menu */}
            {seoDropdownOpen && (
              <div
                onMouseLeave={() => setSeoDropdownOpen(false)}
                className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[780px] max-h-[520px] overflow-y-auto bg-[#080c1d]/95 backdrop-blur-2xl rounded-3xl border border-cyan-500/30 p-6 shadow-2xl shadow-cyan-950/80 grid grid-cols-2 gap-6 z-50 scrollbar-thin scrollbar-thumb-cyan-500/20"
              >
                <div className="col-span-2 flex items-center justify-between pb-3 border-b border-white/10">
                  <div className="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-wider">
                    <Sparkles className="w-4 h-4 text-cyan-400" />
                    <span>Saksham's 25 Enterprise SEO & AI Guides</span>
                  </div>
                  <Link
                    href="/seo"
                    onClick={() => setSeoDropdownOpen(false)}
                    className="text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/30"
                  >
                    <span>View All Directory</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                {categories.map((cat) => {
                  const Icon = cat.icon;
                  const pages = SEO_PAGES.filter((p) => p.category === cat.name);
                  return (
                    <div key={cat.name} className="space-y-2">
                      <div className="flex items-center gap-2 text-xs font-bold text-slate-200 pb-1 border-b border-white/5">
                        <Icon className={`w-3.5 h-3.5 ${cat.color}`} />
                        <span>{cat.name}</span>
                        <span className="text-[10px] font-mono text-slate-500">({pages.length})</span>
                      </div>
                      <ul className="space-y-1">
                        {pages.map((p) => (
                          <li key={p.slug}>
                            <Link
                              href={`/seo/${p.slug}`}
                              onClick={() => setSeoDropdownOpen(false)}
                              className="block text-[11px] text-slate-300 hover:text-cyan-300 hover:bg-cyan-500/10 px-2 py-1 rounded-lg transition-colors truncate"
                              title={p.title}
                            >
                              {p.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {navLinks.slice(3).map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-cyan-400 transition-colors rounded-full hover:bg-white/5"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Action CTA Button */}
        <div className="hidden sm:flex items-center gap-3">
          <Link
            href="/#ai-audit"
            className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-900 bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 rounded-full shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/40 hover:scale-105 transition-all duration-300"
          >
            <Sparkles className="w-3.5 h-3.5 text-slate-950" />
            <span>AI Growth Audit</span>
          </Link>
        </div>

        {/* Mobile menu toggle button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-panel border-t border-white/10 px-4 pt-4 pb-6 mt-3 space-y-3 max-h-[80vh] overflow-y-auto">
          {/* SEO Hub Link in Mobile */}
          <Link
            href="/seo"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between px-3.5 py-2.5 text-sm font-bold text-cyan-300 bg-cyan-500/10 border border-cyan-500/30 rounded-xl"
          >
            <div className="flex items-center gap-2">
              <Search className="w-4 h-4 text-cyan-400" />
              <span>SEO Hub (25 Enterprise Guides)</span>
            </div>
            <ArrowRight className="w-4 h-4 text-cyan-400" />
          </Link>

          <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider px-2 pt-2">
            Main Navigation
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-slate-200 hover:text-cyan-400 hover:bg-white/5 rounded-lg"
            >
              {link.name}
            </Link>
          ))}

          <Link
            href="/#ai-audit"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-xl mt-4"
          >
            <Sparkles className="w-4 h-4" />
            <span>Launch AI Growth Audit</span>
          </Link>
        </div>
      )}
    </header>
  );
}
