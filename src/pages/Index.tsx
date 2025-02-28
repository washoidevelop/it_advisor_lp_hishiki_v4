import { useEffect } from "react";
import Hero from "@/components/pages/index/AIHPProduceHero";
import Problems from "@/components/pages/index/AIHPProduceProblems";
import Solutions from "@/components/pages/index/AIHPProduceSolutions";
import SuccessStories from "@/components/pages/index/AIHPProduceSuccessStories";
import Pricing from "@/components/pages/index/AIHPProducePricing";
import FAQs from "@/components/pages/index/AIHPProduceFAQs";
import CTA from "@/components/pages/index/AIHPProduceCTA";
import Footer from "@/components/common/Footer";

const AIHPProduce = () => {
  useEffect(() => {
    const loadFont = async () => {
      const font = new FontFace(
        "Noto Sans JP",
        "url(https://fonts.gstatic.com/s/notosansjp/v52/-F6jfjtqLzI2JPCgQBnw7HFyzSD-AsregP8VFBEj75s.woff2)",
      );

      try {
        await font.load();
        document.fonts.add(font);
        console.log("Noto Sans JP font loaded successfully");
      } catch (error) {
        console.error("Error loading Noto Sans JP font:", error);
      }
    };

    loadFont();
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Problems />
      <Solutions />
      <SuccessStories />
      <Pricing />
      <FAQs />
      <CTA />
      <Footer />
    </main>
  );
};

export default AIHPProduce;
