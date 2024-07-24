import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Download, Github, Linkedin } from 'lucide-react';

const Hero = () => {
  return (
    <section className="my-20 px-8">
        <div className="container mx-auto">
            <div className="flex justify-around items-center gap-8">
                <div className="flex flex-col gap-6">
                    <div>
                        <h1 className="text-5xl font-bold">Shohruz Ernazarov</h1>
                        <p>Founder, Leader, & Student</p>
                    </div>
                    <div className="flex gap-4">
                        <Link href="https://www.linkedin.com/in/shohruz-ernazarov/" target="_blank" className="rounded-lg bg-black hover:bg-[#0A66C2] w-10 px-2 py-2"><Linkedin size={24} color="#FFFFFF"/></Link>
                        <Link href="https://github.com/ShohruzE" target="_blank" className="rounded-lg bg-black w-10 px-2 py-2"><Github color="#FFFFFF"/></Link>
                        <Link href="/Shohruz_Ernazarov_Resume.pdf" download="Shohruz_Ernazarov_Resume" target="_blank" rel="noopener noreferrer" className="flex gap-2 rounded-lg bg-black text-white px-2 py-2">
                            <Download />
                            <span>Resume</span>
                        </Link>
                    </div>
                </div>
                <div>
                    <Image 
                        src="/images/hero.jpg" 
                        alt="hero"
                        width={400}
                        height={300}
                        className="rounded-2xl drop-shadow-xl border-b-8 border-r-4 border-slate-500"
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero