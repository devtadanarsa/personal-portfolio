import { STATS } from "../../../constants/info";

const StatsSection = () => {
  return (
    <div className="bg-[url('/background-port.png')] flex flex-wrap justify-center gap-4 lg:gap-8 py-12">
      {STATS.map((stat, index) => (
        <div
          className="flex flex-col items-center justify-center w-40 h-40 gap-2 transition-all border border-dashed rounded-lg cursor-pointer sm:h-44 sm:w-44 lg:w-64 lg:h-64 hover:bg-primary-lavender"
          key={`Stats - ${index}`}
        >
          <p className="text-xl font-bold sm:text-3xl">{stat.value}</p>
          <p className="text-xs lg:text-lg">{stat.title}</p>
        </div>
      ))}
    </div>
  );
};

export default StatsSection;
