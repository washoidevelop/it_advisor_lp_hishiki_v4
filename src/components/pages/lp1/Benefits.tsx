import { ArrowRight } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      title: "① LP制作が無料、3日で届く",
      before: {
        title: "中身がダメなのに、デザインに何十万円もかけている。",
        description: "1つのLPに数十万円のコストと数ヶ月の時間がかかり、修正の度に追加で時間と費用が発生。市場の変化に対応できず機会損失も。",
      },
      after: {
        title: "LPは中身が9割！制作費無料のテスト専門LPで、売れる中身を最速で見つけられる。",
        description: "AIの支援で素早く作成でき、修正も簡単。必要な時に必要なだけ作成・修正が可能で、予算と時間を効率的に活用できます。",
      },
    },
    {
      title: "② 売れるLPが見つかる",
      before: {
        title: "1つのLPを試すだけで精一杯。",
        description: "デザインは綺麗でも、ターゲットのニーズや訴求ポイントがズレており、投資に見合う成果が出ない状況が続く。",
      },
      after: {
        title: "LPは数を試してナンボ！テスト専門LPなら、複数パターンのLPを同時テストで売れるLPを見つけられる。",
        description: "AIによる市場分析とA/Bテストで、ターゲットに響く訴求ポイントを見つけ出し、投資効果の高いLPを実現します。",
      },
    },
  ];

  return (
    <section className="py-12 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-16 max-w-[1280px]">
        <h2 className="text-center text-2xl md:text-4xl font-bold mb-8 md:mb-16 font-['LINESeedJP']">
          無料で売れるLPが見つかる！
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {benefits.map((benefit, index) => (
            <div key={index}>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-primary p-4">
                  <h3 className="text-lg md:text-2xl font-bold text-white text-center">
                    {benefit.title}
                  </h3>
                </div>
                
                {/* 3カラム: Before、矢印、After */}
                <div className="grid grid-cols-1 justify-center gap-1 md:gap-4 p-6">
                  {/* Before */}
                  <div className="bg-gray-100 p-4 md:p-6 rounded-lg text-center">
                    <div className="inline-block bg-gray-200 px-3 py-1 rounded-full mb-3">
                      <span className="text-gray-700">Before</span>
                    </div>
                    <p className="text-gray-600 font-bold">
                      {benefit.before.title}
                    </p>
                  </div>

                  {/* 矢印 */}
                  <div className="flex items-center justify-center py-2">
                    <div className="bg-primary/10 rounded-full p-2">
                      <ArrowRight className="w-5 h-5 text-primary transform rotate-90" />
                    </div>
                  </div>

                  {/* After */}
                  <div className="bg-primary/5 p-4 md:p-6 rounded-lg border-2 border-primary text-center">
                    <div className="inline-block bg-primary/10 px-3 py-1 rounded-full mb-3">
                      <span className="font-bold text-primary">After</span>
                    </div>
                    {index === 0 ? (
                      <div className="flex justify-center gap-4 mb-4">
                        <img src="/images/hero_merit_image1.png" alt="メリット1" className="w-[100px] h-[100px] md:w-[150px] md:h-[150px]" />
                        <img src="/images/hero_merit_image2.png" alt="メリット2" className="w-[100px] h-[100px] md:w-[150px] md:h-[150px]" />
                      </div>
                    ) : index === 1 && (
                      <div className="flex justify-center mb-4">
                        <img src="/images/benefit.png" alt="テストLP" className="h-[100px] md:h-[150px] rounded-lg" />
                      </div>
                    )}
                    <p className="text-gray-700 font-bold">
                      {benefit.after.title}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
