import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <header className="sticky top-0">
      <div className="bg-secondary-black flex justify-between items-center py-6 sm:py-8 lg:py-12 font-medium text-white px-6 sm:px-12 lg:px-24">
        <p className="text-lg sm:text-2xl">
          <span className="text-primary-lavender">Devta</span>Dev
        </p>

        <div
          className="border border-primary-lavender text-primary-lavender p-2 sm:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {!isMenuOpen ? <GiHamburgerMenu /> : <IoClose />}
        </div>

        <div className="hidden gap-12 items-center text-lg lg:text-xl sm:flex">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <div className="border border-primary-lavender px-4 py-3 rounded-lg">
            <a href="/" className="text-primary-lavender">
              Contact me
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } fixed right-0 h-screen bg-secondary-black pl-12 pr-6 text-end text-white transform transition-transform duration-300 ease-in-out`}
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
