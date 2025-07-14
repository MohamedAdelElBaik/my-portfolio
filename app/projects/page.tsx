export const dynamic = "force-dynamic";
// or use: export const revalidate = 0;
import Link from "next/link";
import Project from "@/components/projects/ProjectCard";
import Skill from "@/components/projects/Skill";
import { supabase } from "@/lib/supabase";

// Utility – keep local so we don't add a dependency
function slugify(str: string) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default async function ProjectsPage() {
  const { data: projects, error } = await supabase
    .from("projects")
    .select("*")
    .order("date", { ascending: false });

  if (error) {
    console.error(error);
    return <p className="text-center text-red-500">Failed to load projects.</p>;
  }

  if (!projects || projects.length === 0) {
    return <p className="text-center">No projects found.</p>;
  }

  return (
    <main className="w-10/12 md:w-9/12 mx-auto pt-32 mb-16">
      <h1 className="text-4xl md:text-6xl text-primary mb-10">Projects</h1>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Link key={project.id} href={`/projects/${slugify(project.title)}`}>
            <Project
              imgPath={project.main_image_url}
              title={project.title}
              demoLink={project.live_demo_url ?? "#"}
              githubLink={project.github_url ?? "#"}
            >
              {project.technologies.map((tech: string) => (
                <Skill key={tech}>{tech}</Skill>
              ))}
            </Project>
          </Link>
        ))}
      </div>
    </main>
  );
}
