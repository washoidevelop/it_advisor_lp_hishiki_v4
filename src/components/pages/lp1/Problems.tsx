import { Coins } from "lucide-react";
import TriangleGuide from "@/components/common/TriangleGuide";
import { useUtmNavigation } from "@/hooks/use-utm-navigation";
import { useIsMobile } from "@/hooks/use-mobile";

const Problems = () => {
  const handleUtmNavigation = useUtmNavigation();
  const isMobile = useIsMobile();

  return (
    <section className="py-12 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-16 max-w-[1280px]">
        <h2 className="text-center text-2xl md:text-4xl font-bold mb-12 font-['LINESeedJP']">
          売れる中身がないとこんなに損をします
        </h2>

        <div className="flex justify-center mb-8">
          <img 
            src={isMobile ? "/images/loss_by_nonsense_content_mobile.png" : "/images/loss_by_nonsense_content.png"}
            alt="売れる中身がないことによる損失" 
            className="w-full max-w-4xl rounded-lg"
          />
        </div>

        
      </div>
    </section>
  );
};

export default Problems;
