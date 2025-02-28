const Examples = () => {
  return (
    <section className="py-12 md:py-32 bg-gray-50">
      <div className="container mx-auto px-4 md:px-16 max-w-[1280px]">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-8">
          実際にどんな自動化ができるの?
        </h2>
        <p className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          例えば「議事録自動化」を導入するだけで、会議の記録作成にかかる時間が約80%削減。メール作成や日報集計なども、同じように短時間で自動化できます。
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4 text-red-500">Before</h3>
            <div className="aspect-video relative">
              <img
                src="/images/before_after.png"
                alt="自動化前の作業イメージ"
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-red-500/10 rounded-lg"></div>
            </div>
            <p className="mt-4 text-gray-600">人力での議事録作成に時間がかかる</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4 text-primary">After</h3>
            <div className="aspect-video relative">
              <img
                src="/images/ai_automation.png"
                alt="自動化後の作業イメージ"
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-primary/10 rounded-lg"></div>
            </div>
            <p className="mt-4 text-gray-600">AIが自動でテキスト化してくれる</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Examples;
