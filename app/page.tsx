'use client'
import Image from "next/image";
import virndavan from "@/Images/abhinandan-lodha-vrindavan-plots-v0-pu57jype7rfe1.webp";

import aboutTemImage from "@/Images/shridivineabout.jpg";
import AOS  from 'aos';
import { useEffect } from "react";
import Gallery from "./Gallery";
import Ongoingprojectslider from "./Ongoingprojectslider";

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
      <div className="relative w-full h-[38vw] min-h-[60vh] overflow-hidden">
        {/* <Image
          src={virndavan}
          alt="Vrindavan Banner"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        /> */}
        <video
    autoPlay
    muted
    loop
    playsInline
    className="absolute inset-0 w-full h-full object-cover"
  >
    <source src="https://cdn.brandsdoor.in/indiadealss/indiadealss/1770969328936-indiadeals-group-home-banner.mp4" type="video/mp4" />
  </video>

        {/* Overlay (optional but recommended) */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Text Content */}
        <div className="relative z-10 flex justify-center items-start top-40 pt-[35vw] md:pt-25 lg:pt-5 lg:pt-4">
          <div className="bg-[#f3f39b54] mx-[10%] p-4">
            <h1 className="text-[#f1e6c8] text-2xl md:text-4xl lg:text-6xl text-center font-[CanelaDeck-Light] leading-tight">
              RESIDENTIAL PLOT TOWNSHIP,
              <br />
              Where Luxury Meets Devotion
            </h1>
          </div>
        </div>
      </div>
      
      {/* gallery */}
      <section className="py-5 px-20">
        <Gallery />
      </section>

       <section className="py-5 px-20">
        <Ongoingprojectslider />
      </section>

      {/* ABOUT SECTION */}
      <section className="pt-20 pb-10 px-2 lg:px-20" data-aos="fade-up">
        <div className=" lg:flex  mx-5">
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
