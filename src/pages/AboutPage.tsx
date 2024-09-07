import MainLayout from "../components/layouts/MainLayout";
import AboutSection from "../components/sections/AboutPage/AboutSection";

const AboutPage = () => {
  return (
    <MainLayout>
      <div className="px-6 sm:px-12 lg:px-24">
        <AboutSection />
      </div>
    </MainLayout>
  );
};

export default AboutPage;
