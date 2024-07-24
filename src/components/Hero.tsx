import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className="mt-20">
        <div className="container mx-auto">
            <div className="flex justify-center items-center gap-16">
                <div>
                    <h1 className="text-5xl font-bold">Shohruz Ernazarov</h1>
                    <p>Full Stack Developer</p>
                </div>
                <div>
                    <Image 
                        src="/hero.jpg" 
                        alt="hero"
                        width={500}
                        height={300}
                        className="rounded-2xl"
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero