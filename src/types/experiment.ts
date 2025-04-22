
import { TeamMember } from "./team";

export type ExperimentStatus = "planned" | "in-progress" | "completed" | "failed";

export type ExperimentTask = {
  id: string;
  title: string;
  description: string;
  status: "todo" | "in-progress" | "completed";
  assignees: TeamMember[];
  dueDate?: string;
  attachments?: Attachment[];
  codeSnippet?: string;
};

export type Attachment = {
  id: string;
  name: string;
  type: string;
  url: string;
  uploadedAt: string;
};

export type ExperimentResult = {
  id: string;
  title: string;
  description: string;
  data?: any;
  conclusion?: string;
  attachments?: Attachment[];
};

export type Experiment = {
  id: string;
  title: string;
  description: string;
  status: ExperimentStatus;
  startDate: string;
  endDate?: string;
  tasks: ExperimentTask[];
  results: ExperimentResult[];
  team: TeamMember[];
  tags: string[];
};
