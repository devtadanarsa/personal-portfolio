import { useState } from "react";
import MainLayout from "../components/layouts/MainLayout";
import TeamProfileCard from "../components/TeamProfileCard";
import { TEAM_MEMBERS } from "../constants/teams";
import TeamMemberTable from "../components/TeamMemberTable";

const TeamPage = () => {
  const [isGridView, setIsGridView] = useState(true);

  const toggleView = () => setIsGridView(!isGridView);

  return (
    <MainLayout>
      <div className="flex flex-col items-center gap-6 px-6 sm:gap-24 sm:px-12 lg:px-24">
        <div>
          <h1 className="text-3xl font-semibold text-center">
            Hacker Front End Team
          </h1>
          <p
            className="py-2 mt-4 text-center transition-all border border-black cursor-pointer dark:border-white hover:text-primary-lavender hover:border-primary-lavender dark:hover:border-primary-lavender hover:scale-110"
            onClick={toggleView}
          >
            {isGridView ? "Switch to List View" : "Switch to Grid View"}
          </p>
        </div>
        <div>
          {isGridView ? (
            <div className="flex flex-wrap justify-center gap-8">
              {TEAM_MEMBERS.map((member, index) => (
                <TeamProfileCard key={`Team - ${index}`} {...member} />
              ))}
            </div>
          ) : (
            <TeamMemberTable />
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default TeamPage;
