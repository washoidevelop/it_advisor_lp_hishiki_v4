const ServicesGrid = () => {
  const services = [
    {
      title: "議事録の自動化",
      icon: "/images/book-open-text.svg",
      link: "#"
    },
    {
      title: "メールの自動化",
      icon: "/images/envelope-simple.svg",
      link: "#"
    },
    {
      title: "企画案の自動化",
      icon: "/images/lightbulb.svg",
      link: "#"
    },
    {
      title: "資料の自動化",
      icon: "/images/presentation.svg",
      link: "#"
    },
    {
      title: "日報集計の自動化",
      icon: "/images/files.svg",
      link: "#"
    },
    {
      title: "SNS投稿文の自動化",
      icon: "/images/device-mobile.svg",
      link: "#"
    },
    {
      title: "顧客対応の自動化",
      icon: "/images/headset.svg",
      link: "#"
    },
    {
      title: "求人票の自動化",
      icon: "/images/file.svg",
      link: "#"
    },
    {
      title: "報告書の自動化",
      icon: "/images/file-doc.svg",
      link: "#"
    },
    {
      title: "報告書要約の自動化",
      icon: "/images/read-cv-logo.svg",
      link: "#"
    },
    {
      title: "マニュアルの自動化",
      icon: "/images/file-archive.svg",
      link: "#"
    },
    {
      title: "市場調査の自動化",
      icon: "/images/chart-line.svg",
      link: "#"
    },
  ];

  return (
    <div className="bg-white py-12 md:py-32">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-4xl font-bold text-center mb-12 md:mb-16 font-['LINESeedJP']">
          自動化メニューの一覧
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-4 md:p-6 border border-gray-200 hover:border-primary hover:shadow-lg transition-all duration-200 flex flex-col items-center"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 mb-4">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-sm md:text-base font-bold text-center mb-2">
                {service.title.split('の自動化').map((part, i) => (
                  <span key={i}>
                    {i === 0 ? (
                      <span className="text-primary text-lg md:text-xl">{part}</span>
                    ) : (
                      part
                    )}
                    {i === 0 && 'の自動化'}
                  </span>
                ))}
              </h3>
              <p className="text-sm text-primary font-bold">49,500円</p>
              {/* <a 
                href={service.link} 
                className="text-primary text-sm flex items-center gap-1 group"
              >
                詳しく見る
                <svg 
                  className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 5l7 7-7 7" 
                  />
                </svg>
              </a> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesGrid;
