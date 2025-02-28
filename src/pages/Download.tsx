import DownloadForm from "@/components/pages/index/DownloadForm";
import Navbar from "@/components/pages/index/Navbar";
import Footer from "@/components/common/Footer";
import { useEffect } from "react";

const Download = () => {
  useEffect(() => {
    // スクロール位置をリセット
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // URLパラメータからutm_sourceを取得
    const params = new URLSearchParams(window.location.search);
    const utmSource = params.get("utm_source");

    // utm_sourceがgoogleの場合のみコンバージョンを発火
    if (utmSource === "google") {
      gtag("event", "conversion", {
        send_to: "AW-16742506458/e-hvCK7rnZ0aENq_ua8-",
        value: 100,
        currency: "JPY",
      });
      console.log("Google広告コンバージョンを送信しました");
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <DownloadForm />
      <Footer />
    </div>
  );
};

export default Download;
