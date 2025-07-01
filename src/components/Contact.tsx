export default function Contact() {
  return (
    <section className="py-16 px-6 bg-white text-gray-800">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Contact</h2>
        <p className="mb-4">Feel free to reach out to me!</p>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 border rounded"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 border rounded"
          />
          <textarea
            placeholder="Your Message"
            className="w-full px-4 py-2 border rounded"
          ></textarea>
          <button className="bg-blue-950 text-white px-6 py-2 rounded hover:bg-blue-950">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}