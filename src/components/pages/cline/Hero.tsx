import { Check } from "lucide-react";
import { useUtmNavigation } from "@/hooks/use-utm-navigation";
import Navbar from "@/components/pages/cline/Navbar";
import AnimatedBackground from "@/components/pages/cline/AnimatedBackground";
import LaurierTitle from "@/components/common/LaurierTitle";

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
                <h1 className="mb-8 md:mb-16 mt-8">
                  <p className="text-center md:text-left text-4xl md:text-6xl mb-4 font-bold font-['LINESeedJP']">
                    <p className="mb-2 md:mb-4">Clineで最速開発</p>
                  </p>
                </h1>
                
                <div className="text-base md:text-3xl mb-12 leading-relaxed flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <Check className="text-primary w-6 h-6" strokeWidth={3.0} />
                    <span className="text-left font-bold">Cline導入サポート</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="text-primary w-6 h-6" strokeWidth={3.0} />
                    <span className="text-left font-bold">制作スピード10倍アップ</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="text-primary w-6 h-6" strokeWidth={3.0} />
                    <span className="text-left font-bold">Webページの質も大幅UP</span>
                  </div>
                </div>

                <button 
                  onClick={() => handleUtmNavigation('/cline/contact')}
                  className="w-full md:w-auto bg-primary text-white font-bold py-4 px-8 rounded-full text-lg hover:bg-primary/90 transition-colors mb-4 md:mb-8"
                >
                  無料相談を申し込む
                </button>
              </div>
            </div>
            <div className="relative order-1 lg:order-2 w-full flex flex-col justify-center my-4 md:my-0">
              <div className="aspect-video w-full overflow-hidden rounded-lg">
                <video
                  src="/images/develop_AI.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* 実績 */}
          <div className="flex flex-cols-2 gap-4 md:gap-16 justify-center text-black">
            <LaurierTitle text="1週間" subheading="スピード導入" />
            <LaurierTitle text="90%以上" subheading="満足度" />
          </div>
          <div className="mt-16 md:mt-24 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-['LINESeedJP']">Clineとは</h2>
            <div className="max-w-4xl mx-auto">
              <img 
                src="/images/cline.png" 
                alt="Clineの説明" 
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
