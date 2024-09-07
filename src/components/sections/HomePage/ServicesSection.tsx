import CustomSlider from "../../CustomSlider";

const ServicesSection = () => {
  return (
    <section className="flex flex-col items-center gap-4 py-32 sm:py-48 sm:gap-6 lg:gap-12">
      <h4
        className="font-medium text-md sm:text-xl dark:text-secondary-gray text-primary-gray"
        data-aos="fade-up"
        data-delay="300"
      >
        What do I offer
      </h4>
      <h2
        className="max-w-4xl text-xl font-medium leading-snug text-center sm:text-3xl lg:text-4xl"
        data-aos="fade-up"
        data-delay="300"
      >
        Creates Powerful Software That's Oriented Towards Client Needs
      </h2>

      <CustomSlider />
    </section>
  );
};

export default ServicesSection;
