import { FaFileAlt } from "react-icons/fa";
import { SOCIALS } from "../../../constants/contact";
import { PROFILE_DESCRIPTION_ONE, PROFILE_DESCRIPTION_TWO } from "../../../constants/info";
import SocialIcon from "../../SocialIcon";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section className="gap-32 mx-2 lg:flex lg:justify-between lg:mx-16 2xl:items-center">
      <div className="space-y-3 sm:space-y-6 lg:w-1/2">
        <h2
          className="text-lg font-semibold sm:text-2xl"
          data-aos="fade-right"
          data-aos-duration={1000}
        >
          Hi Folks!
        </h2>
        <h1
          className="text-2xl font-semibold sm:text-5xl"
          data-aos="fade-right"
          data-aos-duration={1000}
        >
          I am{" "}
          <span className="text-primary-lavender hidden sm:inline">
            <TypeAnimation
              sequence={["Devta Danarsa", 1000, "Danarsa Suniadevta", 1000]}
              repeat={Infinity}
            />
          </span>
          <span className="text-primary-lavender sm:hidden">
            <TypeAnimation sequence={["Devta Danarsa", 1000, "DevtaDev", 1000]} repeat={Infinity} />
          </span>
        </h1>
        <p
          className="text-sm text-primary-gray dark:text-secondary-gray sm:text-lg"
          data-aos="fade-right"
          data-aos-duration={1000}
        >
          Software Developer | AI Engineer
        </p>

        {/* START : Image Section Mobile */}
        <div className="gap-16 pt-6 sm:flex lg:hidden sm:pt-0">
          <img
            src="/hero-picture.png"
            className="h-80 sm:h-[40vh]"
            data-aos="fade-left"
            data-aos-delay="300"
            data-aos-duration={1000}
          />
          <div className="sm:mt-12">
            <p
              className="text-sm font-medium sm:text-lg"
              data-aos="fade-down"
              data-aos-delay="500"
              data-aos-duration={1000}
            >
              Find me on
            </p>
            <div className="flex gap-4 mt-4">
              {SOCIALS.map((social, index) => (
                <a
                  data-aos="fade-down"
                  data-aos-delay={300 + index * 300}
                  data-aos-duration={1000}
                  key={`Social - ${index}`}
                  href={social.url}
                  className="p-2 rounded-full sm:p-4 "
                  style={{ backgroundColor: "rgba(123, 104, 238, 0.10)" }}
                >
                  <social.icon className="text-xl text-secondary-lavender" />
                </a>
              ))}
            </div>
          </div>
        </div>
        {/* END : Image Section Mobile */}

        <div className="pt-4 text-sm sm:text-base dark:text-secondary-gray text-primary-gray">
          <hr className="w-3/12 sm:w-1/12" />
          <p
            className="mt-6 text-justify"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration={1000}
          >
            {PROFILE_DESCRIPTION_ONE}
          </p>
          <p
            className="hidden mt-6 text-justify sm:block"
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration={1000}
          >
            {PROFILE_DESCRIPTION_TWO}
          </p>
        </div>

        <div className="flex items-center gap-6 pt-4 text-sm font-medium lg:pt-12 sm:pt-0 sm:text-base">
          <div data-aos="fade-down" data-aos-delay="900" data-aos-duration={1000}>
            <a
              className="flex items-center justify-center gap-2 py-3 text-white transition-all rounded-md sm:gap-3 w-36 sm:w-48 bg-primary-lavender hover:scale-105"
              href="/CV I Nengah Danarsa Suniadevta.pdf"
              download="CV Devta Danarsa.pdf"
            >
              <FaFileAlt />
              Download CV
            </a>
          </div>
          <div data-aos="fade-down" data-aos-delay="1200" data-aos-duration={1000}>
            <a href="https://github.com/devtadanarsa">
              <button className="py-3 transition-all border rounded-md w-36 sm:w-48 border-primary-black dark:border-white hover:scale-105">
                More
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Image Section Desktop */}
      <div
        className="hidden lg:block mx-auto"
        data-aos="fade-left"
        data-aos-delay="300"
        data-aos-duration={1000}
      >
        <img src="/hero-picture.png" alt="Profile Picture" className="h-[60vh]" />
        <div className="flex justify-center items-center gap-8 mt-8">
          <p
            className="text-lg font-medium"
            data-aos="fade-down"
            data-aos-delay="1000"
            data-aos-duration={1000}
          >
            Find me on
          </p>
          {SOCIALS.map((social, index) => (
            <SocialIcon key={`Social - ${index}`} index={index} social={social} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
