
import { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

// Types
type TaskType = {
  id: string;
  title: string;
  description: string;
  priority: "low" | "medium" | "high";
  assignee?: string;
  dueDate?: string;
};

type ColumnType = {
  id: string;
  title: string;
  tasks: TaskType[];
};

// Initial data
const initialColumns: ColumnType[] = [
  {
    id: "todo",
    title: "To Do",
    tasks: [
      {
        id: "task-1",
        title: "Literature Review",
        description: "Review papers on quantum computing",
        priority: "high",
        assignee: "Alex Johnson",
        dueDate: "2025-04-25",
      },
      {
        id: "task-2",
        title: "Data Collection",
        description: "Gather experimental results",
        priority: "medium",
        assignee: "Sarah Chen",
        dueDate: "2025-05-10",
      },
    ],
  },
  {
    id: "in-progress",
    title: "In Progress",
    tasks: [
      {
        id: "task-3",
        title: "Methodology Section",
        description: "Writing research methodology",
        priority: "medium",
        assignee: "John Smith",
        dueDate: "2025-04-15",
      },
    ],
  },
  {
    id: "review",
    title: "In Review",
    tasks: [
      {
        id: "task-4",
        title: "Introduction Draft",
        description: "Revising introduction section",
        priority: "low",
        assignee: "Maria Garcia",
        dueDate: "2025-04-12",
      },
    ],
  },
  {
    id: "done",
    title: "Done",
    tasks: [
      {
        id: "task-5",
        title: "Research Proposal",
        description: "Submit research proposal",
        priority: "high",
        assignee: "Alex Johnson",
        dueDate: "2025-04-01",
      },
    ],
  },
];

export function KanbanBoard() {
  const [columns, setColumns] = useState<ColumnType[]>(initialColumns);
  const { toast } = useToast();

  const onDragEnd = (result: any) => {
    const { source, destination } = result;

    // If dropped outside a droppable area
    if (!destination) return;

    // If dropped in the same position
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }

    // Find source and destination columns
    const sourceColumn = columns.find((col) => col.id === source.droppableId);
    const destColumn = columns.find((col) => col.id === destination.droppableId);

    if (!sourceColumn || !destColumn) return;

    // If moving within the same column
    if (source.droppableId === destination.droppableId) {
      const newTasks = Array.from(sourceColumn.tasks);
      const [movedTask] = newTasks.splice(source.index, 1);
      newTasks.splice(destination.index, 0, movedTask);

      const newColumns = columns.map((col) =>
        col.id === sourceColumn.id ? { ...col, tasks: newTasks } : col
      );

      setColumns(newColumns);
    } else {
      // Moving to a different column
      const sourceTasks = Array.from(sourceColumn.tasks);
      const [movedTask] = sourceTasks.splice(source.index, 1);
      const destTasks = Array.from(destColumn.tasks);
      destTasks.splice(destination.index, 0, movedTask);

      const newColumns = columns.map((col) => {
        if (col.id === sourceColumn.id) {
          return { ...col, tasks: sourceTasks };
        }
        if (col.id === destColumn.id) {
          return { ...col, tasks: destTasks };
        }
        return col;
      });

      setColumns(newColumns);

      // Show toast notification
      toast({
        title: "Task Updated",
        description: `"${movedTask.title}" moved to ${destColumn.title}`,
      });
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-700";
      case "medium":
        return "bg-amber-100 text-amber-700";
      case "low":
        return "bg-green-100 text-green-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {columns.map((column) => (
          <div key={column.id} className="animate-fade-in">
            <Card className="h-full">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium">
                    {column.title}
                  </CardTitle>
                  <Badge variant="outline">{column.tasks.length}</Badge>
                </div>
                <CardDescription className="text-xs">
                  {column.id === "todo"
                    ? "Tasks to be started"
                    : column.id === "in-progress"
                    ? "Tasks currently in progress"
                    : column.id === "review"
                    ? "Tasks waiting for review"
                    : "Completed tasks"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Droppable droppableId={column.id}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                      className="space-y-3 min-h-[200px]"
                    >
                      {column.tasks.map((task, index) => (
                        <Draggable key={task.id} draggableId={task.id} index={index}>
                          {(provided, snapshot) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              className={`border rounded-md p-3 bg-card shadow-sm hover:shadow-md transition-all ${
                                snapshot.isDragging ? "opacity-80" : ""
                              }`}
                            >
                              <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                  <h3 className="font-medium text-sm">{task.title}</h3>
                                  <Badge
                                    variant="outline"
                                    className={getPriorityColor(task.priority)}
                                  >
                                    {task.priority}
                                  </Badge>
                                </div>
                                <p className="text-xs text-muted-foreground">
                                  {task.description}
                                </p>
                                {task.assignee && (
                                  <div className="flex items-center gap-2">
                                    <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center">
                                      <span className="text-[10px] font-medium">
                                        {task.assignee
                                          .split(" ")
                                          .map((n) => n[0])
                                          .join("")}
                                      </span>
                                    </div>
                                    <span className="text-xs">{task.assignee}</span>
                                  </div>
                                )}
                                {task.dueDate && (
                                  <div className="text-[11px] text-muted-foreground">
                                    Due:{" "}
                                    {new Date(task.dueDate).toLocaleDateString(
                                      undefined,
                                      { month: "short", day: "numeric" }
                                    )}
                                  </div>
                                )}
                              </div>
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </DragDropContext>
  );
}
