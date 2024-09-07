import MainLayout from "../components/layouts/MainLayout";
import { PROFILE_DESCRIPTION_ONE } from "../constants/info";

const AboutPage = () => {
  return (
    <MainLayout>
      <div className="flex flex-col items-center gap-10">
        <h1 className="text-3xl font-semibold">
          About <span className="text-primary-lavender">Me</span>
        </h1>
        <div className="p-2 border-white rounded-full border-x">
          <img
            src="/profile-picture.png"
            alt="Profile Picture"
            className="h-64 px-5 border rounded-full border-primary-lavender"
          />
        </div>
        <h2 className="text-2xl font-medium">Website Developer</h2>
        <p className="max-w-screen-lg text-center">{PROFILE_DESCRIPTION_ONE}</p>
      </div>
    </MainLayout>
  );
};

export default AboutPage;
