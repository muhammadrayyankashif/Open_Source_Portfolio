import Hero from "@/components/Hero";
import InfiniteMarquee from "@/components/InfiniteMarquee";
import Footer from "@/components/Footer";
import Manifesto from "@/components/Manifesto";
import Methodology from "@/components/Methodology";
import ZoomParallax from "@/components/ZoomParallax";
import Spotlight from "@/components/Spotlight";

export default function Home() {
  return (
    <main className="w-full bg-black min-h-screen">
      <div className="relative z-10 bg-black">
        <Hero />
        <Manifesto />
        <InfiniteMarquee />
        <ZoomParallax />

        <div className="hidden md:block">
          <Spotlight />
        </div>
        <Methodology />
      </div>
      <Footer />
    </main>
  );
}

