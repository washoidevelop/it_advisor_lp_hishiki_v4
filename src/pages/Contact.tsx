import ContactForm from "../components/pages/index/ContactForm";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/pages/index/Navbar";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Contact;
