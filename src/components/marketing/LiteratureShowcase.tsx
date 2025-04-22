
import { Bot, Highlighter, Underline } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function LiteratureShowcase() {
  return (
    <Card className="max-w-4xl mx-auto overflow-hidden bg-gradient-to-br from-resach-700/5 to-resach-500/5 hover:shadow-lg transition-all duration-300 animate-fade-in">
      <CardContent className="p-6">
        <div className="grid md:grid-cols-3 gap-4">
          {/* Paper View */}
          <div className="md:col-span-2 space-y-4">
            <div className="bg-card rounded-lg p-4 shadow-sm">
              <h3 className="font-semibold mb-2">Quantum Computing Applications</h3>
              <p className="text-sm text-muted-foreground line-clamp-3">
                This revolutionary paper explores the practical applications of quantum computing
                in modern research environments, focusing on optimization problems and machine learning...
              </p>
              <div className="flex gap-2 mt-3">
                <Badge variant="outline">Quantum</Badge>
                <Badge variant="outline">Computing</Badge>
              </div>
            </div>
            
            {/* Notes Section */}
            <div className="bg-card rounded-lg p-4 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-medium">Research Notes</h4>
                <div className="flex gap-2">
                  <button className="p-1.5 hover:bg-muted rounded-md transition-colors">
                    <Highlighter className="h-4 w-4 text-resach-600" />
                  </button>
                  <button className="p-1.5 hover:bg-muted rounded-md transition-colors">
                    <Underline className="h-4 w-4 text-resach-600" />
                  </button>
                </div>
              </div>
              <div className="bg-muted/50 rounded-md p-3 text-sm min-h-[100px]">
                <p>Key findings indicate a 50% improvement in processing speed...</p>
                <p className="mt-2 bg-yellow-100/50 px-1">The quantum entanglement approach shows promise</p>
              </div>
            </div>
          </div>

          {/* Research Assistant Bot */}
          <div className="bg-card rounded-lg p-4 shadow-sm h-full">
            <div className="flex items-center gap-2 mb-3">
              <Bot className="h-5 w-5 text-resach-600" />
              <h4 className="font-medium">Research Assistant</h4>
            </div>
            <div className="space-y-3">
              <div className="bg-muted/50 rounded-md p-2 text-sm">
                How can I help with your research today?
              </div>
              <div className="bg-resach-500/5 rounded-md p-2 text-sm">
                Can you summarize the key findings?
              </div>
              <div className="bg-muted/50 rounded-md p-2 text-sm">
                The paper demonstrates significant improvements in quantum processing...
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
