import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const projectList = [
    {
      title: "Rapid Meals - Food Ordering UI",
      description:
        "Rapid Meals is a modern, responsive food ordering UI featuring intuitive navigation, dynamic food listings, and a clean, user-friendly interface.",
      previewLink: "/videos/Rapid Meals Preview.mp4",
      codeLink: "https://github.com/RitikSharma2115/Rapid-Meals",
      techStack: ["React", "Tailwind CSS", "JavaScript"],
      imageUrl: "/images/food-ordering.png",
    },
    {
      title: "Doctor's Appoint+",
      description:
        "Doctor's Appoint+ is a role-based appointment booking app for patients, doctors, and admins with real-time scheduling and management features.",
      previewLink: "/videos/DoctorsAppoint_Preview.mp4",
      codeLink: "https://github.com/RitikSharma2115/DoctorsAppoint",
      techStack: ["React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
      imageUrl: "/images/appointment-booking.png",
    },
    // Add more projects
  ];

  return (
    <section
      id="projects"
      className="py-16 px-6 pt-24 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">
          My Projects
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projectList.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
