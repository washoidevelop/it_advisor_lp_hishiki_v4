import { Button } from "../../ui/button";
import { Separator } from "../../ui/separator";
import { useUtmNavigation } from "@/hooks/use-utm-navigation";

const ContactSection = () => {
  const navigateWithUtm = useUtmNavigation();

  return (
    <div className="flex flex-col md:flex-row relative">
      {/* Left section - Document Request */}
      <div className="w-full md:w-1/2 bg-blue-media py-12 sm:py-16 px-4 sm:px-8">
        <div className="max-w-md mx-auto space-y-4 sm:space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold text-white text-center">
            無料資料ダウンロード
          </h2>
          <p className="text-sm sm:text-[15px] font-normal text-white text-center">
            2/28までの1ヶ月無料お試しをぜひご利用ください。
          </p>
          <Button
            variant="outline"
            className="w-full bg-white text-blue-media hover:bg-primary h-[48px] sm:h-[64px] rounded-full text-base sm:text-[17px]"
            onClick={() => navigateWithUtm("/download")}
          >
            無料で資料ダウンロードする
          </Button>
        </div>
      </div>

      {/* Separator */}
      <div className="hidden md:block absolute top-0 left-1/2 h-full">
        <Separator orientation="vertical" className="w-[3px] bg-white" />
      </div>

      {/* Right section - Contact */}
      <div className="w-full md:w-1/2 bg-orange py-12 sm:py-16 px-4 sm:px-8">
        <div className="max-w-md mx-auto space-y-4 sm:space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold text-white text-center">
            ご相談・お問い合わせ
          </h2>
          <p className="text-sm sm:text-[15px] font-normal text-white text-center">
            お気軽にお問い合わせください。
          </p>
          <Button
            variant="outline"
            className="w-full bg-white text-accent hover:bg-accent h-[48px] sm:h-[64px] rounded-full text-base sm:text-[17px]"
            onClick={() => navigateWithUtm("/contact")}
          >
            ご相談・お問い合わせをする
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
