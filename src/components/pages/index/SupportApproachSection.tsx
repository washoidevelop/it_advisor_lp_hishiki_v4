const SupportApproachSection = () => {
  return (
    <div className="bg-[#EDF2F7] py-12 sm:py-16 md:py-32">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 font-['LINESeedJP']">
          AI自動化サポートの流れ
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* 戦略と実践の融合カード */}
          <div className="bg-white rounded-[16px] border border-navy p-4 sm:p-8 flex flex-col h-full">
            <p className="text-lg font-bold mb-2 text-primary">STEP 1</p>
            <h3 className="text-xl sm:text-2xl font-bold mb-2">
              毎月の自動化テーマを作成する
            </h3>
            <div className="grid grid-cols-3 gap-2 mt-4">
              <div className="bg-gray-50 px-2 py-4 rounded-lg">
                <img
                  src="/images/number-square-one.svg"
                  alt="1月"
                  className="w-12 h-12 mx-auto mb-3"
                />
                <p className="text-sm text-gray-600 text-center font-bold">
                  報告書の<br className="md:hidden" />自動化
                </p>
              </div>
              <div className="bg-gray-50 px-2 py-4 rounded-lg">
                <img
                  src="/images/number-square-two.svg"
                  alt="2月"
                  className="w-12 h-12 mx-auto mb-3"
                />
                <p className="text-sm text-gray-600 text-center font-bold">
                  議事録の<br className="md:hidden" />自動化
                </p>
              </div>
              <div className="bg-gray-50 px-2 py-4 rounded-lg">
                <img
                  src="/images/number-square-three.svg"
                  alt="3月"
                  className="w-12 h-12 mx-auto mb-3"
                />
                <p className="text-sm text-gray-600 text-center font-bold">
                  分析の<br className="md:hidden" />自動化
                </p>
              </div>
            </div>
          </div>

          {/* シームレスな連携カード */}
          <div className="bg-white rounded-[16px] border border-navy p-6 sm:p-8 flex flex-col h-full">
            <p className="text-lg font-bold mb-2 text-primary">STEP 2</p>
            <h3 className="text-xl sm:text-2xl font-bold mb-4">
              AIで自動化する
            </h3>
            <div className="grid grid-cols-3 gap-2 mt-4">
              <div className="bg-gray-50 px-2 py-4 rounded-lg">
                <img
                  src="/images/chalkboard-teacher.svg"
                  alt="報告書"
                  className="w-12 h-12 mx-auto mb-3"
                />
                <p className="text-sm text-gray-600 text-center font-bold">
                  AI研修
                </p>
              </div>
              <div className="bg-gray-50 px-2 py-4 rounded-lg">
                <img
                  src="/images/hammer.svg"
                  alt="議事録"
                  className="w-12 h-12 mx-auto mb-3"
                />
                <p className="text-sm text-gray-600 text-center font-bold">
                  AIツール
                </p>
              </div>
              <div className="bg-gray-50 px-2 py-4 rounded-lg">
                <img
                  src="/images/laptop.svg"
                  alt="分析"
                  className="w-12 h-12 mx-auto mb-3"
                />
                <p className="text-sm text-gray-600 text-center font-bold">
                  AI開発
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportApproachSection;
