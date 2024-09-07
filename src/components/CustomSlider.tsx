import { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const slides = [
  { id: 1, content: "Website Development", image: "/services/web-dev.png" },
  {
    id: 2,
    content: "Mobile App Development",
    image: "/services/mobile-app.png",
  },
  { id: 3, content: "System Design", image: "/services/system-design.png" },
];

export default function CustomSlider() {
  const [currentIndex, setCurrentIndex] = useState<number>(1);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const getSlideClass = (index: number) => {
    const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
    const nextIndex = (currentIndex + 1) % slides.length;

    if (index === currentIndex) {
      return "scale-110 opacity-100 z-10";
    } else if (index === prevIndex || index === nextIndex) {
      return "scale-90 opacity-50";
    } else {
      return "scale-75 opacity-0 hidden";
    }
  };

  const getSlideColor = (index: number) => {
    const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
    const nextIndex = (currentIndex + 1) % slides.length;

    if (index === currentIndex) {
      return "bg-primary-lavender";
    } else if (index === prevIndex || index === nextIndex) {
      return null;
    } else {
      return null;
    }
  };

  return (
    <div className="mt-8">
      {/* Dots indicator */}
      <div
        className="items-center justify-center hidden w-full sm:flex"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <div className="flex items-center gap-4 justify-center w-full lg:w-[80%] mb-12">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`w-1/3 h-2 ${getSlideColor(index)} rounded-lg`}
            ></div>
          ))}
        </div>
      </div>

      {/* Slides */}
      <div
        className="flex items-center justify-center w-full mt-0"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <div className="flex w-full lg:w-[80%] justify-center overflow-hidden space-x-4">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`flex flex-col items-center gap-4 transform transition-all duration-500 ease-in-out rounded-lg ${
                index === currentIndex
                  ? "w-full md:w-1/3"
                  : "hidden md:flex md:w-1/3"
              } text-white text-center py-12 px-14 lg:px-20 ${getSlideClass(
                index
              )}`}
              style={{ backgroundColor: "rgba(123, 104, 238, 0.10)" }}
            >
              <img
                src={slide.image}
                alt={slide.content}
                className="h-20 sm:h-auto"
              />
              <p className="text-sm font-medium sm:text-lg text-primary-lavender">
                {slide.content}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation and dots */}
      <div className="flex items-center justify-center gap-4 mt-16">
        <FaAngleLeft onClick={handlePrev} className="text-xl cursor-pointer" />
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-20 h-2 ${
              getSlideColor(index) ?? "bg-secondary-gray"
            } rounded-lg`}
          ></div>
        ))}
        <FaAngleRight onClick={handleNext} className="text-xl cursor-pointer" />
      </div>
    </div>
  );
}
