import { Card, CardContent } from "@/components/ui/card";
import CircleBackground from "@/components/common/CircleBackgroundAlt1";

interface FeatureCardProps {
  number: number;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imageLeft?: boolean;
  isFirst?: boolean;
  isLast?: boolean;
}

const FeatureCard = ({ 
  number, 
  title, 
  description, 
  imageSrc, 
  imageAlt,
  imageLeft = false,
  isFirst = false,
  isLast = false
}: FeatureCardProps) => {
  const roundedClass = isFirst 
    ? "rounded-[10px_10px_0_0]" 
    : isLast 
    ? "rounded-[0_0_10px_10px]" 
    : "rounded-none border-y-0";

  const ImageComponent = (
    <div className="w-1/2 flex justify-center order-last md:order-none">
      <img 
        src={imageSrc} 
        alt={imageAlt} 
        className={`w-[60px] md:w-[100px] ${imageLeft ? "md:order-first" : ""}`}
      />
    </div>
  );

  const ContentComponent = (
    <div className="md:w-1/2 order-first md:order-none">
      <p className="text-2xl md:text-3xl text-primary font-bold mb-4 text-center md:text-left">理由{number}　{number === 1 ? "待つだけでOK" : number === 2 ? "即日で終わる" : number === 3 ? "返金保証がある" : ""}</p>
      <p className="text-base md:text-base text-center md:text-left text-gray-500">{description}</p>
    </div>
  );

  return (
    <Card className={roundedClass}>
      <CardContent className="p-6 md:p-[56px]">
        <div className="inline-flex flex-col md:flex-row items-center gap-6 w-full">
          {imageLeft ? (
            <>
              {ImageComponent}
              {ContentComponent}
            </>
          ) : (
            <>
              {ContentComponent}
              {ImageComponent}
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

const WhyChooseUs = () => {
  const features = [
    {
      number: 1,
      title: "実績ある独自の「成功の型」があるから。",
      description: "お客様が自動化に取り組むことはなく、私たちが完了させるのを待つだけでいいので、負担は最小限です。",
      imageSrc: "/images/armchair.svg",
      imageAlt: "実績と信頼のアイコン",
      imageLeft: true
    },
    {
      number: 2,
      title: "一流企業出身の専門家が、現場の負担なくAI導入を実現するから。",
      description: "何ヶ月もかかる取り組みは、現場の負担が大きすぎます。即日自動化して、翌日から効果を実感できます。",
      imageSrc: "/images/lightning.svg",
      imageAlt: "スムーズな導入アイコン"
    },
    {
      number: 3,
      title: "他社にはない業界初の毎月改善プランだから。",
      description: "「やってみたけど全然効果がなかった...」という場合でもご安心ください。実施から1週間以内に効果がなかった場合は、全額返金いたします。",
      imageSrc: "/images/hand-heart.svg",
      imageAlt: "AI活用の具体例アイコン",
      imageLeft: true
    }
  ];

  return (
    <div className="bg-white py-12 sm:py-16 md:py-32 relative">
      <CircleBackground />
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="flex md:flex-row items-start md:items-center gap-8 md:gap-12 mb-8 md:mb-16">
          <div className="w-full space-y-4 sm:space-y-6">
            <h2 className="text-2xl sm:text-4xl font-bold text-center font-['LINESeedJP']">
              <p className="md:mb-2">自動化お届け便が</p>
              <p>選ばれる<span className="text-primary">3つの理由</span></p>
            </h2>
          </div>
        </div>
        <div className="flex flex-col w-full max-w-[1000px] mx-auto">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              {...feature}
              isFirst={index === 0}
              isLast={index === features.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
