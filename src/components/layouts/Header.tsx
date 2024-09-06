import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <header className="sticky top-0">
      <div className="flex items-center justify-between px-6 py-6 font-medium text-white bg-secondary-black sm:py-8 lg:py-12 sm:px-12 lg:px-24">
        <p className="text-lg sm:text-2xl">
          <span className="text-primary-lavender">Devta</span>Dev
        </p>

        <div
          className="p-2 border border-primary-lavender text-primary-lavender sm:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {!isMenuOpen ? <GiHamburgerMenu /> : <IoClose />}
        </div>

        <div className="items-center hidden gap-12 text-lg lg:text-xl sm:flex">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <div className="px-4 py-3 border rounded-lg border-primary-lavender">
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
