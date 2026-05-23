import { Project } from "@/lib/types";
import Link from "next/link";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="card p-6 hover:shadow-lg transition-all duration-300 group">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            {project.year}
          </p>
        </div>
        <span className="px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full capitalize">
          {project.category}
        </span>
      </div>

      <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
        {project.shortDescription}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.technologies.slice(0, 3).map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded"
          >
            {tech}
          </span>
        ))}
        {project.technologies.length > 3 && (
          <span className="px-2 py-1 text-xs text-gray-600 dark:text-gray-400">
            +{project.technologies.length - 3} more
          </span>
        )}
      </div>

      <div className="flex gap-3">
        {project.demoUrl && (
          <a href={project.demoUrl} className="btn-secondary text-sm flex-1">
            Demo
          </a>
        )}
        {project.githubUrl && (
          <a href={project.githubUrl} className="btn-secondary text-sm flex-1">
            Code
          </a>
        )}
      </div>
    </div>
  );
}
