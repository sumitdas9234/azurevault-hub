import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Compute from "./pages/Compute";
import Storage from "./pages/Storage";
import Networking from "./pages/Networking";
import Monitoring from "./pages/Monitoring";
import Testbeds from "./pages/compute/Testbeds";
import VCenters from "./pages/compute/VCenters";
import VSphereClusters from "./pages/compute/VSphereClusters";
import Datastores from "./pages/storage/Datastores";
import FlashArrays from "./pages/storage/FlashArrays";
import FlashBlades from "./pages/storage/FlashBlades";
import Minios from "./pages/storage/Minios";
import Subnets from "./pages/networking/Subnets";
import RoutesPage from "./pages/networking/Routes";
import Alerts from "./pages/monitoring/Alerts";
import SystemStatus from "./pages/monitoring/SystemStatus";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/compute" element={<Compute />} />
          <Route path="/compute/testbeds" element={<Testbeds />} />
          <Route path="/compute/vcenters" element={<VCenters />} />
          <Route path="/compute/vsphere" element={<VSphereClusters />} />
          <Route path="/storage" element={<Storage />} />
          <Route path="/storage/datastores" element={<Datastores />} />
          <Route path="/storage/flasharrays" element={<FlashArrays />} />
          <Route path="/storage/flashblades" element={<FlashBlades />} />
          <Route path="/storage/minios" element={<Minios />} />
          <Route path="/networking" element={<Networking />} />
          <Route path="/networking/subnets" element={<Subnets />} />
          <Route path="/networking/routes" element={<RoutesPage />} />
          <Route path="/monitoring" element={<Monitoring />} />
          <Route path="/monitoring/alerts" element={<Alerts />} />
          <Route path="/monitoring/systemstatus" element={<SystemStatus />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
