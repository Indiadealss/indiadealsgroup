'use client'
import Image from "next/image";
import virndavan from "@/Images/Vrindavan-Banner.jpg";
import aboutTemImage from "@/Images/shridivineabout.jpg";
import AOS  from 'aos';
import { useEffect } from "react";
import Gallery from "./Gallery.tsx";
import Ongoingprojectslider from "./Ongoingprojectslider.tsx";

export default function Home() {

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);
  return (
    <div className="min-h-screen ">
      
      {/* HERO SECTION */}
      <div className="relative w-full h-[38vw] min-h-[60vh]">
        <Image
          src={virndavan}
          alt="Vrindavan Banner"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        {/* Overlay (optional but recommended) */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Text Content */}
        <div className="relative z-10 flex justify-center items-start pt-10 lg:pt-24">
          <div className="bg-[#f3f39b54] mx-[10%] p-4">
            <h1 className="text-[#f1e6c8] text-lg lg:text-6xl text-center font-[CanelaDeck-Light] leading-tight">
              In the Grace of Shri Radha,
              <br />
              Where Luxury Meets Devotion
            </h1>
          </div>
        </div>
      </div>
      
      {/* gallery */}
      <section className="py-20 px-20">
        <Gallery />
      </section>

       <section className="py-20 px-20">
        <Ongoingprojectslider />
      </section>

      {/* ABOUT SECTION */}
      <section className="py-20 px-20" data-aos="fade-up">
        <div className=" lg:flex  mx-10">
          <Image
            src={aboutTemImage}
            alt="About Shri Divine"
            className=" w-[300vw] h-auto rounded"
          />
          <div className="px-0 lg:px-10 py-10">
            <h1 className="text-[#313036] font-['CanelaDeck-Light'] text-6xl">TITLE</h1>
            <p className="text-[#313036] my-10 font-['poppins'] text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
        </div>
      </section>


      

    </div>
  );
}
