import { useState } from "react";

export default function ProjectCard({
  title,
  description,
  previewLink,
  codeLink,
  techStack = [],
  imageUrl,
}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="bg-white dark:bg-gray-800 text-black dark:text-white rounded-xl shadow-md overflow-hidden transform hover:scale-105 transition-all duration-300">
        {/* Project Screenshot */}
        {imageUrl && (
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-48 object-cover"
          />
        )}

        {/* Text Content */}
        <div className="p-5">
          {/* Buttons - Preview Left, Code Right */}
          <div className="flex justify-between items-center mb-3">
            {/* Preview Left */}
            {previewLink && (
              <button
                onClick={() => setShowModal(true)}
                className="px-3 py-1 text-xs bg-blue-500 text-white rounded hover:bg-blue-800 transition"
              >
                Preview
              </button>
            )}

            {/* Code Right */}
            {codeLink && (
              <a
                href={codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 text-xs bg-gray-700 text-white rounded hover:bg-gray-900 transition"
              >
                Code
              </a>
            )}
          </div>

          {/* Title and Description */}
          <h3 className="text-lg text-start font-semibold mb-2">{title}</h3>
          <p className="text-sm text-start text-gray-600 dark:text-gray-300 mb-4">
            {description}
          </p>

          {/* Tech Stack Tags */}
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, i) => (
              <span
                key={i}
                className="bg-gray-200 dark:bg-gray-700 text-xs px-2 py-1 rounded-full text-gray-800 dark:text-gray-100"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
          onClick={() => setShowModal(false)}
        >
          <div
            className="relative bg-black rounded-lg overflow-hidden w-[90%] max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              src={previewLink}
              controls
              autoPlay
              className="w-full h-auto max-h-[80vh]"
            />
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 text-white bg-red-600 px-2 py-1 text-sm rounded hover:bg-red-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
