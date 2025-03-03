import { FileText, Zap, BookOpen } from "lucide-react";
import { useUtmNavigation } from "@/hooks/use-utm-navigation";

const SolutionCard = ({
  title,
  description,
  icon: Icon,
}: {
  title: string;
  description: string;
  icon: any;
}) => {
  return (
    <div className="bg-white py-12 px-6 rounded-lg shadow-md">
      <div className="flex items-center gap-4 mb-4">
        <div className="bg-primary/10 p-3 rounded-lg">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <h3 className="text-xl font-bold" dangerouslySetInnerHTML={{ __html: title }}></h3>
      </div>
      <p className="text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: description }}></p>
    </div>
  );
};

const Solutions = () => {
  const handleUtmNavigation = useUtmNavigation();
  
  const solutions = [
    {
      title: "手戻りゼロ<br>開発完了までスピードUP",
      description: "・要件定義もAIで<br>・AIでモック作成<br>・ミーティング中に修正<br>",
      icon: FileText,
    },
    {
      title: "AIが自動で開発<br>一発で対象を修正",
      description: "・最新AIに対応<br>・導入から運用まで手厚く<br>・開発スピード10倍に",
      icon: Zap,
    },
    {
      title: "AIでリソースを確保<br>売上2倍以上へ",
      description: "・打ち合わせ1/3以下<br>・開発スピード10倍以上<br>・全体の工数を1/2以下に大幅削減",
      icon: BookOpen,
    },
  ];

  return (
    <section className="py-12 md:py-32">
      <div className="container mx-auto px-4 md:px-16 max-w-[1280px]">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-4 font-['LINESeedJP']">
          最短1週間、Cline導入で全て解決！
        </h2>
        <div className="grid md:grid-cols-3 gap-8 mt-12 py-12">
          {solutions.map((solution, index) => (
            <SolutionCard key={index} {...solution} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
        </div>
      </div>
    </section>
  );
};

export default Solutions;
