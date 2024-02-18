import GitHubCalendar from 'react-github-calendar';

/* eslint-disable react/no-unescaped-entities */
export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center gap-8"
    >
      <h1 className="text-light-primary-r dark:text-dark-primary-r text-4xl font-semibold">
        About Me
      </h1>
      <p className="leading-6">
        I'm Mohamed Adel, a computer and control engineering graduate from Suez
        Canal University.
        <br />
        <br />
        I specialize in frontend development using React.js, with expertise in
        responsive design, state management, React hooks, and RESTful API
        integration.
        <br />
        <br />
        Passionate about creating seamless user experiences, I blend my
        engineering background with coding skills to contribute to innovative
        projects.
        <br />
        <br />
        I enjoy staying updated on the latest industry trends and technologies.
        <br />
        <br />
        Whether it's exploring new frameworks or refining my coding techniques,
        I am always eager to expand my knowledge and stay at the forefront of
        the ever-evolving tech landscape.
        <br />
        <br />
        Let's connect and discuss how I can bring value to your next endeavor!
      </p>

      <div className="mt-10 w-full border py-6 px-4 border-spacing-1 border-dark-primary-3l rounded-md shadow-2xl shadow-dark-primary-3l">
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
