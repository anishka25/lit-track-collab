
import { Team, TeamMember } from "@/types/team";

export const teamMembers: TeamMember[] = [
  {
    id: "member-1",
    name: "John Researcher",
    role: "Team Lead",
    email: "john@example.com",
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: "member-2",
    name: "Sarah Chen",
    role: "Research Assistant",
    email: "sarah@example.com",
    avatar: "https://i.pravatar.cc/150?img=2",
  },
  {
    id: "member-3",
    name: "Alex Kim",
    role: "Data Scientist",
    email: "alex@example.com",
    avatar: "https://i.pravatar.cc/150?img=3",
  },
  {
    id: "member-4",
    name: "Maria Garcia",
    role: "Lab Technician",
    email: "maria@example.com",
    avatar: "https://i.pravatar.cc/150?img=4",
  },
  {
    id: "member-5",
    name: "David Wilson",
    role: "Research Fellow",
    email: "david@example.com",
    avatar: "https://i.pravatar.cc/150?img=5",
  },
];

export const teams: Team[] = [
  {
    id: "team-1",
    name: "Neural Networks Research Group",
    description: "Focused on advancing neural network architectures and applications",
    members: [teamMembers[0], teamMembers[1], teamMembers[2]],
    createdAt: "2024-01-15",
  },
  {
    id: "team-2",
    name: "Quantum Computing Lab",
    description: "Exploring practical applications of quantum computing",
    members: [teamMembers[0], teamMembers[3], teamMembers[4]],
    createdAt: "2024-02-20",
  },
];
