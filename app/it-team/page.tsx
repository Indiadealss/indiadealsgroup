import React from 'react'
import hcbar from '@/Images/HARI-BHAI.jpg';
import JwalaPrasadDubey from '@/Images/JwalaPrasadDubey.jpg';
import Keshav from '@/Images/keshav-bhaiu.jpg'
import Aanand from '@/Images/Ananad.jpg'
import Image from 'next/image';

const page = () => {
    const teamData = [
        {
            id: 1,
            name: "Jwala Prasad Dubey",
            role: "IT Head",
            image: JwalaPrasadDubey,
            linkedin: "#"
        },
        {
            id: 2,
            name: "H.C. Bairwa",
            role: "Digital Marketing Manager",
            image: hcbar,
            linkedin: "#"
        },
        {
            id: 3,
            name: "Aanand Singh",
            role: "Graphics Deginer",
            image: Aanand,
            linkedin: "#"
        },
        {
            id: 4,
            name: "Keshav Yadav",
            role: "Full Stack Devloper",
            image: Keshav,
            linkedin: "#"
        }
    ];
  return (
    <div>


        <div className='mx-auto'>
                        <h1 className='text-center mt-10 font-bold text-[#313036] text-xl text-4xl uppercase'>IT Team</h1>
                        <div className='mx-auto w-10 border mt-3'></div>
                    </div>


      <section className="p-0 m-0 md:py-20 md:px-20">
                              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 ">
      
                                  {teamData.map((member) => (
      
                                      <div key={member.id} className="bg-white rounded-xl shadow p-4 relative">
      
                                          <Image
                                              src={member.image}
                                              alt={member.name}
                                              width={400}
                                              height={400}
                                              className="rounded-lg w-full h-[300px] md:h-[320px] object-cover"
                                          />
      
                                          <div className="bg-gray-500/30 backdrop-blur-md shadow rounded-lg px-4 py-3 flex justify-between items-center absolute bottom-6 left-6 right-6">
      
                                              <div>
                                                  <h3 className="font-semibold text-white text-sm">{member.name}</h3>
                                                  <p className="text-xs text-white">{member.role}</p>
                                              </div>
      
                                              <a href={member.linkedin}>
                                              </a>
      
                                          </div>
      
                                      </div>
      
                                  ))}
      
                              </div>
                          </section>
    </div>
  )
}

export default page
