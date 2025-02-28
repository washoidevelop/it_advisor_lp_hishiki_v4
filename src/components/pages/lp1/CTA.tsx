import { useUtmNavigation } from "@/hooks/use-utm-navigation";
import { Zap, Mail, CheckCircle } from "lucide-react";

const CTA = () => {
  const handleUtmNavigation = useUtmNavigation();

  const benefits = [
    {
      icon: <Zap className="w-6 h-6 text-primary" />,
      text: "5分で新規LPを作成し、すぐに広告配信も可能",
    },
    {
      icon: <Mail className="w-6 h-6 text-primary" />,
      text: "お名前とメールアドレスだけでお申し込み完了",
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-primary" />,
      text: "当たりが見つかるまで何度でも無料テストOK",
    },
  ];

  return (
    <section className="py-16 md:py-32">
      <div className="container mx-auto px-4 md:px-16 max-w-[1280px]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 font-['LINESeedJP']">
            まずは超高速LP制作を、<br className="md:hidden" />
            あなた自身で体感しませんか？
          </h2>

          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg mb-8">
            <div className="space-y-6 mb-8 w-fit mx-auto">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center"
                >
                  <div className="w-[40px]">
                    {benefit.icon}
                  </div>
                  <span className="text-lg font-bold">{benefit.text}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => handleUtmNavigation('/download')}
              className="w-full md:w-auto bg-primary text-white font-bold py-4 px-8 rounded-full text-lg hover:bg-primary/90 transition-colors"
            >
              資料をダウンロードする
            </button>
          </div>

          <p className="text-gray-600 leading-relaxed">
            資料は即日メールでお送りし、その後のしつこい営業は一切いたしません。<br />
            まずは無料資料を見て、実際にどれほど早くPDCAを回せるかをご確認ください。
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
