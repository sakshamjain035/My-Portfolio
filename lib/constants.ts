export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  clientType: string;
  metrics: { label: string; value: string }[];
  description: string;
  aiStrategy: string[];
  toolsUsed: string[];
  badge: string;
  gradient: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  description: string;
  color: string;
  skills: { name: string; level: number; highlight?: boolean }[];
}

export const PERSONAL_INFO = {
  name: "Saksham Jain",
  title: "AI Digital Marketing & Growth Architect",
  tagline: "Bridging Artificial Intelligence, Predictive Analytics, and High-Converting Marketing Funnels to Scale Brands 10X Faster.",
  bio: "I specialize in leveraging cutting-edge Artificial Intelligence to transform traditional digital marketing into an automated, highly-predictive ROI engine. From fine-tuning LLMs for programmatic SEO content pipelines to building custom WebGL brand experiences and autonomous audience targeting models, I build growth ecosystems that outpace standard agency playbooks.",
  location: "Global / Remote",
  email: "saksham.jain.growth@gmail.com",
  socials: {
    linkedin: "https://linkedin.com/in/saksham-jain-growth",
    twitter: "https://x.com/saksham_ai_mkt",
    github: "https://github.com/sakshamjain-ai",
  },
  stats: [
    { label: "Ad Spend Optimized", value: "$4.5M+" },
    { label: "Average ROAS Lift", value: "+340%" },
    { label: "AI Marketing Workflows", value: "120+" },
    { label: "Organic Reach Scaled", value: "15M+" },
  ],
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "AI & Marketing Automation",
    iconName: "BrainCircuit",
    description: "Architecting autonomous AI engines for audience hyper-segmentation, programmatic content production, and dynamic ad copy variations.",
    color: "from-cyan-500 to-blue-600",
    skills: [
      { name: "LLM Marketing Pipelines (OpenAI / Claude APIs)", level: 95, highlight: true },
      { name: "Predictive Lead Scoring & Churn Modeling", level: 90, highlight: true },
      { name: "Programmatic SEO & AI Content Generation", level: 98, highlight: true },
      { name: "Automated Email & WhatsApp Nurture Funnels", level: 92 },
      { name: "Synthetic Customer Persona Simulation", level: 88 },
    ],
  },
  {
    title: "Performance & Paid Media",
    iconName: "TrendingUp",
    description: "Data-driven media buying powered by AI algorithmic bidding, conversion rate optimization (CRO), and advanced multi-touch attribution.",
    color: "from-purple-500 to-pink-600",
    skills: [
      { name: "Meta Ads (Advantage+ & AI Bidding)", level: 96, highlight: true },
      { name: "Google Ads (Performance Max & Search)", level: 94 },
      { name: "TikTok & LinkedIn Programmatic Ads", level: 89 },
      { name: "Landing Page CRO & A/B Testing", level: 95, highlight: true },
      { name: "Cookieless Multi-Touch Attribution", level: 90 },
    ],
  },
  {
    title: "SEO & Growth Architecture",
    iconName: "Search",
    description: "Dominating search engine results through AI semantic keyword clusters, technical SEO automation, and viral growth loops.",
    color: "from-emerald-400 to-teal-600",
    skills: [
      { name: "AI Semantic Search Optimization (SGE & Perplexity)", level: 96, highlight: true },
      { name: "Technical SEO & Core Web Vitals", level: 92 },
      { name: "Automated Competitor Intelligence", level: 94 },
      { name: "Viral Growth Loops & Referral Funnels", level: 88 },
    ],
  },
  {
    title: "Tech Stack & Web Development",
    iconName: "Code2",
    description: "Building ultra-fast, high-converting interactive web apps, 3D WebGL brand microsites, and custom marketing analytics dashboards.",
    color: "from-amber-400 to-orange-500",
    skills: [
      { name: "Next.js / React / TypeScript", level: 90, highlight: true },
      { name: "Three.js / WebGL / GSAP 3D Visuals", level: 85, highlight: true },
      { name: "Node.js Backend & API Integration", level: 88 },
      { name: "Python (Pandas, Scikit-Learn for Marketing)", level: 86 },
      { name: "Google Analytics 4 & BigQuery SQL", level: 92 },
    ],
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "neural-roas-boost",
    title: "Neural Audience Bidding Engine",
    category: "AI Paid Media",
    clientType: "FinTech & SaaS",
    metrics: [
      { label: "ROAS Lift", value: "+380%" },
      { label: "CAC Reduction", value: "-42%" },
      { label: "Scale", value: "$1.2M Spend" },
    ],
    description: "Built a custom Python/Node.js predictive model that dynamically shifts ad budget across 40+ Meta & Google micro-audiences based on real-time conversion probability signals.",
    aiStrategy: [
      "Real-time API conversion signal ingestion",
      "Dynamic creative rotation based on user sentiment analysis",
      "Cookieless attribution with First-Party Server-Side Tracking",
    ],
    toolsUsed: ["Meta Advantage+", "Google PMax", "Python AI Model", "Next.js Dashboard", "GA4 BigQuery"],
    badge: "Case Study #1",
    gradient: "from-cyan-500/20 via-blue-600/10 to-transparent",
  },
  {
    id: "programmatic-seo-engine",
    title: "AI Programmatic SEO Factory",
    category: "AI Organic Search",
    clientType: "E-Commerce & B2B Marketplace",
    metrics: [
      { label: "Organic Impressions", value: "12.4M" },
      { label: "Pages Indexing Rate", value: "99.2%" },
      { label: "Organic Revenue", value: "+210%" },
    ],
    description: "Architected an automated content factory using fine-tuned Claude 3.5 & OpenAI models to generate 800+ high-intent programmatic landing pages with structured schema markup.",
    aiStrategy: [
      "Semantic topic clustering & intent classification",
      "Automated human-in-the-loop fact checking pipeline",
      "Dynamic internal linking algorithm using vector embeddings",
    ],
    toolsUsed: ["Next.js App Router", "Claude 3.5 Sonnet API", "Vector DB", "Google Search Console API"],
    badge: "Case Study #2",
    gradient: "from-purple-500/20 via-pink-600/10 to-transparent",
  },
  {
    id: "interactive-3d-microsite",
    title: "WebGL 3D Brand Experience",
    category: "3D Web Development & CRO",
    clientType: "Web3 & Premium Consumer Tech",
    metrics: [
      { label: "Avg Session Duration", value: "4m 12s" },
      { label: "Conversion Rate", value: "8.4%" },
      { label: "Social Shares", value: "45K+" },
    ],
    description: "Created an immersive, interactive 3D WebGL product showcase using Three.js and GSAP scroll interactions, increasing landing page conversion rates by 3.2X over traditional layouts.",
    aiStrategy: [
      "Real-time 3D lighting adaptation based on visitor timezone",
      "AI personalized copy overlay dynamically tailored to traffic origin",
      "Interactive 3D configurator with instant checkout flow",
    ],
    toolsUsed: ["Three.js", "React Three Fiber", "GSAP ScrollTrigger", "Tailwind CSS", "Next.js"],
    badge: "Case Study #3",
    gradient: "from-emerald-500/20 via-teal-600/10 to-transparent",
  },
];
