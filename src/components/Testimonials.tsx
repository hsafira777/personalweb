export default function Testimonials() {
  const testimonials = [
    {
      name: "Ari Putra",
      role: "Founder, Lokal Studio",
      quote:
        "Working with Hanny was a game changer. Her ability to translate complex ideas into beautiful, functional websites is unmatched.",
    },
    {
      name: "Mira Anggraeni",
      role: "Product Manager, StartupX",
      quote:
        "Hanny is a professional who truly listens. She’s fast, reliable, and communicates clearly every step of the way.",
    },
    {
      name: "Raymond Tan",
      role: "CEO, DevNest",
      quote:
        "Her attention to detail and modern design sense make her one of the best developers I’ve collaborated with.",
    },
  ];

  return (
    <section className="bg-white py-20 px-6 text-gray-800">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-indigo-700 mb-12">
          What People Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition"
            >
              <p className="text-gray-600 italic mb-4">“{t.quote}”</p>
              <h4 className="font-semibold text-lg text-gray-900">{t.name}</h4>
              <p className="text-sm text-gray-500">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
