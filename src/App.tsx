
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import TasksPage from "./pages/TasksPage";
import KanbanPage from "./pages/KanbanPage";
import TimelinePage from "./pages/TimelinePage";
import LiteraturePage from "./pages/LiteraturePage";
import ReadingPage from "./pages/ReadingPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/tasks" element={<TasksPage />} />
          <Route path="/kanban" element={<KanbanPage />} />
          <Route path="/timeline" element={<TimelinePage />} />
          <Route path="/literature" element={<LiteraturePage />} />
          <Route path="/reading/:paperId" element={<ReadingPage />} />
          <Route path="/reading" element={<ReadingPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
