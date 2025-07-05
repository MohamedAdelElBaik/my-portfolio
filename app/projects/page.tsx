import Link from "next/link";
import Project from "@/components/projects/ProjectCard";
import Skill from "@/components/projects/Skill";
import projects from "@/data/projects.json";

export default function ProjectsPage() {
  return (
    <main className="w-10/12 md:w-9/12 mx-auto pt-32 mb-16">
      <h1 className="text-4xl md:text-6xl text-primary mb-10">Projects</h1>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Link key={project.id} href={`/projects/${project.slug}`}>
            <Project
              imgPath={project.imgPath}
              title={project.title}
              demoLink={project.demoLink}
              githubLink={project.githubLink}
            >
              {project.skills.map((skill: string) => (
                <Skill key={skill}>{skill}</Skill>
              ))}
            </Project>
          </Link>
        ))}
      </div>
    </main>
  );
}
