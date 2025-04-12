
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Bookmark, 
  ChevronLeft, 
  ChevronRight, 
  Highlighter, 
  Maximize2, 
  Minimize2, 
  TextSelect
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Paper } from "@/components/literature/PaperCard";

type ReaderViewProps = {
  paper: Paper;
  onUpdateProgress: (progress: number) => void;
};

export function ReaderView({ paper, onUpdateProgress }: ReaderViewProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10; // Example - would come from actual paper
  const progress = Math.round((currentPage / totalPages) * 100);

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) return;
    setCurrentPage(newPage);
    onUpdateProgress(Math.round((newPage / totalPages) * 100));
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
    // Actual fullscreen implementation would use Fullscreen API
  };

  return (
    <div className={`flex flex-col ${isFullscreen ? 'fixed inset-0 bg-background z-50' : ''}`}>
      <div className="bg-card p-4 rounded-t-lg shadow-sm">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div>
            <h2 className="text-lg font-semibold">{paper.title}</h2>
            <p className="text-sm text-muted-foreground mt-1">
              {paper.authors.join(", ")} • {paper.journal && paper.journal}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={toggleFullscreen}
              className="h-8 w-8 p-0"
            >
              {isFullscreen ? (
                <Minimize2 className="h-4 w-4" />
              ) : (
                <Maximize2 className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage <= 1}
              className="h-8 w-8 p-0"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <span className="text-sm">
              Page {currentPage} of {totalPages}
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage >= totalPages}
              className="h-8 w-8 p-0"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">{progress}%</span>
            <Progress value={progress} className="w-24 h-2" />
          </div>
        </div>
      </div>

      <div className="flex flex-1 min-h-[calc(100vh-16rem)]">
        <div className="hidden lg:block w-60 border-r p-4 bg-card">
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium mb-2">Tools</h3>
              <div className="flex flex-wrap gap-2">
                <Button variant="outline" size="sm" className="h-8">
                  <Highlighter className="h-4 w-4 mr-2" />
                  <span>Highlight</span>
                </Button>
                <Button variant="outline" size="sm" className="h-8">
                  <TextSelect className="h-4 w-4 mr-2" />
                  <span>Notes</span>
                </Button>
                <Button variant="outline" size="sm" className="h-8">
                  <Bookmark className="h-4 w-4 mr-2" />
                  <span>Bookmark</span>
                </Button>
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="text-sm font-medium mb-2">Keywords</h3>
              <div className="flex flex-wrap gap-1">
                {paper.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="text-sm font-medium mb-2">Contents</h3>
              <div className="space-y-1 text-sm">
                <button className="w-full text-left px-2 py-1 hover:bg-accent rounded-sm">
                  Abstract
                </button>
                <button className="w-full text-left px-2 py-1 hover:bg-accent rounded-sm">
                  Introduction
                </button>
                <button className="w-full text-left px-2 py-1 hover:bg-accent rounded-sm font-medium text-primary">
                  Methodology
                </button>
                <button className="w-full text-left px-2 py-1 hover:bg-accent rounded-sm">
                  Results
                </button>
                <button className="w-full text-left px-2 py-1 hover:bg-accent rounded-sm">
                  Discussion
                </button>
                <button className="w-full text-left px-2 py-1 hover:bg-accent rounded-sm">
                  Conclusion
                </button>
                <button className="w-full text-left px-2 py-1 hover:bg-accent rounded-sm">
                  References
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <Tabs defaultValue="paper" className="border-b">
            <div className="px-4">
              <TabsList className="mb-px">
                <TabsTrigger value="paper">Paper</TabsTrigger>
                <TabsTrigger value="notes">Notes</TabsTrigger>
                <TabsTrigger value="references">References</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="paper" className="p-4 sm:p-6 animate-in">
              {/* Placeholder for paper content */}
              <Card>
                <CardContent className="p-6">
                  <div className="prose max-w-none">
                    <h2>Methodology</h2>
                    <p>
                      This paper explores the intersection of quantum computing and machine learning,
                      specifically focusing on how quantum algorithms can enhance neural network
                      training. The methodology involves implementing variational quantum circuits
                      that can be trained using gradient-based optimization techniques.
                    </p>
                    <p>
                      We used a hybrid quantum-classical approach, where certain computations are
                      performed on quantum processors while others are executed on classical hardware.
                      This hybrid model allows us to leverage the strengths of both computing paradigms.
                    </p>
                    <h3>Experimental Setup</h3>
                    <p>
                      The experiments were conducted using IBM's quantum computing platform, with
                      5-qubit and 27-qubit quantum processors. For comparison, we also implemented
                      the algorithms on classical hardware using PyTorch and TensorFlow frameworks.
                    </p>
                    <p>
                      The datasets used for benchmarking include MNIST, CIFAR-10, and a custom
                      dataset specifically designed to highlight the advantages of quantum computing
                      for specific problem domains.
                    </p>
                    <h3>Quantum Circuit Design</h3>
                    <p>
                      Our quantum circuit design follows the principles outlined by Schuld et al.
                      (2020), with modifications to improve trainability and reduce the impact of
                      quantum noise on the results. The circuit consists of single-qubit rotations
                      and two-qubit entangling gates, arranged in a specific pattern to maximize
                      the expressive power of the model.
                    </p>
                    <p>
                      To mitigate the effects of noise, we employed error mitigation techniques
                      such as zero-noise extrapolation and probabilistic error cancellation.
                      Additionally, we implemented circuit cutting techniques to efficiently
                      execute larger circuits on devices with limited connectivity.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="notes" className="p-4">
              <div className="text-center text-muted-foreground py-12">
                <p>Your notes will appear here.</p>
                <p className="text-sm">Highlight text in the paper to add notes.</p>
              </div>
            </TabsContent>

            <TabsContent value="references" className="p-4">
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  References cited in this paper:
                </p>
                <ul className="space-y-3 text-sm">
                  <li>
                    <p className="font-medium">Schuld, M., Sweke, R., & Meyer, J. J. (2020)</p>
                    <p className="text-muted-foreground">
                      "Effect of data encoding on the expressive power of variational quantum machine learning models"
                    </p>
                  </li>
                  <li>
                    <p className="font-medium">Havlíček, V., Córcoles, A. D., et al. (2019)</p>
                    <p className="text-muted-foreground">
                      "Supervised learning with quantum-enhanced feature spaces"
                    </p>
                  </li>
                  <li>
                    <p className="font-medium">Biamonte, J., Wittek, P., et al. (2017)</p>
                    <p className="text-muted-foreground">
                      "Quantum machine learning"
                    </p>
                  </li>
                </ul>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
