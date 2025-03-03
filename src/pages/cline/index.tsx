import { useEffect } from "react";
import Hero from "@/components/pages/cline/Hero";
import Problems from "@/components/pages/cline/Problems";
import Solutions from "@/components/pages/cline/Solutions";
import SuccessStories from "@/components/pages/cline/SuccessStories";
import Pricing from "@/components/pages/cline/Pricing";
import FAQs from "@/components/pages/cline/FAQs";
import CTA from "@/components/pages/cline/CTA";
import Footer from "@/components/common/Footer";

const Cline = () => {
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

export default Cline;
