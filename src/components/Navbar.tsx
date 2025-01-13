"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { X, Menu } from "lucide-react";

const navbarItems = ["About", "Experience", "Projects", "Skills", "Contact"];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/90 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Link href="/" className="text-xl font-bold text-white">
              Shohruz
            </Link>
          </motion.div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navbarItems.map((item, index) => (
                <motion.a
                  key={index}
                  href={`#${item.toLowerCase()}`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors"
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <motion.div
          className="md:hidden"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/90 backdrop-blur-sm">
            {navbarItems.map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-white block px-3 py-2 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
    // <div className="p-8 bg-black text-white">
    //     <div className="container mx-auto">
    //         <nav className="flex justify-between items-center">
    //             <div>
    //                 <h1 className="font-extrabold text-2xl">Shohruz.</h1>
    //             </div>
    //             <div>
    //                 <ul className="hidden sm:flex justify-center items-center gap-4 text-l">
    //                     <li><Link href="#about" className="pb-1 hover:border-b-2 hover:border-b-white">About</Link></li>
    //                     <li><Link href="#experience" className="pb-1 hover:border-b-2 hover:border-b-white">Experience</Link></li>
    //                     <li><Link href="#projects" className="pb-1 hover:border-b-2 hover:border-b-white">Projects</Link></li>
    //                     <li><Link href="#skills" className="pb-1 hover:border-b-2 hover:border-b-white">Skills</Link></li>
    //                 </ul>
    //             </div>
    //             <div>
    //                 <button className="bg-white py-2 px-3 text-black font-bold rounded-xl hover:scale-105">
    //                     <Link href="mailto:shohruzernazarov04@gmail.com">Contact</Link>
    //                 </button>
    //             </div>
    //         </nav>
    //     </div>
    // </div>
  );
};

export default Navbar;
