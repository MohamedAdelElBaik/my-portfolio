import Project from './ProjectCard';
import Skill from './Skill';

export default function Projects() {
  return (
    <section id="projects" className="flex flex-col">
      <h1 className="text-3xl md:text-5xl text-light-primary-r dark:text-dark-primary-r">
        My Projects
      </h1>
      <div className="my-14 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <Project
          imgPath="Attendance"
          title="Attendance project"
          demoLink="/ss"
          githubLink="/d"
        >
          <Skill>HTML</Skill>
          <Skill>CSS</Skill>
          <Skill>JavaScript</Skill>
          <Skill>Tailwind CSS</Skill>
          <Skill>jQuery</Skill>
          <Skill>jQuery UI</Skill>
          <Skill>React.js</Skill>
          <Skill>Next.js</Skill>
          <Skill>sass</Skill>
          <Skill>Redux</Skill>
          <Skill>TypeScript</Skill>
        </Project>
      </div>
    </section>
  );
}
