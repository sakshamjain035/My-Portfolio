import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  SEO_PAGES,
  type SeoPageData,
} from "@/lib/seo-data";
import {
  ChevronRight,
  Sparkles,
  BookOpen,
  CheckCircle2,
  HelpCircle,
  ArrowLeft,
  ArrowRight,
  Code2,
  Table as TableIcon,
  ShieldCheck,
  Cpu,
  BrainCircuit,
  Share2,
} from "lucide-react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

interface Props {
  params: Promise<{ slug: string }>;
}

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://sakshamjain.online";

export async function generateStaticParams() {
  return SEO_PAGES.map((page) => ({
    slug: page.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = SEO_PAGES.find((p) => p.slug === slug);

  if (!page) {
    return {
      title: "Page Not Found | Saksham Jain",
    };
  }

  const canonicalUrl = `${siteUrl}/seo/${page.slug}`;

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    keywords: [page.targetKeyword, ...page.secondaryKeywords],
    authors: [{ name: page.author, url: siteUrl }],
    creator: page.author,
    publisher: page.author,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: "article",
      locale: "en_US",
      url: canonicalUrl,
      title: page.metaTitle,
      description: page.metaDescription,
      siteName: "Saksham Jain SEO Knowledge Base",
      publishedTime: page.publishDate,
      authors: [page.author],
      tags: [page.targetKeyword, ...page.secondaryKeywords],
      images: [
        {
          url: `${siteUrl}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: page.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.metaTitle,
      description: page.metaDescription,
      creator: "@saksham_ai_mkt",
      images: [`${siteUrl}/opengraph-image`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default async function SeoDetailPage({ params }: Props) {
  const { slug } = await params;
  const pageIndex = SEO_PAGES.findIndex((p) => p.slug === slug);

  if (pageIndex === -1) {
    notFound();
  }

  const page = SEO_PAGES[pageIndex];
  const prevPage = pageIndex > 0 ? SEO_PAGES[pageIndex - 1] : null;
  const nextPage = pageIndex < SEO_PAGES.length - 1 ? SEO_PAGES[pageIndex + 1] : null;

  // JSON-LD Schemas for Schema.org SEO richness
  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: page.title,
    description: page.metaDescription,
    author: {
      "@type": "Person",
      name: page.author,
      jobTitle: "AI Digital Marketing & Growth Architect",
      url: siteUrl,
    },
    publisher: {
      "@type": "Person",
      name: page.author,
      url: siteUrl,
    },
    datePublished: page.publishDate,
    dateModified: page.publishDate,
    mainEntityOfPage: `${siteUrl}/seo/${page.slug}`,
    keywords: [page.targetKeyword, ...page.secondaryKeywords].join(", "),
  };

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "SEO Knowledge Base",
        item: `${siteUrl}/seo`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: page.title,
        item: `${siteUrl}/seo/${page.slug}`,
      },
    ],
  };

  const jsonLdFaq =
    page.faqs && page.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: page.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }
      : null;

  return (
    <>
      {/* Schema.org Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      {jsonLdFaq && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
        />
      )}

      <Navbar />

      <main className="min-h-screen bg-[#050711] text-slate-100 pt-28 pb-20 relative overflow-hidden">
        {/* Glowing Background Orbs */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />
        <div className="absolute top-96 right-0 w-[500px] h-[500px] bg-purple-500/10 blur-[150px] rounded-full pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs text-slate-400 mb-8 overflow-x-auto whitespace-nowrap py-1">
            <Link href="/" className="hover:text-cyan-400 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600 flex-shrink-0" />
            <Link href="/seo" className="hover:text-cyan-400 transition-colors">
              SEO Knowledge Base
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600 flex-shrink-0" />
            <span className="text-cyan-400 font-medium truncate">{page.title}</span>
          </nav>

          {/* Hero Section */}
          <header className="mb-14 border-b border-white/10 pb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{page.category}</span>
              <span className="text-slate-600">•</span>
              <span>{page.readTime}</span>
              <span className="text-slate-600">•</span>
              <span>~{page.wordCount.toLocaleString()} Words</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight leading-tight mb-6">
              {page.heroHeadline}
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 max-w-4xl font-light leading-relaxed mb-8">
              {page.heroSubheadline}
            </p>

            <div className="flex flex-wrap items-center gap-6 text-xs text-slate-400 pt-4 border-t border-white/5">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-white text-xs">
                  SJ
                </div>
                <div>
                  <span className="block font-semibold text-slate-200">{page.author}</span>
                  <span className="text-slate-500">AI Digital Marketing & Growth Architect</span>
                </div>
              </div>

              <div className="hidden sm:block text-slate-700">|</div>

              <div>
                <span className="block font-medium text-slate-300">Target Keyword:</span>
                <span className="text-cyan-400 font-mono font-semibold">{page.targetKeyword}</span>
              </div>

              <div className="hidden sm:block text-slate-700">|</div>

              <div>
                <span className="block font-medium text-slate-300">Published:</span>
                <time dateTime={page.publishDate} className="text-slate-400">{page.publishDate}</time>
              </div>
            </div>
          </header>

          {/* Main Layout: Sticky TOC + Article Body */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Table of Contents Sidebar */}
            <aside className="lg:col-span-3 order-2 lg:order-1">
              <div className="sticky top-28 bg-[#090d1f]/80 backdrop-blur-md rounded-2xl border border-white/10 p-5">
                <div className="flex items-center gap-2 text-sm font-bold text-white mb-4 pb-3 border-b border-white/10">
                  <BookOpen className="w-4 h-4 text-cyan-400" />
                  <span>Table of Contents</span>
                </div>

                <nav className="space-y-2 text-xs">
                  {page.sections.map((section, idx) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="block text-slate-400 hover:text-cyan-300 hover:bg-cyan-500/5 px-2.5 py-1.5 rounded-lg transition-colors leading-normal"
                    >
                      <span className="text-cyan-500 font-mono mr-1.5">{idx + 1}.</span>
                      {section.title}
                    </a>
                  ))}
                  {page.faqs.length > 0 && (
                    <a
                      href="#faq-section"
                      className="block text-slate-400 hover:text-cyan-300 hover:bg-cyan-500/5 px-2.5 py-1.5 rounded-lg transition-colors leading-normal"
                    >
                      <span className="text-cyan-500 font-mono mr-1.5">{page.sections.length + 1}.</span>
                      Frequently Asked Questions
                    </a>
                  )}
                </nav>

                {/* Author Card */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Architected by
                  </h4>
                  <p className="text-sm font-bold text-white">Saksham Jain</p>
                  <p className="text-xs text-slate-400 mt-1">
                    Specializing in AI Marketing, Programmatic SEO, and WebGL Web Apps.
                  </p>
                  <Link
                    href="/#contact"
                    className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <span>Hire Saksham</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </aside>

            {/* Main Article Content */}
            <article className="lg:col-span-9 order-1 lg:order-2 space-y-12">
              {page.sections.map((section) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="bg-[#080c1d]/60 rounded-3xl border border-white/10 p-6 sm:p-8 lg:p-10 space-y-6 scroll-mt-28 shadow-xl"
                >
                  <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight flex items-center gap-3">
                    <span className="w-2 h-7 rounded-full bg-gradient-to-b from-cyan-400 to-blue-600 inline-block"></span>
                    {section.title}
                  </h2>

                  <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed font-light text-base sm:text-lg space-y-4 whitespace-pre-line">
                    {section.content}
                  </div>

                  {/* Key Takeaways Callout */}
                  {section.keyTakeaways && section.keyTakeaways.length > 0 && (
                    <div className="my-6 bg-cyan-950/40 border border-cyan-500/30 rounded-2xl p-5 sm:p-6 space-y-3">
                      <div className="flex items-center gap-2 text-cyan-400 font-semibold text-sm">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Key Takeaways & Strategic Insights by Saksham</span>
                      </div>
                      <ul className="space-y-2 text-xs sm:text-sm text-slate-200">
                        {section.keyTakeaways.map((takeaway, i) => (
                          <li key={i} className="flex items-start gap-2.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                            <span>{takeaway}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Code Snippet Box */}
                  {section.codeSnippet && (
                    <div className="my-6 rounded-2xl overflow-hidden border border-slate-800 bg-[#04060e]">
                      <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900/80 border-b border-slate-800 text-xs font-mono text-slate-400">
                        <div className="flex items-center gap-2">
                          <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                          <span className="text-slate-200 font-semibold">{section.codeSnippet.title}</span>
                        </div>
                        <span className="uppercase text-[10px] bg-slate-800 px-2 py-0.5 rounded text-cyan-300">
                          {section.codeSnippet.language}
                        </span>
                      </div>
                      <pre className="p-4 sm:p-5 overflow-x-auto text-xs font-mono text-cyan-200 leading-relaxed">
                        <code>{section.codeSnippet.code}</code>
                      </pre>
                    </div>
                  )}

                  {/* Metrics Table */}
                  {section.metricsTable && (
                    <div className="my-6 overflow-x-auto rounded-2xl border border-white/10 bg-[#050816]">
                      <div className="flex items-center gap-2 px-5 py-3 bg-slate-900/60 border-b border-white/10 text-xs font-bold text-slate-200">
                        <TableIcon className="w-4 h-4 text-cyan-400" />
                        <span>Saksham Empirical Performance Matrix</span>
                      </div>
                      <table className="w-full text-left text-xs sm:text-sm">
                        <thead className="bg-slate-900/40 text-cyan-300 font-mono uppercase text-[11px] border-b border-white/10">
                          <tr>
                            {section.metricsTable.headers.map((h, i) => (
                              <th key={i} className="px-5 py-3.5 font-semibold">
                                {h}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5 text-slate-300 font-light">
                          {section.metricsTable.rows.map((row, rIdx) => (
                            <tr key={rIdx} className="hover:bg-cyan-500/5 transition-colors">
                              {row.map((cell, cIdx) => (
                                <td
                                  key={cIdx}
                                  className={`px-5 py-3.5 ${
                                    cIdx === 0
                                      ? "font-medium text-white"
                                      : cIdx === 3
                                      ? "font-semibold text-emerald-400"
                                      : ""
                                  }`}
                                >
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </section>
              ))}

              {/* FAQ Section */}
              {page.faqs.length > 0 && (
                <section
                  id="faq-section"
                  className="bg-[#080c1d]/60 rounded-3xl border border-white/10 p-6 sm:p-8 lg:p-10 space-y-6 scroll-mt-28 shadow-xl"
                >
                  <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight flex items-center gap-3">
                    <HelpCircle className="w-6 h-6 text-cyan-400" />
                    <span>Frequently Asked Questions</span>
                  </h2>

                  <div className="space-y-4 pt-2">
                    {page.faqs.map((faq, idx) => (
                      <div
                        key={idx}
                        className="p-5 rounded-2xl bg-[#050816] border border-white/10 space-y-2 hover:border-cyan-500/30 transition-colors"
                      >
                        <h3 className="text-base font-semibold text-white flex items-start gap-2.5">
                          <span className="text-cyan-400 font-mono">Q{idx + 1}:</span>
                          <span>{faq.question}</span>
                        </h3>
                        <p className="text-sm text-slate-300 font-light pl-7 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* CTA Section */}
              <div className="rounded-3xl bg-gradient-to-br from-cyan-950/60 via-purple-950/40 to-slate-950 border border-cyan-500/30 p-8 sm:p-12 text-center space-y-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-3xl rounded-full pointer-events-none" />
                
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-mono font-semibold">
                  <BrainCircuit className="w-3.5 h-3.5" />
                  Scale with Saksham Jain
                </span>

                <h3 className="text-2xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
                  Ready to Deploy Saksham's AI Growth Engine for Your Brand?
                </h3>

                <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base font-light leading-relaxed">
                  Book a direct strategy consultation with Saksham Jain to audit your current tech stack, implement programmatic SEO, and automate high-ROAS media acquisition.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                  <Link
                    href="/#contact"
                    className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-sm shadow-lg shadow-cyan-500/25 transition-all transform hover:-translate-y-0.5"
                  >
                    Schedule AI Strategy Call with Saksham
                  </Link>

                  <Link
                    href="/seo"
                    className="px-6 py-3.5 rounded-xl bg-slate-900 border border-white/10 hover:border-cyan-500/40 text-slate-300 font-medium text-sm transition-all"
                  >
                    Explore All 25 SEO Guides
                  </Link>
                </div>
              </div>

              {/* Prev / Next Page Internal Links */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-white/10">
                {prevPage ? (
                  <Link
                    href={`/seo/${prevPage.slug}`}
                    className="group p-5 rounded-2xl bg-[#080c1d] border border-white/10 hover:border-cyan-500/40 transition-all flex items-start gap-3"
                  >
                    <ArrowLeft className="w-5 h-5 text-cyan-400 group-hover:-translate-x-1 transition-transform flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-slate-500 font-mono block">
                        Previous SEO Guide
                      </span>
                      <span className="text-sm font-semibold text-slate-200 group-hover:text-cyan-300 line-clamp-1">
                        {prevPage.title}
                      </span>
                    </div>
                  </Link>
                ) : <div />}

                {nextPage ? (
                  <Link
                    href={`/seo/${nextPage.slug}`}
                    className="group p-5 rounded-2xl bg-[#080c1d] border border-white/10 hover:border-cyan-500/40 transition-all flex items-start justify-end text-right gap-3 sm:col-start-2"
                  >
                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-slate-500 font-mono block">
                        Next SEO Guide
                      </span>
                      <span className="text-sm font-semibold text-slate-200 group-hover:text-cyan-300 line-clamp-1">
                        {nextPage.title}
                      </span>
                    </div>
                    <ArrowRight className="w-5 h-5 text-cyan-400 group-hover:translate-x-1 transition-transform flex-shrink-0 mt-0.5" />
                  </Link>
                ) : <div />}
              </div>

            </article>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
