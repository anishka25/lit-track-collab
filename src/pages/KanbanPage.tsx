
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHeader } from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/button";
import { KanbanBoard } from "@/components/kanban/KanbanBoard";
import { Plus } from "lucide-react";
import { useState } from "react";

const KanbanPage = () => {
  const [showAddTask, setShowAddTask] = useState(false);

  return (
    <PageLayout>
      <PageHeader 
        title="Kanban Board" 
        description="Visualize and manage your research workflow"
      >
        <Button onClick={() => setShowAddTask(!showAddTask)}>
          <Plus className="mr-2 h-4 w-4" />
          Add Task
        </Button>
      </PageHeader>
      
      <div className="mb-6">
        <KanbanBoard />
      </div>
    </PageLayout>
  );
};

export default KanbanPage;
