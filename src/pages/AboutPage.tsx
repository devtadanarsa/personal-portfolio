import MainLayout from "../components/layouts/MainLayout";
import AboutSection from "../components/sections/AboutPage/AboutSection";
import TimelineSection from "../components/sections/AboutPage/TimelineSection";

const AboutPage = () => {
  return (
    <MainLayout>
      <div className="px-6 sm:px-12 lg:px-24 relative space-y-24">
        <AboutSection />
        <TimelineSection />
      </div>
    </MainLayout>
  );
};

export default AboutPage;
