import { PROJECTS } from "../../constants/projects";
import ProjectCard from "../ProjectCard";

const ProjectsSection = () => {
  return (
    <div className="flex flex-col items-center py-20 sm:py-40">
      <h2 className="text-xl font-medium sm:text-3xl lg:text-4xl">
        Latest Projects
      </h2>

      <div className="w-full mt-6 space-y-8 sm:mt-20">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={`Project - ${index}`} {...project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
