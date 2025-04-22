
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Experiment } from "@/types/experiment";
import { FileText, Users } from "lucide-react";

interface ExperimentCardProps {
  experiment: Experiment;
  onClick: () => void;
}

export function ExperimentCard({ experiment, onClick }: ExperimentCardProps) {
  const calculateProgress = () => {
    if (experiment.tasks.length === 0) return 0;
    const completed = experiment.tasks.filter(task => task.status === "completed").length;
    return Math.round((completed / experiment.tasks.length) * 100);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "planned": return "bg-blue-100 text-blue-700 border-blue-300";
      case "in-progress": return "bg-amber-100 text-amber-700 border-amber-300";
      case "completed": return "bg-green-100 text-green-700 border-green-300";
      case "failed": return "bg-red-100 text-red-700 border-red-300";
      default: return "bg-gray-100 text-gray-700 border-gray-300";
    }
  };

  const progress = calculateProgress();

  return (
    <Card 
      className="hover:bg-accent/50 cursor-pointer transition-colors animate-fade-in" 
      onClick={onClick}
    >
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start mb-2">
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-primary" />
            {experiment.title}
          </CardTitle>
          <Badge variant="outline" className={getStatusColor(experiment.status)}>
            {experiment.status.charAt(0).toUpperCase() + experiment.status.slice(1)}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">{experiment.description}</p>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between text-sm">
            <span>Progress</span>
            <span>{progress}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
        <div className="mt-4 flex justify-between">
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Users className="h-4 w-4" />
            <span>{experiment.team.length} Members</span>
          </div>
          <div className="text-sm text-muted-foreground">
            {experiment.tasks.length} Tasks
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-0">
        <div className="flex gap-2 flex-wrap">
          {experiment.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
}
