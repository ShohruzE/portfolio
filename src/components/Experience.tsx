import React from 'react'
import Image from 'next/image'

const Experience = () => {
  return (
    <div>
      <section id="experience" className="my-20">
        <div className="container mx-auto">
          <div className="flex justify-around items-center">
            <div className="w-1/2 flex flex-col gap-6">
              <h2 className="text-3xl font-bold border-b-2 border-black rounded-m text-center">Experience</h2>
              <div className="flex flex-col gap-8">
                <div className="flex justify-between">
                  <div>
                    <h3 className="text-2xl font-bold">Software Engineering Fellow</h3>
                    <p>Headstarter</p>
                    <p>July 2024 - Present</p>
                  </div>
                  <div>
                    <Image 
                      src="/images/headstarter.jpg"
                      alt="headstarter logo"
                      width={100}
                      height={100}/>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div>
                    <h3 className="text-2xl font-bold">Software Engineering Fellow</h3>
                    <p>CUNY Tech Prep</p>
                    <p>July 2024 - Present</p>
                  </div>
                  <div>
                    <Image 
                      src="/images/ctp-logo-square.png"
                      alt="Cuny Tech Prep logo"
                      width={100}
                      height={100}
                    />
                  </div>
                </div>
                <div className="flex justify-between">
                  <div>
                    <h3 className="text-2xl font-bold">Founder, President</h3>
                    <p>Computer Science Club at Hunter College</p>
                    <p>August 2023 - Present</p>
                  </div>
                  <div>
                  <Image 
                      src="/images/hunter-cs-club.jpg"
                      alt="Hunter CS Club logo"
                      width={100}
                      height={100}
                    />
                  </div>
                </div>
                <div className="flex justify-between">
                  <div>
                    <h3 className="text-2xl font-bold">Software Developer Engineering Intern</h3>
                    <p>Unadat</p>
                    <p>July 2023 - August 2023</p>
                  </div>
                  <div>
                    <Image 
                      src="/images/unadat.jpg"
                      alt="Unadat logo"
                      width={100}
                      height={100}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Experience