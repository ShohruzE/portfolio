import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <section id="about">
        <div className="container mx-auto">
            <div className="flex justify-around items-center">
                <div className="">
                    <Image 
                        src="/images/headshot.jpg" 
                        alt="Shohruz Ernazarov headshot photo"
                        width={300}
                        height={200}
                        className="object-none object-bottom rounded-full drop-shadow-2xl" 
                    />
                </div>
                <div className="w-1/2 flex flex-col gap-6">
                    <h2 className="text-3xl font-bold border-b-2 border-black rounded-m">About Me</h2>
                    <p className="text-gray-500 text-l">I am a Junior studying Computer Science at Hunter College. I founded my own Computer Science Club in my sophomore year, leading to over 600 members accumulated in the span of an academic year. I'm a Software Engineering Fellow at Headstarter and CUNY Tech Prep, with aspirations to become a full-stack web developer. </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About