'use client'

import Image from "next/image";
import aboutTemImage from "@/Images/shridivineabout.jpg";
import Aboutusbanner from "@/Images/About us.jpg";
import AOS from 'aos'
import { useEffect } from "react";

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
      <Image src={Aboutusbanner} alt="Aboutusbanner" className=" z-0 w-full " />
     
      </div>


      {/* ABOUT SECTION */}
      <section className="my-20 px-0 lg:px-20" data-aos="fade-up">
        <div className="lg:flex  mx-10">
          <Image
            src={aboutTemImage}
            alt="About Shri Divine"
            className=" w-[300vw] h-auto rounded"
          />
          <div className="px-0 lg:px-10 py-10">
            <h1 className="text-[#313036] font-['CanelaDeck-Light'] text-6xl">About us</h1>
            <p className="text-[#313036] my-10 font-['poppins'] text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
        </div>
      </section>

      {/*  */}
      <section className="my-20 px-2 lg:px-20">
      <div className="px-4 lg:px-20">
        <h1><span className="font-black text-lg py-4 font-['CanelaDeck-Light']">We Provide Smart Solutions</span></h1>
        <p>
          <span className="py-4 text-gray-600 font-[poppins]">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </span>
        </p>
         <p className="my-10">
          <span className="py-4 text-gray-600 font-[poppins]">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </span>
        </p>
      </div>
      </section>
    </div>
  );
}
