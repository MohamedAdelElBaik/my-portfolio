/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import style from './Skills.module.css';
import SkillsList from './SkillsList';

export default function Skills() {
  return (
    <section
      id="skills"
      className="flex flex-col justify-center gap-4 md:gap-8"
    >
      <h1 className="text-2xl md:text-4xl font-semibold text-light-primary-r dark:text-dark-primary-r">
        My Skills
      </h1>
      <div className="mb-8 md:mb-20">
        <ul
          className={`${style.list} text-sm md:text-xl pl-4 md:pl-8 space-y-4`}
        >
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
        <SkillsList />
      </div>
    </section>
  );
}
