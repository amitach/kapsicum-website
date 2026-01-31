import Hero from "@/components/sections/Hero";
import FeatureCards from "@/components/sections/FeatureCards";
import KapSay from "@/components/sections/KapSay";
import KapSum from "@/components/sections/KapSum";
import Clipboard from "@/components/sections/Clipboard";
import Privacy from "@/components/sections/Privacy";
import AIFlexibility from "@/components/sections/AIFlexibility";
import Search from "@/components/sections/Search";
import Testimonials from "@/components/sections/Testimonials";
import Download from "@/components/sections/Download";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <FeatureCards />
      <KapSay />
      <KapSum />
      <Clipboard />
      <Privacy />
      <AIFlexibility />
      <Search />
      <Testimonials />
      <Download />
      <Footer />
    </main>
  );
}
