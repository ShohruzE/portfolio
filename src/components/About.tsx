"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    // <section id="about" className="my-20">
    //   <div className="container mx-auto">
    //     <div className="flex flex-col sm:flex-row justify-around items-center gap-8 mx-8">
    //       <div className="">
    //         <Image
    //           src="/images/headshot.jpg"
    //           alt="Shohruz Ernazarov headshot photo"
    //           width={300}
    //           height={200}
    //           className="object-none object-bottom rounded-full drop-shadow-2xl"
    //         />
    //       </div>
    //       <div className="w-full sm:w-1/2 flex flex-col gap-6">
    //         <h2 className="text-3xl font-bold border-b-2 border-black rounded-m">
    //           About Me
    //         </h2>
    //         <p className="text-gray-500 text-l">
    //           I am a Junior studying Computer Science at Hunter College,
    //           expected to graduate in May 2026. I founded my own Computer
    //           Science Club in my sophomore year, leading to over 800 members
    //           accumulated in the span of an academic year. I'm also a Web
    //           Development Fellow at CUNY Tech Prep, with aspirations to become a
    //           full-stack web developer with a focus in AI.{" "}
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </section>

    <section id="about" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-white text-center mb-12">About Me</h2>
          <div>
            <p className="text-xl text-gray-300 leading-relaxed">
              I'm a Senior at Hunter College, set to graduate in May 2026. As the founder of the Computer Science Club,
              I've built a thriving community of over 1000 members in 2 years. Currently interning as a Software
              Engineer Intern at Metropolitan Transportation Authority.
            </p>
            <p className="text-xl text-gray-300 mt-6 leading-relaxed">
              My mission is to push the boundaries of what's possible in web development and applied AI. I believe in
              creating solutions that not only solve problems but revolutionize how we interact with technology.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
