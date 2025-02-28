const AIHPProducePricing = () => {
  return (
    <div className="bg-white py-12 md:py-32">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        {/* タイトルセクション */}
        <div className="flex md:flex-row items-start md:items-center gap-8 md:gap-12 mb-8 md:mb-16">
          <div className="w-full space-y-4 sm:space-y-6">
            <h2 className="text-2xl sm:text-4xl font-bold text-center font-['LINESeedJP']">
              <span className="inline">気になる料金プランはこちら</span>
            </h2>
          </div>
        </div>

        {/* 価格表示セクション */}
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden border border-primary rounded-lg">
            {/* 左側:初期費用セクション */}
            <div className="flex flex-col items-center justify-center bg-primary text-white p-8 md:p-12">
              <div className="flex justify-center items-center gap-8 my-12">
                {/* 無料バッジ */}
                <div className="w-32 h-32 rounded-full bg-white flex items-center justify-center">
                  <span className="text-primary text-2xl font-bold font-['LINESeedJP']">無料相談</span>
                </div>
                {/* テキスト */}
                <div className="text-center">
                  <h3 className="text-2xl md:text-4xl font-bold font-['LINESeedJP']">0円</h3>
                </div>
              </div>
            </div>

            {/* 右側:月額料金セクション */}
            <div className="p-8 md:p-12 flex flex-col items-center justify-center">
              <div className="text-center">
                <div className="mb-8">
                  <span className="text-2xl md:text-2xl text-black font-bold font-['LINESeedJP']">導入費用</span>
                </div>
                <div className="mb-8">
                  <span className="text-3xl md:text-4xl text-primary font-bold font-['LINESeedJP']">300,000円</span>
                </div>
                <div className="mb-8">
                  <span className="text-2xl md:text-2xl text-black font-bold font-['LINESeedJP']">サポート費用</span>
                </div>
                <div className="mb-8">
                  <span className="text-3xl md:text-4xl text-primary font-bold font-['LINESeedJP']">50,000円/月</span>
                </div>
                <p className="text-base text-gray-600 mb-4">オプションで毎月のサポート</p>
                <p className="text-base text-gray-600">導入後も安心してAI活用</p>
                <div className="mt-8 text-left">
                  <p className="text-lg font-bold text-primary mb-4">サービス内容</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>お客様ヒアリング</li>
                    <li>AIツールの選定・連携サポート</li>
                    <li>運用指導（1か月無料サポート付き）</li>
                    <li>トラブル対応・QAサポート</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* 契約情報 */}
          <div className="mt-8 bg-white border-2 border-primary rounded-lg px-4 py-8">
            <div className="text-center">
              <p className="text-xl font-bold text-primary mb-4 font-['LINESeedJP']">安心サポートの契約形態</p>
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-bold text-gray-800">発注書のみでお申し込みOK</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-bold text-gray-800">解約はいつでも可能</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-bold text-gray-800">月ごとの更新でリスクが少ない</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIHPProducePricing;
