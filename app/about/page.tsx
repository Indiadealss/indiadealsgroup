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
            className=" w-[100vw] h-auto rounded"
          />
          <div className="px-0 lg:px-10 py-10">
            <h1 className="text-[#313036] font-['CanelaDeck-Light'] text-6xl">About us</h1>
            <p className="text-[#313036] my-10 font-['poppins'] text-gray-600">A home is more than just a building. Indiadeals Group has been creating homes that families value and trust for generations. For us, a home is more than just a building; it's where families form, where memories are made, and where your day starts. Everything we do is guided by that understanding.
              <br/>
              <br/>
              <p className="text-[#313036] my-10 font-['poppins'] text-gray-600 leading-6">Our mission has been clear from the start: to construct homes that are comfortable, high-quality, and long-lasting. By continuing to be dedicated to honest work, sturdy construction, and careful design, we have gained the trust of our clients over the years.
Building homes that provide comfort, quality, and long-term value was our initial, unambiguous goal. Over time, we’ve grown into a trusted name in the building industry by staying true to our values and putting customers first.</p>
            </p>
          </div>
        </div>
      </section>

      {/*  */}
      <section className="my-20 px-2 lg:px-20">
      <div className="px-4 lg:px-20">
        <h1><span className="font-black text-lg py-4 font-['CanelaDeck-Light']">What Sets Us Apart?</span></h1>
        <ul className="list-disc space-y-5 text-gray-600 font-[poppins] mt-5 ms-10">
          <li>Customer-First Approach: We pay close attention to your needs and create areas that genuinely suit your way of life.</li>
          <li>Strong materials, knowledgeable workers, and meticulous attention to detail are all components of quality construction.</li>
          <li>A transparent process includes open lines of communication, truthful deadlines, and no unpleasant surprises.</li>
          <li>Smart layouts, natural light, adequate ventilation, and useful spaces are all examples of thoughtful design.</li>
          <li>On-Time Delivery: We value your time and make every effort to fulfill our commitments.</li>
          <li>We are aware that one of the most important life decisions is purchasing a home. For this reason, we prioritize trust-building in addition to construction. Our staff makes sure everything runs smoothly and comfortably, from preparation to possession.</li>
          <li>Our projects are designed to provide a balance of modern living and everyday convenience. A well-constructed home, in our opinion, ought to sustain your way of life now and endure for many years to come.</li>
        </ul>
         <p className="my-10">
          <span className="py-4 text-gray-600 font-[poppins]">
           We at India Ideal Group do more than just construct homes. We design areas that are welcoming, secure, and proud—areas where life takes place.
The proper foundation is the first step towards your ideal home and we're here to help you build it.
           </span>
        </p>
      </div>
      </section>
    </div>
  );
}
