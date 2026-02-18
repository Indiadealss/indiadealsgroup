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

  const ourValues = [
    {
      label:'100% Transparency',
      photo:''
    },
    {
      label:'Expertise',
      photo:''
    },
    {
      label:'Reliablitly',
      photo:''
    },
    {
      label:'High Quality',
      photo:''
    },
    {
      label:'Tailor-Made Approach',
      photo:''
    },
    {
      label:'Technology Oriented',
      photo:''
    }
  ]
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
        <div className="relative z-10 flex justify-center items-start top-40 pt-[35vw] md:pt-25 lg:pt-3 lg:pt-4">
          {/* <div className="bg-[#f3f39b54] mx-[10%] p-4">
            <h1 className="text-[#f1e6c8] text-2xl font-medium md:text-4xl lg:text-6xl text-center font-[CanelaDeck-Light] leading-tight">
              RESIDENTIAL PLOT TOWNSHIP,
              <br />
              Where Luxury Meets Devotion
            </h1>
          </div> */}
        </div>
      </div>
      
      {/* gallery */}
      {/* <section className="py-5 px-20">
        <Gallery />
      </section>

       <section className="py-5 px-20">
        <Ongoingprojectslider />
      </section> */}

      {/* Title */}

        <h1 className="text-[#313036] font-['CanelaDeck-Light'] font-bold text-4xl text-center mt-10 uppercase">INDIADEALS GROUP<br /> Trusted Real Estate Developer</h1>


      {/* ABOUT SECTION */}
      <section className="pt-20 pb-10 px-2 lg:px-20" data-aos="fade-up">
        <div className=" lg:flex  mx-5">
          <Image
            src="https://cdn.brandsdoor.in/indiadealss/indiadealss/1770972766053-ChatGPT%20Image%20Feb%2012%2C%202026%2C%2004_12_53%20PM.png"
            alt="About indiadealss"
            width={600}
            height={300}
            className="  h-auto rounded border-4 border-[#313036]"
          />
          <div className="px-0 lg:px-10">
            {/* <h1 className="text-[#313036] font-['CanelaDeck-Light'] font-bold text-4xl"><span className="text-2xl font-medium font-normal">Radha Kund – Ral Road, Vrindavan</span> <br /><span className="text-2xl font-medium font-normal">RERA Approved Residential Township</span></h1> */}
            <p className="text-[#313036] my-10 font-['poppins'] text-gray-600 text-justify">
             IndiaDeals Group is a name that people trust in the real estate business. We have been working in the Delhi NCR market since 2017. Our goal is to make sure that people can buy and sell properties in an honest way. We want to help people find properties to buy. We started IndiaDeals Group to make it easy for people to buy and sell properties. We wanted to make sure that people can trust us. Over time we have helped many people find properties. We are happy that our clients like us. Come back to us for help.
             <br /><br />
             We know a lot about the Delhi NCR real estate market. We can help people find residential plots, housing projects and other properties that will be worth more money in the future. At IndiaDeals Group we think that buying and selling properties is not about land. It is about making a good life for people. We make sure that every property we sell is good and will be worth money in the future. We are honest. Tell people everything they need to know. We want our clients to feel happy and safe when they work with us.
             </p>
          </div>
        </div>
          
      </section>

      {/* project content */}
         {/* gallery */}
       <section className="py-5 px-5 md:px-20">
        <Gallery cardWidth="450px" cardHeight="400px" />
      </section>


      {/* our values */}

      <h1 className="text-2xl font-bold text-center text-[#313036]">OUR VALUES</h1>

      <p className="border-b-2 w-20 mt-3 mx-auto"></p>
        <div className="flex flex-col lg:flex-row justify-between mt-10 mx-10">
          {ourValues.map((item,index) => (
            <div key={index} className="my-4">
              <h4 className="font-bold text-xl text-[#313036b0] text-center">{item.label}</h4>
            </div>
          ))}
        </div>


      {/* contact */}

      <Customcomponent />


      

    </div>
  );
}
