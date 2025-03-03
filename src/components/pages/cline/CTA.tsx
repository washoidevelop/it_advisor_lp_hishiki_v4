import { Check } from "lucide-react";
import { useUtmNavigation } from "@/hooks/use-utm-navigation";

const CTA = () => {
  const handleUtmNavigation = useUtmNavigation();
  
  return (
    <section className="relative py-12 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-16 max-w-[1280px] relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-center text-2xl md:text-4xl font-bold mb-8 font-['LINESeedJP']">
            1週間で業務を劇的に変える
            <br></br>Clineを試しませんか？
          </h2>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="flex flex-col gap-4 mb-8 w-fit mx-auto">
              <div className="flex items-center">
                <div className="w-[40px]">
                  <Check className="text-primary w-6 h-6" strokeWidth={3} />
                </div>
                <p className="text-lg font-bold text-left">無料相談で最新AI事情をお教えします</p>
              </div>
              <div className="flex items-center">
                <div className="w-[40px]">
                  <Check className="text-primary w-6 h-6" strokeWidth={3} />
                </div>
                <p className="text-lg font-bold text-left">お名前とメールだけでお申し込みOK</p>
              </div>
              <div className="flex items-center">
                <div className="w-[40px]">
                  <Check className="text-primary w-6 h-6" strokeWidth={3} />
                </div>
                <p className="text-lg font-bold text-left">新規案件の獲得に専念できる時間が増加</p>
              </div>
            </div>

            <button 
                  onClick={() => handleUtmNavigation('/contact')}
                  className="w-full md:w-auto bg-primary text-white font-bold py-4 px-8 rounded-full text-lg hover:bg-primary/90 transition-colors mb-4 md:mb-8"
                >
                  無料相談を申し込む
            </button>
            
            <p className="mt-6 text-sm text-gray-600">
              しつこい勧誘は一切ありません。<br />
              お気軽にご相談ください！<br />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
