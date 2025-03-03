import { Button } from "@/components/ui/button";
import { useUtmNavigation } from "@/hooks/use-utm-navigation";

const Navbar = () => {
  const navigateWithUtm = useUtmNavigation();

  return (
    <nav className="w-full py-4 bg-transparent">
      <div className="max-w-screen-xl mx-auto px-4 md:px-16 flex justify-between items-center">
        <div className="flex items-center">
          <button
            onClick={() => navigateWithUtm("/cline")}
            className="font-bold text-xl font-['LINESeedJP']"
          >
            株式会社Washoi
          </button>
        </div>

        <div className="flex items-center space-x-6">
          <div className="flex items-center gap-1">
            <img src="/images/phone-bold.svg" alt="phone" className="w-6 h-6 mt-1" />
            <span className="inline font-bold text-xl">
              050-4560-4720
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
