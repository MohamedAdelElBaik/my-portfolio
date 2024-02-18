/* eslint-disable react/no-unescaped-entities */
export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center gap-4"
    >
      <span className="text-light-primary-r darK:text-dark-primary-r text-sm md:text-base">
        Hi, my name is
      </span>
      <h1 className="text-light-primary-r darK:text-dark-primary-r text-5xl md:text-7xl font-bold">
        Mohamed Adel
      </h1>
      <h2 className="text-2xl md:text-5xl font-semibold">
        Frontend developer (React.js & Next.js)
      </h2>
      <p className="text-base md:text-xl">
        I'm a passionate Front-End web developer having an experience of web
        applications with React.js, Next.js, TypeScript and TailwindCSS.
      </p>
      <span className="text-sm md:text-base text-dark-primary-l">
        Currently available for a job & freelance
      </span>
    </section>
  );
}
