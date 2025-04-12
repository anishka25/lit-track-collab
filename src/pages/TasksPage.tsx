
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHeader } from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
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
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Filter, MoreHorizontal, Plus, SortAsc } from "lucide-react";

// Placeholder data
const tasks = [
  {
    id: "task-1",
    title: "Complete Literature Review",
    assignee: "John Researcher",
    status: "in-progress",
    priority: "high",
    dueDate: "2025-04-15",
  },
  {
    id: "task-2",
    title: "Data Collection for Experiment 2",
    assignee: "Sarah Chen",
    status: "pending",
    priority: "medium",
    dueDate: "2025-04-22",
  },
  {
    id: "task-3",
    title: "Weekly Team Meeting Notes",
    assignee: "Alex Kim",
    status: "completed",
    priority: "low",
    dueDate: "2025-04-10",
  },
  {
    id: "task-4",
    title: "Review Conference Papers",
    assignee: "Maria Garcia",
    status: "in-progress",
    priority: "medium",
    dueDate: "2025-04-18",
  },
  {
    id: "task-5",
    title: "Submit Grant Application",
    assignee: "John Researcher",
    status: "pending",
    priority: "high",
    dueDate: "2025-05-01",
  },
  {
    id: "task-6",
    title: "Prepare Presentation Slides",
    assignee: "Sarah Chen",
    status: "in-progress",
    priority: "medium",
    dueDate: "2025-04-20",
  },
];

const TasksPage = () => {
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
          <Badge variant="outline" className="bg-gray-100 text-gray-700 border-gray-300">
            Unknown
          </Badge>
        );
    }
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
          <Badge variant="outline" className="bg-gray-100 text-gray-700 border-gray-300">
            Unknown
          </Badge>
        );
    }
  };

  return (
    <PageLayout>
      <PageHeader 
        title="Research Tasks" 
        description="Manage and track all your research tasks"
      >
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline" size="sm">
            <SortAsc className="h-4 w-4 mr-2" />
            Sort
          </Button>
          <Button size="sm">
            <Plus className="h-4 w-4 mr-2" />
            New Task
          </Button>
        </div>
      </PageHeader>

      <Card className="animate-fade-in">
        <CardHeader className="pb-3">
          <CardTitle>All Tasks</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Assignee</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Priority</TableHead>
                <TableHead>Due Date</TableHead>
                <TableHead className="w-12"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tasks.map((task) => (
                <TableRow key={task.id} className="hover:bg-muted/50 animate-fade-in">
                  <TableCell className="font-medium">{task.title}</TableCell>
                  <TableCell>{task.assignee}</TableCell>
                  <TableCell>{getStatusBadge(task.status)}</TableCell>
                  <TableCell>{getPriorityBadge(task.priority)}</TableCell>
                  <TableCell>
                    {new Date(task.dueDate).toLocaleDateString(undefined, {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem>View Details</DropdownMenuItem>
                        <DropdownMenuItem>Change Status</DropdownMenuItem>
                        <DropdownMenuItem>Reassign</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </PageLayout>
  );
};

export default TasksPage;
