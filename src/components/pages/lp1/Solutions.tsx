import { Zap, Bot } from "lucide-react";
import { useUtmNavigation } from "@/hooks/use-utm-navigation";

const Solutions = () => {
  const handleUtmNavigation = useUtmNavigation();

  return (
    <section className="py-16 md:py-32">
      <div className="container mx-auto px-4 md:px-16 max-w-[1280px]">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 font-['LINESeedJP']">
          AI活用の超高速PDCAで今すぐ問題を解決！
        </h2>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* ベネフィット */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="flex flex-col items-center text-center">
              <Zap className="w-16 h-16 text-primary mb-6" />
              <h3 className="text-2xl font-bold mb-4">5分でLPをテストできて、すぐに結果がわかる</h3>
              <p className="text-gray-600 leading-relaxed">
                従来の外注だとLPを作るだけで数週間〜数ヶ月。しかしAIならたった5分でLPを用意し、すぐに広告配信やテストが可能。ターゲットに響く訴求を最速で見つけられます。
              </p>
            </div>
          </div>

          {/* 仕組み */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="flex flex-col items-center text-center">
              <Bot className="w-16 h-16 text-primary mb-6" />
              <h3 className="text-2xl font-bold mb-4">テキスト入力だけでLPが完成する秘密</h3>
              <p className="text-gray-600 leading-relaxed">
                あなたの商材やターゲットを簡単に入力するだけで、独自AIがコピーとデザインを自動生成。デザイン修正もまた5分でOK。試行錯誤の回転数が1000倍以上に高まり、当たりを掴むのが驚くほど速くなります。
              </p>
            </div>
          </div>
        </div>

        {/* 成果物サンプル */}
        <div className="bg-gray-50 p-8 rounded-2xl text-center">
          <h3 className="text-xl font-bold mb-4">実際にAIが生成したLPのサンプルを、<br />PDFでご確認いただけます</h3>
          <button
            onClick={() => handleUtmNavigation('/download')}
            className="bg-primary text-white font-bold py-3 px-6 rounded-full text-lg hover:bg-primary/90 transition-colors"
          >
            サンプルをダウンロード
          </button>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
