
import { useState } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHeader } from "@/components/layout/PageHeader";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar } from "@/components/ui/avatar";
import { teamMembers } from "@/data/mockTeam";
import { FileText, MessageSquare, Users } from "lucide-react";

const paperTemplates = [
  { id: "cvpr", name: "CVPR", description: "IEEE Conference on Computer Vision and Pattern Recognition" },
  { id: "iccv", name: "ICCV", description: "International Conference on Computer Vision" },
  { id: "nips", name: "NeurIPS", description: "Neural Information Processing Systems" },
  { id: "icml", name: "ICML", description: "International Conference on Machine Learning" },
  { id: "acl", name: "ACL", description: "Association for Computational Linguistics" },
];

const sections = [
  { id: "abstract", title: "Abstract" },
  { id: "introduction", title: "Introduction" },
  { id: "related-work", title: "Related Work" },
  { id: "methodology", title: "Methodology" },
  { id: "experiments", title: "Experiments" },
  { id: "results", title: "Results" },
  { id: "conclusion", title: "Conclusion" },
  { id: "references", title: "References" },
];

const CollaborativePaperPage = () => {
  const [activeTemplate, setActiveTemplate] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string>("abstract");
  const [paperContent, setPaperContent] = useState<Record<string, string>>({
    abstract: "Write your abstract here...",
    introduction: "Write your introduction here...",
    "related-work": "Discuss related work here...",
    methodology: "Describe your methodology here...",
    experiments: "Explain your experiments here...",
    results: "Present your results here...",
    conclusion: "Write your conclusion here...",
    references: "List your references here...",
  });
  
  const [suggestions, setSuggestions] = useState<string[]>([
    "Consider adding more details about your methodology.",
    "The introduction could benefit from more context about the problem.",
    "Your results section should include quantitative metrics.",
    "Make sure to cite recent work in your related work section.",
  ]);

  const handleContentChange = (section: string, content: string) => {
    setPaperContent(prev => ({
      ...prev,
      [section]: content
    }));
  };

  const handleAskAI = () => {
    // This would integrate with an AI service
    // For now, we'll just add a mock suggestion
    setSuggestions(prev => [
      "The AI suggests improving the structure of your methodology section.",
      ...prev
    ]);
  };

  return (
    <PageLayout>
      <PageHeader 
        title="Collaborative Paper Writing" 
        description="Work with your team to write research papers"
      >
        {!activeTemplate ? (
          <Button onClick={() => setActiveTemplate("cvpr")}>New Paper</Button>
        ) : (
          <div className="flex space-x-2">
            <Select value={activeTemplate} onValueChange={setActiveTemplate}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select Template" />
              </SelectTrigger>
              <SelectContent>
                {paperTemplates.map(template => (
                  <SelectItem key={template.id} value={template.id}>
                    {template.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button>Save Draft</Button>
            <Button variant="outline">Export</Button>
          </div>
        )}
      </PageHeader>

      {!activeTemplate ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {paperTemplates.map(template => (
            <Card 
              key={template.id} 
              className="hover:bg-accent/50 cursor-pointer transition-colors"
              onClick={() => setActiveTemplate(template.id)}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  {template.name}
                </CardTitle>
                <CardDescription>{template.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Select to start writing a paper using this template.</p>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <div className="lg:col-span-3 space-y-4">
            <Tabs 
              value={activeSection} 
              onValueChange={setActiveSection}
              className="bg-background border rounded-md"
            >
              <div className="p-2 overflow-x-auto">
                <TabsList className="inline-flex w-full">
                  {sections.map(section => (
                    <TabsTrigger key={section.id} value={section.id} className="flex-1">
                      {section.title}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
              
              {sections.map(section => (
                <TabsContent key={section.id} value={section.id} className="p-4">
                  <Textarea
                    className="min-h-[500px] font-mono"
                    value={paperContent[section.id]}
                    onChange={(e) => handleContentChange(section.id, e.target.value)}
                  />
                  
                  <div className="flex justify-between mt-4">
                    <div className="text-sm text-muted-foreground">
                      Last edited by John Researcher, 5 minutes ago
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">Format</Button>
                      <Button variant="outline" size="sm">Add Citation</Button>
                      <Button variant="outline" size="sm">Add Figure</Button>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
          
          <div className="space-y-4">
            {/* Collaborators */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  Collaborators
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {teamMembers.slice(0, 3).map(member => (
                    <div key={member.id} className="flex items-center gap-2">
                      <Avatar className="h-6 w-6">
                        <img src={member.avatar} alt={member.name} />
                      </Avatar>
                      <span className="text-sm">{member.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="pt-0">
                <Button variant="outline" size="sm" className="w-full">
                  Invite Collaborator
                </Button>
              </CardFooter>
            </Card>

            {/* AI Assistant */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <MessageSquare className="h-4 w-4" />
                  AI Research Assistant
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {suggestions.slice(0, 3).map((suggestion, idx) => (
                    <div key={idx} className="bg-muted p-2 rounded-md text-sm">
                      {suggestion}
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="pt-2">
                <div className="w-full space-y-2">
                  <Textarea 
                    placeholder="Ask the AI for help..." 
                    className="resize-none"
                    rows={2}
                  />
                  <Button onClick={handleAskAI} className="w-full">
                    Ask AI
                  </Button>
                </div>
              </CardFooter>
            </Card>

            {/* Paper Analytics */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Paper Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell>Word Count</TableCell>
                      <TableCell className="text-right">2,543</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Citations</TableCell>
                      <TableCell className="text-right">18</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Figures</TableCell>
                      <TableCell className="text-right">4</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Completion</TableCell>
                      <TableCell className="text-right">65%</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </PageLayout>
  );
};

export default CollaborativePaperPage;
