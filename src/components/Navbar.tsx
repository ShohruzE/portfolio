import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className="py-8 bg-black text-white">
        <div className="container mx-auto">
            <nav className="flex justify-between">
                <div>
                    <h1 className="font-bold text-2xl">Shohruz Ernazarov</h1>
                </div>
                <div>
                    <ul className="flex justify-center items-center gap-4">
                        <li><Link href="#about">About</Link></li>
                        <li><Link href="#projects">Projects</Link></li>
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