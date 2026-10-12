export interface Project {
  id: number;
  title: string;
  org: string;
  category: string;
  img: string;
  link: string;
  description?: string;
  tags?: string[];
}

export interface Achievement {
  id: number;
  title: string;
  organization: string;
  category: string;
  year: string;
}

export const siteConfig = {
  name: "Dev Portfolio",
  developerName: "Alex Vance",
  title: "Full Stack Engineer & Systems Architect",
  tagline: "Engineering high-throughput systems, scalable cloud architectures, and interactive digital experiences.",
  location: "San Francisco, CA",
  email: "hello@developer.dev",
  secondaryEmail: "dev@developer.dev",
  phone: "+1 (555) 019-2834",
  baseUrl: "https://developer-portfolio-template.vercel.app",
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://x.com",
  },
};

export const sampleProjects: Project[] = [
  {
    id: 1,
    title: "KnightED Platform",
    org: "Educational Systems",
    category: "Distributed Learning & LMS",
    img: "/Projects/KnightED.webp",
    link: "https://github.com/muhammadrayyankashif/KnightED",
    description: "Next.js 16 full-stack academic resource hub featuring 17 Mongoose relational schemas, edge JWT authentication, and Cloudinary video delivery.",
    tags: ["Next.js 16", "TypeScript", "MongoDB", "Cloudinary", "Edge Auth"],
  },
  {
    id: 2,
    title: "Clinical LIMS Engine",
    org: "Healthcare Diagnostics",
    category: "Clinical Laboratory Infrastructure",
    img: "/Projects/HealthInn.webp",
    link: "https://github.com/muhammadrayyankashif/LIMS",
    description: "Enterprise laboratory information management system with dynamic biological panic threshold alerts, specimen QR verification, and vector PDF report synthesis.",
    tags: ["Next.js 16", "React 19", "Turbopack", "MongoDB", "jsPDF"],
  },
  {
    id: 3,
    title: "SCINNOVA Portal",
    org: "Interactive Web & Audio",
    category: "Event Architecture",
    img: "/Projects/Scinnova.webp",
    link: "https://github.com/muhammadrayyankashif/SCINNOVA-IX",
    description: "Interactive science olympiad web portal powered by GSAP timeline choreography, Lenis smooth scrolling, and procedural Web Audio engine.",
    tags: ["Vanilla ES6+", "GSAP", "Lenis Scroll", "Web Audio API"],
  },
  {
    id: 4,
    title: "Dast-E-Yaar Logistics",
    org: "Pharmaceutical Supply Chain",
    category: "Automated Order Routing",
    img: "/Projects/Dasteyaar.webp",
    link: "https://github.com",
    description: "High-volume pharmaceutical order routing and multi-warehouse logistics engine integrating Shopify Admin API v12 and real-time webhook ingestion.",
    tags: ["Node.js", "Express 5", "Shopify API", "Webhooks"],
  },
  {
    id: 5,
    title: "Respire II Digital Health",
    org: "Global Pulmonology Network",
    category: "Clinical Research Repository",
    img: "/Projects/Respire.webp",
    link: "https://respiredigitalhub.org",
    description: "Digital learning and medical research portal centralizing international respiratory clinical trial documentation and training curricula.",
    tags: ["Next.js", "PostgreSQL", "REST APIs", "Vercel"],
  },
  {
    id: 6,
    title: "Clinical Pharmacology App",
    org: "Mobile Healthcare",
    category: "Clinical Decision Support",
    img: "/Projects/HealthHandsPharmacy.webp",
    link: "https://play.google.com/store/apps/details?id=com.agp.powerpack",
    description: "Offline-first clinical dosage calculation and drug interaction engine deployed to over 10,000 active medical practitioners.",
    tags: ["Android", "Kotlin / Java", "SQLite", "Material Design"],
  },
];

export const sampleAchievements: Achievement[] = [
  {
    id: 1,
    title: "1st Place — National Cloud Hackathon",
    organization: "Global Tech Summit",
    category: "Distributed Systems",
    year: "2025",
  },
  {
    id: 2,
    title: "Core Contributor & Maintainer",
    organization: "Open Source Collective",
    category: "Open Source",
    year: "2024-Present",
  },
  {
    id: 3,
    title: "Lead Systems Architect",
    organization: "Enterprise Tech Labs",
    category: "Systems Engineering",
    year: "2023-Present",
  },
  {
    id: 4,
    title: "Published Technical Whitepaper",
    organization: "International Systems Journal",
    category: "Distributed Architecture",
    year: "2024",
  },
  {
    id: 5,
    title: "Enterprise Multi-Building Wi-Fi 6 Deployment",
    organization: "Academic University Department",
    category: "Hardware & RF Network",
    year: "2025",
  },
];
