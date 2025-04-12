
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHeader } from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { ReaderView } from "@/components/reading/ReaderView";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";

// Placeholder paper data
const paperData = {
  id: "paper-1",
  title: "Machine Learning Approaches for Natural Language Processing",
  authors: ["Johnson, A.R.", "Smith, T.", "Parker, M."],
  abstract:
    "This paper surveys recent advances in applying machine learning techniques to natural language processing tasks, with a focus on transformer-based models and their applications.",
  publicationDate: "2023-01-15",
  journal: "Journal of Artificial Intelligence",
  tags: ["ML", "NLP", "Transformers"],
  status: "reading",
  progress: 75,
};

const ReadingPage = () => {
  const { paperId } = useParams<{ paperId: string }>();
  const [paper, setPaper] = useState(paperData);

  const handleUpdateProgress = (progress: number) => {
    setPaper((prevPaper) => ({
      ...prevPaper,
      progress,
    }));
  };

  return (
    <PageLayout>
      <div className="mb-4">
        <Button variant="outline" size="sm" asChild>
          <Link to="/literature">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Literature
          </Link>
        </Button>
      </div>
      
      <div className="animate-fade-in">
        <ReaderView paper={paper} onUpdateProgress={handleUpdateProgress} />
      </div>
    </PageLayout>
  );
};

export default ReadingPage;
