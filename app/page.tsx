import Navigation from "@/components/Navigation";
import ProjectCard from "@/components/ProjectCard";
import { projects, socialLinks, technologies } from "@/lib/data";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            <span className="text-gray-900 dark:text-white">Hi, I'm </span>
            <span className="text-gradient">XTZhu</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Full-stack developer & creator. I build digital experiences that solve real problems and delight users.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="#projects" className="btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn-secondary">
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding bg-white dark:bg-gray-950">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Featured Projects
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-16 max-w-2xl mx-auto">
            A selection of projects showcasing my skills in full-stack development, design, and problem-solving.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Skills & Technologies
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Here's a collection of technologies and tools I work with regularly.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-gray-900 dark:text-white font-medium hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-white dark:bg-gray-950">
        <div className="container-custom max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">About Me</h2>

          <div className="space-y-6 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
            <p>
              I'm a passionate software engineer with a focus on creating elegant solutions to complex problems. With experience across the full stack, I combine technical expertise with an eye for design and user experience.
            </p>

            <p>
              My journey into tech started with a curiosity about how things work. Today, I'm driven by the opportunity to build products that make a real impact on people's lives.
            </p>

            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to open source, or sharing what I've learned with the community.
            </p>

            <p className="text-blue-600 dark:text-blue-400 font-medium">
              Let's build something amazing together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container-custom max-w-2xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Connect</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-12">
            I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-800 py-8">
        <div className="container-custom text-center text-gray-600 dark:text-gray-400">
          <p>© 2024 XTZhu. Built with Next.js, React, and Tailwind CSS.</p>
        </div>
      </footer>
    </main>
  );
}

