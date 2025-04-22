
import { Button } from "@/components/ui/button";
import { ArrowLeft, BookmarkPlus, Download, Share2 } from "lucide-react";
import { Link } from "react-router-dom";

export function PaperActions() {
  return (
    <div className="flex space-x-2">
      <Button variant="outline" asChild>
        <Link to="/literature">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Literature
        </Link>
      </Button>
      <Button variant="outline" size="icon">
        <BookmarkPlus className="h-4 w-4" />
      </Button>
      <Button variant="outline" size="icon">
        <Download className="h-4 w-4" />
      </Button>
      <Button variant="outline" size="icon">
        <Share2 className="h-4 w-4" />
      </Button>
    </div>
  );
}

