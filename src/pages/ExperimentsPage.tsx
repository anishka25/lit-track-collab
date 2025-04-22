
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHeader } from "@/components/layout/PageHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ExperimentCard } from "@/components/experiments/ExperimentCard";
import { ExperimentTaskCard } from "@/components/experiments/ExperimentTaskCard";
import { AddExperimentDialog } from "@/components/experiments/AddExperimentDialog";
import { experiments } from "@/data/mockExperiments";
import { useState } from "react";
import { Experiment, ExperimentResult } from "@/types/experiment";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { Avatar } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { FileText, FilePlus, Paperclip } from "lucide-react";

const ExperimentsPage = () => {
  const [activeExperiments, setActiveExperiments] = useState<Experiment[]>(experiments);
  const [selectedExperiment, setSelectedExperiment] = useState<Experiment | null>(null);
  const [activeTab, setActiveTab] = useState("overview");
  
  const handleAddExperiment = (data: any) => {
    const newExperiment: Experiment = {
      id: `exp-${activeExperiments.length + 1}`,
      title: data.title,
      description: data.description,
      status: data.status,
      startDate: data.startDate,
      tasks: [],
      results: [],
      team: [],
      tags: data.tags ? data.tags.split(',').map((tag: string) => tag.trim()) : [],
    };
    
    setActiveExperiments([...activeExperiments, newExperiment]);
    toast.success("Experiment created successfully");
  };

  return (
    <PageLayout>
      <PageHeader 
        title="Experiments" 
        description="Manage your research experiments and track results"
      >
        <AddExperimentDialog onAddExperiment={handleAddExperiment} />
      </PageHeader>

      {selectedExperiment ? (
        <div className="space-y-6 animate-fade-in">
          <div className="flex justify-between items-start">
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-2xl font-semibold">{selectedExperiment.title}</h2>
                <Badge variant="outline" className={
                  selectedExperiment.status === "in-progress" ? "bg-amber-100 text-amber-700 border-amber-300" :
                  selectedExperiment.status === "completed" ? "bg-green-100 text-green-700 border-green-300" :
                  selectedExperiment.status === "failed" ? "bg-red-100 text-red-700 border-red-300" :
                  "bg-blue-100 text-blue-700 border-blue-300"
                }>
                  {selectedExperiment.status.charAt(0).toUpperCase() + selectedExperiment.status.slice(1)}
                </Badge>
              </div>
              <p className="text-muted-foreground mt-1">{selectedExperiment.description}</p>
              <div className="flex gap-2 mt-2">
                {selectedExperiment.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" onClick={() => setSelectedExperiment(null)}>
                Back to Experiments
              </Button>
              <Button>Edit Experiment</Button>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="text-sm">
              <span className="text-muted-foreground">Start Date:</span>{" "}
              {new Date(selectedExperiment.startDate).toLocaleDateString()}
            </div>
            {selectedExperiment.endDate && (
              <div className="text-sm">
                <span className="text-muted-foreground">End Date:</span>{" "}
                {new Date(selectedExperiment.endDate).toLocaleDateString()}
              </div>
            )}
            <Separator orientation="vertical" className="h-4" />
            <div className="text-sm flex items-center gap-1">
              <span className="text-muted-foreground">Team:</span>
              <div className="flex -space-x-2">
                {selectedExperiment.team.map((member) => (
                  <Avatar key={member.id} className="border-2 border-background w-6 h-6">
                    <img src={member.avatar} alt={member.name} />
                  </Avatar>
                ))}
              </div>
            </div>
          </div>
          
          <Tabs 
            defaultValue="overview" 
            className="space-y-4"
            value={activeTab}
            onValueChange={setActiveTab}
          >
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="tasks">
                Tasks ({selectedExperiment.tasks.length})
              </TabsTrigger>
              <TabsTrigger value="results">
                Results ({selectedExperiment.results.length})
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Tasks Summary</CardTitle>
                    <CardDescription>Overview of all tasks in this experiment</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <div>Total Tasks</div>
                        <div className="font-medium">{selectedExperiment.tasks.length}</div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div>Completed</div>
                        <div className="font-medium">{selectedExperiment.tasks.filter(t => t.status === "completed").length}</div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div>In Progress</div>
                        <div className="font-medium">{selectedExperiment.tasks.filter(t => t.status === "in-progress").length}</div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div>To Do</div>
                        <div className="font-medium">{selectedExperiment.tasks.filter(t => t.status === "todo").length}</div>
                      </div>
                      <Button 
                        variant="outline" 
                        className="w-full" 
                        onClick={() => setActiveTab("tasks")}
                      >
                        View All Tasks
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Results Summary</CardTitle>
                    <CardDescription>Latest findings and conclusions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {selectedExperiment.results.length > 0 ? (
                      <div className="space-y-4">
                        <div>
                          <p className="text-sm font-medium">Latest Result:</p>
                          <p className="text-lg font-semibold mt-1">
                            {selectedExperiment.results[0].title}
                          </p>
                          <p className="text-sm text-muted-foreground mt-1">
                            {selectedExperiment.results[0].description}
                          </p>
                        </div>
                        <Button 
                          variant="outline" 
                          className="w-full" 
                          onClick={() => setActiveTab("results")}
                        >
                          View All Results
                        </Button>
                      </div>
                    ) : (
                      <div className="text-center py-6">
                        <FileText className="mx-auto h-12 w-12 text-muted-foreground opacity-50 mb-4" />
                        <p className="text-muted-foreground">No results recorded yet</p>
                        <Button 
                          className="mt-4" 
                          onClick={() => setActiveTab("results")}
                        >
                          Add Result
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="tasks" className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium">Tasks</h3>
                <Button>
                  <FilePlus className="mr-2 h-4 w-4" />
                  Add Task
                </Button>
              </div>
              
              <div className="space-y-3">
                {selectedExperiment.tasks.length > 0 ? (
                  selectedExperiment.tasks.map((task) => (
                    <ExperimentTaskCard key={task.id} task={task} />
                  ))
                ) : (
                  <Card>
                    <CardContent className="text-center py-12">
                      <FileText className="mx-auto h-12 w-12 text-muted-foreground opacity-50 mb-4" />
                      <p className="text-muted-foreground mb-4">No tasks added to this experiment yet</p>
                      <Button>Add Your First Task</Button>
                    </CardContent>
                  </Card>
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="results" className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium">Results</h3>
                <Button>
                  <FilePlus className="mr-2 h-4 w-4" />
                  Add Result
                </Button>
              </div>
              
              {selectedExperiment.results.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedExperiment.results.map((result) => (
                    <Card key={result.id} className="animate-fade-in">
                      <CardHeader>
                        <CardTitle className="text-lg">{result.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">{result.description}</p>
                        
                        {result.data && (
                          <div className="mb-4">
                            <p className="text-sm font-medium mb-2">Data:</p>
                            <pre className="bg-muted p-4 rounded text-xs overflow-auto max-h-[200px]">
                              {JSON.stringify(result.data, null, 2)}
                            </pre>
                          </div>
                        )}
                        
                        {result.conclusion && (
                          <div className="mb-4">
                            <p className="text-sm font-medium mb-2">Conclusion:</p>
                            <p className="text-sm">{result.conclusion}</p>
                          </div>
                        )}
                        
                        {result.attachments && result.attachments.length > 0 && (
                          <div>
                            <p className="text-sm font-medium mb-2">Attachments:</p>
                            <div className="space-y-2">
                              {result.attachments.map((attachment) => (
                                <div key={attachment.id} className="flex items-center gap-2 p-2 bg-muted rounded">
                                  <Paperclip className="h-4 w-4 text-muted-foreground" />
                                  <span className="text-sm">{attachment.name}</span>
                                  <Button variant="ghost" size="sm" className="ml-auto">View</Button>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <Card>
                  <CardContent className="text-center py-12">
                    <FileText className="mx-auto h-12 w-12 text-muted-foreground opacity-50 mb-4" />
                    <p className="text-muted-foreground mb-4">No results recorded for this experiment yet</p>
                    <Button>Add Your First Result</Button>
                  </CardContent>
                </Card>
              )}
            </TabsContent>
          </Tabs>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {activeExperiments.map((experiment) => (
            <ExperimentCard 
              key={experiment.id} 
              experiment={experiment}
              onClick={() => setSelectedExperiment(experiment)}
            />
          ))}
        </div>
      )}
    </PageLayout>
  );
};

export default ExperimentsPage;
