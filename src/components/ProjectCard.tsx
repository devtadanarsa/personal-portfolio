import { FC } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
}

const ProjectCard: FC<ProjectCardProps> = ({
  title,
  description,
  image,
  technologies,
  github,
}) => {
  return (
    <div className="flex flex-col w-full gap-5 px-6 py-4 sm:gap-12 sm:py-12 sm:px-16 sm:flex-row bg-third-white dark:bg-third-black">
      <img src={image} className="object-cover h-40 rounded-lg lg:h-80" />
      <div className="flex flex-col justify-between">
        <div>
          <h3 className="flex items-center gap-3 font-medium text-md sm:text-xl lg:block lg:text-2xl">
            {title}{" "}
            <a href={github} className="lg:hidden">
              <FaGithub />
            </a>
            <a href="/" className="lg:hidden">
              <FaExternalLinkAlt />
            </a>
          </h3>
          <p className="mt-4 text-xs sm:text-sm lg:text-lg text-secondary-gray">
            {description}
          </p>
          <div className="flex items-center gap-5 mt-6 text-[10px] sm:text-xs lg:text-lg">
            {technologies.map((tech, index) => (
              <div
                key={`Tech - ${index}`}
                className="px-2 py-1 border rounded-md border-primary-gray"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>

        <div className="items-center hidden gap-4 mt-4 text-sm lg:flex lg:gap-12 lg:text-xl lg:mt-auto">
          <a
            href={github}
            className="flex items-center gap-2 font-medium hover:underline"
          >
            Code <FaGithub />
          </a>
          <a
            href="/"
            className="flex items-center gap-2 font-medium hover:underline"
          >
            Live Demo <FaExternalLinkAlt />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
