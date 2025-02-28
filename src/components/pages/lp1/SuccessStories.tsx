import { TrendingUp } from "lucide-react";

const SuccessStories = () => {
  return (
    <section className="py-16 md:py-32 bg-gray-50">
      <div className="container mx-auto px-4 md:px-16 max-w-[1280px]">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 font-['LINESeedJP']">
          たった1週間のPDCAで売上が2倍にアップした事例
        </h2>

        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg max-w-3xl mx-auto">
          <div className="flex flex-col items-center gap-8">
            <div className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center">
              <TrendingUp className="w-16 h-16 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-center">BtoB向けサービス企業の成功事例</h3>
            <div className="text-lg md:text-xl leading-relaxed text-center">
              あるBtoB向けサービス企業では、AI LPを導入して5日間で5パターンをテスト。広告費を最小限に抑えながら、最も成約率が高いパターンを特定。結果、月間売上が2倍に増え、外注費や機会損失も激減。さらに継続利用で新規顧客獲得ペースが安定し、組織全体のモチベーションも上がりました。
            </div>
            <div className="grid grid-cols-2 gap-6 w-full max-w-lg mt-4">
              <div className="bg-gray-100 p-6 rounded-xl flex flex-col items-center justify-center text-center">
                <div className="text-base font-bold text-gray-600 mb-2">導入前</div>
                <div className="text-3xl font-bold">月間売上</div>
              </div>
              <div className="bg-primary/20 p-6 rounded-xl flex flex-col items-center justify-center text-center">
                <div className="text-base font-bold text-primary mb-2">導入後</div>
                <div className="text-3xl font-bold text-primary">2倍に増加</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
