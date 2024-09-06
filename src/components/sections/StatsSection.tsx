import { STATS } from "../../constants/info";

const StatsSection = () => {
  return (
    <div className="bg-[url('/background-port.png')] flex justify-center gap-4 lg:gap-8 py-12">
      {STATS.map((stat, index) => (
        <div
          className="flex flex-col items-center justify-center gap-2 transition-all border border-dashed rounded-lg cursor-pointer h-44 w-44 lg:w-64 lg:h-64 hover:bg-primary-lavender"
          key={`Stats - ${index}`}
        >
          <p className="text-3xl font-bold">{stat.value}</p>
          <p className="text-sm lg:text-lg">{stat.title}</p>
        </div>
      ))}
    </div>
  );
};

export default StatsSection;
