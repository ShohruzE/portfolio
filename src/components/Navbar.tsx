import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className="p-8 bg-black text-white">
        <div className="container mx-auto">
            <nav className="flex justify-between items-center">
                <div>
                    <h1 className="font-extrabold text-2xl">Shohruz.</h1>
                </div>
                <div>
                    <ul className="hidden sm:flex justify-center items-center gap-4 text-l">
                        <li><Link href="#about" className="pb-1 hover:border-b-2 hover:border-b-white">About</Link></li>
                        <li><Link href="#experience" className="pb-1 hover:border-b-2 hover:border-b-white">Experience</Link></li>
                        <li><Link href="#projects" className="pb-1 hover:border-b-2 hover:border-b-white">Projects</Link></li>
                        <li><Link href="#skills" className="pb-1 hover:border-b-2 hover:border-b-white">Skills</Link></li>
                    </ul>
                </div>
                <div>
                    <button className="bg-white py-2 px-3 text-black font-bold rounded-xl hover:scale-105">
                        <Link href="mailto:shohruzernazarov04@gmail.com">Contact</Link>
                    </button>
                </div>
            </nav>
        </div>
    </div>

  )
}

export default Navbar