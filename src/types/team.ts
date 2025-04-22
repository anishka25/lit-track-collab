
export type TeamMember = {
  id: string;
  name: string;
  role: string;
  email: string;
  avatar?: string;
  taskProgress?: {
    completed: number;
    total: number;
  };
  dailyUpdates?: DailyUpdate[];
};

export type DailyUpdate = {
  id: string;
  date: string;
  content: string;
};

export type Team = {
  id: string;
  name: string;
  description: string;
  members: TeamMember[];
  createdAt: string;
};
