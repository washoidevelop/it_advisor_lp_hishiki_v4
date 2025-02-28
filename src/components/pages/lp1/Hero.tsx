import { Check } from "lucide-react";
import LaurierTitle from "@/components/common/LaurierTitle";
import { useUtmNavigation } from "@/hooks/use-utm-navigation";
import Navbar from "@/components/pages/lp1/Navbar";
import Hyperspeed from "@/components/Hyperspeed/Hyperspeed";
import { hyperspeedPresets } from "@/components/Hyperspeed/HyperSpeedPresets";
import { useEffect, useState } from "react";

const Hero = () => {
  const handleUtmNavigation = useUtmNavigation();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);
  return (
    <div className="relative overflow-hidden bg-[#080808]">
      <div className="absolute inset-0 z-0 opacity-50">
        <Hyperspeed effectOptions={hyperspeedPresets.four} />
      </div>
      <Navbar />
      <div className="relative z-10 overflow-hidden py-12 md:py-32">
        <div className="container mx-auto px-4 md:px-16 max-w-[1280px]">
          <div className="flex justify-center h-full">
            <div className="max-w-3xl animate-fade-up flex flex-col items-center">
              <div className="flex flex-col items-center">
                <div>
                  <h1 className="mb-8 md:mb-16">
                    <p className="text-center text-lg md:text-2xl text-white/80 font-bold mb-4 md:mb-8">
                      勝ちパターンを確定！テスト専門LP制作
                    </p>
                    <p className="text-center text-3xl md:text-6xl font-bold font-['LINESeedJP'] text-white">
                      集客の勝ちパターンを<br />
                      <span className="mt-2 md:mt-4 inline-block">テスト専門LPで最速確定</span>
                    </p>
                  </h1>
                </div>

                <div className="flex gap-4 md:gap-16 mb-12">
                  <div className="w-[150px] md:w-[200px]">
                    <img 
                      src="/images/hero_merit_image1.png" 
                      alt="Merit Image 1"
                      className="w-full"
                    />
                  </div>
                  <div className="w-[150px] md:w-[200px]">
                    <img 
                      src="/images/hero_merit_image2.png" 
                      alt="Merit Image 2"
                      className="w-full"
                    />
                  </div>
                </div>
                
                <div className="text-base md:text-xl mb-12 leading-relaxed flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <Check className="text-primary w-6 h-6" strokeWidth={3.0} />
                    <span className="text-left font-bold text-white">制作費無料、3日納品でアイデアをすぐLPに</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="text-primary w-6 h-6" strokeWidth={3.0} />
                    <span className="text-left font-bold text-white">複数LPの同時テストで勝ちパターンを発見</span>
                  </div>
                </div>

                <button 
                  onClick={() => handleUtmNavigation('/download')}
                  className="w-full md:w-auto bg-primary text-white font-bold py-4 px-8 rounded-full text-lg hover:bg-primary/90 transition-colors mb-4 md:mb-8"
                >
                  無料でLPを制作する
                </button>
              </div>
            </div>
          </div>

          {/* 実績 */}
          <div className="flex flex-cols-2 gap-4 md:gap-16 justify-center">
            <LaurierTitle text="3日以内" subheading="スピード納品" />
            <LaurierTitle text="98%以上" subheading="圧倒的リピート率" />
          </div>

          {/* リード文 */}
          <div className="mt-4 text-center">
            <p className="text-white/80 text-lg md:text-xl font-bold">
              数十万かかるLP制作費、数週間の納期、<br className="md:hidden" />
              何度もやりとりが必要、そんな常識を覆す
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
