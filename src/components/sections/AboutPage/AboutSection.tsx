import { PROFILE_DESCRIPTION_ONE } from "../../../constants/info";

const AboutSection = () => {
  return (
    <div className="flex flex-col items-center gap-6 sm:gap-10">
      <h1 className="text-xl font-semibold sm:text-2xl lg:text-3xl">
        About <span className="text-primary-lavender">Me</span>
      </h1>
      <div className="p-2 border-white rounded-full border-x">
        <img
          src="/profile-picture.png"
          alt="Profile Picture"
          className="px-5 border rounded-full h-52 sm:h-64 border-primary-lavender"
        />
      </div>
      <h2 className="text-lg font-medium sm:text-xl lg:text-2xl">
        Website Developer
      </h2>
      <p className="max-w-screen-lg text-sm text-center sm:text-md lg:text-base">
        {PROFILE_DESCRIPTION_ONE}
      </p>
    </div>
  );
};

export default AboutSection;
