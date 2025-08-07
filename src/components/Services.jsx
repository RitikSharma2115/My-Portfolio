import {
  FaCode,
  FaServer,
  FaLaptopCode,
  FaMobileAlt,
  FaUserShield,
  FaChartBar,
  FaRocket,
} from "react-icons/fa";

const services = [
  {
    title: "Frontend Development",
    description:
      "I build responsive and accessible UIs using React.js and Tailwind CSS.",
    icon: <FaLaptopCode size={30} />,
  },
  {
    title: "Backend Development",
    description:
      "Create scalable backend APIs with Node.js, Express.js, and MongoDB.",
    icon: <FaServer size={30} />,
  },
  {
    title: "Full Stack Web Apps",
    description:
      "Build fully integrated web apps from scratch using MERN stack or Firebase.",
    icon: <FaCode size={30} />,
  },
  {
    title: "Responsive UI Design",
    description:
      "Transform Figma designs into pixel-perfect responsive websites.",
    icon: <FaMobileAlt size={30} />,
  },
  {
    title: "Authentication Systems",
    description:
      "Secure login/signup with Firebase Auth, JWT & role-based access.",
    icon: <FaUserShield size={30} />,
  },
  {
    title: "Dashboard Development",
    description:
      "Interactive dashboards with analytics, filters, and data management.",
    icon: <FaChartBar size={30} />,
  },
  {
    title: "Deployment & Optimization",
    description:
      "Deploy apps to Vercel/Netlify/Firebase with speed and SEO in mind.",
    icon: <FaRocket size={30} />,
  },
];

export default function Services() {
  return (
    <div
      className="py-16 px-6 pt-24 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100"
      id="services"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Gradient Heading */}
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">
          My Services
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-12">
          What I can do for you
        </p>

        {/* Grid of Services */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 text-black dark:text-white rounded-xl shadow-md p-6 transform hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              {/* Icon Centered */}
              <div className="flex justify-center items-center text-blue-600 mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm text-center">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
