import { FaFileAlt } from "react-icons/fa";
import {
  PROFILE_DESCRIPTION_ONE,
  PROFILE_DESCRIPTION_TWO,
} from "../../constants/info";
import { SOCIALS } from "../../constants/contact";

const Hero = () => {
  return (
    <section className=" text-white lg:flex gap-32 mx-2 lg:mx-16">
      <div className="space-y-3 sm:space-y-6 lg:w-1/2">
        <h2 className="text-lg sm:text-2xl font-semibold">Hello Guys!</h2>
        <h1 className="text-3xl sm:text-5xl font-semibold">
          I am <span className="text-primary-lavender">Devta Danarsa</span>
        </h1>
        <p className="text-secondary-gray text-sm sm:text-lg">
          Software Development Enthusiast
        </p>

        {/* START : Image Section Mobile */}
        <div className="sm:flex gap-16 lg:hidden pt-6 sm:pt-0">
          <img src="/hero-picture.png" className="h-80 sm:h-[40vh]" />
          <div className="sm:mt-12">
            <p className="text-sm sm:text-lg font-medium">Find me on</p>
            <div className="flex gap-4 mt-4">
              {SOCIALS.map((social, index) => (
                <a
                  key={`Social - ${index}`}
                  href={social.url}
                  className="p-2 sm:p-4 rounded-full "
                  style={{ backgroundColor: "rgba(123, 104, 238, 0.10)" }}
                >
                  <social.icon className="text-xl text-secondary-lavender" />
                </a>
              ))}
            </div>
          </div>
        </div>
        {/* END : Image Section Mobile */}

        <div className="pt-4 text-sm sm:text-base">
          <hr className="w-3/12 sm:w-1/12" />
          <p className="mt-6 text-justify text-secondary-gray">
            {PROFILE_DESCRIPTION_ONE}
          </p>
          <p className="mt-6 text-justify text-secondary-gray hidden sm:block">
            {PROFILE_DESCRIPTION_TWO}
          </p>
        </div>

        <div className="flex items-center gap-6 font-medium pt-4 sm:pt-0 text-sm sm:text-base">
          <button className="bg-primary-lavender w-48 py-3 flex justify-center items-center gap-3 rounded-md hover:scale-105 transition-all">
            <FaFileAlt />
            Download CV
          </button>
          <button className="border border-white w-48 py-3 rounded-md hover:scale-105 transition-all">
            More
          </button>
        </div>
      </div>

      {/* Image Section Desktop */}
      <div className="hidden lg:block">
        <img src="/hero-picture.png" className="h-[60vh]" />
        <div className="flex items-center gap-8 mt-8">
          <p className="text-lg font-medium">Find me on</p>
          {SOCIALS.map((social, index) => (
            <a
              key={`Social - ${index}`}
              href={social.url}
              className="p-4 rounded-full hover:scale-105 transition-transform hover:border hover:border-primary-lavender"
              style={{ backgroundColor: "rgba(123, 104, 238, 0.10)" }}
            >
              <social.icon className="text-xl text-secondary-lavender" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
