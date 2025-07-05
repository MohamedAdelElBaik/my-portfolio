import { notFound } from "next/navigation";
import Image from "next/image";
import projects from "@/data/projects.json";
import Skill from "@/components/projects/Skill";
import Link from "next/link";

interface ProjectParams {
  params: {
    slug: string;
  };
}

export default function ProjectDetails({ params }: ProjectParams) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="w-10/12 md:w-9/12 mx-auto pt-32 mb-16 space-y-8">
      <h1 className="text-4xl md:text-6xl text-primary">{project!.title}</h1>
      <div className="w-full h-60 md:h-96 relative rounded-lg overflow-hidden shadow-lg shadow-primary/30">
        <Image
          src={`/${project!.imgPath}.png`}
          alt={project!.title}
          fill
          className="object-cover"
        />
      </div>
      <p className="text-lg leading-relaxed">{project!.description}</p>

      <div className="flex flex-wrap gap-2">
        {project!.skills.map((skill: string) => (
          <Skill key={skill}>{skill}</Skill>
        ))}
      </div>

      <div className="flex gap-4">
        <Link
          href={project!.githubLink}
          className="py-2 px-4 border border-primary text-primary rounded-md hover:bg-primary/20"
        >
          GitHub Repo
        </Link>
        <Link
          href={project!.demoLink}
          className="py-2 px-4 border border-secondary text-secondary rounded-md hover:bg-secondary/20"
        >
          Live Demo
        </Link>
      </div>
    </main>
  );
}
