
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ResearchProject } from "@/pages/ResearchPlannerPage";
import { Plus, Minus } from "lucide-react";

interface ProjectInputFormProps {
  onSubmit: (project: ResearchProject) => void;
}

export function ProjectInputForm({ onSubmit }: ProjectInputFormProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [field, setField] = useState("");
  const [objectives, setObjectives] = useState<string[]>([""]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleAddObjective = () => {
    setObjectives([...objectives, ""]);
  };

  const handleRemoveObjective = (index: number) => {
    if (objectives.length > 1) {
      const updatedObjectives = [...objectives];
      updatedObjectives.splice(index, 1);
      setObjectives(updatedObjectives);
    }
  };

  const handleObjectiveChange = (index: number, value: string) => {
    const updatedObjectives = [...objectives];
    updatedObjectives[index] = value;
    setObjectives(updatedObjectives);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Filter out empty objectives
    const filteredObjectives = objectives.filter(obj => obj.trim() !== "");
    
    const projectData: ResearchProject = {
      title,
      description,
      field,
      objectives: filteredObjectives,
      timeline: {
        start: startDate,
        end: endDate,
      },
    };
    
    onSubmit(projectData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium mb-1">
            Project Title
          </label>
          <Input
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter the title of your research project"
            required
          />
        </div>

        <div>
          <label htmlFor="field" className="block text-sm font-medium mb-1">
            Research Field
          </label>
          <Input
            id="field"
            value={field}
            onChange={(e) => setField(e.target.value)}
            placeholder="e.g., Machine Learning, Neuroscience, Climate Science"
            required
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium mb-1">
            Project Description
          </label>
          <Textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Briefly describe your research project"
            className="resize-none min-h-[100px]"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Research Objectives
          </label>
          <div className="space-y-3">
            {objectives.map((objective, index) => (
              <div key={index} className="flex gap-2">
                <Input
                  value={objective}
                  onChange={(e) => handleObjectiveChange(index, e.target.value)}
                  placeholder={`Objective ${index + 1}`}
                  required={index === 0}
                />
                {index === objectives.length - 1 ? (
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    onClick={handleAddObjective}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                ) : (
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    onClick={() => handleRemoveObjective(index)}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="start-date" className="block text-sm font-medium mb-1">
              Start Date
            </label>
            <Input
              id="start-date"
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="end-date" className="block text-sm font-medium mb-1">
              End Date
            </label>
            <Input
              id="end-date"
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              required
            />
          </div>
        </div>
      </div>

      <Button type="submit" className="w-full">
        Generate Research Plan
      </Button>
    </form>
  );
}
