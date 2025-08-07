import React, { useState } from "react";
import logo from "../assets/logo.svg";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = ["home", "about", "services", "projects", "contacts"];

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="w-full fixed top-0 z-50 bg-black/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center text-white">
        {/* Logo */}
        <img src={logo} alt="Logo" />

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-4 lg:gap-8 capitalize font-medium tracking-wide text-base lg:text-lg">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className="hover:text-orange-400 transition-colors duration-200"
              >
                {item.replace("-", " ")}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Button */}
        <a
          href="#contacts"
          className="hidden md:inline-block bg-gradient-to-r from-orange-500 to-purple-500 px-3 py-1.5 md:px-4 md:py-2 rounded-xl text-base lg:text-lg font-semibold hover:scale-105 transition-transform"
        >
          Connect With Me
        </a>

        {/* Mobile Icon */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={toggleMenu}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/90 text-white px-6 pt-4 pb-8 flex flex-col gap-4 text-base font-medium">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="capitalize hover:text-orange-400 transition-colors duration-200"
              onClick={() => setMenuOpen(false)}
            >
              {item.replace("-", " ")}
            </a>
          ))}
          <a
            href="#contacts"
            className="bg-gradient-to-r from-orange-500 to-purple-500 px-4 py-2 mt-2 rounded-xl text-center font-semibold hover:scale-105 transition-transform"
            onClick={() => setMenuOpen(false)}
          >
            Connect With Me
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
