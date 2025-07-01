export default function Portfolio() {
  return (
    <section className="py-16 px-6 bg-gray-100 text-gray-800">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Portfolio</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold">
              E-commerce Platform for XYZ Retail
            </h3>
            <p className="text-sm italic">
              Technologies: React, Node.js, MongoDB, AWS
            </p>
            <p className="mt-2">
              XYZ Retail wanted to expand into e-commerce. I developed the front
              and back end of the site using React and Node.js, deployed on AWS.
              The site led to a 35% increase in sales.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
