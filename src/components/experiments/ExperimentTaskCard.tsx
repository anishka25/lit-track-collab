
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ExperimentTask } from "@/types/experiment";
import { Calendar, ChevronDown, Code, FileText, Paperclip } from "lucide-react";
import { useState } from "react";

interface ExperimentTaskCardProps {
  task: ExperimentTask;
}

export function ExperimentTaskCard({ task }: ExperimentTaskCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge variant="outline" className="bg-green-100 text-green-700 border-green-300">Completed</Badge>;
      case "in-progress":
        return <Badge variant="outline" className="bg-amber-100 text-amber-700 border-amber-300">In Progress</Badge>;
      case "todo":
        return <Badge variant="outline" className="bg-gray-100 text-gray-700 border-gray-300">Todo</Badge>;
      default:
        return <Badge variant="outline" className="bg-gray-100 text-gray-700 border-gray-300">Unknown</Badge>;
    }
  };

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="animate-fade-in"
    >
      <Card className={isOpen ? "ring-2 ring-primary/20" : ""}>
        <CardHeader className="pb-2">
          <div className="flex justify-between">
            <div className="flex items-start gap-2">
              <div className="pt-1">
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-6 w-6 rounded-full">
                    <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? "transform rotate-180" : ""}`} />
                  </Button>
                </CollapsibleTrigger>
              </div>
              <div>
                <CardTitle className="text-base">{task.title}</CardTitle>
                <p className="text-sm text-muted-foreground mt-1">{task.description}</p>
              </div>
            </div>
            {getStatusBadge(task.status)}
          </div>
        </CardHeader>
        
        <CollapsibleContent>
          <CardContent>
            <div className="space-y-4">
              {task.dueDate && (
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span>Due: {new Date(task.dueDate).toLocaleDateString()}</span>
                </div>
              )}
              
              <div>
                <p className="text-sm font-medium mb-2">Assignees:</p>
                <div className="flex flex-wrap gap-2">
                  {task.assignees.map((assignee) => (
                    <div key={assignee.id} className="flex items-center gap-2 bg-accent/50 rounded-full pl-1 pr-3 py-1">
                      <Avatar className="h-6 w-6">
                        <img src={assignee.avatar} alt={assignee.name} />
                      </Avatar>
                      <span className="text-xs">{assignee.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {task.attachments && task.attachments.length > 0 && (
                <div>
                  <p className="text-sm font-medium mb-2">Attachments:</p>
                  <div className="space-y-2">
                    {task.attachments.map((attachment) => (
                      <div key={attachment.id} className="flex items-center gap-2 p-2 bg-muted rounded">
                        <Paperclip className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{attachment.name}</span>
                        <Button variant="ghost" size="sm" className="ml-auto">View</Button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {task.codeSnippet && (
                <div>
                  <p className="text-sm font-medium mb-2 flex items-center gap-1">
                    <Code className="h-4 w-4" />
                    Code Snippet:
                  </p>
                  <pre className="bg-muted p-4 rounded text-xs overflow-auto max-h-[200px]">
                    {task.codeSnippet}
                  </pre>
                </div>
              )}
              
              <div className="flex justify-end gap-2">
                <Button variant="outline" size="sm">Edit Task</Button>
                <Button size="sm">Update Status</Button>
              </div>
            </div>
          </CardContent>
        </CollapsibleContent>
      </Card>
    </Collapsible>
  );
}
