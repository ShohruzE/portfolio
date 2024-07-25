import React from 'react'

const Skills = () => {

  const frontendSkills = ["Next.js", "React.js", "TypeScript", "JavaScript", "TailwindCSS", "MaterialUI", "HTML", "CSS"]
  const backendSkills = ["Node.js", "Express.js", "Python", "Java", "C++", "SQL", "PHP"]
  const tools = ["Git", "GitHub", "Visual Studio Code", "Netlify", "Vercel", "Postman"]

  return (
      <section id="skills" className="my-20 mx-8">
        <div className="container mx-auto">
            <div className="flex flex-col justify-center items-center gap-6">
              <div>
                <h2 className="text-3xl font-bold border-b-2 border-black rounded-m text-center">Skills</h2>
              </div>
              <div className="flex flex-col gap-8">
                <div>
                  <h3 className="text-2xl font-bold">Frontend</h3>
                  <ul className="list-none flex gap-2 md:gap-4 flex-wrap">
                    {frontendSkills.map((skill, index) => (
                      <div key={index} className="bg-slate-500 text-white font-bold py-2 px-4 rounded-3xl hover:scale-105">
                        <h6>{skill}</h6>
                      </div>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Backend</h3>
                  <ul className="list-none flex gap-2 md:gap-4 flex-wrap">
                    {backendSkills.map((skill, index) => (
                        <div key={index} className="bg-slate-500 text-white font-bold py-2 px-4 rounded-3xl hover:scale-105">
                          <h6>{skill}</h6>
                        </div>
                      ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Tools</h3>
                  <ul className="list-none flex gap-2 md:gap-4 flex-wrap">
                    {tools.map((tool, index) => (
                        <div key={index} className="bg-slate-500 text-white font-bold py-2 px-4 rounded-3xl hover:scale-105">
                          <h6>{tool}</h6>
                        </div>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
      </section>
  )
}

export default Skills