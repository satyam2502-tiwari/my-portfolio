export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  href: string;
  repoHref: string;
  featured: boolean;
  status: "live" | "wip" | "archived";
  gradient: string;
};

export const projects: Project[] = [
  {
    id: "rag-chatbot",
    title: "RAG-Based Chatbot",
    description:
      "A Retrieval-Augmented Generation chatbot that answers questions over custom documents using vector search and an LLM backend.",
    tags: ["Python", "LangChain", "RAG", "Next.js", "REST APIs"],
    href: "#",
    repoHref: "https://github.com/satyam2502-tiwari",
    featured: true,
    status: "live",
    gradient: "from-emerald-500/20 via-cyan-500/10 to-transparent",
  },
  {
    id: "ai-ml-project",
    title: "ML Classification Model",
    description:
      "A machine learning pipeline for data classification using scikit-learn and Python, with a clean evaluation dashboard.",
    tags: ["Python", "Machine Learning", "scikit-learn", "pandas", "Matplotlib"],
    href: "#",
    repoHref: "https://github.com/satyam2502-tiwari",
    featured: true,
    status: "live",
    gradient: "from-violet-500/20 via-purple-500/10 to-transparent",
  },
  {
    id: "fullstack-app",
    title: "Full-Stack Web App",
    description:
      "A full-stack MERN application with user authentication, REST API backend, and a responsive React frontend built with Tailwind CSS.",
    tags: ["React.js", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"],
    href: "#",
    repoHref: "https://github.com/satyam2502-tiwari",
    featured: true,
    status: "live",
    gradient: "from-orange-500/20 via-rose-500/10 to-transparent",
  },
  {
    id: "nextjs-portfolio",
    title: "Developer Portfolio",
    description:
      "This portfolio site — built with Next.js 15 App Router and Tailwind CSS, featuring a dark-mode-first design system.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "React.js"],
    href: "#",
    repoHref: "https://github.com/satyam2502-tiwari",
    featured: false,
    status: "live",
    gradient: "from-cyan-500/20 via-sky-500/10 to-transparent",
  },
  {
    id: "rest-api",
    title: "RESTful API Server",
    description:
      "A Node.js + Express REST API with JWT authentication, MongoDB integration, and clean MVC project structure.",
    tags: ["Node.js", "Express.js", "MongoDB", "JWT", "REST APIs"],
    href: "#",
    repoHref: "https://github.com/satyam2502-tiwari",
    featured: false,
    status: "live",
    gradient: "from-teal-500/20 via-emerald-500/10 to-transparent",
  },
  {
    id: "cpp-dsa",
    title: "DSA Problem Solutions",
    description:
      "A curated collection of Data Structures & Algorithms problems solved in C++ with explanations and time complexity analysis.",
    tags: ["C++", "Data Structures", "Algorithms", "Git"],
    href: "#",
    repoHref: "https://github.com/satyam2502-tiwari",
    featured: false,
    status: "live",
    gradient: "from-pink-500/20 via-fuchsia-500/10 to-transparent",
  },
];
