
import { Experiment } from "@/types/experiment";
import { teamMembers } from "./mockTeam";

export const experiments: Experiment[] = [
  {
    id: "exp-1",
    title: "Neural Network Performance Optimization",
    description: "Investigating techniques to improve training efficiency and model performance",
    status: "in-progress",
    startDate: "2025-03-01",
    tasks: [
      {
        id: "task-1",
        title: "Literature Review",
        description: "Review current optimization techniques in the literature",
        status: "completed",
        assignees: [teamMembers[1]],
        dueDate: "2025-03-10",
        attachments: [
          {
            id: "att-1",
            name: "Literature Review Summary.pdf",
            type: "application/pdf",
            url: "#",
            uploadedAt: "2025-03-09",
          },
        ],
      },
      {
        id: "task-2",
        title: "Implement Baseline Models",
        description: "Implement baseline models for comparison",
        status: "completed",
        assignees: [teamMembers[2]],
        dueDate: "2025-03-15",
        codeSnippet: "import tensorflow as tf\n\ndef build_baseline_model():\n    model = tf.keras.Sequential([\n        tf.keras.layers.Dense(128, activation='relu'),\n        tf.keras.layers.Dense(64, activation='relu'),\n        tf.keras.layers.Dense(10, activation='softmax')\n    ])\n    return model",
      },
      {
        id: "task-3",
        title: "Implement Optimization Techniques",
        description: "Apply various optimization techniques to the baseline models",
        status: "in-progress",
        assignees: [teamMembers[0], teamMembers[2]],
        dueDate: "2025-04-01",
      },
      {
        id: "task-4",
        title: "Evaluate and Compare Results",
        description: "Evaluate the performance of different optimization techniques",
        status: "todo",
        assignees: [teamMembers[0], teamMembers[1], teamMembers[2]],
        dueDate: "2025-04-15",
      },
    ],
    results: [
      {
        id: "result-1",
        title: "Baseline Model Performance",
        description: "Performance metrics of the baseline models",
        data: {
          accuracy: 0.85,
          loss: 0.25,
          trainingTime: "2h 15m",
        },
        conclusion: "The baseline model achieves acceptable performance but has room for improvement.",
      },
    ],
    team: [teamMembers[0], teamMembers[1], teamMembers[2]],
    tags: ["Neural Networks", "Optimization", "Deep Learning"],
  },
  {
    id: "exp-2",
    title: "Quantum Algorithm Efficiency Study",
    description: "Analyzing the efficiency of various quantum algorithms for specific problem sets",
    status: "planned",
    startDate: "2025-05-01",
    tasks: [
      {
        id: "task-5",
        title: "Define Problem Sets",
        description: "Identify and define relevant problem sets for testing",
        status: "todo",
        assignees: [teamMembers[4]],
        dueDate: "2025-05-10",
      },
      {
        id: "task-6",
        title: "Implement Quantum Algorithms",
        description: "Implement selected quantum algorithms",
        status: "todo",
        assignees: [teamMembers[3], teamMembers[4]],
        dueDate: "2025-05-25",
      },
    ],
    results: [],
    team: [teamMembers[0], teamMembers[3], teamMembers[4]],
    tags: ["Quantum Computing", "Algorithms", "Efficiency"],
  },
];
