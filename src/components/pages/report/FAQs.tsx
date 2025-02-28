import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQs = () => {
  const faqs = [
    {
      question: "何のサービスなのか？",
      answer: "報告書作成を自動化するAIシステムと運用サポートをセットでご提供しています。",
    },
    {
      question: "どんないいことがあるのか？",
      answer: "作成時間や手間が大幅に削減され、ミスも減り、ストレスフリーに業務を進められます。",
    },
    {
      question: "誰がやってくれるのか？",
      answer: "専門スタッフとAIが連携し、導入から運用サポートまでしっかりフォローします。",
    },
    {
      question: "どれぐらいの時間がかかるのか？",
      answer: "最短で3日ほどあれば導入が完了し、即日から効果を実感できます。",
    },
    {
      question: "いくらでできるのか？",
      answer: "月額49,500円のみで、初期費用や追加費用はかかりません。",
    },
    {
      question: "信頼できるのか？",
      answer: "多くの企業様で導入され、導入後の満足度は98%以上を誇っています。",
    },
    {
      question: "解約、返金については？",
      answer: "月ごとの契約なので、いつでも解約可能。未利用期間のご相談も柔軟に対応します。",
    },
    {
      question: "他のサービスとの違いは？",
      answer: "AIでデータを自動集計してレポート化する仕組みと、運用サポートがセットになっている点です。",
    },
    {
      question: "セキュリティは？",
      answer: "通信は暗号化され、クラウド環境も厳格なセキュリティ基準を満たしております。",
    },
    {
      question: "価格の根拠は？",
      answer: "長期で見れば大幅な人件費削減が見込めるため、この価格設定でも十分なコストメリットがあります。",
    },
    {
      question: "導入の手順は？",
      answer: "お問い合わせ → ヒアリング → ツール設定 → 簡易テスト → 運用開始、という流れです。",
    },
    {
      question: "導入後の運用手順は？",
      answer: "マニュアルや専用サポート窓口を用意し、日々の操作やトラブル対応もスムーズに行えます。",
    },
  ];

  return (
    <section className="py-16 md:py-32 bg-gray-50">
      <div className="container mx-auto px-4 md:px-16 max-w-[1280px]">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 font-['LINESeedJP']">
          よくあるご質問
        </h2>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-xl px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
