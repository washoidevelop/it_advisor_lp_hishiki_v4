import { Clock, Users, Settings } from "lucide-react";

const ProblemCard = ({
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

const Problems = () => {
  const problems = [
    {
      title: "時間のお悩み",
      description: "毎日のルーティン作業に追われて、本来やるべき業務の時間がない",
      icon: Clock,
    },
    {
      title: "人手不足のお悩み",
      description: "やり方は分かっていても、任せられる人が足りない。業務が増えて回らない",
      icon: Users,
    },
    {
      title: "導入負担のお悩み",
      description: "自動化は魅力的だけど、調べるのも設定もめんどくさくて先送りにしている",
      icon: Settings,
    },
  ];

  return (
    <section className="py-12 md:py-32 bg-gray-50">
      <div className="container mx-auto px-4 md:px-16 max-w-[1280px]">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-12">
          こんなお悩み、抱えていませんか?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <ProblemCard key={index} {...problem} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problems;
