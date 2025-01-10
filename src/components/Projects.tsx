import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      name: "TutorEasy",
      techStack:
        "Next.js, TypeScript, PostgreSQL, Prisma, Azure, GCP, Docker, Clerk, TailwindCSS",
      description:
        "Designed and developed a centralized platform for professors to manage tutors and increase student understanding through tutoring session analytics, enabling professors to make data-driven decisions.",
      imageUrl: "/images/metfindr.png",
      githubUrl: "https://github.com/ShohruzE/tutoreasy",
      demoUrl: "https://tutoreasy-823612132472.us-central1.run.app/",
    },
    {
      name: "EchoHealth",
      techStack:
        "Next.js, TypeScript, MongoDB, OpenAI, Firebase Auth, TailwindCSS",
      description:
        "Collaborated with three others at HackPrinceton (36h) to build an interactive dashboard that replaces traditional hospital whiteboards, streamlining the recording process for medical staff by integrating real-time transcription and summarization using GPT-4.",
      imageUrl: "/images/metfindr.png",
      githubUrl: "https://github.com/ShohruzE/hackprinceton-f24",
    },
    {
      name: "ClubScout",
      techStack: "Next.js, Python, Firebase, Pinecone, OpenAI, Clerk",
      description:
        "Developed a full-stack platform for a 72-hour hackathon, enabling students to discover and connect with 100+ clubs through personalized recommendations, utilizing scraped web data powered by RAG.",
      imageUrl: "/images/metfindr.png",
      githubUrl: "https://github.com/ShohruzE/ctphacks24",
    },
    {
      name: "HoneyComb",
      techStack: "Next.js, Firebase, Stripe, OpenAI, Clerk",
      description:
        "Collaborated with 2 team members to create a B2C SaaS for consumers to create and study from personalized flashcard sets through OpenAIs LLM, enhancing study efficiency.",
      imageUrl: "/images/honeydo.jpg",
      githubUrl: "https://github.com/ShohruzE/ai-flashcards",
      demoUrl: "https://ai-flashcards-beta.vercel.app/",
    },
    // {
    //   name: "Connectify",
    //   techStack: "MERN(MongoDB, Express.js, React.js, Node.js), MUI",
    //   description:
    //     "A mock full-stack social media web application with a REST API for users to create an account, post, like, comment, delete posts and friend other users.",
    //   imageUrl: "/images/hunter-cs-club.jpg",
    //   githubUrl: "https://github.com/ShohruzE/mern-social-media-app",
    // },

    // {
    //   name: "FRC 333 Robotics Website",
    //   techStack: "Next.js, TailwindCSS, TypeScript",
    //   description:
    //     "The official website for the FRC 333 robotics team. Currently redesigning the website to be more user-friendly and accessible in Next.js and TailwindCSS.",
    //   imageUrl: "/images/frc333.png",
    //   githubUrl: "https://github.com/ShohruzE/jdhs-robotics-website/",
    //   demoUrl: "https://www.frc333.com/",
    // },
  ];

  return (
    <section id="projects" className="my-20 mx-8">
      <div className="container mx-auto">
        <div className="flex flex-col justify-center items-center gap-8">
          <div>
            <h2 className="text-3xl font-bold border-b-2 border-black rounded-m text-center">
              Projects
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="flex flex-col lg:flex-row gap-4 items-center border-2"
              >
                <div className="w-full p-4">
                  <h3 className="text-xl font-bold">{project.name}</h3>
                  <p className="text-sm text-gray-500">{project.techStack}</p>
                  <p className="my-4">{project.description}</p>
                  <div className="flex justify-start items-center gap-4 font-bold">
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex justify-center gap-1 bg-black hover:bg-gray-500 text-white px-2 py-2 rounded-xl"
                    >
                      <Github size={24} />
                      GitHub
                    </Link>
                    {project.demoUrl && (
                      <Link
                        href={project.demoUrl}
                        className="hover:text-gray-500"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Demo
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
