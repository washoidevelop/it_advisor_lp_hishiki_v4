import { FileText, Zap, BookOpen } from "lucide-react";

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
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center gap-4 mb-4">
        <div className="bg-primary/10 p-3 rounded-lg">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

const Solutions = () => {
  const solutions = [
    {
      title: "面倒な作業を丸ごとお任せ",
      description: "ヒアリングから導入後のサポートまでフル対応。あなたは最小限の確認だけでOK",
      icon: FileText,
    },
    {
      title: "即日導入でスピード実感",
      description: "一律49,500円で特定業務を自動化。今日依頼すれば、明日から時短効果を得られます",
      icon: Zap,
    },
    {
      title: "ノウハウは無料公開、実施はお任せ",
      description: "どのツールを使うか、どう使うかはすべて無料で公開。実際の導入や設定は丸投げOK",
      icon: BookOpen,
    },
  ];

  return (
    <section className="py-12 md:py-32">
      <div className="container mx-auto px-4 md:px-16 max-w-[1280px]">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-4">
          「自動化お届け便」で一気に解決!
        </h2>
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {solutions.map((solution, index) => (
            <SolutionCard key={index} {...solution} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
