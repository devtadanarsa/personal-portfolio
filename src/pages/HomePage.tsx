import MainLayout from "../components/layouts/MainLayout";
import HeroSection from "../components/sections/HeroSection";
import ServicesSection from "../components/sections/ServicesSection";
import StatsSection from "../components/sections/StatsSection";

const HomePage = () => {
  return (
    <div>
      <MainLayout>
        <div className="px-6 sm:px-12">
          <HeroSection />
          <ServicesSection />
        </div>
        <StatsSection />
      </MainLayout>
    </div>
  );
};

export default HomePage;
