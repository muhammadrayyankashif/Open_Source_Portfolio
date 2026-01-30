"use client";

import AchievementsVoid from "@/components/AchievementsVoid";
import AchievementsList from "@/components/AchievementsList";
import Footer from "@/components/Footer";

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
