export default function About() {
  return (
    <section className="bg-white py-20 px-6 text-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-indigo-700">About Me</h2>
        <p className="text-lg mb-6 leading-relaxed">
          Hello! I’m{" "}
          <span className="font-semibold text-indigo-600">Hanny Safira</span>, a
          passionate full-stack developer with a love for building scalable,
          human-centered web experiences. I started my journey in tech because I
          believe that design and functionality should always go hand in hand.
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-left mt-10">
          <div className="bg-indigo-50 p-6 rounded-lg shadow-md">
            <h3 className="font-semibold text-lg mb-2">🛠 Experience</h3>
            <p className="text-sm text-gray-700">
              3+ years building modern web apps using React, Next.js, and
              Node.js for startups and personal projects.
            </p>
          </div>

          <div className="bg-indigo-50 p-6 rounded-lg shadow-md">
            <h3 className="font-semibold text-lg mb-2">💡 Core Skills</h3>
            <ul className="list-disc list-inside text-sm text-gray-700">
              <li>JavaScript, TypeScript</li>
              <li>React, Next.js</li>
              <li>Node.js, Express</li>
              <li>UI/UX & Responsive Design</li>
            </ul>
          </div>

          <div className="bg-indigo-50 p-6 rounded-lg shadow-md">
            <h3 className="font-semibold text-lg mb-2">🌱 Core Values</h3>
            <p className="text-sm text-gray-700">
              I value empathy, attention to detail, and clear communication. I
              aim to create meaningful solutions that make a difference.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
