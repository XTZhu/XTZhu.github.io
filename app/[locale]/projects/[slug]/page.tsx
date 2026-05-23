import Navigation from "@/components/Navigation";
import ProjectDetail from "@/components/ProjectDetail";
import { projects } from "@/lib/data";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { routing, type Locale } from "@/i18n/routing";

interface Props {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  const paths: Array<{ locale: string; slug: string }> = [];
  for (const locale of routing.locales) {
    for (const project of projects) {
      paths.push({ locale, slug: project.id });
    }
  }
  return paths;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.id === slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.title} | XTZhu`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      type: "article",
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { locale, slug } = await params;
  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  const project = projects.find((p) => p.id === slug);
  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <Navigation />
      <ProjectDetail project={project} />
    </main>
  );
}
