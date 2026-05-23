export interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  category: "fullstack" | "frontend" | "backend" | "ai" | "creative";
  technologies: string[];
  featured: boolean;
  year: number;
  demoUrl?: string;
  githubUrl?: string;
  imageUrl?: string;
  challenges: string[];
  solutions: string[];
  keyLearnings: string[];
  metrics?: {
    label: string;
    value: string;
  }[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  slug: string;
}

export interface SocialLink {
  label: string;
  url: string;
  icon: string;
}
