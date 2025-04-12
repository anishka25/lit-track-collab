
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

// Placeholder data
const milestones = [
  {
    id: 1,
    title: "Research Proposal",
    date: "2025-02-15",
    status: "completed",
    description:
      "Submitted and approved research proposal for quantum computing applications in machine learning.",
  },
  {
    id: 2,
    title: "Literature Review",
    date: "2025-03-01",
    status: "completed",
    description:
      "Completed comprehensive literature review of quantum machine learning approaches.",
  },
  {
    id: 3,
    title: "Methodology Development",
    date: "2025-03-20",
    status: "in-progress",
    description:
      "Developing experimental methodology for quantum neural networks.",
  },
  {
    id: 4,
    title: "Data Collection",
    date: "2025-04-10",
    status: "in-progress",
    description:
      "Gathering experimental data for model validation and testing.",
  },
  {
    id: 5,
    title: "Preliminary Results",
    date: "2025-05-15",
    status: "pending",
    description: "Analyze initial experimental results and refine approach.",
  },
  {
    id: 6,
    title: "Final Analysis",
    date: "2025-06-20",
    status: "pending",
    description:
      "Complete comprehensive analysis of experimental results and prepare manuscript.",
  },
  {
    id: 7,
    title: "Paper Submission",
    date: "2025-07-15",
    status: "pending",
    description: "Submit research paper to conference/journal.",
  },
];

export function ResearchTimeline() {
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      month: "long",
      day: "numeric",
      year: "numeric",
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 border-green-300 text-green-700";
      case "in-progress":
        return "bg-amber-100 border-amber-300 text-amber-700";
      case "pending":
        return "bg-gray-100 border-gray-300 text-gray-700";
      default:
        return "bg-gray-100 border-gray-300 text-gray-700";
    }
  };

  const sortedMilestones = [...milestones].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle>Research Timeline</CardTitle>
        <CardDescription>Key milestones for your research project</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-5 bottom-5 w-0.5 bg-border" />

          <div className="space-y-8">
            {sortedMilestones.map((milestone, index) => (
              <div
                key={milestone.id}
                className={cn("relative pl-12 animate-fade-in", {
                  "animate-in-delay-1": index === 0,
                  "animate-in-delay-2": index === 1,
                  "animate-in-delay-3": index === 2,
                  "animate-in-delay-4": index > 2,
                })}
              >
                {/* Circle on timeline */}
                <div
                  className={cn(
                    "absolute left-0 w-8 h-8 rounded-full border-4 flex items-center justify-center",
                    getStatusColor(milestone.status)
                  )}
                >
                  {milestone.status === "completed" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-check"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  )}
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-medium">
                      {milestone.title}
                    </h3>
                    <Badge
                      variant="outline"
                      className={cn(
                        "text-xs",
                        milestone.status === "completed"
                          ? "bg-green-100 text-green-700 border-green-300"
                          : milestone.status === "in-progress"
                          ? "bg-amber-100 text-amber-700 border-amber-300"
                          : "bg-gray-100 text-gray-700 border-gray-300"
                      )}
                    >
                      {milestone.status === "completed"
                        ? "Completed"
                        : milestone.status === "in-progress"
                        ? "In Progress"
                        : "Pending"}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {formatDate(milestone.date)}
                  </p>
                  <p className="text-sm">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
