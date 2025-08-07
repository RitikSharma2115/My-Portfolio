import React from "react";
import profile_img from "../assets/Profile_pic.svg";

const Hero = () => {
  return (
    <div
      id="home"
      className="flex flex-col items-center justify-center min-h-screen px-4 pt-24 text-center"
    >
      {/* Profile Image */}
      <img
        src={profile_img}
        alt="Ritik Sharma Profile"
        className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full shadow-xl object-cover mb-6"
      />

      {/* Name & Title */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
        <span
          className="bg-clip-text text-transparent"
          style={{
            backgroundImage:
              "linear-gradient(270deg, #DF8908 10%, #B415FF 100%)",
          }}
        >
          I'm Ritik Sharma,
        </span>{" "}
        <br />
        Frontend Developer.
      </h1>

      {/* Description */}
      <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl font-medium mt-2">
        A passionate MERN Stack Developer who builds modern and responsive web
        applications using React.js, Node.js, Express.js and MongoDB.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-8 mb-8 items-center">
        <a
          href="#projects"
          className="px-6 py-3 rounded-full font-semibold text-white text-base sm:text-lg transition-transform duration-300 hover:scale-105"
          style={{
            background: "linear-gradient(264deg, #DF8908 -5.09%, #B415FF 100%)",
          }}
        >
          View Projects
        </a>

        <a
          href="/RITIK_RESUME.pdf"
          target="_blank"
          rel="noopener noreferrer"
          title="Open PDF"
          onClick={(e) => e.stopPropagation()}
          className="px-6 py-3 rounded-full font-semibold text-white text-base sm:text-lg transition-transform duration-300 hover:scale-105"
          style={{
            background: "linear-gradient(264deg, #DF8908 -5.09%, #B415FF 100%)",
          }}
        >
          My Resume
        </a>
      </div>
    </div>
  );
};

export default Hero;
