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
  developerName: "Muhammad Rayyan Kashif",
  title: "Full Stack Engineer & Systems Architect",
  tagline: "Engineering high-throughput systems, scalable cloud architectures, and interactive digital experiences.",
  location: "Karachi, Pakistan",
  email: "muhammadrayyankashif08@gmail.com",
  secondaryEmail: "muhammadrayyan08@outlook.com",
  phone: "+92 306 0503704",
  baseUrl: "https://open-source-portfolio.vercel.app",
  socials: {
    github: "https://github.com/muhammadrayyankashif",
    linkedin: "https://linkedin.com",
    twitter: "https://x.com",
  },
};

export const sampleProjects: Project[] = [
  {
    id: 1,
    title: "Distributed Stream Processing Engine",
    org: "Cloud Infrastructure",
    category: "Event-Driven Architecture",
    img: "/projects/project-1.webp",
    link: "https://github.com",
    description: "High-throughput streaming platform featuring real-time event aggregation, partition rebalancing, and low-latency storage.",
    tags: ["Go", "Kafka", "PostgreSQL", "Docker", "gRPC"],
  },
  {
    id: 2,
    title: "Multi-Cloud Kubernetes Orchestrator",
    org: "Platform Engineering",
    category: "Container Automation",
    img: "/projects/project-2.webp",
    link: "https://github.com",
    description: "Declarative infrastructure controller managing automated failovers, blue-green deployments, and canary traffic routing.",
    tags: ["Rust", "Kubernetes", "CRD", "Prometheus", "Envoy"],
  },
  {
    id: 3,
    title: "Interactive Collaborative Canvas",
    org: "Creative Tools",
    category: "Real-Time Systems",
    img: "/projects/project-3.webp",
    link: "https://github.com",
    description: "Vector whiteboard platform supporting conflict-free replicated data types (CRDTs), live cursor tracking, and WebGL rendering.",
    tags: ["Next.js", "React 19", "WebSockets", "CRDT", "Canvas API"],
  },
  {
    id: 4,
    title: "Zero-Knowledge Identity Verifier",
    org: "Cryptographic Protocols",
    category: "Decentralized Security",
    img: "/projects/project-4.webp",
    link: "https://github.com",
    description: "Privacy-preserving identity authentication protocol using succinct non-interactive arguments of knowledge (zk-SNARKs).",
    tags: ["TypeScript", "zk-SNARKs", "Solidity", "Node.js", "Tailwind CSS"],
  },
];

export const sampleAchievements: Achievement[] = [
  {
    id: 1,
    title: "1st Place — National Collegiate Hackathon",
    organization: "Global Developer Summit",
    category: "Distributed Systems",
    year: "2025",
  },
  {
    id: 2,
    title: "Core Maintainer & Open-Source Fellow",
    organization: "Open Source Initiative",
    category: "Open Source",
    year: "2024-Present",
  },
  {
    id: 3,
    title: "Published Technical Whitepaper",
    organization: "International Systems Engineering Journal",
    category: "Distributed Architecture",
    year: "2024",
  },
  {
    id: 4,
    title: "Lead Systems Architect Distinction",
    organization: "Enterprise Cloud Consortium",
    category: "Systems Engineering",
    year: "2023",
  },
];
