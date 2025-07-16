import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Portfolio from "@/components/Portfolio";
import Experience from "@/components/Experience";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export const metadata = {
  title: "Hanny Safira | Full-Stack Web Developer",
  description:
    "Crafting modern, scalable web solutions with Next.js and Tailwind CSS.",
};

export default function Home() {
  return (
    <main className="space-y-16 px-4">
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Experience />
      <Testimonials />
      <Contact />
    </main>
  );
}
