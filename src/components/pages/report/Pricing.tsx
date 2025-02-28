import { Check } from "lucide-react";

const Pricing = () => {
  const features = [
    "導入前ヒアリング",
    "ツール設定・簡易レクチャー",
    "現場説明会",
    "導入後2週間の無料サポート",
  ];

  const details = [
    { label: "必要書類", value: "発注書のみ" },
    { label: "導入までの期間", value: "最短3日で導入可能" },
    { label: "契約形態", value: "月ごとの更新で、いつでも解約OK" },
  ];

  return (
    <section className="py-16 md:py-32">
      <div className="container mx-auto px-4 md:px-16 max-w-[1280px]">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 font-['LINESeedJP']">
          サービス料金について
        </h2>

        <div className="max-w-3xl mx-auto">
          {/* 料金プラン */}
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg mb-12">
            <div className="text-center mb-8">
              <div className="text-gray-600 mb-2">初期費用0円、追加費用一切なし</div>
              <div className="text-4xl md:text-5xl font-bold text-primary">
                49,500<span className="text-2xl">円</span>
              </div>
              <div className="text-gray-600 mt-2">（税込）/ 月額</div>
            </div>

            <div className="text-center text-gray-600 mb-8">
              1日あたり約1,650円で、報告書作成にかかる毎日1時間以上の工数を削減できます。<br />
              約1ヶ月で元が取れる投資として好評です。
            </div>

            <div className="space-y-4 w-fit mx-auto">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-[40px]">
                    <Check className="text-primary w-6 h-6" strokeWidth={3} />
                  </div>
                  <span className="text-lg font-bold">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 導入詳細 */}
          <div className="space-y-6">
            {details.map((detail, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl">
                <div className="text-sm text-gray-600 mb-2">{detail.label}</div>
                <div className="font-bold">{detail.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
