import { Clock, AlertTriangle, Coins } from "lucide-react";
import TriangleGuide from "@/components/common/TriangleGuide";
import { useUtmNavigation } from "@/hooks/use-utm-navigation";

const Problems = () => {
  const handleUtmNavigation = useUtmNavigation();
  const problems = [
    {
      icon: <Clock className="w-12 h-12 text-primary" />,
      title: "膨大な時間を浪費",
      description: "週に5時間以上、報告書づくりに取られていませんか？ その時間こそ本来の業務に割くべきかもしれません",
    },
    {
      icon: <AlertTriangle className="w-12 h-12 text-primary" />,
      title: "ミスが増えて精度が落ちる",
      description: "作業量が多いほどヒューマンエラーが増え、修正や確認にさらに時間と手間がかかります",
    },
    {
      icon: <Coins className="w-12 h-12 text-primary" />,
      title: "残業コストがどんどん膨らむ",
      description: "報告書作成のために1日1時間残業すると、月に数万円の余分な人件費が発生します",
    },
  ];

  return (
    <section className="py-12 md:py-32 bg-gray-50">
      <div className="container mx-auto px-4 md:px-16 max-w-[1280px]">
        <h2 className="text-center text-2xl md:text-4xl font-bold mb-12 font-['LINESeedJP']">
          手作業の報告書、こんなに損してます
        </h2>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center"
            >
              <div className="mb-4">{problem.icon}</div>
              <h3 className="text-xl font-bold mb-3">{problem.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        {/* Triangle Guide */}
        <div className="flex justify-center mb-8">
          <TriangleGuide width={300} height={50} />
        </div>

        <div className="bg-gradient-to-b from-white to-red-50 p-12 rounded-2xl shadow-lg">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
              <div className="w-32 h-32 bg-red-50 rounded-full flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="w-16 h-16 text-red-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 leading-tight">
                  放置すると、こんなリスクが待ち受けています
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  担当者が急に退職した時、誰も報告書を作成できない事態に陥り、取引先への提出が大幅に遅延。その結果、クレーム対応に追われ、長年かけて築いた社内外の信頼関係が一気に崩れてしまう可能性があります。
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <button 
                onClick={() => handleUtmNavigation('/download')}
                className="bg-primary text-white font-bold py-4 px-12 rounded-full text-lg hover:bg-primary/90 transition-colors shadow-lg"
              >
                リスク対策資料を確認する
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problems;
