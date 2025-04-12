
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHeader } from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/button";
import { StatCard } from "@/components/dashboard/StatCard";
import { TaskOverview } from "@/components/dashboard/TaskOverview";
import { UpcomingDeadlines } from "@/components/dashboard/UpcomingDeadlines";
import { LiteraturePreview } from "@/components/dashboard/LiteraturePreview";
import { 
  BookOpen, 
  ClipboardList, 
  FileText, 
  Users,
  Plus
} from "lucide-react";

const Index = () => {
  return (
    <PageLayout>
      <PageHeader 
        title="Research Dashboard" 
        description="Monitor your research progress and team activities"
      >
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Task
        </Button>
      </PageHeader>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard 
          title="Active Tasks" 
          value="14" 
          description="Tasks currently in progress" 
          trend={{ value: 5, isPositive: true }}
          icon={<ClipboardList className="h-4 w-4" />}
          className="animate-fade-in"
        />
        <StatCard 
          title="Papers" 
          value="28" 
          description="Research papers in your library" 
          trend={{ value: 12, isPositive: true }}
          icon={<BookOpen className="h-4 w-4" />}
          className="animate-fade-in animate-in-delay-1"
        />
        <StatCard 
          title="Publications" 
          value="4" 
          description="Your published research papers" 
          trend={{ value: 1, isPositive: true }}
          icon={<FileText className="h-4 w-4" />}
          className="animate-fade-in animate-in-delay-2"
        />
        <StatCard 
          title="Team Members" 
          value="6" 
          description="Active researchers on your team" 
          icon={<Users className="h-4 w-4" />}
          className="animate-fade-in animate-in-delay-3"
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2">
          <TaskOverview />
        </div>
        <div>
          <UpcomingDeadlines />
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <iframe 
            src="https://calendar.google.com/calendar/embed?height=400&wkst=1&bgcolor=%23ffffff&ctz=UTC&showTitle=0&showNav=1&showPrint=0&showTabs=0&showCalendars=0&showTz=0"
            style={{ border: "none" }}
            width="100%"
            height="400"
            frameBorder="0"
            scrolling="no"
            className="rounded-lg border shadow-sm animate-fade-in"
          ></iframe>
        </div>
        <div>
          <LiteraturePreview />
        </div>
      </div>
    </PageLayout>
  );
};

export default Index;
