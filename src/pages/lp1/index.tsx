import { useEffect } from "react";
import Hero from "@/components/pages/lp1/Hero";
import ContentImportance from "@/components/pages/lp1/ContentImportance";
import Benefits from "@/components/pages/lp1/Benefits";
import Problems from "@/components/pages/lp1/Problems";
import Solutions from "@/components/pages/lp1/Solutions";
import SuccessStories from "@/components/pages/lp1/SuccessStories";
import Pricing from "@/components/pages/lp1/Pricing";
import FAQs from "@/components/pages/lp1/FAQs";
import CTA from "@/components/pages/lp1/CTA";
import Footer from "@/components/common/Footer";

const LP1 = () => {
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
      <Benefits />
      <ContentImportance />
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

export default LP1;
