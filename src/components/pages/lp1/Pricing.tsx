import { Check } from "lucide-react";

const Pricing = () => {
  const features = [
    "AIを使ったLP自動生成",
    "無制限のコンセプト入力と編集",
    "月1回のオンラインアドバイスセッション",
    "導入後1ヶ月間の無料サポート",
  ];

  const details = [
    { label: "必要書類", value: "発注書だけで申し込み完了" },
    { label: "導入までの期間", value: "翌日からすぐにLP作成可能" },
    { label: "契約形態", value: "最低契約期間なしで月ごとに更新、解約はいつでもOK" },
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
              <div className="text-gray-600 mb-2">初期費用0円、追加料金やオプション費用は一切なし</div>
              <div className="text-4xl md:text-5xl font-bold text-primary">
                49,500<span className="text-2xl">円</span>
              </div>
              <div className="text-gray-600 mt-2">（税込）/ 月額</div>
            </div>

            <div className="text-center text-gray-600 mb-8">
              毎月のLP外注に数十万円かけるより、わずか49,500円で何度でもLPを生成し放題。<br />
              1パターンでも当たれば、広告費の無駄が一気に減って3ヶ月ほどで十分元が取れます。
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
