import { Check } from "lucide-react";
import { useUtmNavigation } from "@/hooks/use-utm-navigation";

const Contact = () => {
  const handleUtmNavigation = useUtmNavigation();
  return (
    <section className="relative py-12 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-16 max-w-[1280px] relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-center text-2xl md:text-4xl font-bold mb-8 font-['LINESeedJP']">
            まずは自動化の無料相談をぜひご利用ください
          </h2>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="flex flex-col gap-4 mb-8 w-fit mx-auto">
              <div className="flex items-center">
                <div className="w-[40px]">
                  <Check className="text-primary w-6 h-6" strokeWidth={3} />
                </div>
                <p className="text-lg font-bold text-left">相談だけなら無料です！</p>
              </div>
              <div className="flex items-center">
                <div className="w-[40px]">
                  <Check className="text-primary w-6 h-6" strokeWidth={3} />
                </div>
                <p className="text-lg font-bold text-left">自動化は即日で終わります！</p>
              </div>
              <div className="flex items-center">
                <div className="w-[40px]">
                  <Check className="text-primary w-6 h-6" strokeWidth={3} />
                </div>
                <p className="text-lg font-bold text-left">導入後のお困りごとも無料サポート！</p>
              </div>
              <div className="flex items-center">
                <div className="w-[40px]">
                  <Check className="text-primary w-6 h-6" strokeWidth={3} />
                </div>
                <p className="text-lg font-bold text-left">効果がなかった場合は返金保証！</p>
              </div>
            </div>

            <button 
              onClick={() => handleUtmNavigation('/download')}
              className="w-full md:w-auto bg-primary text-white font-bold py-4 px-8 rounded-full text-lg hover:bg-primary/90 transition-colors"
            >
              今すぐ無料相談してみる
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
