
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHeader } from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PaperCard, Paper } from "@/components/literature/PaperCard";
import { Plus, Search } from "lucide-react";
import { useState } from "react";

// Placeholder data
const initialPapers: Paper[] = [
  {
    id: "paper-1",
    title: "Machine Learning Approaches for Natural Language Processing",
    authors: ["Johnson", "A.R.", "Smith", "T."],
    abstract:
      "This paper surveys recent advances in applying machine learning techniques to natural language processing tasks, with a focus on transformer-based models and their applications.",
    publicationDate: "2023-01-15",
    journal: "Journal of Artificial Intelligence",
    tags: ["ML", "NLP", "Transformers"],
    status: "reading",
    progress: 75,
    isFavorite: true,
  },
  {
    id: "paper-2",
    title: "Quantum Computing Algorithms for Optimization Problems",
    authors: ["Chen", "S.", "Williams", "P."],
    abstract:
      "We present a novel quantum computing algorithm for solving complex optimization problems that shows quadratic speedup over classical approaches on specific problem instances.",
    publicationDate: "2024-02-10",
    journal: "Quantum Information Processing",
    tags: ["Quantum", "Algorithms", "Optimization"],
    status: "unread",
    progress: 0,
  },
  {
    id: "paper-3",
    title: "Ethical Considerations in AI Research",
    authors: ["Singh", "R.", "Johnson", "L.", "Patel", "K."],
    abstract:
      "This paper discusses the ethical challenges and considerations when developing and deploying artificial intelligence systems, with recommendations for responsible research practices.",
    publicationDate: "2023-11-22",
    journal: "AI Ethics Review",
    tags: ["Ethics", "AI", "Policy"],
    status: "completed",
    progress: 100,
  },
  {
    id: "paper-4",
    title: "Advances in Deep Reinforcement Learning",
    authors: ["Zhang", "W.", "Roberts", "J."],
    abstract:
      "A comprehensive review of recent advances in deep reinforcement learning, covering policy optimization, model-based methods, and multi-agent systems.",
    publicationDate: "2024-01-05",
    journal: "Machine Learning Review",
    tags: ["RL", "Deep Learning"],
    status: "reading",
    progress: 45,
  },
  {
    id: "paper-5",
    title: "Explainable AI: Methods and Applications",
    authors: ["Anderson", "M.", "Garcia", "C."],
    abstract:
      "This paper reviews current approaches to making AI systems more explainable and interpretable, with applications in healthcare, finance, and legal domains.",
    publicationDate: "2023-09-30",
    journal: "Interpretable Machine Learning Journal",
    tags: ["XAI", "Interpretability"],
    status: "archived",
    progress: 100,
  },
  {
    id: "paper-6",
    title: "Neural Architecture Search: A Survey",
    authors: ["Kim", "D.", "Patel", "S."],
    abstract:
      "A comprehensive survey of neural architecture search methods, including gradient-based, evolutionary, and reinforcement learning approaches.",
    publicationDate: "2023-07-12",
    journal: "Neural Computation",
    tags: ["NAS", "Deep Learning"],
    status: "unread",
    progress: 0,
    isFavorite: true,
  },
];

const LiteraturePage = () => {
  const [papers, setPapers] = useState<Paper[]>(initialPapers);
  const [searchQuery, setSearchQuery] = useState("");

  const handleFavoriteToggle = (id: string) => {
    setPapers((prevPapers) =>
      prevPapers.map((paper) =>
        paper.id === id
          ? { ...paper, isFavorite: !paper.isFavorite }
          : paper
      )
    );
  };

  const filteredPapers = (status: string) => {
    return papers
      .filter((paper) => {
        // Filter by search query
        if (searchQuery) {
          const query = searchQuery.toLowerCase();
          return (
            paper.title.toLowerCase().includes(query) ||
            paper.authors.some((author) => author.toLowerCase().includes(query)) ||
            paper.abstract.toLowerCase().includes(query) ||
            paper.tags.some((tag) => tag.toLowerCase().includes(query))
          );
        }
        return true;
      })
      .filter((paper) => {
        // Filter by tab/status
        if (status === "all") return true;
        if (status === "favorites") return paper.isFavorite;
        return paper.status === status;
      });
  };

  return (
    <PageLayout>
      <PageHeader 
        title="Literature Manager" 
        description="Organize and track your research papers"
      >
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Paper
        </Button>
      </PageHeader>

      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search papers, authors, keywords..."
          className="pl-10"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Papers</TabsTrigger>
          <TabsTrigger value="unread">Unread</TabsTrigger>
          <TabsTrigger value="reading">In Progress</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
          <TabsTrigger value="favorites">Favorites</TabsTrigger>
          <TabsTrigger value="archived">Archived</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredPapers("all").map((paper) => (
              <PaperCard
                key={paper.id}
                paper={paper}
                onFavoriteToggle={handleFavoriteToggle}
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="unread" className="animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredPapers("unread").map((paper) => (
              <PaperCard
                key={paper.id}
                paper={paper}
                onFavoriteToggle={handleFavoriteToggle}
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="reading" className="animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredPapers("reading").map((paper) => (
              <PaperCard
                key={paper.id}
                paper={paper}
                onFavoriteToggle={handleFavoriteToggle}
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="completed" className="animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredPapers("completed").map((paper) => (
              <PaperCard
                key={paper.id}
                paper={paper}
                onFavoriteToggle={handleFavoriteToggle}
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="favorites" className="animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredPapers("favorites").map((paper) => (
              <PaperCard
                key={paper.id}
                paper={paper}
                onFavoriteToggle={handleFavoriteToggle}
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="archived" className="animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredPapers("archived").map((paper) => (
              <PaperCard
                key={paper.id}
                paper={paper}
                onFavoriteToggle={handleFavoriteToggle}
              />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </PageLayout>
  );
};

export default LiteraturePage;
