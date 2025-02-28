const Pricing = () => {
  return (
    <div className="bg-white py-12 md:py-32">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        {/* タイトルセクション */}
        <div className="flex md:flex-row items-start md:items-center gap-8 md:gap-12 mb-8 md:mb-16">
          <div className="w-full space-y-4 sm:space-y-6">
            <h2 className="text-2xl sm:text-4xl font-bold text-center font-['LINESeedJP']">
              <span className="inline">ご利用料金</span>
            </h2>
          </div>
        </div>

        {/* 価格表示セクション */}
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden border border-primary rounded-lg">
            {/* 左側:初期費用セクション */}
            <div className="flex flex-col items-center justify-center bg-primary text-white p-8 md:p-12">
              <div className="flex justify-center items-center gap-8">
                {/* 無料バッジ */}
                <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center">
                  <span className="text-primary text-2xl font-bold font-['LINESeedJP']">無料</span>
                </div>
                {/* テキスト */}
                <div className="text-center">
                  <h3 className="text-2xl md:text-4xl font-bold font-['LINESeedJP']">初期費用 0円!</h3>
                </div>
              </div>
            </div>

            {/* 右側:月額料金セクション */}
            <div className="p-8 md:p-12 flex flex-col items-center justify-center">
              <div className="text-center">
                <div className="mb-8">
                  <span className="text-3xl md:text-4xl text-primary font-bold font-['LINESeedJP']">30万円 / 月</span>
                  <span className="text-base md:text-lg">（税抜）</span>
                </div>
                <p className="text-base text-gray-600">最低契約期間は安心の1ヶ月です。</p>
                <p className="text-base text-gray-600">1ヶ月ごとの更新なので不要になればすぐに解約できます。</p>
                <div className="mt-8 text-left">
                  <p className="text-lg font-bold text-primary mb-4">サービス内容</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>自動化テーマの年間計画の作成</li>
                    <li>毎月1つのAI自動化の導入</li>
                    <li>スムーズ導入のための段取り構築</li>
                    <li>月4回までのAI活用の相談</li>
                    <li>チャットでの簡単な質問は随時回答</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* キャンペーン情報 */}
          <div className="mt-8 bg-white border-2 border-primary rounded-lg px-4 py-8">
            <div className="text-center">
              <p className="text-2xl font-bold text-primary mb-4 font-['LINESeedJP']">期間限定！2/28まで<br />お試し1ヶ月無料！</p>
              <p className="text-base font-bold text-primary mb-4">効果を感じられなかった場合は、<br />遠慮なくお断りください。</p>
              <p className="text-base text-gray-600 font-bold">「実際に受けてみないと分からない...」</p>
              <p className="text-base text-gray-600 font-bold">「AIで自動化されるイメージができない...」</p>
              <p className="text-base text-gray-600">という方もお気軽にご連絡ください。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
