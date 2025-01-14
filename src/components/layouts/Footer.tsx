import { useContext } from "react";
import { CONTACTS } from "../../constants/contact";
import { ThemeContext } from "../../contexts/ThemeContext";

const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <footer className="relative flex justify-between gap-10 px-6 py-8 transition-all duration-1000 dark:text-white bg-secondary-white dark:bg-secondary-black sm:py-20 sm:px-12 lg:px-24">
      <div className="space-y-6">
        <h2 className="text-xl font-medium sm:text-3xl">Get in Touch</h2>
        <p className="text-sm text-secondary-gray sm:text-base">
          For business and partnership inquiry please contact me below!
        </p>

        <div className="space-y-4 text-sm sm:text-base">
          {CONTACTS.map((contact, index) => (
            <div className="flex items-center gap-3" key={index}>
              <div className="p-3 border border-white rounded-full">
                <contact.icon className="w-4 h-4" />
              </div>
              <div>
                <p className="text-secondary-gray">{contact.title}</p>
                <p>{contact.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {theme === "dark" ? (
        <img src="/footer-vector.png" className="object-cover overflow-hidden" />
      ) : (
        <img src="/footer-vector-light.png" className="object-cover overflow-hidden" />
      )}
    </footer>
  );
};

export default Footer;
