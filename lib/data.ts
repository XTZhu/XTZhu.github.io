import { Project, SocialLink } from "./types";

export const projects: Project[] = [
  {
    id: "todo-app",
    title: "Task Management Platform",
    shortDescription: "An offline-first todo app with anonymous cloud sync, drag-and-drop, and warm paper theme",
    description:
      "Built an elegant task management tool with a warm paper theme (Lora + Noto Serif SC serif fonts), offline-first architecture, and anonymous cloud sync via Supabase. Features include three-state toggle, drag-and-drop sorting via @dnd-kit, inline editing, keyboard shortcuts, and hCaptcha abuse protection. 25 test cases with Vitest + React Testing Library.",
    category: "fullstack",
    featured: true,
    year: 2026,
    technologies: ["Next.js", "React", "TypeScript", "Supabase", "Tailwind CSS", "shadcn/ui", "@dnd-kit"],
    demoUrl: "https://todo.xtzhu.cc",
    githubUrl: "https://github.com/XTZhu/todo-app",
    challenges: [
      "Implementing offline-first architecture with graceful degradation to localStorage",
      "Anonymous cloud sync with Supabase RLS and hCaptcha abuse protection",
      "Complex drag-and-drop state management with @dnd-kit",
    ],
    solutions: [
      "Auto-detection: uses Supabase when configured, falls back to localStorage otherwise",
      "Supabase Anonymous Auth + Row Level Security for secure multi-device sync",
      "@dnd-kit sortable context with optimistic UI updates for instant feedback",
    ],
    keyLearnings: [
      "Offline-first architecture and progressive enhancement patterns",
      "Supabase BaaS (Auth, RLS, real-time) integration",
      "Accessible drag-and-drop and keyboard navigation design",
    ],
    metrics: [
      { label: "Test Coverage", value: "25 tests" },
      { label: "Tech Stack", value: "Next.js 16" },
    ],
  },
  {
    id: "repolens",
    title: "RepoLens — AI GitHub Explorer",
    shortDescription: "AI-powered GitHub repository explorer with SSE streaming dialogue and trending rankings",
    description:
      "Built RepoLens, an AI-powered GitHub explorer that combines multi-dimensional repository search with LLM-driven code insights. Features include AI-generated What/How/Why project summaries, SSE streaming dialogue panel with RAG-enhanced context injection, trending rankings across 3 time windows and 12 languages, and full dark mode support. Compatible with any OpenAI-format AI service (Qwen, GLM, DeepSeek, Ollama).",
    category: "ai",
    featured: true,
    year: 2025,
    technologies: ["Nuxt.js", "Vue.js", "TypeScript", "Element Plus", "Octokit", "OpenAI API", "Vite"],
    demoUrl: "https://repolens.xtzhu.cc",
    githubUrl: "https://github.com/XTZhu/atomAI_harness",
    challenges: [
      "Integrating AI streaming (SSE) with real-time GitHub data for contextual Q&A",
      "Efficiently handling GitHub API rate limits across search, details, and trending endpoints",
      "Building a responsive UI that works across desktop sidebar and mobile bottom-sheet layouts",
    ],
    solutions: [
      "RAG architecture: auto-injects README context into AI prompts for accurate codebase understanding",
      "Server-side Octokit client with in-memory cache for deduplication and rate-limit optimization",
      "Element Plus adaptive layout with keyboard shortcuts (⌘K/J/B) and mobile hamburger menu",
    ],
    keyLearnings: [
      "SSE streaming and RAG architecture for AI-powered applications",
      "GitHub REST API optimization and caching strategies",
      "Multi-model AI provider abstraction with OpenAI-compatible interface",
    ],
    metrics: [
      { label: "AI Models", value: "4+ supported" },
      { label: "Languages", value: "12 filters" },
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
  "Nuxt.js",
  "Vue.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Supabase",
  "PostgreSQL",
  "Element Plus",
  "shadcn/ui",
  "@dnd-kit",
];

export const navItems = [
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];
