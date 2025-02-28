import { Zap, HeadsetIcon, Coins } from "lucide-react";

const FeatureCard = ({
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

const Features = () => {
  const features = [
    {
      title: "即日のスピード対応",
      description: "朝のヒアリングから夕方には導入完了。今すぐ成果を出したい方にもピッタリ",
      icon: Zap,
    },
    {
      title: "現場までしっかりサポート",
      description: "設計・導入はもちろん、説明会や導入後のフォローまで含めて対応。トラブルがあっても安心",
      icon: HeadsetIcon,
    },
    {
      title: "一律49,500円の明朗会計",
      description: "特定業務の自動化が一律で完結。追加料金なしでコスパ抜群",
      icon: Coins,
    },
  ];

  return (
    <section className="py-12 md:py-32">
      <div className="container mx-auto px-4 md:px-16 max-w-[1280px]">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-12">
          自動化お届け便が選ばれる3つの理由
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
