
import { Book, ExternalLink } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Placeholder data
const recentLiterature = [
  {
    id: 1,
    title: "Machine Learning Approaches for Natural Language Processing",
    author: "Johnson et al.",
    progress: 75,
    tags: ["ML", "NLP"],
  },
  {
    id: 2,
    title: "Advancements in Quantum Computing Algorithms",
    author: "Zhang, Lei & Smith",
    progress: 30,
    tags: ["Quantum", "Computing"],
  },
  {
    id: 3,
    title: "Ethics in Artificial Intelligence Research",
    author: "Patel & Rodriguez",
    progress: 100,
    tags: ["AI", "Ethics"],
  },
];

export function LiteraturePreview() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div className="space-y-1">
          <CardTitle>Recent Literature</CardTitle>
          <CardDescription>Papers you're currently reading</CardDescription>
        </div>
        <Book className="h-5 w-5 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentLiterature.map((paper) => (
            <div
              key={paper.id}
              className="paper-card p-4 hover:bg-muted/30 animate-fade-in"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-sm font-medium line-clamp-1">{paper.title}</h3>
              </div>
              <p className="text-xs text-muted-foreground mb-2">{paper.author}</p>
              <div className="flex flex-wrap gap-1 mb-3">
                {paper.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs">Reading Progress</span>
                  <span className="text-xs font-medium">{paper.progress}%</span>
                </div>
                <Progress value={paper.progress} className="h-1" />
              </div>
              {paper.progress < 100 && (
                <div className="mt-3">
                  <Button
                    variant="outline" 
                    size="sm" 
                    className="w-full text-xs"
                    asChild
                  >
                    <Link to="/reading">
                      <span>Continue Reading</span>
                      <ExternalLink className="ml-2 h-3 w-3" />
                    </Link>
                  </Button>
                </div>
              )}
            </div>
          ))}
          <Button 
            variant="ghost" 
            size="sm" 
            className="w-full text-xs"
            asChild
          >
            <Link to="/literature">View All Literature</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
