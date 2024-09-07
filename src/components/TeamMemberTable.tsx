import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { TEAM_MEMBERS } from "../constants/teams";
import { IoMdMail } from "react-icons/io";

const TeamMemberTable = () => {
  return (
    <table className="min-w-full border border-gray-200 rounded-lg shadow-md">
      <thead>
        <tr className="border-b border-gray-300">
          <th className="px-6 py-3 text-xs font-medium tracking-wider text-left uppercase">
            Image
          </th>
          <th className="px-6 py-3 text-xs font-medium tracking-wider text-left uppercase">
            Name
          </th>
          <th className="px-6 py-3 text-xs font-medium tracking-wider text-left uppercase">
            University
          </th>
          <th className="px-6 py-3 text-xs font-medium tracking-wider text-left uppercase">
            Description
          </th>
          <th className="px-6 py-3 text-xs font-medium tracking-wider text-left uppercase">
            Social Links
          </th>
        </tr>
      </thead>
      <tbody>
        {TEAM_MEMBERS.map((profile, index) => (
          <tr key={index} className="border-b border-gray-200">
            <td className="px-6 py-4">
              <img
                src={profile.image}
                alt={`${profile.name}'s profile`}
                className="object-cover w-16 h-16 rounded-full"
              />
            </td>
            <td className="px-6 py-4 text-sm font-medium ">{profile.name}</td>
            <td className="px-6 py-4 text-sm ">{profile.university}</td>
            <td className="px-6 py-4 text-sm line-clamp-2 md:line-clamp-3 lg:line-clamp-none">
              {profile.description}
            </td>
            <td className="px-6 py-4 text-sm">
              <div className="flex items-center space-x-3">
                {profile.twitter_url && (
                  <a
                    href={profile.twitter_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-500"
                  >
                    <FaTwitter className="w-5 h-5" />
                  </a>
                )}
                {profile.email && (
                  <a
                    href={`mailto:${profile.email}`}
                    className="text-gray-600 hover:text-blue-500"
                  >
                    <IoMdMail className="w-5 h-5" />
                  </a>
                )}
                {profile.instagram_url && (
                  <a
                    href={profile.instagram_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-pink-500"
                  >
                    <FaInstagram className="w-5 h-5" />
                  </a>
                )}
                {profile.linkedin_url && (
                  <a
                    href={profile.linkedin_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-700"
                  >
                    <FaLinkedin className="w-5 h-5" />
                  </a>
                )}
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TeamMemberTable;
