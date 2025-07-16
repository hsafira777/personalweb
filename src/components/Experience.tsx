export default function Experience() {
  const experiences = [
    {
      role: "Full-Stack Developer",
      company: "TechSavvy Solutions",
      duration: "2023 – Present",
      description:
        "Developing scalable web apps with React and Node.js. Collaborated with UI/UX designers and DevOps for seamless deployment.",
    },
    {
      role: "Frontend Intern",
      company: "Creative Minds Studio",
      duration: "2022 – 2023",
      description:
        "Assisted in redesigning client websites using Tailwind CSS and improving accessibility scores.",
    },
    {
      role: "Freelance Designer & Developer",
      company: "Remote / Self-employed",
      duration: "2021 – 2022",
      description:
        "Worked with small businesses to build personal websites and simple CMS platforms using Next.js.",
    },
  ];

  return (
    <section className="bg-gray-50 py-20 px-6 text-gray-800">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-indigo-700 mb-12">
          Experience
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <div key={i} className="border-l-4 border-indigo-600 pl-6 relative">
              <div className="absolute top-0 left-[-0.5rem] w-3 h-3 bg-indigo-600 rounded-full"></div>
              <h3 className="text-xl font-semibold">{exp.role}</h3>
              <p className="text-sm text-gray-500">
                {exp.company} &middot; {exp.duration}
              </p>
              <p className="mt-2 text-gray-700">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
