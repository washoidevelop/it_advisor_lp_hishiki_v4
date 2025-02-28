import { useUtmNavigation } from "@/hooks/use-utm-navigation";
import { FileText, Mail, Clock } from "lucide-react";

const CTA = () => {
  const handleUtmNavigation = useUtmNavigation();

  const benefits = [
    {
      icon: <FileText className="w-6 h-6 text-primary" />,
      text: "たった30秒で申し込み完了、すぐに役立つ導入資料を無料DL",
    },
    {
      icon: <Mail className="w-6 h-6 text-primary" />,
      text: "お名前とメールアドレスだけの簡単ステップ",
    },
    {
      icon: <Clock className="w-6 h-6 text-primary" />,
      text: "資料を見るだけで、どれだけ時短できるかイメージできます",
    },
  ];

  return (
    <section className="py-16 md:py-32">
      <div className="container mx-auto px-4 md:px-16 max-w-[1280px]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 font-['LINESeedJP']">
            明日から「報告書づくりの手間ゼロ」を<br className="md:hidden" />
            体感しませんか？
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
            お問い合わせ後、資料は即日メールでお送りします。<br />
            その後のしつこい勧誘は一切ありません。まずは資料をご覧いただき、必要であればご連絡ください。
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
