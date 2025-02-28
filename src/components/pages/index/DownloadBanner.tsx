import { Button } from "@/components/ui/button";
import { useUtmNavigation } from "@/hooks/use-utm-navigation";

const DownloadBanner = () => {
  const navigateWithUtm = useUtmNavigation();

  return (
    <div className="inline-flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8">
      <div className="relative">
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white border-2 border-[#1976D2] text-[#1976D2] px-12 py-2 rounded-full text-sm mb-2 whitespace-nowrap after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-[6px] after:border-[#1976D2] after:border-t-[#1976D2] after:border-b-transparent after:border-x-transparent">
          1ヶ月無料お試しあり
        </div>
        <Button
          size="lg"
          className="bg-primary hover:bg-primary/90 text-white font-medium px-8 h-[56px] sm:h-[64px] text-base sm:text-[17px] rounded-full w-full sm:w-[350px]"
          onClick={() => navigateWithUtm("/download")}
        >
          資料を無料ダウンロードする
        </Button>
      </div>
    </div>
  );
};

export default DownloadBanner;
