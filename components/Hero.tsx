import Image from 'next/image';

/* eslint-disable react/no-unescaped-entities */
export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen pt-32 flex flex-col justify-center md:flex-row gap-8 items-center"
    >
      <div className="flex flex-col justify-center gap-2 md:gap-4 md:flex-1">
        <span className="text-light-primary-r darK:text-dark-primary-r text-sm md:text-base">
          Hi, my name is
        </span>
        <h1 className="text-light-primary-r darK:text-dark-primary-r text-3xl md:text-7xl font-bold">
          Mohamed Adel
        </h1>
        <h2 className="text-xl md:text-5xl font-semibold">
          Frontend developer (React.js & Next.js)
        </h2>
        <p className="text-sm md:text-xl">
          I'm a passionate Front-End web developer having an experience of web
          applications with React.js, Next.js, TypeScript and TailwindCSS.
        </p>
        <span className="text-xs md:text-base text-dark-primary-r">
          Currently available for a job & freelance
        </span>
      </div>
      <div className="rounded-lg overflow-hidden object-fill w-48 md:w-56 lg:w-72 md:flex-grow-0">
        <Image src="/myImage.jpg" alt="mohamed" width={300} height={300} />
      </div>
    </section>
  );
}
