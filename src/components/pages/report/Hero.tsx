import { Check } from "lucide-react";
import AnimatedBackground from "@/components/pages/index/AnimatedBackground";
import LaurierTitle from "@/components/common/LaurierTitle";
import { useUtmNavigation } from "@/hooks/use-utm-navigation";
import Navbar from "@/components/pages/index/Navbar";

const Hero = () => {
  const handleUtmNavigation = useUtmNavigation();
  return (
    <div className="relative overflow-hidden">
      <Navbar />
      <div className="relative z-10 overflow-hidden pt-4 pb-12 md:py-32">
        <div className="container mx-auto px-4 md:px-16 max-w-[1280px]">
          <div className="grid lg:grid-cols-2 gap-6 items-center h-full">
            <div className="max-w-2xl animate-fade-up order-2 lg:order-1 flex flex-col items-center lg:items-start">
              <div>
                <h1 className="mb-8 md:mb-16">
                  <p className="text-center md:text-left text-4xl md:text-6xl mb-4 font-bold font-['LINESeedJP']">
                    報告書づくりを自動化して<br />毎日1時間削減
                  </p>
                  <p className="text-center md:text-left text-lg md:text-2xl text-gray-600 font-bold">
                    AIと簡単ツールで、報告書づくりを劇的にスリム化
                  </p>
                </h1>
                
                <div className="text-base md:text-xl mb-12 leading-relaxed flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <Check className="text-primary w-6 h-6" strokeWidth={3.0} />
                    <span className="text-left font-bold">必要な項目を選ぶだけで自動作成</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="text-primary w-6 h-6" strokeWidth={3.0} />
                    <span className="text-left font-bold">月次・週次レポートにも柔軟対応</span>
                  </div>
                </div>

                <button 
                  onClick={() => handleUtmNavigation('/download')}
                  className="w-full md:w-auto bg-primary text-white font-bold py-4 px-8 rounded-full text-lg hover:bg-primary/90 transition-colors mb-4 md:mb-8"
                >
                  資料をダウンロードする
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
            <LaurierTitle text="1ヶ月で報告作業が" subheading="80%短縮" />
            <LaurierTitle text="導入企業の満足度" subheading="98%以上" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
