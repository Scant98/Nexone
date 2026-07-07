import HeroSlider from "@/components/HeroSlider";
import PillarsSection from "@/components/PillarsSection";
import PortfolioSection from "@/components/PortfolioSection";
import AboutSection from "@/components/AboutSection";
import InvestorSection from "@/components/InvestorSection";

export default function HomePageContent() {
  return (
    <>
      <HeroSlider />
      <PillarsSection />
      <PortfolioSection />
      <AboutSection />
      <InvestorSection />
    </>
  );
}
