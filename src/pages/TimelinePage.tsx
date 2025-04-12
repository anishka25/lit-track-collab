
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHeader } from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/button";
import { ResearchTimeline } from "@/components/timeline/ResearchTimeline";
import { Plus } from "lucide-react";

const TimelinePage = () => {
  return (
    <PageLayout>
      <PageHeader
        title="Research Timeline"
        description="Track the progress of your research project"
      >
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Milestone
        </Button>
      </PageHeader>

      <div className="space-y-6">
        <ResearchTimeline />
      </div>
    </PageLayout>
  );
};

export default TimelinePage;
