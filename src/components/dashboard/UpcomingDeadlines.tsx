
import { CalendarDays } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Placeholder data
const deadlines = [
  {
    id: 1,
    title: "Submit Research Proposal",
    date: "2025-04-20",
    priority: "high",
  },
  {
    id: 2,
    title: "Literature Review Due",
    date: "2025-04-25",
    priority: "medium",
  },
  {
    id: 3,
    title: "Weekly Team Meeting",
    date: "2025-04-15",
    priority: "medium",
  },
  {
    id: 4,
    title: "Data Analysis Submission",
    date: "2025-05-05",
    priority: "low",
  },
];

export function UpcomingDeadlines() {
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      month: "short",
      day: "numeric",
      year: "numeric",
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const getDaysUntil = (dateString: string) => {
    const today = new Date();
    const targetDate = new Date(dateString);
    const diffTime = targetDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
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

  const sortedDeadlines = [...deadlines].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div className="space-y-1">
          <CardTitle>Upcoming Deadlines</CardTitle>
          <CardDescription>Stay on track with your research</CardDescription>
        </div>
        <CalendarDays className="h-5 w-5 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {sortedDeadlines.map((deadline) => {
            const daysUntil = getDaysUntil(deadline.date);
            return (
              <div
                key={deadline.id}
                className="flex items-center justify-between hover:bg-muted/50 p-2 rounded-md transition-colors"
              >
                <div className="space-y-1">
                  <p className="text-sm font-medium">{deadline.title}</p>
                  <div className="flex items-center gap-2">
                    <p className="text-xs text-muted-foreground">
                      {formatDate(deadline.date)}
                    </p>
                    <Badge
                      variant="outline"
                      className={getPriorityColor(deadline.priority)}
                    >
                      {deadline.priority}
                    </Badge>
                  </div>
                </div>
                <div className="min-w-16 text-right">
                  <span
                    className={`text-xs font-bold ${
                      daysUntil <= 3
                        ? "text-red-600"
                        : daysUntil <= 7
                        ? "text-amber-600"
                        : "text-muted-foreground"
                    }`}
                  >
                    {daysUntil === 0
                      ? "Today"
                      : daysUntil === 1
                      ? "Tomorrow"
                      : `${daysUntil} days`}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
