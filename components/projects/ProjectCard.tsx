'use client';
import Image from 'next/image';
import { useState } from 'react';
import GitHubIcon from '../svg/GitHubIcon';
import LinkIcon from '../svg/LinkIcon';

type Child = {
  children: React.ReactNode;
};
type ImageProps = Child & {
  imgPath: string;
};
type DetailsProps = {
  title: string;
  demoLink: string;
  githubLink: string;
};
type ProjectProps = Child & ImageProps & DetailsProps;

export default function Project({
  children,
  imgPath,
  title,
  demoLink,
  githubLink,
}: ProjectProps) {
  return (
    <div className="w-fit rounded-md overflow-hidden hover:scale-110 transition-transform duration-500">
      <ProjectImage imgPath={imgPath}>
        <Skills>{children}</Skills>
      </ProjectImage>

      <ProjectDetails
        title={title}
        demoLink={demoLink}
        githubLink={githubLink}
      />
    </div>
  );
}

function ProjectImage({ children, imgPath }: ImageProps) {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <div
      className="w-84 h-56 overflow-hidden relative"
      onMouseEnter={() => setShowDetails(true)}
      onMouseLeave={() => setShowDetails(false)}
    >
      <div className="absolute top-0 bottom-0 right-0 left-0">
        {showDetails && children}
      </div>
      <Image
        className="w-full h-full"
        src={`/${imgPath}.png`}
        alt={imgPath}
        width={500}
        height={500}
      />
    </div>
  );
}

function Skills({ children }: Child) {
  return (
    <div className="bg-dark-background bg-opacity-80 h-full grid px-2 py-6 gap-3 grid-cols-2 content-start items-center">
      {children}
    </div>
  );
}

function ProjectDetails({ title, demoLink, githubLink }: DetailsProps) {
  return (
    <div className="bg-dark-primary-3l flex justify-between px-3 py-5">
      <h2>{title}</h2>
      <span className="flex gap-2">
        <a
          href={githubLink}
          className="hover:scale-125 transition-transform duration-150"
        >
          <GitHubIcon />
        </a>
        <a
          href={demoLink}
          className="hover:scale-125 transition-transform duration-150"
        >
          <LinkIcon />
        </a>
      </span>
    </div>
  );
}
