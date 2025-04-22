
export type TeamMember = {
  id: string;
  name: string;
  role: string;
  email: string;
  avatar?: string;
};

export type Team = {
  id: string;
  name: string;
  description: string;
  members: TeamMember[];
  createdAt: string;
};
