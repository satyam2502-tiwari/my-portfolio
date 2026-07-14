export type ExperienceItem = {
  id: string;
  role: string;
  company: string;
  companyUrl: string;
  period: string;
  location: string;
  type: "full-time" | "part-time" | "contract" | "internship" | "freelance";
  current: boolean;
  description: string;
  highlights: string[];
  tags: string[];
};

export const experiences: ExperienceItem[] = [
  {
    id: "student-dev",
    role: "CS Student & Developer",
    company: "Self-directed Learning",
    companyUrl: "#",
    period: "2022 — Present",
    location: "India",
    type: "full-time",
    current: true,
    description:
      "Actively building projects and deepening skills across the full web development stack — from React frontends to Node.js backends, databases, and AI/ML pipelines.",
    highlights: [
      "Built multiple full-stack applications using the MERN stack",
      "Explored Retrieval-Augmented Generation (RAG) and LLM integrations with LangChain",
      "Solved 100+ DSA problems in C++ to strengthen algorithmic thinking",
    ],
    tags: ["React.js", "Next.js", "Node.js", "Python", "MongoDB", "Machine Learning"],
  },
  {
    id: "open-source",
    role: "Open Source Contributor",
    company: "GitHub Projects",
    companyUrl: "https://github.com/satyam2502-tiwari",
    period: "2023 — Present",
    location: "Remote",
    type: "part-time",
    current: true,
    description:
      "Contributed to personal and community open-source repositories, focusing on frontend tooling, REST APIs, and ML experiments.",
    highlights: [
      "Maintained a public repository of DSA solutions in C++",
      "Built and deployed full-stack projects with GitHub Actions CI",
      "Regularly pushed code across React, Next.js, and Python projects",
    ],
    tags: ["Git", "GitHub", "TypeScript", "REST APIs", "Python"],
  },
];
