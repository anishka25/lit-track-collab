
import { Team, TeamMember } from "@/types/team";

export const teamMembers: TeamMember[] = [
  {
    id: "member-1",
    name: "John Researcher",
    role: "Team Lead",
    email: "john@example.com",
    avatar: "https://i.pravatar.cc/150?img=1",
    taskProgress: {
      completed: 12,
      total: 20
    },
    dailyUpdates: [
      {
        id: "update-1-1",
        date: "2025-04-22",
        content: "Finished literature review for the neural network project. Will start working on the methodology section tomorrow."
      },
      {
        id: "update-1-2",
        date: "2025-04-21",
        content: "Met with the team to discuss progress. Assigned new tasks to everyone."
      }
    ]
  },
  {
    id: "member-2",
    name: "Sarah Chen",
    role: "Research Assistant",
    email: "sarah@example.com",
    avatar: "https://i.pravatar.cc/150?img=2",
    taskProgress: {
      completed: 8,
      total: 15
    },
    dailyUpdates: [
      {
        id: "update-2-1",
        date: "2025-04-22",
        content: "Completed data preprocessing for experiment 2. Results look promising."
      }
    ]
  },
  {
    id: "member-3",
    name: "Alex Kim",
    role: "Data Scientist",
    email: "alex@example.com",
    avatar: "https://i.pravatar.cc/150?img=3",
    taskProgress: {
      completed: 15,
      total: 18
    },
    dailyUpdates: [
      {
        id: "update-3-1",
        date: "2025-04-22",
        content: "Finished implementing the new clustering algorithm. Will test it tomorrow."
      },
      {
        id: "update-3-2",
        date: "2025-04-21",
        content: "Started working on data visualization for our latest results."
      }
    ]
  },
  {
    id: "member-4",
    name: "Maria Garcia",
    role: "Lab Technician",
    email: "maria@example.com",
    avatar: "https://i.pravatar.cc/150?img=4",
    taskProgress: {
      completed: 10,
      total: 12
    },
    dailyUpdates: [
      {
        id: "update-4-1",
        date: "2025-04-22",
        content: "Set up new experiment environment. Ready for testing tomorrow."
      }
    ]
  },
  {
    id: "member-5",
    name: "David Wilson",
    role: "Research Fellow",
    email: "david@example.com",
    avatar: "https://i.pravatar.cc/150?img=5",
    taskProgress: {
      completed: 7,
      total: 14
    },
    dailyUpdates: [
      {
        id: "update-5-1",
        date: "2025-04-22",
        content: "Working on the literature review section. Found some interesting papers to include."
      }
    ]
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
