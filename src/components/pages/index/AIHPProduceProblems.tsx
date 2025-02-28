import { useUtmNavigation } from "@/hooks/use-utm-navigation";
import TriangleGuide from "@/components/common/TriangleGuide";

const ProblemCard = ({
  title,
  description,
  imageSrc,
  imageAlt,
}: {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
      <img 
        src={imageSrc} 
        alt={imageAlt} 
        className="w-32 h-32 mb-4 object-contain"
      />
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: description }}></p>
    </div>
  );
};

const AIHPProduceProblems = () => {
  const handleUtmNavigation = useUtmNavigation();
  
  const problems = [
    {
      title: "顧客とのやりとりが多い",
      description: "案件ごとの打ち合わせ準備で1日消える<br>修正に何回もやりとりが必要",
      imageSrc: "/images/ai_meeting.png",
      imageAlt: "頭を抱えて悩むイメージ",
    },
    {
      title: "開発に時間がかかる",
      description: "細かい修正に数時間かかる<br>大きな変更があると3日以上かかる",
      imageSrc: "/images/thinking_man.svg",
      imageAlt: "大量の数字を見て焦るイメージ",
    },
    {
      title: "今の案件に手一杯で機会損失",
      description: "リソースが限られて売上を伸ばせない<br>2倍以上売り上げを伸ばしたい",
      imageSrc: "/images/outflow.svg",
      imageAlt: "飛び去る商談を追えないイメージ",
    },
  ];

  return (
    <section className="py-12 md:py-32 bg-gray-50">
      <div className="container mx-auto px-4 md:px-16 max-w-[1280px]">
        <h2 className="text-center text-2xl md:text-4xl font-bold mb-12 font-['LINESeedJP']">
          最新AIを使えていますか？
        </h2>

        {/* Problem Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {problems.map((problem, index) => (
            <ProblemCard key={index} {...problem} />
          ))}
        </div>

        {/* Triangle Guide */}
        <div className="flex justify-center mb-12">
          <TriangleGuide width={300} height={50} />
        </div>

        {/* Worst Future Card */}
        <div className="bg-white p-8 rounded-lg shadow-xl flex flex-col items-center text-center">
          <h3 className="text-3xl font-bold mb-6 text-red-500">このままだと...</h3>
          <p className="text-xl text-gray-800 mb-8 max-w-3xl">
            ライバルに顧客を奪われる<br />
            AIを使った競合に負けてしまう<br />
            経営悪化へ
          </p>
          <button 
            onClick={() => handleUtmNavigation('/contact')}
            className="w-full md:w-auto bg-primary text-white font-bold py-4 px-8 rounded-full text-lg hover:bg-primary/90 transition-colors"
          >
            無料相談を申し込む
          </button>
        </div>
      </div>
    </section>
  );
};

export default AIHPProduceProblems;
