import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "何のサービスなのか？",
    answer:
      "AI導入と運用サポートをワンストップで行うものです。HP制作会社に特化しています。",
  },
  {
    question: "どんないいことがあるのか？",
    answer:
      "AIを徹底活用して高速開発できるようになります。",
  },
  {
    question: "誰がやってくれるのか？",
    answer:
      "AI活用の専門チームが導入から運用まで支援。制作現場に合った設定を行います。",
  },
  {
    question: "どれぐらいの時間がかかるのか？",
    answer:
      "最短1週間で導入可能です。初回ヒアリング後、すぐに環境を整備します。",
  },
  {
    question: "いくらでできるのか？",
    answer:
      "導入費用300,000円、月額50,000円でサポートまでご利用いただけます。",
  },
  {
    question: "解約、返金については？",
    answer:
      "月ごとの更新でいつでも解約可能。返金は利用日数に応じて対応します。",
  },
  {
    question: "他のサービスとの違いは？",
    answer:
      "HP制作会社に特化し、現場のワークフローへ的確にAIを組み込む点が強みです。",
  },
  {
    question: "セキュリティは？",
    answer:
      "AIツールは大手クラウド提供で安全性を重視しています。",
  },
  {
    question: "価格の根拠は？",
    answer:
      "最新AI活用のノウハウを余すことなくお伝えし、確実に成果に繋げます。",
  },
  {
    question: "導入の手順は？",
    answer:
      "ヒアリング→AIツール設定→検証→運用開始の流れで進めます。",
  },
  {
    question: "導入後の運用手順は？",
    answer:
      "専任スタッフがオンラインでサポート。困ったときはいつでもご相談いただけます。",
  },
];

const AIHPProduceFAQs = () => {
  return (
    <section className="relative py-12 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-16 max-w-[1280px] relative z-10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-center text-2xl md:text-4xl font-bold mb-8 font-['LINESeedJP']">
            よくあるご質問
          </h2>
          <Accordion type="single" collapsible className="w-full px-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
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

export default AIHPProduceFAQs;
