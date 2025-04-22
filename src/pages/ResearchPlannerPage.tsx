
import { useState } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHeader } from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProjectInputForm } from "@/components/planner/ProjectInputForm";
import { GeneratedTasks } from "@/components/planner/GeneratedTasks";
import { SuggestedLiterature } from "@/components/planner/SuggestedLiterature";
import { toast } from "sonner";

export type Task = {
  id: string;
  title: string;
  description: string;
  deadline: string;
  priority: "high" | "medium" | "low";
  status: "pending" | "in-progress" | "completed";
};

export type Literature = {
  id: string;
  title: string;
  authors: string[];
  abstract: string;
  publicationDate: string;
  journal: string;
  relevance: number;
  url?: string;
};

export type ResearchProject = {
  title: string;
  description: string;
  field: string;
  objectives: string[];
  timeline: {
    start: string;
    end: string;
  };
};

const ResearchPlannerPage = () => {
  const [project, setProject] = useState<ResearchProject | null>(null);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [literature, setLiterature] = useState<Literature[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [activeTab, setActiveTab] = useState("project");

  const handleProjectSubmit = (projectData: ResearchProject) => {
    setProject(projectData);
    setIsGenerating(true);
    
    // Simulate AI generating tasks and literature
    setTimeout(() => {
      generateTasks(projectData);
      generateLiterature(projectData);
      setIsGenerating(false);
      setActiveTab("tasks");
      toast.success("Research plan generated successfully!");
    }, 2000);
  };

  const generateTasks = (projectData: ResearchProject) => {
    // This would be replaced with actual AI task generation
    const generatedTasks: Task[] = [
      {
        id: "task-1",
        title: "Literature Review",
        description: `Conduct comprehensive literature review on ${projectData.field} to identify relevant research and gaps.`,
        deadline: addDays(new Date(), 14).toISOString().split('T')[0],
        priority: "high",
        status: "pending"
      },
      {
        id: "task-2",
        title: "Research Methodology Design",
        description: `Develop detailed methodology for ${projectData.title} research project.`,
        deadline: addDays(new Date(), 30).toISOString().split('T')[0],
        priority: "high",
        status: "pending"
      },
      {
        id: "task-3",
        title: "Data Collection Planning",
        description: "Plan data collection procedures, tools, and timeline.",
        deadline: addDays(new Date(), 45).toISOString().split('T')[0],
        priority: "medium",
        status: "pending"
      },
      {
        id: "task-4",
        title: "Ethics Review Submission",
        description: "Prepare and submit ethics review application if required.",
        deadline: addDays(new Date(), 21).toISOString().split('T')[0],
        priority: "medium",
        status: "pending"
      },
      {
        id: "task-5",
        title: "Initial Team Meeting",
        description: "Organize kick-off meeting with research team to discuss objectives and roles.",
        deadline: addDays(new Date(), 7).toISOString().split('T')[0],
        priority: "high",
        status: "pending"
      },
    ];
    setTasks(generatedTasks);
  };

  const generateLiterature = (projectData: ResearchProject) => {
    // This would be replaced with actual AI literature suggestions
    const suggestedLiterature: Literature[] = [
      {
        id: "lit-1",
        title: `Recent Advances in ${projectData.field}`,
        authors: ["Johnson, A.R.", "Smith, B."],
        abstract: `This comprehensive review examines the latest developments in ${projectData.field} with particular focus on methodological innovations.`,
        publicationDate: "2024-01-15",
        journal: "Journal of Advanced Research",
        relevance: 95,
        url: "https://example.org/paper1"
      },
      {
        id: "lit-2",
        title: "Methodological Approaches for Interdisciplinary Research",
        authors: ["Chen, L.", "Garcia, M.", "Wilson, P."],
        abstract: "This paper presents a framework for conducting interdisciplinary research with specific guidance on integrating diverse methodological approaches.",
        publicationDate: "2023-11-22",
        journal: "Interdisciplinary Studies Quarterly",
        relevance: 87,
        url: "https://example.org/paper2"
      },
      {
        id: "lit-3",
        title: `Theoretical Foundations of ${projectData.field}`,
        authors: ["Ahmed, K.", "Patel, S."],
        abstract: `An exploration of the underlying theoretical principles that form the foundation of research in ${projectData.field}.`,
        publicationDate: "2023-08-30",
        journal: "Theoretical Research Review",
        relevance: 82,
        url: "https://example.org/paper3"
      },
      {
        id: "lit-4",
        title: "Data Analysis Techniques for Modern Research",
        authors: ["Lee, J.", "Brown, T."],
        abstract: "This paper outlines innovative approaches to data analysis applicable across multiple research domains.",
        publicationDate: "2024-02-10",
        journal: "Data Science Journal",
        relevance: 78,
        url: "https://example.org/paper4"
      },
    ];
    setLiterature(suggestedLiterature);
  };

  // Helper function to add days to a date
  const addDays = (date: Date, days: number): Date => {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  };

  return (
    <PageLayout>
      <PageHeader
        title="Research Project Planner"
        description="AI-powered research planning assistant"
      >
        {project && (
          <Button variant="outline" onClick={() => setProject(null)}>
            Start New Project
          </Button>
        )}
      </PageHeader>

      <div className="space-y-6">
        {!project ? (
          <Card className="animate-fade-in">
            <CardHeader>
              <CardTitle>New Research Project</CardTitle>
              <CardDescription>
                Enter your research project details and our AI assistant will help you plan tasks
                and find relevant literature
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ProjectInputForm onSubmit={handleProjectSubmit} />
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-6 animate-fade-in">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-sm">
                  <div><span className="font-medium">Field:</span> {project.field}</div>
                  <div className="mt-2">
                    <span className="font-medium">Objectives:</span>
                    <ul className="list-disc list-inside mt-1 ml-2">
                      {project.objectives.map((objective, index) => (
                        <li key={index}>{objective}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-2">
                    <span className="font-medium">Timeline:</span>{" "}
                    {new Date(project.timeline.start).toLocaleDateString()} to{" "}
                    {new Date(project.timeline.end).toLocaleDateString()}
                  </div>
                </div>
              </CardContent>
            </Card>

            {isGenerating ? (
              <Card className="p-8 animate-pulse">
                <div className="flex flex-col items-center justify-center space-y-4">
                  <div className="h-8 w-8 rounded-full border-4 border-primary border-t-transparent animate-spin" />
                  <p className="text-sm text-muted-foreground">
                    AI is generating your research plan...
                  </p>
                </div>
              </Card>
            ) : (
              <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
                <TabsList>
                  <TabsTrigger value="project">Project</TabsTrigger>
                  <TabsTrigger value="tasks">Generated Tasks</TabsTrigger>
                  <TabsTrigger value="literature">Suggested Literature</TabsTrigger>
                </TabsList>
                <TabsContent value="project">
                  <Card>
                    <CardHeader>
                      <CardTitle>Project Overview</CardTitle>
                      <CardDescription>
                        Summary of your research project details
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-muted-foreground">
                        Your project plan has been generated. View the suggested tasks and literature using the tabs above.
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="tasks">
                  <GeneratedTasks tasks={tasks} />
                </TabsContent>
                <TabsContent value="literature">
                  <SuggestedLiterature literature={literature} />
                </TabsContent>
              </Tabs>
            )}
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default ResearchPlannerPage;
