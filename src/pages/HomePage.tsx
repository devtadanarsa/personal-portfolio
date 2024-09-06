import MainLayout from "../components/layouts/MainLayout";
import HeroSection from "../components/sections/HeroSection";
import ServicesSection from "../components/sections/ServicesSection";

const HomePage = () => {
  return (
    <div>
      <MainLayout>
        <HeroSection />
        <ServicesSection />
      </MainLayout>
    </div>
  );
};

export default HomePage;
