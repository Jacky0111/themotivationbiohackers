import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { HelmetProvider } from "react-helmet-async";
import { lazy, Suspense } from "react";
import ScrollManager from "./components/ScrollManager";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// The home page ships in the main bundle; every other page loads on demand.
const About = lazy(() => import("./pages/About"));
const ServiceDetail = lazy(() => import("./pages/ServiceDetail"));
const PastEvents = lazy(() => import("./pages/PastEvents"));
const EventDetail = lazy(() => import("./pages/EventDetail"));
const Disclaimer = lazy(() => import("./pages/Disclaimer"));

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <Suspense fallback={null}>
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="/past-events" element={<PastEvents />} />
        <Route path="/events/:slug" element={<EventDetail />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
    </Suspense>
  );
};

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollManager />
          <AnimatedRoutes />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
