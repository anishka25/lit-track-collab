
export type PaperStatus = "unread" | "reading" | "completed" | "archived";

export type Paper = {
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

