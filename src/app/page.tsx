import Image from "next/image";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
    </main>
  );
}
