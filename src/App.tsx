import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import VisionMission from "./pages/VisionMission";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import DataAnalytics from "./pages/services/DataAnalytics";
import AIAssistants from "./pages/services/AIAssistants";
import PredictionModels from "./pages/services/PredictionModels";
import RetailEcommerce from "./pages/sectors/RetailEcommerce";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/vision-mission" element={<VisionMission />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/services/data-analytics" element={<DataAnalytics />} />
          <Route path="/services/ai-assistants" element={<AIAssistants />} />
          <Route path="/services/prediction-models" element={<PredictionModels />} />
          <Route path="/sectors/retail-ecommerce" element={<RetailEcommerce />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
