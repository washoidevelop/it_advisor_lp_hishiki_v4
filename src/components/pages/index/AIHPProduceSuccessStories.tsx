import { useUtmNavigation } from "@/hooks/use-utm-navigation";

const AIHPProduceSuccessStories = () => {
  const handleUtmNavigation = useUtmNavigation();
  return (
    <section className="py-12 md:py-32 bg-gray-50">
      <div className="container mx-auto px-4 md:px-16 max-w-[1280px]">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-8 font-['LINESeedJP']">
          納品まで6か月かかっていた案件がAI導入で2週間に！
        </h2>
        
        <div className="bg-white p-6 rounded-lg shadow-md mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                過去の事例では
                <br />
                ・顧客ヒアリングに10時間以上
                <br />
                ・モック作成に20時間
                <br />
                ・完成までトータル半年以上
                <br />
                <br />
                という状況が常態化していました。
                <br />
                <br />
                AI導入後
                <br />
                ・完成まで2週間
                <br />
                ・工数は1/3以下
                <br />
                ・顧客とのやりとりも減少
                <br /><br />
                顧客満足度も上がり売上向上につながりました。
              </p>
              
              <div className="flex justify-center md:justify-center mb-6">
                <div className="bg-primary/10 text-primary font-bold py-2 px-4 rounded-full">
                  納品：6か月 → 2週間
                </div>
              </div>
            </div>
            
            <div className="aspect-video relative">
              <video
                src="/images/develop_AI.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mt-8">
          <button 
            onClick={() => handleUtmNavigation('/contact')}
            className="bg-primary text-white font-bold py-4 px-8 rounded-full text-lg hover:bg-primary/90 transition-colors"
          >
            無料相談を申し込む
          </button>
        </div>
      </div>
    </section>
  );
};

export default AIHPProduceSuccessStories;
