import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom"; // if using react-router-dom

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-5">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Brand/Name */}
        <div>
          <h1 className="text-2xl font-bold mb-2">Ritik Sharma</h1>
          <p className="text-gray-400">
            Frontend Developer | React • Node • Firebase
          </p>
        </div>

        {/* Navigation */}
        <div className="ml-10">
          <h2 className="text-xl font-semibold mb-3">Quick Links</h2>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="#home" className="hover:text-white transition">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-white transition">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-white transition">
                Services
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-white transition">
                Projects
              </a>
            </li>
            <li>
              <a href="#contacts" className="hover:text-white transition">
                Contacts
              </a>
            </li>
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Follow Me</h2>
          <div className="flex justify-center md:justify-start gap-5 text-2xl text-gray-400">
            <a
              href="https://github.com/RitikSharma2115"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/ritik-sharma-a589142b8"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://wa.me/919996327053?text=Hi%20there%2C%20I%20found%20your%20portfolio!
"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://instagram.com/ritiksharma2115/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 text-center text-lg text-gray-500 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Ritik Sharma. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
