'use client'

import Image from "next/image";
import aboutTemImage from "@/Images/shridivineabout.jpg";
import virndavan from "@/Images/Vrindavan-Banner.jpg";
import AOS from 'aos'
import { useEffect } from "react";
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";



export default function Home() {

  useEffect(() => {
      AOS.init({
        duration: 800,
        once: true,
        easing: 'ease-in-out',
      });
    }, []);
  return (
    <div className="min-h-screen">
      <div className="">
      <video
    autoPlay
    muted
    loop
    playsInline
    className=" inset-0 w-full h-[30vw] object-cover"
  >
    <source src="https://cdn.brandsdoor.in/indiadealss/indiadealss/1770968112525-Our_project.mp4" type="video/mp4" />
  </video>
     
      </div>

    <div className="my-5 mx-5 lg:mx-20">
 {/* projects */}
     <h1><span className="font-black font-['CanelaDeck-Light'] text-xl text-[#313036]">INDIADEALS - PROJECTS</span></h1>

     {/*  */}


     {/* ABOUT SECTION */}
           <section className="py-20 px-0 lg:px-20" data-aos="fade-up">
             <div className="lg:flex flex-cols mx-2 lg:mx-10">
               <Image
                 src="https://cdn.brandsdoor.in/indiadealss/indiadealss/1770974282692-Hanumant-Vihar-inner-projects.png"
                 alt="About Shri Divine"
                 width={600}
                 height={600}
                 className=" h-auto rounded-lg border-4 border-[#313036]"
               />
               <div className="px-0 lg:px-10 py-10">
                 <h1 className="text-[#313036] font-['CanelaDeck-Light'] text-4xl lg:text-6xl">Hanumant Vihar</h1>
                 <p className="text-[#313036] my-10 font-['poppins'] text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. <Link href='/' className="text-[#313036] mx-1">Read More <FontAwesomeIcon  icon={faArrowRight} /></Link></p>
               </div>
             </div>
           </section>
    </div>
    </div>
  );
}
