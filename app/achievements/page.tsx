import type { Metadata } from "next";
import AchievementsVoid from "@/components/AchievementsVoid";
import AchievementsList from "@/components/AchievementsList";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Achievements & Archive",
  description:
    "Honors, academic milestones, spiritual discipline, and engineering achievements of Muhammad Rayyan.",
  alternates: {
    canonical: "/achievements",
  },
  openGraph: {
    title: "Achievements & Archive | Muhammad Rayyan",
    description:
      "Honors, academic milestones, spiritual discipline, and engineering achievements of Muhammad Rayyan.",
    url: "https://muhammadrayyan.me/achievements",
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

