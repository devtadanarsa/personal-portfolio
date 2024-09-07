import { useContext, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose, IoMoon, IoSunny } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import { NAV_LINKS } from "../../constants/header";
import { ThemeContext } from "../../contexts/ThemeContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const { pathname } = useLocation();

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="sticky top-0 z-[999]">
      <div className="flex items-center justify-between px-6 py-6 font-medium bg-primary-white dark:text-white dark:bg-secondary-black sm:py-6 lg:py-8 sm:px-12 lg:px-24">
        <p className="text-lg sm:text-2xl">
          <span className="text-primary-lavender">Devta</span>Dev
        </p>

        <div className="flex items-center gap-4 sm:hidden">
          <div
            className="p-2 bg-transparent border rounded-full cursor-pointer sm:block bg-transparet border-primary-lavender"
            onClick={toggleTheme}
          >
            {theme === "dark" ? (
              <IoMoon className="text-xl text-primary-lavender" />
            ) : (
              <IoSunny className="text-xl text-primary-lavender" />
            )}
          </div>
          <div
            className="p-2 border border-primary-lavender text-primary-lavender"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {!isMenuOpen ? <GiHamburgerMenu /> : <IoClose />}
          </div>
        </div>

        <div className="items-center hidden gap-12 text-lg lg:text-xl sm:flex">
          {NAV_LINKS.map((link, index) => (
            <Link
              to={link.href}
              key={`Nav - ${index}`}
              className={`${
                pathname === link.href ? "text-primary-lavender" : ""
              } hover:text-primary-lavender transition-all`}
            >
              {link.name}
            </Link>
          ))}
          <div className="px-4 py-3 border rounded-lg cursor-pointer border-primary-lavender hover:bg-primary-lavender hover:text-primary-white text-primary-lavender">
            <a href="https://wa.me/6281266864907" className="transition-all">
              Contact me
            </a>
          </div>
        </div>
      </div>

      <div
        className="absolute right-0 hidden p-2 mt-8 mr-10 bg-transparent border-2 rounded-full cursor-pointer sm:block bg-transparet border-primary-lavender"
        onClick={toggleTheme}
      >
        {theme === "dark" ? (
          <IoMoon className="text-3xl text-primary-lavender" />
        ) : (
          <IoSunny className="text-3xl text-primary-lavender" />
        )}
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } fixed right-0 h-screen bg-secondary-white dark:bg-secondary-black pl-12 pr-6 text-end  transform transition-transform duration-300 ease-in-out`}
      >
        <div className="flex flex-col gap-4 mt-2">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <a href="/" className="text-primary-lavender">
            Contact me
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
