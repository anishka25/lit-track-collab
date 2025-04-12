
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHeader } from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { ReaderView } from "@/components/reading/ReaderView";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BookmarkPlus, Download, Share2 } from "lucide-react";
import { Link } from "react-router-dom";

type PaperStatus = "unread" | "reading" | "completed" | "archived";

type Paper = {
  id: string;
  title: string;
  authors: string[];
  abstract: string;
  publicationDate: string;
  journal: string;
  tags: string[];
  status: PaperStatus;
  progress: number;
};

// Mock paper data
const dummyPaper: Paper = {
  id: "paper-1",
  title: "Advances in Neural Information Processing Systems",
  authors: ["John Smith", "Jane Doe", "Bob Johnson"],
  abstract: "This paper introduces a novel approach to neural information processing that significantly improves performance on benchmark tasks. We demonstrate through extensive experimentation that our method outperforms existing state-of-the-art approaches while requiring fewer computational resources.",
  publicationDate: "2023-06-15",
  journal: "Journal of Artificial Intelligence Research",
  tags: ["Machine Learning", "Neural Networks", "Information Processing"],
  status: "reading",
  progress: 35,
};

const ReadingPage = () => {
  const { paperId } = useParams();
  const [paper, setPaper] = useState<Paper | null>(null);
  
  useEffect(() => {
    // In a real app, fetch the paper data from an API
    // For now, just use the dummy paper
    setPaper(dummyPaper);
  }, [paperId]);

  if (!paper) {
    return <div>Loading...</div>;
  }

  return (
    <PageLayout>
      <PageHeader 
        title={paper.title}
        description={`by ${paper.authors.join(", ")} - ${paper.journal}`}
      >
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
      </PageHeader>

      <div className="grid grid-cols-1 gap-6">
        <Card>
          <CardContent className="p-0">
            <ReaderView paper={paper} />
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  );
};

export default ReadingPage;
