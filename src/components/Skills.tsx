export default function Skills() {
  return (
    <section className="bg-gray-50 py-20 px-6 text-gray-800">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-indigo-700 mb-10">
          My Skill Set
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-indigo-600 mb-3">
              🌐 Front-End
            </h3>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>HTML / CSS / SCSS</li>
              <li>JavaScript / TypeScript</li>
              <li>React / Next.js</li>
              <li>Tailwind CSS / Chakra UI</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-indigo-600 mb-3">
              🧠 Back-End
            </h3>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>Node.js / Express</li>
              <li>REST API / GraphQL</li>
              <li>MongoDB / PostgreSQL</li>
              <li>Prisma / Sequelize</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-indigo-600 mb-3">
              ⚙️ Tools & DevOps
            </h3>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>Git & GitHub</li>
              <li>Vercel / Netlify / Heroku</li>
              <li>Figma / Adobe XD</li>
              <li>CI/CD Basics / Docker</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
