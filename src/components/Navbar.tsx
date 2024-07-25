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
                    <ul className="flex justify-center items-center gap-4">
                        <li><Link href="#about">About</Link></li>
                        <li><Link href="#experience">Experience</Link></li>
                        <li><Link href="#projects">Projects</Link></li>
                        <li><Link href="#skills">Skills</Link></li>
                    </ul>
                </div>
                <div>
                    <button>
                        <Link href="#contact">Contact</Link>
                    </button>
                </div>
            </nav>
        </div>
    </div>

  )
}

export default Navbar