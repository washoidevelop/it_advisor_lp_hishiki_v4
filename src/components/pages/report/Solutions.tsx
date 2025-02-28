import { Bot, Smile } from "lucide-react";
import { useUtmNavigation } from "@/hooks/use-utm-navigation";

const Solutions = () => {
  const handleUtmNavigation = useUtmNavigation();

  return (
    <section className="py-16 md:py-32">
      <div className="container mx-auto px-4 md:px-16 max-w-[1280px]">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 font-['LINESeedJP']">
          報告書作成の悩みは、今すぐ自動化で解決！
        </h2>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* ベネフィット */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="flex flex-col items-center text-center">
              <Smile className="w-16 h-16 text-primary mb-6" />
              <h3 className="text-2xl font-bold mb-4">報告書作成から解放されて本業に集中</h3>
              <p className="text-gray-600 leading-relaxed">
                手書きやエクセル入力などの煩わしい手間から解放され、ストレスからも開放。浮いた時間をコア業務に当てることで、成果がダイレクトに向上します。
              </p>
            </div>
          </div>

          {/* 仕組み */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="flex flex-col items-center text-center">
              <Bot className="w-16 h-16 text-primary mb-6" />
              <h3 className="text-2xl font-bold mb-4">AIがあなたの代わりにデータを集計・整形</h3>
              <p className="text-gray-600 leading-relaxed">
                システムに必要な情報を入力するだけで、AIが自動的に集計・分析。体裁まで整った報告書があっという間に完成します。
              </p>
            </div>
          </div>
        </div>

        {/* 成果物サンプル */}
        <div className="bg-gray-50 p-8 rounded-2xl text-center">
          <h3 className="text-xl font-bold mb-4">実際にAIが作成した報告書サンプルを、<br />PDFでご確認いただけます</h3>
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
