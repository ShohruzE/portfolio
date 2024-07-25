import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Github } from 'lucide-react'

const Projects = () => {

  const projects = [
    {
      name: 'Connectify',
      techStack: 'MERN(MongoDB, Express.js, React.js, Node.js), MUI',
      description: 'A mock full-stack social media web application with a REST API for users to create an account, post, like, comment, delete posts and friend other users.',
      imageUrl: '/images/hunter-cs-club.jpg',
      githubUrl: 'https://github.com/ShohruzE/mern-social-media-app',
    },
    {
      name: 'HoneyDo',
      techStack: 'React.js, Node.js, Express.js',
      description: "For HackPrinceton Fall '23, created an AI-powered web-app for users to receive academic help on their homework, projects, and more.",
      imageUrl: '/images/honeydo.jpg',
      githubUrl: 'https://github.com/ShohruzE/hackprinceton-f23',
    },
    {
      name: 'FRC 333 Robotics Website',
      techStack: 'Next.js, TailwindCSS, TypeScript',
      description: 'The official website for the FRC 333 robotics team. Currently redesigning the website to be more user-friendly and accessible in Next.js and TailwindCSS.',
      imageUrl: '/images/frc333.png',
      githubUrl: 'https://github.com/ShohruzE/jdhs-robotics-website/',
      demoUrl: 'https://www.frc333.com/'
    },
    {
      name: 'Metfindr',
      techStack: 'React.js',
      description: 'A front-end web application that allows users to find unique art pieces utilizing the MET API, without having to visist the MET Museum.',
      imageUrl: '/images/metfindr.png',
      githubUrl: 'https://github.com/ShohruzE/metfindr',
      demoUrl: 'https://metfindr.netlify.app/'
    },
  ]

  return (
    <section id="projects" className="my-20 mx-8">
      <div className="container mx-auto">
        <div className="flex flex-col justify-center items-center gap-8">
          <div>
            <h2 className="text-3xl font-bold border-b-2 border-black rounded-m text-center">Projects</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="flex flex-col lg:flex-row gap-4 items-center border-2">
                <div className="w-full p-4">
                  <h3 className="text-xl font-bold">{project.name}</h3>
                  <p className="text-sm text-gray-500">{project.techStack}</p>
                  <p className="my-4">{project.description}</p>
                  <div className="flex justify-start items-center gap-4 font-bold">
                    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex justify-center gap-1 bg-black hover:bg-gray-500 text-white px-2 py-2 rounded-xl"><Github size={24}/>GitHub</Link>
                    {project.demoUrl && <Link href={project.demoUrl} className="hover:text-gray-500" target="_blank" rel="noopener noreferrer">Demo</Link>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects