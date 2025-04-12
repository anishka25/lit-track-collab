
import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  CalendarDays, 
  Users, 
  Tag,
  Star,
  StarOff,
  ExternalLink 
} from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

export type Paper = {
  id: string;
  title: string;
  authors: string[];
  abstract: string;
  publicationDate: string;
  journal?: string;
  tags: string[];
  status: "unread" | "reading" | "completed" | "archived";
  progress: number;
  isFavorite?: boolean;
};

type PaperCardProps = {
  paper: Paper;
  onFavoriteToggle?: (id: string) => void;
  className?: string;
};

export function PaperCard({ paper, onFavoriteToggle, className }: PaperCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [favorite, setFavorite] = useState(paper.isFavorite || false);

  const handleFavoriteToggle = () => {
    setFavorite(!favorite);
    if (onFavoriteToggle) {
      onFavoriteToggle(paper.id);
    }
  };

  const formatAuthors = (authors: string[]) => {
    if (authors.length <= 2) return authors.join(' & ');
    return `${authors[0]} et al.`;
  };

  return (
    <Card className={cn("paper-card overflow-hidden transition-all", className, {
      "shadow-md": isExpanded,
    })}>
      <CardContent className="p-4 pb-0">
        <div className="flex justify-between items-start gap-2">
          <h3 className="font-semibold text-sm">
            {paper.title}
          </h3>
          <button
            onClick={handleFavoriteToggle}
            className="text-resach-400 hover:text-resach-600 transition-colors"
          >
            {favorite ? (
              <Star className="h-4 w-4 fill-current" />
            ) : (
              <StarOff className="h-4 w-4" />
            )}
          </button>
        </div>
        
        <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
          <Users className="h-3.5 w-3.5" />
          <span>{formatAuthors(paper.authors)}</span>
        </div>
        
        {paper.journal && (
          <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
            <BookOpen className="h-3.5 w-3.5" />
            <span className="truncate">{paper.journal}</span>
          </div>
        )}
        
        <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
          <CalendarDays className="h-3.5 w-3.5" />
          <span>
            {new Date(paper.publicationDate).toLocaleDateString(undefined, {
              year: "numeric",
            })}
          </span>
        </div>
        
        <div className="mt-3 flex flex-wrap items-center gap-1">
          <Tag className="h-3.5 w-3.5 text-muted-foreground" />
          {paper.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-[10px] py-0">
              {tag}
            </Badge>
          ))}
        </div>
        
        <div className={cn("mt-3 text-xs text-muted-foreground transition-all", {
          "line-clamp-2": !isExpanded,
          "line-clamp-none": isExpanded,
        })}>
          <p>{paper.abstract}</p>
        </div>
        
        {paper.abstract.length > 100 && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-1 text-xs font-medium text-resach-600 hover:text-resach-700"
          >
            {isExpanded ? "Show less" : "Show more"}
          </button>
        )}
      </CardContent>
      
      <CardFooter className="p-4 flex justify-between items-center border-t mt-3">
        <div className="flex items-center">
          <Badge variant={
            paper.status === "unread" ? "outline" :
            paper.status === "reading" ? "secondary" :
            paper.status === "completed" ? "default" :
            "outline"
          }>
            {paper.status === "unread" ? "Unread" :
             paper.status === "reading" ? "In Progress" :
             paper.status === "completed" ? "Completed" :
             "Archived"}
          </Badge>
          
          {paper.status === "reading" && (
            <span className="text-xs ml-2 text-muted-foreground">
              {paper.progress}%
            </span>
          )}
        </div>
        
        <Button size="sm" variant="outline" asChild>
          <Link to={`/reading/${paper.id}`}>
            <span className="text-xs">Read</span>
            <ExternalLink className="h-3 w-3 ml-2" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
