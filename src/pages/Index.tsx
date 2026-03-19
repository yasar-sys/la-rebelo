import CursorGlow from "@/components/CursorGlow";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ScrollStory from "@/components/ScrollStory";
import ProductShowcase from "@/components/ProductShowcase";
import ReviewSection from "@/components/ReviewSection";
import FinalCTA from "@/components/FinalCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <CursorGlow />
      <Navbar />
      <HeroSection />
      <ScrollStory />
      <ProductShowcase />
      <ReviewSection />
      <FinalCTA />
    </div>
  );
};

export default Index;
