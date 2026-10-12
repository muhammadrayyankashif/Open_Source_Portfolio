# Next.js Developer Portfolio Template

An ultra-sleek, minimalist dark-mode developer portfolio template engineered with **Next.js 16**, **React 19**, **Tailwind CSS v4**, and **Framer Motion**.

Designed for software engineers, systems architects, and technical creators who want a high-performance web presence with zero bloat.

---

## ⚡ Highlights & Features

- **4 Multi-Page Architecture**:
  - **`/` (Home)**: Kinetic typography, dynamic mouse-tracking spotlight, text reveal animations.
  - **`/projects` (Projects)**: Curated engineering gallery with tech stack tags, architecture descriptions, and live repo links.
  - **`/achievements` (Achievements)**: Immersive 3D Z-depth camera fly-through void with Framer Motion scroll transforms + chronological archive.
  - **`/contact` (Contact)**: Minimalist communication terminal with interactive form elements and direct channel links.
- **2-Minute Centralized Configuration**: Manage all your bio details, projects, awards, and social media handles in one single file (`data/portfolioConfig.ts`).
- **Modern Tech Stack**:
  - **Next.js 16 (App Router)** & **React 19**
  - **Tailwind CSS v4** for styling
  - **Framer Motion** for spring physics and kinetic transforms
  - **Lenis** for buttery-smooth inertial scrolling
  - **Lucide Icons** for vector iconography
- **Production-Grade SEO**: Dynamic metadata generation, OpenGraph tags, canonical URLs, and JSON-LD schema integration.
- **Dark-Mode Native Aesthetic**: Deep true-black canvas, subtle aurora gradients, and delicate grain overlays.

---

## 🚀 Quick Start

### 1. Clone the repository
```bash
git clone https://github.com/muhammadrayyankashif/portfolio.git
cd portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for production
```bash
npm run build
npm start
```

---

## ⚙️ Customization (The 2-Minute Guide)

You do **not** need to modify individual page components to personalize your portfolio. All site content is centralized in:

📂 `data/portfolioConfig.ts`

```typescript
export const siteConfig = {
  name: "Your Name",
  developerName: "Your Full Name",
  title: "Full Stack Engineer & Systems Architect",
  tagline: "Engineering high-throughput systems, scalable cloud architectures...",
  location: "Your City, Country",
  email: "your.email@domain.com",
  secondaryEmail: "alternate@domain.com",
  phone: "+1 (555) 000-0000",
  baseUrl: "https://yourportfolio.com",
  socials: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://x.com/yourusername",
  },
};
```

### Adding Projects
Edit `sampleProjects` in `data/portfolioConfig.ts`:
```typescript
export const sampleProjects: Project[] = [
  {
    id: 1,
    title: "Project Name",
    org: "Organization / Domain",
    category: "Distributed Systems",
    img: "/Projects/project-thumbnail.webp",
    link: "https://github.com/yourusername/project",
    description: "Brief 1-2 sentence engineering description.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  // Add more projects...
];
```

### Adding Achievements
Edit `sampleAchievements` in `data/portfolioConfig.ts`:
```typescript
export const sampleAchievements: Achievement[] = [
  {
    id: 1,
    title: "1st Place — National Hackathon",
    organization: "Global Tech Summit",
    category: "Cloud Architecture",
    year: "2025",
  },
  // Add more achievements...
];
```

---

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx         # Root layout with fonts, smooth scroll, aurora & metadata
│   ├── page.tsx           # Home page with Hero kinetic typography
│   ├── projects/          # Projects showcase page
│   ├── achievements/      # 3D achievements void & archive
│   └── contact/           # Minimalist contact page
├── components/            # Reusable UI components (Hero, Navbar, Gallery, etc.)
├── data/
│   ├── portfolioConfig.ts # Central configuration for all content
│   └── achievements.ts    # Re-exported structured achievements
├── public/                # Static assets, project previews, icons
└── package.json
```

---

## 🚢 Deploy to Vercel

The easiest way to deploy this portfolio is using [Vercel](https://vercel.com):

1. Push your repository to GitHub.
2. Import the repository in Vercel.
3. Click **Deploy**.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
