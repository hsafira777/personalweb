export default function Skills() {
  return (
    <section className="py-16 px-6 bg-white text-gray-800">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Skills</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold">Front-End</h3>
            <ul className="list-disc list-inside">
              <li>HTML, CSS, JavaScript</li>
              <li>React, Next.js</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Back-End</h3>
            <ul className="list-disc list-inside">
              <li>Node.js, Express</li>
              <li>MongoDB, PostgreSQL</li>
              <li>REST APIs</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Tools & DevOps</h3>
            <ul className="list-disc list-inside">
              <li>Git & GitHub</li>
              <li>Vercel, Netlify</li>
              <li>Docker</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
