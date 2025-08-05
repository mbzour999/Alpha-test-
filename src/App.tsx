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
import Industries from "./pages/Industries";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import DataAnalytics from "./pages/services/DataAnalytics";
import AIAssistants from "./pages/services/AIAssistants";
import PredictionModels from "./pages/services/PredictionModels";
import RecommendationModels from "./pages/services/RecommendationModels";
import RegressionModels from "./pages/services/RegressionModels";
import SentimentAnalysis from "./pages/services/SentimentAnalysis";
import ClusteringModels from "./pages/services/ClusteringModels";
import ComputerVision from "./pages/services/ComputerVision";
import TemporalAnalysis from "./pages/services/TemporalAnalysis";
import RetailEcommerce from "./pages/sectors/RetailEcommerce";
import JobApplication from "./pages/JobApplication";

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
          <Route path="/industries" element={<Industries />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/careers/:jobId" element={<Careers />} />
          <Route path="/services/data-analytics" element={<DataAnalytics />} />
          <Route path="/services/ai-assistants" element={<AIAssistants />} />
          <Route path="/services/prediction-models" element={<PredictionModels />} />
          <Route path="/services/recommendation-models" element={<RecommendationModels />} />
          <Route path="/services/regression-models" element={<RegressionModels />} />
          <Route path="/services/sentiment-analysis" element={<SentimentAnalysis />} />
          <Route path="/services/clustering-models" element={<ClusteringModels />} />
          <Route path="/services/computer-vision" element={<ComputerVision />} />
          <Route path="/services/temporal-analysis" element={<TemporalAnalysis />} />
          <Route path="/sectors/retail-ecommerce" element={<RetailEcommerce />} />
          <Route path="/careers/:jobId/apply" element={<JobApplication />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
