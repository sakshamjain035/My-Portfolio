"use client";

import { useState } from "react";
import {
  HelpCircle,
  ChevronDown,
  Sparkles,
  BrainCircuit,
  MessageSquare,
  ArrowRight,
  Search,
} from "lucide-react";
import Link from "next/link";

interface FaqItem {
  question: string;
  answer: string;
  category: "AI Marketing" | "Programmatic SEO" | "Tech Stack" | "Engagement";
}

const LANDING_FAQS: FaqItem[] = [
  {
    category: "AI Marketing",
    question: "What core services does Saksham Jain provide for enterprise growth?",
    answer:
      "Saksham Jain specializes in AI Digital Marketing, Growth Architecture, Programmatic SEO Engine construction, Algorithmic Media Buying (Meta Advantage+ & Google PMax), Cookieless Server-Side Attribution, and Interactive 3D WebGL Web Application Development.",
  },
  {
    category: "AI Marketing",
    question: "How does Saksham's AI Growth Engine outperform traditional agencies?",
    answer:
      "Traditional agencies rely on manual ad tweaking and static creative. Saksham treats growth as a deterministic engineering discipline—leveraging custom fine-tuned LLMs for automated creative production, predictive bidding algorithms, synthetic persona testing, and real-time BigQuery dashboards that yield up to 340% higher ROAS.",
  },
  {
    category: "Programmatic SEO",
    question: "What is Programmatic SEO and how does Saksham scale search traffic?",
    answer:
      "Programmatic SEO is a data-driven architecture that automatically generates hundreds of high-quality, search-intent targeted pages. Saksham's custom engine handles automated keyword mapping, structured data schemas, canonical tagging, and internal linking to capture thousands of high-intent search queries at scale.",
  },
  {
    category: "Tech Stack",
    question: "How does Saksham resolve cookieless attribution challenges (iOS 14+ / AdBlockers)?",
    answer:
      "Saksham replaces fragile client-side tracking pixels with direct server-side API integrations (Meta Conversions API, Google Ads CAPI, Custom GA4 BigQuery pipelines). This guarantees 99.4% data precision, enabling true multi-touch attribution and precise ad bidding even in cookieless environments.",
  },
  {
    category: "Tech Stack",
    question: "Why does Saksham integrate 3D WebGL into modern landing pages?",
    answer:
      "Static pages struggle to retain modern buyer attention. By building high-performance 3D WebGL product showcases with Three.js, React Three Fiber, and GSAP, Saksham extends average session duration from 45 seconds to over 4 minutes, driving conversion rate lifts of up to 3.2X.",
  },
  {
    category: "Engagement",
    question: "What is the engagement timeline and onboarding process with Saksham?",
    answer:
      "Every engagement starts with a 30-minute AI Growth Architecture Audit. Saksham delivers a custom technical roadmap within 48 hours. Server-side tracking and programmatic SEO foundations are deployed within 2 to 3 weeks, driving initial keyword ranking lift and ad efficiency within the first 30 days.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "AI Marketing", "Programmatic SEO", "Tech Stack", "Engagement"];

  const filteredFaqs = LANDING_FAQS.filter((faq) => {
    const matchesCategory = selectedCategory === "All" || faq.category === selectedCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // JSON-LD FAQPage Schema for landing page rich snippets
  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: LANDING_FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section id="faq" className="py-24 relative bg-[#050711] border-b border-white/5 overflow-hidden">
      {/* JSON-LD Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      {/* Ambient Glows */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-cyan-500/10 blur-[150px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-purple-500/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
            <HelpCircle className="w-4 h-4 text-cyan-400" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
            Got Questions? <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-400 bg-clip-text text-transparent">
              Saksham Has Answers
            </span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed">
            Everything you need to know about Saksham Jain's AI Digital Marketing Framework, Programmatic SEO engines, tech stack integrations, and engagement models.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 bg-[#080c1d]/80 p-4 rounded-2xl border border-white/10 backdrop-blur-md">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20"
                    : "bg-white/5 text-slate-400 hover:text-slate-200 hover:bg-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search FAQs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#04060e] text-slate-200 text-xs rounded-xl pl-9 pr-4 py-2 border border-white/10 focus:outline-none focus:border-cyan-500/50 transition-colors placeholder:text-slate-500"
            />
          </div>
        </div>

        {/* Accordion FAQ List */}
        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "bg-[#090e24] border-cyan-500/40 shadow-xl shadow-cyan-500/5"
                      : "bg-[#070b1a]/60 border-white/10 hover:border-white/20"
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono font-bold text-cyan-400 px-2.5 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 flex-shrink-0">
                        {faq.category}
                      </span>
                      <h3 className="text-base sm:text-lg font-semibold text-white tracking-tight">
                        {faq.question}
                      </h3>
                    </div>

                    <div
                      className={`p-2 rounded-full bg-white/5 border border-white/10 text-cyan-400 flex-shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180 bg-cyan-500/20 border-cyan-500/40" : ""
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-2 text-slate-300 text-sm font-light leading-relaxed border-t border-white/5 bg-[#050816]/50">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-12 bg-[#070b1a]/40 rounded-2xl border border-white/10 text-slate-400 text-sm">
              No FAQs matching "{searchQuery}" under "{selectedCategory}". Try another keyword or category.
            </div>
          )}
        </div>

        {/* FAQ Bottom CTA Card */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-cyan-950/40 via-purple-950/30 to-slate-950 border border-cyan-500/30 flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="space-y-2 text-center sm:text-left">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 font-semibold">
              <MessageSquare className="w-4 h-4" />
              <span>Have a specific architectural question?</span>
            </div>
            <h3 className="text-xl font-bold text-white">
              Schedule a 1-on-1 AI Strategy Session with Saksham Jain
            </h3>
            <p className="text-xs text-slate-300 max-w-xl font-light">
              Get a personalized audit of your marketing stack, programmatic SEO opportunities, and 3D WebGL integration roadmap.
            </p>
          </div>

          <Link
            href="#contact"
            className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-xs sm:text-sm shadow-lg shadow-cyan-500/25 transition-all transform hover:-translate-y-0.5 flex-shrink-0 flex items-center gap-2"
          >
            <span>Ask Saksham Directly</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
