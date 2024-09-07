import { FC } from "react";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

interface TeamProfileCardProps {
  name: string;
  image: string;
  university: string;
  description: string;
  twitter_url: string;
  email: string;
  instagram_url: string;
  linkedin_url: string;
}

const TeamProfileCard: FC<TeamProfileCardProps> = ({
  name,
  image,
  university,
  description,
  twitter_url,
  email,
  instagram_url,
  linkedin_url,
}) => {
  return (
    <div className="px-4 py-6 border rounded-lg w-80 border-primary-lavender lg:w-92">
      <div className="flex gap-4">
        <img
          src={image}
          alt="Profile"
          className="object-cover w-24 h-24 rounded-full"
        />
        <div>
          <h2 className="text-lg font-bold">{name}</h2>
          <p className="text-sm">{university}</p>
        </div>
      </div>
      <div className="mt-4">
        <p className="mt-4 text-sm line-clamp-3">{description}</p>
        <p className="mt-4 font-bold">Reach me :</p>
        <div className="flex items-center gap-2 mt-3 text-white">
          <div className="p-2 transition-all rounded-full bg-secondary-lavender hover:scale-110 w-fit">
            <a href={twitter_url}>
              <FaTwitter />
            </a>
          </div>
          <div className="p-2 transition-all rounded-full bg-secondary-lavender w-fit hover:scale-110">
            <a href={`mailto:${email}`}>
              <IoMdMail />
            </a>
          </div>
          <div className="p-2 rounded-full bg-secondary-lavender w-fit hover:scale-110 transition-al">
            <a href={instagram_url}>
              <FaInstagram />
            </a>
          </div>
          <div className="p-2 rounded-full bg-secondary-lavender w-fit hover:scale-110 transition-al">
            <a href={linkedin_url}>
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamProfileCard;
