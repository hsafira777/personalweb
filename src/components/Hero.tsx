export default function Hero() {
  return (
    <section className="bg-white py-20 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <img
          src="/PasfotoHannySafira.jpeg"
          alt="Developer Avatar"
          className="w-28 h-28 rounded-full mx-auto mb-4 shadow-md"
        />
        <h1 className="text-4xl font-bold text-gray-900">Hanny Safira</h1>
        <p className="text-lg text-gray-600 mt-2">Full-Stack Web Developer</p>
        <p className="mt-4 text-gray-700">
          Building scalable and high-performance web solutions tailored to human
          connection.
        </p>
        <button className="mt-6 px-6 py-2 bg-blue-950 text-white rounded hover:bg-blue-950">
          View Portfolio
        </button>
      </div>
    </section>
  );
}
