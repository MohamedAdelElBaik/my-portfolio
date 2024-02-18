import GitHubCalendar from 'react-github-calendar';

/* eslint-disable react/no-unescaped-entities */
export default function About() {
  return (
    <section id="about" className="flex flex-col justify-center gap-4 md:gap-8">
      <h1 className="text-light-primary-r dark:text-dark-primary-r text-2xl md:text-4xl font-semibold">
        About Me
      </h1>
      <div className="leading-6 text-sm md:text-xl">
        I'm Mohamed Adel, a computer and control engineering graduate from Suez
        Canal University.
        <hr className="border-none h-2 md:h-5" />
        I specialize in frontend development using React.js, with expertise in
        responsive design, state management, React hooks, and RESTful API
        integration.
        <hr className="border-none h-2 md:h-5" />
        Passionate about creating seamless user experiences, I blend my
        engineering background with coding skills to contribute to innovative
        projects.
        <hr className="border-none h-2 md:h-5" />
        I enjoy staying updated on the latest industry trends and technologies.
        <hr className="border-none h-2 md:h-5" />
        Whether it's exploring new frameworks or refining my coding techniques,
        I am always eager to expand my knowledge and stay at the forefront of
        the ever-evolving tech landscape.
        <hr className="border-none h-2 md:h-5" />
        Let's connect and discuss how I can bring value to your next endeavor!
      </div>

      <div className="mt-10 w-full border py-3 px-1 md:py-6 md:px-4 border-spacing-1 border-dark-primary-3l rounded-md shadow-2xl shadow-dark-primary-3l">
        <GitHubCalendar
          username="mohamedadelelbaik"
          blockSize={13}
          blockMargin={4}
          fontSize={12}
          year={2024}
          blockRadius={1}
          style={{ margin: 'auto' }}
          // colorScheme="light"
        />
      </div>
    </section>
  );
}
