import Navbar from "@/components/pages/index/Navbar";
import { Check } from "lucide-react";
import AnimatedBackground from "@/components/pages/index/AnimatedBackground";
import LaurierTitle from "@/components/common/LaurierTitle";
import { useUtmNavigation } from "@/hooks/use-utm-navigation";

const Hero = () => {
  const handleUtmNavigation = useUtmNavigation();
  return (
    <div className="relative overflow-hidden">
      <Navbar />
      <div className="overflow-hidden pt-4 pb-12 md:py-32">
        <div className="container mx-auto px-4 md:px-16 max-w-[1280px]">
          <div className="grid lg:grid-cols-2 gap-6 items-center h-full">
            <div className="max-w-2xl animate-fade-up order-2 lg:order-1 flex flex-col items-center lg:items-start">
              <div>
                <h1 className="mb-8 md:mb-16">
                  <p className="text-center md:text-left text-lg md:text-2xl text-gray-600 font-bold mb-4 md:mb-8">
                    毎日忙しい中小企業へお届けしたい
                  </p>
                  <p className="text-center md:text-left text-4xl md:text-6xl mb-4 font-bold font-['LINESeedJP']">
                    <p className="mb-2 md:mb-4">大事だけど大変な</p>
                    <p>仕事を即日自動化</p>
                  </p>
                </h1>
                
                <div className="text-base md:text-xl mb-12 leading-relaxed flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <Check className="text-primary w-6 h-6" strokeWidth={3.0} />
                    <span className="text-left font-bold">一律税込49,500円でムダなし明朗会計</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="text-primary w-6 h-6" strokeWidth={3.0} />
                    <span className="text-left font-bold">たった1日で自動化が完了します！</span>
                  </div>
                </div>

                <button 
                  onClick={() => handleUtmNavigation('/download')}
                  className="w-full md:w-auto bg-primary text-white font-bold py-4 px-8 rounded-full text-lg hover:bg-primary/90 transition-colors mb-4 md:mb-8"
                >
                  今すぐ無料相談してみる
                </button>
              </div>
            </div>
            
            <div className="animate-fade-up relative order-1 lg:order-2 w-full h-[300px] md:h-[500px] flex flex-col justify-center mb-4 md:mb-0">
              <img
                src="/images/automation_express_hero.png"
                alt="自動化イメージ"
                className="w-full h-auto max-w-[150px] md:max-w-[250px] mx-auto relative z-10 mt-4 md:mb-8"
              />
              <AnimatedBackground />
            </div>
          </div>

          {/* 実績 */}
          <div className="flex flex-cols-2 gap-4 md:gap-16 justify-center">
            <LaurierTitle text="99%以上" subheading="「頼んで良かった」" />
            <LaurierTitle text="返金保証" subheading="リスクゼロで安心" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
