const SupportMembersSection = () => {
  return (
    <div className="bg-white py-12 sm:py-16 md:py-32">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left side: Title and Description */}
          <div className="w-full lg:w-1/2">
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-2xl md:text-4xl font-bold font-['LINESeedJP'] text-center md:text-left">
                私たちにお任せください
              </h2>
              <p className="text-base">
                わたしたちは仕事を自動化する専門家で構成されています。
                <br />
                一流大学、一流企業出身のメンバーのみで構成されており、私たちの頭脳、人間性、経験をぜひご活用ください。
              </p>
            </div>
          </div>

          {/* Right side: Member Cards */}
          <div className="w-full lg:w-1/2 space-y-4">
            <div className="bg-white rounded-lg border border-navy p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <img
                  src="/images/higashi.png"
                  alt="CTO（最高技術責任者）"
                  className="w-32 h-32 object-cover rounded-lg"
                />

                <div className="flex-1">
                  <div className="mb-2">
                    <p className="text-sm">CTO（最高技術責任者）</p>
                    <p className="text-base sm:text-lg font-bold">
                      東　孝紀
                    </p>
                  </div>
                  <p className="text-sm">
                    京都大学工学部卒。京都大学大学院工学研究科修了。
                    <br />
                    SONYにて次世代半導体の研究開発、研究タスクの自動化を行う。
                    <br />
                    ECブランドの立ち上げ、販売業務の自動化、データ分析システムの開発を行う。
                    <br />
                    木材卸売、建築会社の基幹システムの開発から導入までを1人で完了させ、現在は生成AI活用の専門家として、企業の業務変革を推進。
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-navy p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <img
                  src="/images/hishiki.png"
                  alt="COO（最高執行責任者）"
                  className="w-32 h-32 object-cover rounded-lg"
                />

                <div className="flex-1">
                  <div className="mb-2">
                    <p className="text-sm">COO（最高執行責任者）</p>
                    <p className="text-base sm:text-lg font-bold">
                      日紫喜　賢太
                    </p>
                  </div>
                  <p className="text-sm">
                    東京大学工学部卒。東京大学大学院工学系研究科修了。
                    <br />
                    JFEスチールにて圧延工場の能率向上に従事し、年間数千万円のコスト削減を実現。
                    <br />
                    Meguru AIを創業、不動産業者向けAIシステムを開発。
                    <br />
                    住宅設計会社の基幹システムの開発から導入までを1人で完結、短期で成果を出す業務効率化、生成AI活用に精通。
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-navy p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <img
                  src="/images/nii.png"
                  alt="CIO（最高情報責任者）"
                  className="w-32 h-32 object-cover rounded-lg"
                />

                <div className="flex-1">
                  <div className="mb-2">
                    <p className="text-sm">CIO（最高情報責任者）</p>
                    <p className="text-base sm:text-lg font-bold">
                      新居　邦亮
                    </p>
                  </div>
                  <p className="text-sm">
                    京都大学工学部卒。京都大学大学院工学研究科修了。
                    <br />
                    三菱電機にて鉄道用変電所建設のマネジメント、電気設計を行う。
                    <br />
                    顧客の現状とニーズの把握、適切な課題設定、最適なソリューションを選定する専門家。
                    <br />
                    多くの顧客の業務効率化を実現してきた経験をもとに、生成AIを活用した業務変革を推進。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportMembersSection;
