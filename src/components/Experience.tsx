"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const experiences = [
  {
    title: "Software Engineer Intern",
    company: "Metropolitan Transportation Authority (MTA)",
    date: "October 2025 - Present",
    description:
      "Implemented a full-stack real-time RFID tracking system using React, TypeScript, Java, Spring Boot, and Kafka, with SSE streaming for live updates, enabling continuous monitoring of 1000+ trains daily across 10+ readers",
    logo: "/images/mta.jpg",
  },
  {
    title: "Solutions Engineer Intern",
    company: "Burt Intelligence",
    date: "June 2025 - August 2025",
    description:
      "Deployed a RAG Slackbot using Python, FastAPI, AWS Lambda, Bedrock and S3, processed 1000+ files ofConfluence and Drive data for real-time Q&A with 90+% accuracy, cutting average employee search time by 70%",
    logo: "/images/burt-intelligence.jpg",
  },
  {
    title: "Founder & President",
    company: "Computer Science Club, Hunter College",
    date: "August 2023 - Present",
    description:
      "Directed a team of 22 to organize 20 career-readiness events for a total of 900+ attendees from a 1200+ roster.",
    logo: "/images/hunter-cs-club.jpg",
  },
  {
    title: "Software Engineer Intern",
    company: "Mermory (Startup)",
    date: "April 2025 - June 2025",
    description:
      "Improved hot reloading and build times by 20% by refactoring bloated page layouts and React components, leading to faster development cycles and improved incremental build times.",
    logo: "/images/mermory-logo.jpg",
  },
  {
    title: "Software Engineering Fellow",
    company: "CUNY Tech Prep",
    date: "August 2024 - May 2025",
    description:
      "Selected for an intensive software engineering career development program focused on full-stack web development, technical interview prep, and building AI applications.",
    logo: "/images/ctp-logo-square.png",
  },
  {
    title: "Software Engineer Intern",
    company: "Movement Vault (Startup)",
    date: "September 2024 - January 2025",
    description:
      "Optimized app performance by incorporating lazy loading for images and videos stored in AWS S3, ensuring efficient resource usage, which led to a 10% decrease in initial load-up time for 4500+ exercises.",
    logo: "/images/movement_vault.jpg",
  },
  {
    title: "Software Engineer Intern",
    company: "Unadat (Startup)",
    date: "July 2023 - August 2023",
    description:
      "Improved user experience by reducing page load time by 15%, implementing SQL transactions in JavaScript and PHP, ensuring ACID properties in the MySQL database.",
    logo: "/images/unadat.jpg",
  },
];

export default function Experience() {
  return (
    // <section id="experience" className="my-20 mx-8">
    //   <div className="container mx-auto">
    //     <div className="flex flex-col justify-center items-center gap-6">
    //       <h2 className="text-3xl font-bold border-b-2 border-black rounded-m text-center">
    //         Experience
    //       </h2>
    //       <div className="w-full lg:w-1/2 flex flex-col gap-8">
    //         <div className="flex justify-between gap-4">
    //           <div>
    //             <h3 className="text-2xl font-bold">Software Engineer Intern</h3>
    //             <p>Movement Vault</p>
    //             <p>September 2024 - Present</p>
    //           </div>
    //           <div>
    //             <Link href="https://movementvault.com/" target="_blank">
    //               <Image
    //                 src="/images/movement_vault.jpg"
    //                 alt="Movement Vault logo"
    //                 width={100}
    //                 height={100}
    //               />
    //             </Link>
    //           </div>
    //         </div>

    //         <div className="flex justify-between gap-4">
    //           <div>
    //             <h3 className="text-2xl font-bold">
    //               Software Engineering Fellow
    //             </h3>
    //             <p>CUNY Tech Prep</p>
    //             <p>July 2024 - Present</p>
    //           </div>
    //           <div>
    //             <Link href="https://cunytechprep.org/" target="_blank">
    //               <Image
    //                 src="/images/ctp-logo-square.png"
    //                 alt="Cuny Tech Prep logo"
    //                 width={100}
    //                 height={100}
    //               />
    //             </Link>
    //           </div>
    //         </div>

    //         <div className="flex justify-between gap-4">
    //           <div>
    //             <h3 className="text-2xl font-bold">Founder, President</h3>
    //             <p>Computer Science Club at Hunter College</p>
    //             <p>August 2023 - Present</p>
    //           </div>
    //           <div>
    //             <Link
    //               href="https://www.instagram.com/huntercsclub/"
    //               target="_blank"
    //             >
    //               <Image
    //                 src="/images/hunter-cs-club.jpg"
    //                 alt="Hunter CS Club logo"
    //                 width={100}
    //                 height={100}
    //               />
    //             </Link>
    //           </div>
    //         </div>
    //         {/* <div className="flex justify-between gap-4">
    //           <div>
    //             <h3 className="text-2xl font-bold">
    //               Software Engineering Fellow
    //             </h3>
    //             <p>Headstarter</p>
    //             <p>July 2024 - September 2024</p>
    //           </div>
    //           <div>
    //             <Link href="https://headstarter.co/" target="_blank">
    //               <Image
    //                 src="/images/headstarter.jpg"
    //                 alt="headstarter logo"
    //                 width={100}
    //                 height={100}
    //               />
    //             </Link>
    //           </div>
    //         </div> */}
    //         <div className="flex justify-between gap-4">
    //           <div>
    //             <h3 className="text-2xl font-bold">Software Engineer Intern</h3>
    //             <p>Unadat</p>
    //             <p>July 2023 - August 2023</p>
    //           </div>
    //           <div>
    //             <Link href="https://unadat.com/" target="_blank">
    //               <Image
    //                 src="/images/unadat.jpg"
    //                 alt="Unadat logo"
    //                 width={100}
    //                 height={100}
    //               />
    //             </Link>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section id="experience" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-12">Experience</h2>
        <div className="max-w-4xl mx-auto space-y-12">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              className="flex flex-col md:flex-row gap-8 items-start bg-white/5 rounded-xl p-8 hover:bg-white/10 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Image
                src={experience.logo}
                alt={`${experience.company} logo`}
                width={50}
                height={50}
                className="w-20 h-20 object-contain rounded-lg bg-white/10 p-2"
              />
              <div>
                <h3 className="text-2xl text-white font-bold mb-2">{experience.title}</h3>
                <p className="text-blue-400 mb-2">{experience.company}</p>
                <p className="text-gray-400 mb-4">{experience.date}</p>
                <p className="text-gray-300 mb-4">{experience.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
