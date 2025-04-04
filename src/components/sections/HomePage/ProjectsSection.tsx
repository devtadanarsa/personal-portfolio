import { IoMdMail } from "react-icons/io";
import { PROJECTS } from "../../../constants/projects";
import ProjectCard from "../../ProjectCard";

const ProjectsSection = () => {
  return (
    <div className="flex flex-col items-center pt-20 sm:pt-40 fade-up relative">
      <h2
        className="text-xl font-medium sm:text-3xl lg:text-4xl"
        data-aos="fade-up"
      >
        Latest Projects
      </h2>

      <div className="w-full mt-6 space-y-8 sm:mt-20">
        {PROJECTS.map((project, index) => (
          <div data-aos="fade-up" key={`Project - ${index}`}>
            <ProjectCard key={`Project - ${index}`} {...project} />
          </div>
        ))}
        <div className="flex flex-col sm:flex-row text-center sm:text-left items-center justify-between bg-third-white dark:bg-third-black gap-5 sm:gap-12 py-4 sm:py-12 px-6 sm:px-16">
          <div>
            <h3 className="text-base sm:text-xl lg:text-2xl font-semibold">
              Have any project in mind?
            </h3>
            <p className="text-secondary-gray text-sm sm:text-base lg:text-lg sm:mt-2">
              I'm available for freelancing
            </p>
          </div>
          <div className="flex items-center gap-4 lg:gap-8 text-sm lg:text-base">
            <a
              className="border border-black dark:border-white w-32 lg:w-40 py-2 sm:py-3 text-center rounded-lg hover:scale-105 transition-all"
              href="https://github.com/devtadanarsa"
            >
              More Projects
            </a>
            <a
              className="bg-primary-lavender w-32 lg:w-40 py-2 sm:py-3 rounded-lg flex justify-center items-center gap-2 hover:scale-105 transition-all text-white"
              href="https://wa.me/6281266864907"
            >
              <IoMdMail className="text-lg" /> Email Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
