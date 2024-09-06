import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaWhatsapp,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoPhonePortraitSharp } from "react-icons/io5";

export const CONTACTS = [
  {
    title: "Phone",
    value: "+62 812 6686 4907",
    icon: IoPhonePortraitSharp,
  },
  {
    title: "Email",
    value: "devtadanarsa@gmail.com",
    icon: IoMdMail,
  },
  {
    title: "Address",
    value: "Jl. Sekar Sari 99, Denpasar, Bali",
    icon: FaLocationArrow,
  },
];

export const SOCIALS = [
  {
    icon: FaInstagram,
    url: "https://www.instagram.com/devtadanarsa/",
  },
  {
    icon: FaWhatsapp,
    url: "https://wa.me/6281266864907",
  },
  {
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/i-nengah-danarsa-suniadevta/",
  },
  {
    icon: FaGithub,
    url: "https://github.com/devtadanarsa",
  },
];
