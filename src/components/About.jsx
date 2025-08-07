import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import theme_pattern from "../assets/theme_pattern.svg";
import profile_img from "../assets/About_Profile_pic.svg";

const About = () => {
  return (
    <div
      id="about"
      className="flex flex-col items-center justify-center px-6 py-12 pt-24 md:px-20 lg:px-36 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100"
    >
      {/* Header */}
      <div className="relative mb-12 text-center">
        <h1 className="text-3xl md:text-6xl font-bold relative z-10">
          About Me
        </h1>
        <img
          src={theme_pattern}
          alt="Pattern"
          className="absolute top-0 left-1/2 -translate-x-1/2 w-48 md:w-72 opacity-30 z-0"
        />
      </div>

      {/* Profile + Intro */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex flex-col lg:flex-row items-center gap-10 mb-16"
      >
        <div className="w-48 md:w-64 lg:w-80 mb-6 lg:mb-0">
          <img
            src={profile_img}
            alt="Profile"
            className="rounded-lg shadow-lg dark:shadow-white/10"
          />
        </div>

        <div className="flex flex-col text-start gap-6 text-lg leading-relaxed max-w-2xl">
          <p>
            Hello! I'm <span className="font-semibold">Ritik Sharma</span>, a
            passionate web developer who loves crafting dynamic and responsive
            web applications. With a background in computer science and a deep
            enthusiasm for coding, I turn ideas into real-world solutions.
          </p>
          <p>
            My journey has equipped me with strong skills in HTML, CSS,
            JavaScript, and modern frameworks. I enjoy collaborating to build
            intuitive, user-friendly interfaces and seamless user experiences.
          </p>
        </div>
      </motion.div>

      {/* Skills Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="mb-16 w-full max-w-4xl"
      >
        <h2 className="text-2xl font-semibold mb-4">Skills:</h2>
        <ul className="list-disc list-inside text-lg space-y-2 font-medium">
          <li>
            <strong>Frontend:</strong> HTML, CSS, JavaScript, React.js, Tailwind
            CSS
          </li>
          <li>
            <strong>Backend:</strong> Node.js, Express.js
          </li>
          <li>
            <strong>Database:</strong> MongoDB
          </li>
          <li>
            <strong>Tools & Platforms:</strong> Git, GitHub, Firebase, Vercel,
            Render
          </li>
          <li>
            <strong>Other:</strong> REST APIs, JWT Authentication, Responsive
            Web Design
          </li>
        </ul>
      </motion.div>

      {/* Statistics Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row justify-around items-center w-full gap-6 max-w-4xl text-center"
      >
        <StatCard number={4} label="MONTHS INTERNSHIP" />
        <div className="hidden md:block h-16 w-px bg-gray-300 dark:bg-gray-600" />
        <StatCard number={6} label="MONTHS TRAINING" />
        <div className="hidden md:block h-16 w-px bg-gray-300 dark:bg-gray-600" />
        <StatCard number={5} label="PERSONAL PROJECTS" />
      </motion.div>
    </div>
  );
};

const StatCard = ({ number, label }) => (
  <div className="flex flex-col items-center">
    <h1 className="text-4xl font-bold text-indigo-600 dark:text-indigo-400">
      <CountUp end={number} duration={2} suffix="+" />
    </h1>
    <p className="text-sm mt-2 tracking-wider text-gray-600 dark:text-gray-300 uppercase">
      {label}
    </p>
  </div>
);

export default About;
