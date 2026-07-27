import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Saksham Jain — AI Digital Marketing & Growth Architect | 3D Portfolio",
  description: "Official portfolio of Saksham Jain. Specializing in AI-driven Digital Marketing, Predictive Campaign Optimization, Programmatic Lead Generation, and Interactive WebGL Brand Experiences.",
  keywords: [
    "Saksham Jain",
    "Digital Marketing with AI",
    "AI Marketer",
    "Growth Architect",
    "Predictive ROI Optimization",
    "SEO Automation",
    "3D WebGL Portfolio",
    "Programmatic Marketing",
  ],
  authors: [{ name: "Saksham Jain" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} dark scroll-smooth`}>
      <body className="bg-[#050711] text-slate-100 antialiased selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
