"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden pt-20 sm:pt-0">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-purple-500/10 opacity-20" />
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-12 mb-16 md:mb-0">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1 text-left z-10"
        >
          <h1 className="text-5xl sm:text-7xl font-bold mb-2 text-white">
            Shohruz Ernazarov
          </h1>
          <div className="mb-6">
            <p className="text-xl sm:text-2xl text-gray-300">
              Founder, Leader, & Student
            </p>
          </div>
          <p className="text-xl text-gray-400 max-w-2xl mb-6">
            Software Engineer Intern at Movement Vault | Founder and President
            of CS Club at Hunter College | CUNY Tech Prep Fellow
          </p>
          <div className="flex items-center gap-6">
            <motion.a
              href="https://github.com/ShohruzE"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="text-white hover:text-blue-400 transition-colors"
            >
              <FaGithub size={30} />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/shohruz-ernazarov"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="text-white hover:text-blue-400 transition-colors"
            >
              <FaLinkedin size={30} />
            </motion.a>
            <motion.a
              href="/Shohruz_Ernazarov_Resume.pdf"
              download="Shohruz_Ernazarov_Resume"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              <Download size={20} />
              <span>Resume</span>
            </motion.a>
          </div>
        </motion.div>
        <motion.div
          className=""
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="w-3/4 lg:w-full mx-auto sm:mx-8">
            <Image
              src="/images/hero.jpg"
              alt="Shohruz Ernazarov speaking at one of his club events"
              width={400}
              height={300}
              className="rounded-2xl shadow-2xl object-cover"
            />
          </div>
        </motion.div>
      </div>
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <motion.a href="#about">
            <FiChevronDown
              size={40}
              className="text-white opacity-50 hover:opacity-100 transition-opacity cursor-pointer"
            />
          </motion.a>
        </motion.div>
      </motion.div>
      {/* <div className="text-white">sfsfsfsfs</div> */}
    </section>

    // <section className="my-20 px-8">
    //     <div className="container mx-auto">
    //         <div className="flex flex-col sm:flex-row justify-around items-center gap-8">
    //             <div className="flex flex-col gap-6">
    //                 <div>
    //                     <h1 className="text-5xl font-bold">Shohruz Ernazarov</h1>
    //                     <p>Founder, Leader, & Student</p>
    //                 </div>
    //                 <div className="flex gap-4">
    //                     <Link href="https://www.linkedin.com/in/shohruz-ernazarov/" target="_blank" className="rounded-lg bg-black hover:bg-[#0A66C2] w-10 px-2 py-2"><Linkedin size={24} color="#FFFFFF"/></Link>
    //                     <Link href="https://github.com/ShohruzE" target="_blank" className="rounded-lg bg-black w-10 px-2 py-2"><Github color="#FFFFFF"/></Link>
    //                     <Link href="/Shohruz_Ernazarov_Resume.pdf" download="Shohruz_Ernazarov_Resume" target="_blank" rel="noopener noreferrer" className="flex gap-2 rounded-lg bg-black text-white px-2 py-2">
    //                         <Download />
    //                         <span>Resume</span>
    //                     </Link>
    //                 </div>
    //             </div>
    //             <div>
    //                 <Image
    //                     src="/images/hero.jpg"
    //                     alt="hero"
    //                     width={400}
    //                     height={300}
    //                     className="rounded-2xl drop-shadow-xl border-b-8 border-r-4 border-slate-500"
    //                 />
    //             </div>
    //         </div>
    //     </div>
    // </section>
  );
};

export default Hero;
