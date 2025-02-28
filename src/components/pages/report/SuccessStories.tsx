import { TrendingUp } from "lucide-react";

const SuccessStories = () => {
  return (
    <section className="py-16 md:py-32 bg-gray-50">
      <div className="container mx-auto px-4 md:px-16 max-w-[1280px]">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 font-['LINESeedJP']">
          1週間で毎日の報告作業を2時間削減した事例
        </h2>

        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg max-w-3xl mx-auto">
          <div className="flex flex-col items-center gap-8">
            <div className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center">
              <TrendingUp className="w-16 h-16 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-center">A社の成功事例</h3>
            <div className="text-lg md:text-xl leading-relaxed text-center">
              A社では日次の報告書作成だけで1日に2時間以上かかっていました。導入初日からAIがデータを自動集計し、煩雑だった書式設定もボタン一つで完了。結果として会議前の準備が大幅に短縮され、意思決定のスピードもアップ。さらに社員の残業時間も減り、社内の満足度が格段に向上しました。
            </div>
            <div className="grid grid-cols-2 gap-6 w-full max-w-lg mt-4">
              <div className="bg-gray-100 p-6 rounded-xl flex flex-col items-center justify-center text-center">
                <div className="text-base font-bold text-gray-600 mb-2">導入前</div>
                <div className="text-3xl font-bold">2時間以上</div>
              </div>
              <div className="bg-primary/20 p-6 rounded-xl flex flex-col items-center justify-center text-center">
                <div className="text-base font-bold text-primary mb-2">導入後</div>
                <div className="text-3xl font-bold text-primary">30分以下</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
