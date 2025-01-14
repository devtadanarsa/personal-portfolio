import { Chrono } from "react-chrono";
import { careerTimeline } from "../../../constants/info";

const TimelineSection = () => {
  const customContent = careerTimeline.map((item) => (
    <div className="w-full h-full lg:py-2 flex flex-col justify-center">
      <h3 className="text-sm sm:text-md lg:text-xl font-semibold text-primary-lavender">
        {item.position}
      </h3>
      <p className="text-xs sm:text-sm lg:text-base text-secondary-gray">{item.company}</p>
      <p className="text-xs sm:text-sm lg:text-base mt-4">{item.description}</p>
    </div>
  ));
  return (
    <div className="w-full">
      <div className="hidden sm:block" data-aos="fade-up" data-aos-delay={300}>
        <Chrono
          mode="VERTICAL_ALTERNATING"
          cardHeight={230}
          cardWidth={1000}
          disableToolbar
          items={careerTimeline.map((item) => ({
            title: item.title,
          }))}
          enableBreakPoint={false}
          theme={{
            primary: "#8368FF",
            secondary: "#8368FF",
            cardBgColor: "rgba(131, 104, 255, 0.1)",
            titleColor: "#8368FF",
            titleColorActive: "white",
          }}
        >
          {customContent}
        </Chrono>
      </div>

      <div className="sm:hidden">
        <Chrono
          mode="VERTICAL"
          cardHeight={230}
          // cardWidth={1000}
          disableToolbar
          items={careerTimeline.map((item) => ({
            title: item.year,
          }))}
          enableBreakPoint={false}
          theme={{
            primary: "#8368FF",
            secondary: "#8368FF",
            cardBgColor: "rgba(131, 104, 255, 0.1)",
            titleColor: "#8368FF",
            titleColorActive: "white",
          }}
          fontSizes={{
            title: "10px",
          }}
        >
          {customContent}
        </Chrono>
      </div>
    </div>
  );
};

export default TimelineSection;
