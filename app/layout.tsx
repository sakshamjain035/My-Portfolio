import type { Metadata, Viewport } from "next";
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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://sakshamjain.online";

export const viewport: Viewport = {
  themeColor: "#050711",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Saksham Jain — AI Digital Marketing & Growth Architect | 3D Portfolio",
    template: "%s | Saksham Jain",
  },
  description:
    "Official portfolio of Saksham Jain. Specializing in AI-driven Digital Marketing, Predictive Campaign Optimization, Programmatic Lead Generation, and Interactive WebGL Brand Experiences.",
  keywords: [
    "Saksham Jain",
    "Digital Marketing with AI",
    "AI Marketer",
    "Growth Architect",
    "Predictive ROI Optimization",
    "SEO Automation",
    "3D WebGL Portfolio",
    "Programmatic Marketing",
    "Growth Hacking AI",
  ],
  authors: [{ name: "Saksham Jain", url: siteUrl }],
  creator: "Saksham Jain",
  publisher: "Saksham Jain",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Saksham Jain — AI Digital Marketing & Growth Architect",
    description:
      "Scaling brands through AI predictive modeling, programmatic SEO pipelines, and high-converting 3D WebGL brand experiences.",
    siteName: "Saksham Jain Portfolio",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Saksham Jain — AI Digital Marketing & Growth Architect",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Saksham Jain — AI Digital Marketing & Growth Architect",
    description:
      "Scaling brands through AI predictive modeling, programmatic SEO pipelines, and high-converting 3D WebGL brand experiences.",
    creator: "@saksham_ai_mkt",
    images: ["/opengraph-image"],
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
  verification: {
    google: "QD3vItaH1HkrORUwU0cdFeT51cm5QK6j3TPSEbZni_g",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Saksham Jain",
    jobTitle: "AI Digital Marketing & Growth Architect",
    url: siteUrl,
    sameAs: [
      "https://linkedin.com/in/saksham-jain-growth",
      "https://x.com/saksham_ai_mkt",
      "https://github.com/sakshamjain-ai",
    ],
    knowsAbout: [
      "Artificial Intelligence in Marketing",
      "Predictive ROI Analytics",
      "Programmatic SEO",
      "WebGL & 3D Web Development",
      "Performance Marketing & Paid Media",
    ],
    description:
      "AI Digital Marketing & Growth Architect specializing in scaling brands with AI algorithms and WebGL experiences.",
  };

  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} dark scroll-smooth`}>
      <head>
        <meta name="google-site-verification" content="QD3vItaH1HkrORUwU0cdFeT51cm5QK6j3TPSEbZni_g" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#050711] text-slate-100 antialiased selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}

