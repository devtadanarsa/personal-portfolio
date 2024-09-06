import CustomSwiper from "../CustomSwiper";

const ServicesSection = () => {
  return (
    <section className="flex flex-col items-center gap-4 py-12 sm:py-48 sm:gap-6 lg:gap-12">
      <h4 className="font-medium text-md sm:text-xl text-secondary-gray">
        What do I offer
      </h4>
      <h2 className="max-w-4xl text-xl font-medium leading-snug text-center sm:text-3xl lg:text-4xl">
        Creates Powerful Software That's Oriented Towards Client Needs
      </h2>

      <CustomSwiper />
    </section>
  );
};

export default ServicesSection;
