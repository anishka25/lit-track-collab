
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Placeholder data
const taskData = {
  personal: {
    completed: 12,
    total: 20,
    percentage: 60,
    recentTasks: [
      { id: 1, title: "Review Literature Survey", status: "completed" },
      { id: 2, title: "Update Bibliography", status: "in-progress" },
      { id: 3, title: "Research Methodology Draft", status: "pending" },
    ],
  },
  team: {
    completed: 28,
    total: 35,
    percentage: 80,
    recentTasks: [
      { id: 1, title: "Team Meeting", status: "completed" },
      { id: 2, title: "Present Findings", status: "completed" },
      { id: 3, title: "Review Research Data", status: "in-progress" },
    ],
  },
};

export function TaskOverview() {
  const [activeTab, setActiveTab] = useState("personal");
  const data = activeTab === "personal" ? taskData.personal : taskData.team;
  
  return (
    <Card className="col-span-1">
      <CardHeader>
        <CardTitle>Task Overview</CardTitle>
        <CardDescription>Your task completion progress</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="personal" onValueChange={setActiveTab}>
          <TabsList className="mb-4">
            <TabsTrigger value="personal">Personal</TabsTrigger>
            <TabsTrigger value="team">Team</TabsTrigger>
          </TabsList>
          <TabsContent value="personal" className="animate-fade-in">
            <TaskProgressContent data={data} />
          </TabsContent>
          <TabsContent value="team" className="animate-fade-in">
            <TaskProgressContent data={data} />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}

function TaskProgressContent({ data }: { data: typeof taskData.personal }) {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Progress</span>
          <span className="text-sm font-medium">{data.percentage}%</span>
        </div>
        <Progress value={data.percentage} className="h-2" />
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>{data.completed} completed</span>
          <span>{data.total - data.completed} remaining</span>
        </div>
      </div>
      
      <div>
        <h4 className="text-sm font-medium mb-2">Recent Tasks</h4>
        <div className="space-y-2">
          {data.recentTasks.map((task) => (
            <div
              key={task.id}
              className="flex items-center justify-between p-2 rounded-md bg-muted/50"
            >
              <span className="text-sm truncate">{task.title}</span>
              <span
                className={`text-xs px-2 py-1 rounded-full ${
                  task.status === "completed"
                    ? "bg-green-100 text-green-700"
                    : task.status === "in-progress"
                    ? "bg-amber-100 text-amber-700"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                {task.status === "completed"
                  ? "Completed"
                  : task.status === "in-progress"
                  ? "In Progress"
                  : "Pending"}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
