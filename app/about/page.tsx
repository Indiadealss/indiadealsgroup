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
      <section className="mt-20 px-0 lg:px-20 " data-aos="fade-up">
        <div className="lg:flex  mx-10">
          
          <div className="px-0 lg:px-10 ps-0">
            <h1 className="text-[#313036] font-['CanelaDeck-Light'] text-4xl lg:text-6xl">About IndiaDeals Group</h1>
            <p className="text-[#313036] my-10 font-['poppins'] text-gray-600">
             
              <p className="text-[#313036] font-['poppins'] text-gray-600 leading-6 text-justify">
              IndiaDeals Group is a name that people trust in the real estate business. We have been working in the Delhi NCR market since 2017. Our goal is to make sure that people can buy and sell properties in an honest way. We want to help people find properties to buy.  
                We started IndiaDeals Group to make it easy for people to buy and sell properties. We wanted to make sure that people can trust us. Over time we have helped many people find properties. We are happy that our clients like us. Come back to us for help.
                <br />
                <br />
                We know a lot about the Delhi NCR real estate market. We can help people find residential plots, housing projects and other properties that will be worth more money in the future. At IndiaDeals Group we think that buying and selling properties is not about land. It is about making a good life for people.
                
                We make sure that every property we sell is good and will be worth money in the future. We are honest. Tell people everything they need to know. We want our clients to feel happy and safe when they work with us.
                <br />
                <br />
                What makes IndiaDeals Group different is that we care about our clients. We know that each person is different and needs help. So we give people personalized help and support. We help people from the start to the end of the process.
              </p>
            </p>
          </div>
        </div>
      </section>

      {/*  */}
      <section className=" px-2 lg:px-20">
      <div className="px-4 lg:px-20">
        <h1><span className="text-[#313036] font-['CanelaDeck-Light'] text-2xl font-medium']">Since 2017 we have been successful because of these things:</span></h1>
        <ul className="list-disc space-y-3 text-gray-600 font-[poppins]  ms-10 my-5">
          <li>We are honest and fair in our business.</li>
          <li>We sell properties that will be worth more money</li>
          <li>We know the market very well</li>
          <li>We help our clients a lot</li>
          <li>We build long-term relationships, with people</li>
          <li>We are reliable and trustworthy</li>
          </ul>
         <p className="my-10">
          <span className="py-4 text-gray-600 font-[poppins]">
            Our goal is to be a leading real estate company that people trust and like. We want to keep growing and helping people find properties. We will always try to be the best and make our clients happy.
           </span>
        </p>
      </div>
      </section>
    </div>
  );
}
