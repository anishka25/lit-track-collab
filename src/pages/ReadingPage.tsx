
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHeader } from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { ReaderView } from "@/components/reading/ReaderView";
import { PaperActions } from "@/components/reading/PaperActions";
import { toast } from "sonner";
import { Paper } from "@/types/paper";
import { dummyPaper } from "@/data/mockPaper";

const ReadingPage = () => {
  const { paperId } = useParams();
  const [paper, setPaper] = useState<Paper | null>(null);
  
  useEffect(() => {
    // In a real app, fetch the paper data from an API
    // For now, just use the dummy paper
    setPaper(dummyPaper);
  }, [paperId]);

  const handleUpdateProgress = (progress: number) => {
    if (paper) {
      setPaper({ ...paper, progress });
      toast.success("Progress updated");
    }
  };

  if (!paper) {
    return <div>Loading...</div>;
  }

  return (
    <PageLayout>
      <PageHeader 
        title={paper.title}
        description={`by ${paper.authors.join(", ")} - ${paper.journal}`}
      >
        <PaperActions />
      </PageHeader>

      <div className="grid grid-cols-1 gap-6">
        <Card>
          <CardContent className="p-0">
            <ReaderView paper={paper} onUpdateProgress={handleUpdateProgress} />
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  );
};

export default ReadingPage;

