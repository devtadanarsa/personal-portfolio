import { IconType } from "react-icons";
import React from "react";

interface SocialIconProps {
  index: number;
  social: {
    icon: IconType;
    url: string;
    colorCode: string;
  };
}

const SocialIcon: React.FC<SocialIconProps> = ({ index, social }) => {
  return (
    <a
      data-aos="fade-down"
      data-aos-delay={1000 + index * 300}
      href={social.url}
      className={`w-14 h-14 transition-colors rounded-full bg-primary-lavender bg-opacity-15 ease-in-out group flex justify-center items-center gap-2`}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.backgroundColor =
          social.colorCode;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.backgroundColor =
          "rgba(200, 180, 240, 0.15)";
      }}
    >
      <social.icon className="text-2xl group-hover:text-[27px] transition-transform ease-in-out text-secondary-lavender group-hover:text-white" />
    </a>
  );
};

export default SocialIcon;
