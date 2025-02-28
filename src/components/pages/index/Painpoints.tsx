import TriangleGuide from "@/components/common/TriangleGuide";
import { useUtmNavigation } from "@/hooks/use-utm-navigation";

const NoteCard = ({
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
        className="w-16 h-16 mb-4 object-contain"
      />
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

const Painpoints = () => {
  const handleUtmNavigation = useUtmNavigation();
  const notes = [
    {
      title: "実行できる人がいない",
      description: "自動化したいことの概要だけでOK、あとは私たちにお任せください！",
      imageSrc: "/images/smiley-nervous.svg",
      imageAlt: "議事録作成アイコン",
    },
    {
      title: "社内に説明するのが難しい",
      description: "専門外を説明するのは難しくて当たり前です、お任せください！",
      imageSrc: "/images/presentation-chart.svg",
      imageAlt: "情報振り返りアイコン",
    },
    {
      title: "実績のある成功例を真似したい",
      description: "多くの会社が使っている実績あるツールを活用します、ご安心ください。",
      imageSrc: "/images/medal.svg",
      imageAlt: "更新作業アイコン",
    },
  ];

  return (
    <section className="py-12 md:py-32 bg-gray-50">
      <div className="container mx-auto px-4 md:px-16 max-w-[1280px]">
        <h2 className="text-center text-2xl md:text-4xl font-bold mb-12 font-['LINESeedJP']">
          こんなお客様におすすめです
        </h2>

        {/* Top Cards */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {notes.map((note, index) => (
            <NoteCard key={index} {...note} />
          ))}
        </div>

        {/* Triangle Guide */}
        <div className="flex justify-center mb-8">
          <TriangleGuide width={300} height={50} />
        </div>

        {/* Bottom Card */}
        <div className="bg-white p-8 rounded-lg shadow-xl border border-primary flex flex-col items-center text-center">
          <img 
            src="/images/project-completion_01.svg"
            alt="AIアイコン"
            className="w-56 h-56 mb-6 object-contain"
          />
          <h3 className="text-2xl font-bold mb-8">私たちが代わりに自動化の完了までやります！</h3>
          <button 
            onClick={() => handleUtmNavigation('/download')}
            className="w-full md:w-auto bg-primary text-white font-bold py-4 px-8 rounded-full text-lg hover:bg-primary/90 transition-colors"
          >
            今すぐ無料相談してみる
          </button>
        </div>
      </div>
    </section>
  );
};

export default Painpoints;
