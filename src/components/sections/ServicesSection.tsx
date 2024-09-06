import CustomSwiper from "../CustomSwiper";

const ServicesSection = () => {
  return (
    <section className="py-12 sm:py-48 flex flex-col items-center gap-4 sm:gap-6 lg:gap-12">
      <h4 className="text-md sm:text-xl text-secondary-gray font-medium">
        What do I offer
      </h4>
      <h2 className="text-xl sm:text-3xl lg:text-4xl max-w-4xl text-center font-medium leading-snug">
        Creates Powerful Software That's Oriented Towards Client Needs
      </h2>

      <CustomSwiper />
    </section>
  );
};

export default ServicesSection;
