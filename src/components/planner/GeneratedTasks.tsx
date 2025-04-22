
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal, Plus } from "lucide-react";
import { Task } from "@/pages/ResearchPlannerPage";
import { toast } from "sonner";

interface GeneratedTasksProps {
  tasks: Task[];
}

export function GeneratedTasks({ tasks }: GeneratedTasksProps) {
  const [taskList, setTaskList] = useState<Task[]>(tasks);

  const handleStatusChange = (id: string, status: Task["status"]) => {
    setTaskList(
      taskList.map((task) =>
        task.id === id ? { ...task, status } : task
      )
    );
    toast.success("Task status updated");
  };

  const handleAddToKanban = (task: Task) => {
    // In a real implementation, this would add the task to the Kanban board
    toast.success(`Task "${task.title}" added to Kanban board`);
  };

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "high":
        return (
          <Badge variant="outline" className="bg-red-100 text-red-700 border-red-300">
            High
          </Badge>
        );
      case "medium":
        return (
          <Badge variant="outline" className="bg-amber-100 text-amber-700 border-amber-300">
            Medium
          </Badge>
        );
      case "low":
        return (
          <Badge variant="outline" className="bg-green-100 text-green-700 border-green-300">
            Low
          </Badge>
        );
      default:
        return (
          <Badge variant="outline">Unknown</Badge>
        );
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return (
          <Badge variant="outline" className="bg-green-100 text-green-700 border-green-300">
            Completed
          </Badge>
        );
      case "in-progress":
        return (
          <Badge variant="outline" className="bg-amber-100 text-amber-700 border-amber-300">
            In Progress
          </Badge>
        );
      case "pending":
        return (
          <Badge variant="outline" className="bg-gray-100 text-gray-700 border-gray-300">
            Pending
          </Badge>
        );
      default:
        return (
          <Badge variant="outline">Unknown</Badge>
        );
    }
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div>
          <CardTitle>AI Generated Tasks</CardTitle>
          <CardDescription>
            Tasks automatically created based on your research project
          </CardDescription>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Task
        </Button>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Task</TableHead>
              <TableHead>Priority</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Deadline</TableHead>
              <TableHead className="w-[100px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {taskList.map((task) => (
              <TableRow key={task.id}>
                <TableCell>
                  <div>
                    <p className="font-medium">{task.title}</p>
                    <p className="text-sm text-muted-foreground line-clamp-1">
                      {task.description}
                    </p>
                  </div>
                </TableCell>
                <TableCell>{getPriorityBadge(task.priority)}</TableCell>
                <TableCell>{getStatusBadge(task.status)}</TableCell>
                <TableCell>
                  {new Date(task.deadline).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem 
                        onClick={() => handleAddToKanban(task)}
                      >
                        Add to Kanban
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem 
                        onClick={() => handleStatusChange(task.id, "pending")}
                      >
                        Mark as Pending
                      </DropdownMenuItem>
                      <DropdownMenuItem 
                        onClick={() => handleStatusChange(task.id, "in-progress")}
                      >
                        Mark as In Progress
                      </DropdownMenuItem>
                      <DropdownMenuItem 
                        onClick={() => handleStatusChange(task.id, "completed")}
                      >
                        Mark as Completed
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
