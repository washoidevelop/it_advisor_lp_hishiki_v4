import ContactForm from "@/components/pages/index/ContactForm";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/pages/cline/Navbar";
import { useEffect } from "react";

const ClineContact = () => {
  useEffect(() => {
    // Google広告のコンバージョントラッキング
    if (window.gtag) {
      window.gtag('event', 'conversion', {'send_to': 'AW-16742506458/TQpGCJyyoqUaENq_ua8-'});
    }
  }, []);
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default ClineContact;
