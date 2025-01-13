import { Chrono } from "react-chrono";
import { careerTimeline } from "../../../constants/info";

const TimelineSection = () => {
  const customContent = careerTimeline.map((item) => (
    <div className="w-full h-full py-2 flex flex-col justify-center">
      <h3 className="text-xl font-semibold text-primary-lavender">{item.position}</h3>
      <p className="text-secondary-gray">{item.company}</p>
      <p className="text-base mt-4">{item.description}</p>
    </div>
  ));
  return (
    <div>
      <Chrono
        mode="VERTICAL_ALTERNATING"
        cardHeight={230}
        disableToolbar
        items={careerTimeline}
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
  );
};

export default TimelineSection;
