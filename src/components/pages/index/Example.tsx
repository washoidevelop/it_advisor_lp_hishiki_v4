const Example = () => {
  const examples = [
    {
      title: "2時間の報告書が15分で完成",
      description: "過去の良い例を学習したAIが\nキレイな報告書を書いてくれる",
      icon: "/images/file-doc.svg"
    },
    {
      title: "議事録が一瞬で終わる",
      description: "会議の録画データをAIが文字起こし\n重要なポイントをまとめて議事録を自動作成",
      icon: "/images/book-open-text.svg"
    },
    {
      title: "SNSの投稿を簡単に量産",
      description: "商品の良さを引き出すアイデアを出して\n1ヶ月分の投稿を30分で作ってくれる",
      icon: "/images/megaphone.svg"
    },
    {
      title: "イマイチな資料をスッキリ",
      description: "「もっと分かりやすく!」と頼むだけで\n見やすい図や魅力的なデザインに変身",
      icon: "/images/image.svg"
    },
    {
      title: "商品レビューを瞬時に分析",
      description: "ECサイトの数千件のレビューをAIが分析して\n改善すべき商品の特徴や顧客の不満点を抽出",
      icon: "/images/chart-line.svg"
    },
    {
      title: "面倒なExcel作業が5分で終わる",
      description: "請求書作りや数字の集計を\nAIが正確に手早く片付けてくれる",
      icon: "/images/microsoft-excel-logo.svg"
    }
  ];

  return (
    <div className="bg-white py-12 md:py-32">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-4xl font-bold text-center mb-12 md:mb-16 font-['LINESeedJP']">
          <span className="text-primary">AI自動化</span>の具体例
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {examples.map((example, index) => (
            <div key={index} className="bg-[#F5F9F7] rounded-lg p-8 text-center">
              <h3 className="text-lg font-bold mb-3">{example.title}</h3>
              <p className="text-sm text-gray-600 whitespace-pre-line mb-6">
                {example.description}
              </p>
              <div className="flex justify-center">
                <img 
                  src={example.icon} 
                  alt={example.title}
                  className="w-12 h-12 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Example;
