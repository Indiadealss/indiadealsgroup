'use client'
import Image from "next/image";
import virndavan from "@/Images/abhinandan-lodha-vrindavan-plots-v0-pu57jype7rfe1.webp";
import aboutTemImage from "@/Images/shridivineabout.jpg";
import AOS  from 'aos';
import { useEffect } from "react";
import Gallery from "./Gallery";
import Ongoingprojectslider from "./Ongoingprojectslider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Customcomponent from "./Customcomponent/Customcomponent";

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
    preload="metaadd"
    poster="https://cdn.brandsdoor.in/indiadealss/banner-thumb.jpg"
  >
    <source src="https://cdn.brandsdoor.in/indiadealss/indiadealss/1771136869498-indiadeals-group-home-banners.mp4" type="video/mp4" />
  </video>

        {/* Overlay (optional but recommended) */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Text Content */}
        <div className="relative z-10 flex justify-center items-start top-40 pt-[35vw] md:pt-25 lg:pt-5 lg:pt-4">
          {/* <div className="bg-[#f3f39b54] mx-[10%] p-4">
            <h1 className="text-[#f1e6c8] text-2xl md:text-4xl lg:text-6xl text-center font-[CanelaDeck-Light] leading-tight">
              RESIDENTIAL PLOT TOWNSHIP,
              <br />
              Where Luxury Meets Devotion
            </h1>
          </div> */}
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
            src="https://cdn.brandsdoor.in/indiadealss/indiadealss/1770972766053-ChatGPT%20Image%20Feb%2012%2C%202026%2C%2004_12_53%20PM.png"
            alt="About Shri Divine"
            width={600}
            height={300}
            className="  h-auto rounded border-4 border-[#313036]"
          />
          <div className="px-0 lg:px-10 py-10">
            <h1 className="text-[#313036] font-['CanelaDeck-Light'] text-6xl">Hanumat Vihar</h1>
            <p className="text-[#313036] my-10 font-['poppins'] text-gray-600">
              Hanumat Vihar is a benchmark in quality for investors searching for MVDA-approved plots in Vrindavan or investigating the MVDA new housing scheme in Vrindavan. Private townships such as Hanumat Vihar offer ready-to-move-in plots in Vrindavan for sale with immediate possession and registry, avoiding the lengthy waiting periods typically associated with government lotteries, while the authority opens windows for Vrindavan Awas Yojana application online.
              <br /><Link href='/Hanumat-vihar' className="text-[#313036] hover:text-blue-500 mx-1">Read More <FontAwesomeIcon  icon={faArrowRight} /></Link></p>
          </div>
        </div>
      </section>


      {/* contact */}

      <Customcomponent />


      

    </div>
  );
}
