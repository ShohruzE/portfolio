"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const skillCategories = [
  {
    name: "Frontend",
    skills: [
      { name: "Next.js", icon: "/images/next.jpg" },
      { name: "React.js", icon: "/images/react.png" },
      { name: "TypeScript", icon: "/images/typescript.svg" },
      { name: "JavaScript", icon: "/images/javascript.png" },
      { name: "Tailwind CSS", icon: "/images/tailwind.png" },
      { name: "ShadcnUI", icon: "/images/shadcn.png" },
      { name: "MaterialUI", icon: "/images/mui.png" },
      { name: "HTML", icon: "/images/html.png" },
      { name: "CSS", icon: "/images/css.png" },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", icon: "/images/nodejs.png" },
      { name: "Express.js", icon: "/images/expressjs.png" },
      { name: "Python", icon: "/images/python.png" },
      { name: "PostgreSQL", icon: "/images/postgresql.png" },
      { name: "MongoDB", icon: "/images/mongodb.jpg" },
      { name: "C++", icon: "/images/cpp.png" },
      { name: "Java", icon: "/images/java.png" },
      { name: "Ruby", icon: "/images/ruby.png" },
      { name: "PHP", icon: "/images/php.png" },
    ],
  },
  {
    name: "Infrastructure & Tools",
    skills: [
      { name: "AWS", icon: "/images/aws.png" },
      { name: "Microsoft Azure", icon: "/images/azure.png" },
      { name: "GCP", icon: "/images/gcp.png" },
      { name: "Git", icon: "/images/git.png" },
      { name: "GitHub", icon: "/images/github.svg" },
      { name: "Docker", icon: "/images/docker.png" },
      { name: "Vercel", icon: "/images/vercel.svg" },
      { name: "Netlify", icon: "/images/netlify.png" },
      { name: "Postman", icon: "/images/postman.png" },
    ],
  },
];

export default function Skills() {
  return (
    // <section id="skills" className="my-20 mx-8">
    //   <div className="container mx-auto">
    //     <div className="flex flex-col justify-center items-center gap-6">
    //       <div>
    //         <h2 className="text-3xl font-bold border-b-2 border-black rounded-m text-center">
    //           Skills
    //         </h2>
    //       </div>
    //       <div className="flex flex-col gap-8">
    //         <div>
    //           <h3 className="text-2xl font-bold">Frontend</h3>
    //           <ul className="list-none flex gap-2 md:gap-4 flex-wrap">
    //             {frontendSkills.map((skill, index) => (
    //               <div
    //                 key={index}
    //                 className="bg-slate-500 text-white font-bold py-2 px-4 rounded-3xl hover:scale-105"
    //               >
    //                 <h6>{skill}</h6>
    //               </div>
    //             ))}
    //           </ul>
    //         </div>
    //         <div>
    //           <h3 className="text-2xl font-bold">Backend</h3>
    //           <ul className="list-none flex gap-2 md:gap-4 flex-wrap">
    //             {backendSkills.map((skill, index) => (
    //               <div
    //                 key={index}
    //                 className="bg-slate-500 text-white font-bold py-2 px-4 rounded-3xl hover:scale-105"
    //               >
    //                 <h6>{skill}</h6>
    //               </div>
    //             ))}
    //           </ul>
    //         </div>
    //         <div>
    //           <h3 className="text-2xl font-bold">Tools</h3>
    //           <ul className="list-none flex gap-2 md:gap-4 flex-wrap">
    //             {tools.map((tool, index) => (
    //               <div
    //                 key={index}
    //                 className="bg-slate-500 text-white font-bold py-2 px-4 rounded-3xl hover:scale-105"
    //               >
    //                 <h6>{tool}</h6>
    //               </div>
    //             ))}
    //           </ul>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section id="skills" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">Skills</h2>
        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 rounded-xl p-8"
            >
              <h3 className="text-2xl font-semibold mb-6 text-center text-blue-400">{category.name}</h3>
              <div className="flex justify-center items-center gap-12 flex-wrap">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="flex flex-col items-center"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="bg-white rounded-xl p-2 hover:bg-white/50 transition-colors">
                      <div className="relative w-16 h-16">
                        <Image
                          src={skill.icon}
                          alt={`${skill.name} logo`}
                          fill
                          className="object-contain rounded-xl text-white"
                        />
                      </div>
                    </div>
                    <p className="mt-2 text-sm text-gray-400">{skill.name}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
