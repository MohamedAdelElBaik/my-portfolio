import Image from 'next/image';

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
  'git',
];

export default function SkillsList() {
  return (
    <>
      {' '}
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
    </>
  );
}
