import { notFound } from "next/navigation";
import Image from "next/image";
import Skill from "@/components/projects/Skill";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

// force this page to be rendered dynamically on each request so new projects appear immediately
export const dynamic = "force-dynamic";

function slugify(str: string) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

interface ProjectParams {
  params: {
    slug: string;
  };
}

export default async function ProjectDetails({ params }: ProjectParams) {
  const { data: projects, error } = await supabase
    .from("projects")
    .select("*");

  if (error || !projects) {
    console.error(error);
    notFound();
  }

  const project = projects.find((p) => slugify(p.title) === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <>
    <article className="w-full">
      {/* Hero banner */}
      <div className="relative h-72 md:h-[450px]">
        <Image
          src={project.main_image_url}
          alt={project.title}
          fill
          priority
          className="object-cover"
        />
        {/* gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80" />
        <div className="relative z-10 flex h-full flex-col justify-end p-6 md:p-10 text-white">
          <h1 className="text-3xl md:text-5xl font-bold drop-shadow-md">
            {project.title}
          </h1>
          {project.subtitle && (
            <p className="mt-2 text-lg md:text-2xl drop-shadow-md">
              {project.subtitle}
            </p>
          )}
        </div>
      </div>

      {/* Content */}
      <section className="w-11/12 md:w-8/12 mx-auto py-10 space-y-8">
        {/* Meta info */}
        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
          {project.date && <span>📅 {project.date}</span>}
          {project.duration && <span>⏱ {project.duration}</span>}
          {project.company && <span>🏢 {project.company}</span>}
        </div>

        <p className="text-lg leading-relaxed whitespace-pre-line">
          {project.description_md}
        </p>

        {project.technologies.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech: string) => (
              <Skill key={tech}>{tech}</Skill>
            ))}
          </div>
        )}

        <div className="flex gap-4">
          {project.github_url && (
            <Link
              href={project.github_url}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 px-4 border border-primary text-primary rounded-md hover:bg-primary/20 transition-colors"
            >
              GitHub ↗
            </Link>
          )}
          {project.live_demo_url && (
            <Link
              href={project.live_demo_url}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 px-4 border border-secondary text-secondary rounded-md hover:bg-secondary/20 transition-colors"
            >
              Live Demo ↗
            </Link>
          )}
        </div>
      </section>
  </article> 
    </>
  );
}
