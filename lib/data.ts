import { Project, SocialLink } from "./types";

export const projects: Project[] = [
  {
    id: "todo-app",
    title: "Task Management Platform",
    shortDescription: "A full-stack todo app with real-time sync, priority levels, and offline support",
    description:
      "Built a comprehensive task management system with user authentication, real-time data synchronization, and offline-first capabilities. Features include priority management, due dates, task categories, and keyboard shortcuts for power users.",
    category: "fullstack",
    featured: true,
    year: 2024,
    technologies: ["Next.js", "React", "Firebase", "Tailwind CSS", "TypeScript"],
    demoUrl: "#",
    githubUrl: "#",
    challenges: [
      "Implementing real-time data synchronization across tabs",
      "Offline support with conflict resolution",
      "Complex state management for nested tasks",
    ],
    solutions: [
      "Used Firebase Firestore listeners for real-time updates",
      "Implemented localStorage cache with sync queue",
      "Optimistic updates for instant UI feedback",
    ],
    keyLearnings: [
      "BaaS architecture and real-time databases",
      "Progressive Web App concepts",
      "Advanced React state patterns",
    ],
    metrics: [
      { label: "Task Performance", value: "60fps" },
      { label: "Lighthouse Score", value: "95" },
    ],
  },
  {
    id: "github-dashboard",
    title: "GitHub Analytics Dashboard",
    shortDescription: "Personal GitHub statistics visualizer with interactive charts and insights",
    description:
      "Created an interactive dashboard pulling real-time data from GitHub API to visualize coding statistics, language distribution, and activity patterns. Implemented advanced caching, virtual scrolling for large datasets, and theme support.",
    category: "frontend",
    featured: true,
    year: 2024,
    technologies: ["Next.js", "React", "GitHub API", "Recharts", "SWR"],
    demoUrl: "#",
    githubUrl: "#",
    challenges: [
      "Efficiently handling large datasets and API rate limits",
      "Complex data transformations for visualization",
      "Responsive chart layouts on mobile devices",
    ],
    solutions: [
      "Implemented SWR for smart caching and deduplication",
      "Used react-window for virtual scrolling",
      "Optimized API queries with GraphQL",
    ],
    keyLearnings: [
      "Data visualization best practices",
      "API optimization and caching strategies",
      "Performance metrics analysis",
    ],
  },
  {
    id: "ai-code-explainer",
    title: "AI Code Explainer Tool",
    shortDescription: "Stream-based AI tool that explains code snippets with real-time output",
    description:
      "Built an AI-powered code analysis tool featuring streamed responses, syntax highlighting, and complexity analysis. Demonstrates secure API integration patterns and prompt engineering optimization.",
    category: "ai",
    featured: true,
    year: 2024,
    technologies: ["Next.js", "OpenAI API", "TypeScript", "Prism.js", "React"],
    demoUrl: "#",
    githubUrl: "#",
    challenges: [
      "Handling streaming responses efficiently",
      "Securely managing API keys server-side",
      "Parsing and formatting LLM output",
    ],
    solutions: [
      "Implemented ReadableStream processing for real-time updates",
      "Used Next.js API Routes as secure proxy",
      "Optimized prompts for consistent structured output",
    ],
    keyLearnings: [
      "LLM integration and prompt engineering",
      "Server-side API security",
      "Stream processing in web applications",
    ],
  },
];

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    url: "https://github.com/XTZhu",
    icon: "github",
  },
  {
    label: "LinkedIn",
    url: "#",
    icon: "linkedin",
  },
  {
    label: "Twitter",
    url: "#",
    icon: "twitter",
  },
  {
    label: "Email",
    url: "mailto:contact@xtzhu.cc",
    icon: "mail",
  },
];

export const technologies = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Firebase",
  "PostgreSQL",
  "Three.js",
  "Web Audio API",
  "GraphQL",
];

export const navItems = [
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];
