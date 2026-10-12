import type { Metadata } from "next";
import AchievementsVoid from "@/components/AchievementsVoid";
import AchievementsList from "@/components/AchievementsList";
import Footer from "@/components/Footer";

import { siteConfig } from "@/data/portfolioConfig";

export const metadata: Metadata = {
  title: "Achievements & Archive",
  description:
    "Honors, milestones, awards, and technical distinctions.",
  alternates: {
    canonical: "/achievements",
  },
  openGraph: {
    title: `Achievements & Archive | ${siteConfig.name}`,
    description:
      "Honors, milestones, awards, and technical distinctions.",
    url: `${siteConfig.baseUrl}/achievements`,
  },
};

export default function AchievementsPage() {
  return (
    <main className="w-full bg-black min-h-screen">
      <AchievementsVoid />
      <AchievementsList />
      <div className="bg-black relative z-10 py-20 border-t border-white/10">
        <Footer />
      </div>
    </main>
  );
}

