import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/common/ScrollToTop";
import Index from "./pages/Index";
import Download from "./pages/Download";
import Privacy from "./pages/Privacy";
import Contact from "./pages/Contact";
import Message from "./pages/Message";
import Report from "./pages/report";
import LP1 from "./pages/lp1";
import Cline from "./pages/cline";
import ClineContact from "./pages/cline/contact";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/download" element={<Download />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/message" element={<Message />} />
          <Route path="/report" element={<Report />} />
          <Route path="/lp1" element={<LP1 />} />
          <Route path="/cline" element={<Cline />} />
          <Route path="/cline/contact" element={<ClineContact />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
