import MainLayout from "../components/layouts/MainLayout";
import TeamProfileCard from "../components/TeamProfileCard";
import { TEAM_MEMBERS } from "../constants/teams";

const TeamPage = () => {
  return (
    <MainLayout>
      <div className="flex flex-col items-center gap-6 px-6 sm:gap-24 sm:px-12 lg:px-24">
        <h1 className="text-3xl font-semibold text-center">
          Hacker Front End Team
        </h1>
        <div className="flex flex-wrap justify-center gap-8">
          {TEAM_MEMBERS.map((member, index) => (
            <TeamProfileCard key={`Team - ${index}`} {...member} />
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default TeamPage;
