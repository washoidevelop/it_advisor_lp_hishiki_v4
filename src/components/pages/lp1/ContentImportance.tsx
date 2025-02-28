const ContentImportance = () => {
  const contentItems = [
    "コンセプト",
    "メインコピー",
    "サブコピー",
    "画像",
    "カラー",
    "価値訴求",
    "オファー内容",
    "情報量",
    "料金表示",
    "保証内容"
  ];

  return (
    <section className="py-12 md:py-32 bg-primary/10">
      <div className="container mx-auto px-4 md:px-16 max-w-[1280px]">
        <h2 className="text-center text-2xl md:text-4xl font-bold mb-8 md:mb-16 font-['LINESeedJP']">
          LPは中身が9割！
        </h2>

        {/* LP = 中身 + デザインの定式化を視覚的に表現 */}
        <div className="flex justify-center mb-12">
          <img src="/images/usp.png" alt="LPは中身が9割" className="w-full max-w-[600px] rounded-xl" />
        </div>

        {/* 説明文 */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-lg md:text-xl mb-6">
            LPの成功を決めるのは「中身」です。よくある間違いは、売れない中身に対してデザインを作り込むことです。
          </p>
          <p className="text-lg md:text-xl font-bold text-primary">
            私たちのサービスは、売れる「中身」を見つけることに特化しています。
          </p>
        </div>

        {/* 中身の項目リスト */}
        <div className="bg-primary/20 p-8 rounded-xl">
          <h3 className="text-xl md:text-2xl font-bold text-center mb-8">
            最適化すべき「中身」の要素
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {contentItems.map((item, index) => (
              <div key={index} className="bg-white p-4 rounded-lg text-center shadow-sm">
                <span className="font-bold">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentImportance;
