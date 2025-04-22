
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Literature } from "@/pages/ResearchPlannerPage";
import { Book, ExternalLink } from "lucide-react";
import { toast } from "sonner";

interface SuggestedLiteratureProps {
  literature: Literature[];
}

export function SuggestedLiterature({ literature }: SuggestedLiteratureProps) {
  const handleAddToLibrary = (lit: Literature) => {
    // In a real implementation, this would add the paper to the user's library
    toast.success(`"${lit.title}" added to your literature library`);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Suggested Literature</CardTitle>
        <CardDescription>
          Relevant papers and publications for your research topic
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {literature.map((lit) => (
            <Card key={lit.id} className="overflow-hidden">
              <CardContent className="p-4">
                <div className="flex flex-col space-y-3">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <h4 className="font-semibold">{lit.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {lit.authors.join(", ")}
                      </p>
                    </div>
                    <Badge variant="outline" className="bg-blue-100 text-blue-700 border-blue-300">
                      {lit.journal}
                    </Badge>
                  </div>
                  <p className="text-sm">
                    {lit.abstract}
                  </p>
                  <div className="flex items-center justify-between text-xs">
                    <span>Published: {new Date(lit.publicationDate).toLocaleDateString()}</span>
                    <div className="flex items-center">
                      <span className="mr-2">Relevance:</span>
                      <Progress value={lit.relevance} className="h-2 w-20" />
                      <span className="ml-2">{lit.relevance}%</span>
                    </div>
                  </div>
                  <div className="flex justify-end gap-2 pt-2">
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => handleAddToLibrary(lit)}
                    >
                      <Book className="mr-2 h-4 w-4" />
                      Add to Library
                    </Button>
                    {lit.url && (
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => window.open(lit.url, "_blank")}
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Paper
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
