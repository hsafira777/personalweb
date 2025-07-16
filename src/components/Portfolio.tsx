export default function Portfolio() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack online store with product search, cart, and payment integration.",
      tech: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "Personal Blog CMS",
      description:
        "A markdown-based blog engine with authentication and image upload.",
      tech: ["Next.js", "Supabase", "Tailwind CSS"],
    },
    {
      title: "Design Portfolio",
      description:
        "A minimalist showcase for a graphic design collection and client work.",
      tech: ["HTML", "SCSS", "JavaScript"],
    },
  ];

  return (
    <section className="bg-white py-20 px-6 text-gray-800">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-indigo-700 mb-12">
          Featured Projects
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, i) => (
            <div
              key={i}
              className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition-shadow"
            >
              <h3 className="text-2xl font-semibold mb-2 text-indigo-600">
                {project.title}
              </h3>
              <p className="text-sm mb-4 text-gray-700">
                {project.description}
              </p>
              <div className="mb-4">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="inline-block text-xs bg-indigo-100 text-indigo-700 px-2 py-1 mr-2 mb-2 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
