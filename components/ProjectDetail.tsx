"use client";

import { Project } from "@/lib/types";
import { FadeInUp, ScaleOnHover } from "@/components/Motion";
import Link from "next/link";
import { motion } from "framer-motion";

interface ProjectDetailProps {
  project: Project;
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <article className="min-h-screen bg-white dark:bg-gray-950">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 border-b border-gray-200 dark:border-gray-800">
        <div className="container-custom max-w-4xl">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-8 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Projects
          </Link>

          <FadeInUp>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">{project.title}</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">{project.description}</p>

            <div className="flex flex-wrap gap-3 mb-8">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4 flex-wrap">
              {project.demoUrl && (
                <ScaleOnHover>
                  <a href={project.demoUrl} className="btn-primary">
                    View Demo
                  </a>
                </ScaleOnHover>
              )}
              {project.githubUrl && (
                <ScaleOnHover>
                  <a href={project.githubUrl} className="btn-secondary">
                    GitHub Repository
                  </a>
                </ScaleOnHover>
              )}
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Content Sections */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl space-y-16">
          {/* Challenges */}
          {project.challenges.length > 0 && (
            <FadeInUp delay={0.2}>
              <div>
                <h2 className="text-3xl font-bold mb-6">Challenges</h2>
                <div className="space-y-4">
                  {project.challenges.map((challenge, idx) => (
                    <div
                      key={idx}
                      className="card p-4 border-l-4 border-blue-500 dark:border-blue-400"
                    >
                      <p className="text-gray-700 dark:text-gray-300">{challenge}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInUp>
          )}

          {/* Solutions */}
          {project.solutions.length > 0 && (
            <FadeInUp delay={0.3}>
              <div>
                <h2 className="text-3xl font-bold mb-6">Solutions</h2>
                <div className="space-y-4">
                  {project.solutions.map((solution, idx) => (
                    <div
                      key={idx}
                      className="card p-4 border-l-4 border-green-500 dark:border-green-400"
                    >
                      <p className="text-gray-700 dark:text-gray-300">{solution}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInUp>
          )}

          {/* Key Learnings */}
          {project.keyLearnings.length > 0 && (
            <FadeInUp delay={0.4}>
              <div>
                <h2 className="text-3xl font-bold mb-6">Key Learnings</h2>
                <div className="space-y-4">
                  {project.keyLearnings.map((learning, idx) => (
                    <div
                      key={idx}
                      className="card p-4 border-l-4 border-purple-500 dark:border-purple-400"
                    >
                      <p className="text-gray-700 dark:text-gray-300">{learning}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInUp>
          )}

          {/* Metrics */}
          {project.metrics && project.metrics.length > 0 && (
            <FadeInUp delay={0.5}>
              <div>
                <h2 className="text-3xl font-bold mb-6">Project Metrics</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.metrics.map((metric, idx) => (
                    <motion.div
                      key={idx}
                      className="card p-6 text-center"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        {metric.label}
                      </p>
                      <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                        {metric.value}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </FadeInUp>
          )}
        </div>
      </section>

      {/* Related Projects CTA */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Explore More Projects</h2>
          <ScaleOnHover>
            <Link href="/#projects" className="btn-primary inline-block">
              Back to All Projects
            </Link>
          </ScaleOnHover>
        </div>
      </section>
    </article>
  );
}
