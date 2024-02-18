/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import style from './Skills.module.css';

const skills = [
  'html',
  'css',
  'javascript',
  'typescript',
  'jquery',
  'sass',
  'bootstrap',
  'react',
  'next',
  'redux',
  'tailwind',
  'radix-ui',
  'git',
];

export default function Skills() {
  return (
    <section className="min-h-screen flex flex-col justify-center gap-8">
      <h1 className="text-3xl md:text-5xl font-semibold text-light-primary-r dark:text-dark-primary-r">
        My Skills
      </h1>
      <div className="mb-20">
        <ul className={`${style.list} text-base md:text-xl pl-8 space-y-4`}>
          <li className="hover:underline underline-offset-8 decoration-dark-primary-l">
            Creating dynamic and efficient web applications using the React
            library and the Next.js framework.
          </li>
          <li className="hover:underline underline-offset-8 decoration-dark-primary-l">
            Crafting websites that provide an optimal viewing and interaction
            experience across a wide range of devices and screen sizes.
          </li>
          <li className="hover:underline underline-offset-8 decoration-dark-primary-l">
            Managing the state of your application efficiently, likely using
            tools like React's built-in state management or external libraries
            such as Redux.
          </li>
          <li className="hover:underline underline-offset-8 decoration-dark-primary-l">
            Integrating TypeScript into your development process for improved
            code maintainability and static typing.
          </li>
        </ul>
      </div>
      <div className={style.box}>
        {skills.map((skill, index) => (
          <span
            className="bg-dark-primary-3l p-2 rounded-md flex items-center hover:scale-110 transition-transform duration-300 shadow-2xl shadow-dark-primary-3l"
            key={index}
          >
            <Image
              src={`./skills/${skill}.svg`}
              alt={skill}
              width={60}
              height={60}
              className="w-8 md:w-12 my-auto"
            />
          </span>
        ))}
      </div>
    </section>
  );
}
