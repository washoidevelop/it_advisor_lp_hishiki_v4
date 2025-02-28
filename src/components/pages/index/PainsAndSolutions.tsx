interface SolutionCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  solutionImageSrc: string;
  solutionImageAlt: string;
  solutionText: string;
  solutionDescription: string;
}

const SolutionCard = ({ 
  imageSrc, 
  imageAlt, 
  title, 
  description,
  solutionImageSrc, 
  solutionImageAlt, 
  solutionText,
  solutionDescription 
}: SolutionCardProps) => {
  return (
    <div className="bg-white p-4 md:px-4 md:py-8 rounded-xl border">
      <div className="grid grid-cols-[1fr,auto,1fr] gap-2 items-center">
        {/* 課題側 */}
        <div className="flex flex-col items-center">
          <h3 className="text-lg sm:text-2xl font-bold text-center mb-4">{title}</h3>
          <div className="w-20 h-20 md:w-24 md:h-24 mb-4">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-full object-contain"
            />
          </div>
          <p className="text-base md:text-lg text-center">{description}</p>
        </div>

        {/* Chevron */}
        <div className="flex justify-center items-center text-primary self-center">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
          </svg>
        </div>

        {/* 解決策側 */}
        <div className="flex flex-col items-center">
          <p className="text-lg sm:text-2xl font-bold text-center text-primary mb-4">{solutionText}</p>
          <div className="w-20 h-20 md:w-24 md:h-24 mb-4">
            <img
              src={solutionImageSrc}
              alt={solutionImageAlt}
              className="w-full h-full object-contain"
            />
          </div>
          <p className="text-base md:text-lg text-primary text-center">{solutionDescription}</p>
        </div>
      </div>
    </div>
  );
};

const IVRySolutionsSection = () => {
  const solutions = [
    {
      imageSrc: "/images/thinking_man.svg",
      imageAlt: "人手不足で電話対応がへん",
      title: "めんどくさい",
      description: "書類作成、Excelのコピペとか・・・",
      solutionImageSrc: "/images/ai_automation.png",
      solutionImageAlt: "AIオペレータによる電話対応",
      solutionText: "AIで自動化",
      solutionDescription: "AIで自動化したらほったらかしでOK"
    },
    {
      imageSrc: "/images/cant_select.svg",
      imageAlt: "電話の取次や問い合わせ対応で仕事が中断する",
      title: "ミスが多い",
      description: "ミスのチェックが二度手間でイヤ",
      solutionImageSrc: "/images/optimization_01.png",
      solutionImageAlt: "AIが正確に",
      solutionText: "AIが正確に",
      solutionDescription: "AIが正確に処理してくれて安心"
    },
    {
      imageSrc: "/images/concious.svg",
      imageAlt: "営業時間外や休日の電話対応ができない",
      title: "お金かかりそう",
      description: "良いやつは高いんじゃないの？",
      solutionImageSrc: "/images/reduction_01.svg",
      solutionImageAlt: "24時間365日対応",
      solutionText: "3000円 / 月",
      solutionDescription: "安くて効果が大きいAIツールを紹介"
    }
  ];

  return (
    <div className="bg-gray-50 py-12 md:py-32">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-4xl font-bold text-center mb-4 md:mb-16 font-['LINESeedJP']">
          AIで
          <span className="text-primary">ミスなくカンタン自動化</span>
        </h2>
        <div className="flex flex-col gap-8 md:gap-12">
          {solutions.map((solution, index) => (
            <SolutionCard
              key={index}
              imageSrc={solution.imageSrc}
              imageAlt={solution.imageAlt}
              title={solution.title}
              solutionImageSrc={solution.solutionImageSrc}
              description={solution.description}
              solutionImageAlt={solution.solutionImageAlt}
              solutionText={solution.solutionText}
              solutionDescription={solution.solutionDescription}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default IVRySolutionsSection;
