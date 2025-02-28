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
      answer: "AIが自動でLPを作成し、超短期間で売れるアタリを見つけるためのサービスです。",
    },
    {
      question: "どんないいことがあるのか？",
      answer: "時間とコストを大幅に削減しながら、ターゲットに合うLPを最速でテストできます。",
    },
    {
      question: "誰がやってくれるのか？",
      answer: "実際の制作はAIが自動で行い、必要に応じて専任サポートスタッフがアドバイスします。",
    },
    {
      question: "どれぐらいの時間がかかるのか？",
      answer: "コンセプト入力後、最短5分でLPが完成。1日もあれば結果の検証まで可能です。",
    },
    {
      question: "いくらでできるのか？",
      answer: "月額49,500円のみでAIによるLP生成を何度でも利用できます。追加費用はありません。",
    },
    {
      question: "信頼できるのか？",
      answer: "既に導入企業の98%以上が成果を実感し、継続利用を選んでいます。",
    },
    {
      question: "解約、返金については？",
      answer: "解約はいつでもOK。万が一成果が出ない場合でも短期間で判断できるのでリスクが抑えられます。",
    },
    {
      question: "他のサービスとの違いは？",
      answer: "従来の外注は時間と費用がかかりますが、当サービスなら驚くほど短期間かつ低コストでPDCAを回せます。",
    },
    {
      question: "セキュリティは？",
      answer: "入力いただいた情報は暗号化管理し、厳重に保護しています。",
    },
    {
      question: "価格の根拠は？",
      answer: "デザイナーや制作会社を経由せず、独自AIで一括生成するため、低コストを実現しています。",
    },
    {
      question: "導入の手順は？",
      answer: "お申し込み後、アカウントを発行。すぐにツール利用開始できます。特別な準備は不要です。",
    },
    {
      question: "導入後の運用手順は？",
      answer: "管理画面にアクセスして、コンセプト文を入力するだけ。何度でも修正・生成し放題です。",
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
