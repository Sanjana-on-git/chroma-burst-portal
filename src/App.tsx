import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NewsNotifications from "./pages/NewsNotifications";
import EventsCalendar from "./pages/EventsCalendar";
import PhotoGallery from "./pages/PhotoGallery";
import MediaCoverage from "./pages/MediaCoverage";
import StudentAchievements from "./pages/StudentAchievements";
import FacultyResearch from "./pages/FacultyResearch";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/news-notifications" element={<NewsNotifications />} />
          <Route path="/events-calendar" element={<EventsCalendar />} />
          <Route path="/photo-gallery" element={<PhotoGallery />} />
          <Route path="/media-coverage" element={<MediaCoverage />} />
          <Route path="/student-achievements" element={<StudentAchievements />} />
          <Route path="/faculty-research" element={<FacultyResearch />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
