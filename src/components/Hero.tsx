export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-white to-blue-50 py-24 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <div className="relative w-36 h-36 mx-auto mb-6">
          <img
            src="/PasfotoHannySafira.jpeg"
            alt="Hanny Safira"
            className="w-full h-full object-cover rounded-full shadow-xl border-4 border-white"
          />
          <div className="absolute inset-0 rounded-full ring-2 ring-indigo-500 animate-pulse opacity-10"></div>
        </div>

        <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight">
          Hanny Safira
        </h1>
        <p className="text-xl text-indigo-700 mt-2 font-medium">
          Full-Stack Web Developer
        </p>

        <p className="mt-4 text-gray-600 text-lg leading-relaxed">
          Crafting scalable and high-performance web solutions
          <br />
          with a focus on people and purpose.
        </p>

        <div className="mt-6">
          <a
            href="#portfolio"
            className="inline-block px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition"
          >
            🚀 View Portfolio
          </a>
        </div>
      </div>
    </section>
  );
}
