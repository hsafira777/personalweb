export default function About() {
  return (
    <section className="py-16 px-6 bg-gray-50 text-gray-800">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <p className="mb-2">
          I'm Hanny Safira, a passionate full-stack web developer with a strong
          interest in building efficient and human-centered digital solutions.
        </p>
        <p className="mb-2">
          With a background in both front-end and back-end development, I
          specialize in crafting responsive websites, REST APIs, and scalable
          architecture.
        </p>
        <ul className="list-disc list-inside mt-4">
          <li>JavaScript, TypeScript</li>
          <li>React, Next.js</li>
          <li>Node.js, Express, MongoDB</li>
          <li>Attention to detail & clear communication</li>
        </ul>
      </div>
    </section>
  );
}