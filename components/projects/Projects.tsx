import Project from './ProjectCard';
import Skill from './Skill';

export default function Projects() {
  return (
    <section id="projects" className="flex flex-col">
      <h1 className="text-3xl md:text-5xl text-light-primary-r dark:text-dark-primary-r">
        My Projects
      </h1>
      <div className="my-8 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <Project
          imgPath="myaz"
          title="MYAZ Website"
          githubLink="https://myaz1.vercel.app/"
          demoLink="https://github.com/MohamedAdelElBaik/ASCS-front"
        >
          <Skill>CSS modules</Skill>
          <Skill>React.js</Skill>
          <Skill>Axios</Skill>
          <Skill>State Management</Skill>
          <Skill>Vite</Skill>
          <Skill>Dashboard</Skill>
          <Skill>RESTful API</Skill>
        </Project>
        <Project
          imgPath="Attendance"
          title="Student Attendance for SCU"
          githubLink="https://github.com/MohamedAdelElBaik/Suez-Canal-University-Attendance"
          demoLink="https://scu-attendance.glitch.me/"
        >
          <Skill>HTML</Skill>
          <Skill>CSS</Skill>
          <Skill>JavaScript</Skill>
          <Skill>jQuery</Skill>
          <Skill>jQuery UI</Skill>
          <Skill>sass</Skill>
        </Project>
      </div>
    </section>
  );
}
