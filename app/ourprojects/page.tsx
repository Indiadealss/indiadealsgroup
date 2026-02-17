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
          <source src="https://cdn.brandsdoor.in/indiadealss/indiadealss/1771137358731-ourproject.mp4" type="video/mp4" />
        </video>

      </div>

      <div className="my-5 mx-5 lg:mx-20">
        {/* projects */}
        <h1><span className="font-black font-['CanelaDeck-Light'] text-xl text-[#313036]">INDIADEALS - PROJECTS</span></h1>

        {/*  */}


        {/* ABOUT SECTION */}
        <section className="py-20 px-0 lg:px-2" data-aos="fade-up">
          <div className="lg:flex flex-cols mx-2 lg:mx-1">
            <Image
              src="https://cdn.brandsdoor.in/indiadealss/indiadealss/1770974282692-Hanumant-Vihar-inner-projects.png"
              alt="About Shri Divine"
              width={600}
              height={600}
              className=" rounded-lg border-4 border-[#313036]"
            />
            <div className="px-0 lg:ps-10 ">
              <h1 className="text-[#313036] font-['CanelaDeck-Light'] text-4xl lg:text-6xl">Hanumat Vihar</h1>
              <p className="text-[#313036] my-10 font-['poppins'] text-gray-600 text-justify whitespace-pre-line">
                Hanumant Vihar Vrindavan:<br />
                Vrindavan has developed into a thriving residential area and is no longer merely a place for pilgrims to spend a weekend. Located in the quiet yet conveniently accessible Raal Road neighborhood, Hanumat Vihar Awas Yojna (also called Hanumant Vihar Mathura) is a carefully designed residential development. The low-density, gated community experience that this project offers is carefully planned to emphasize privacy, security, and spiritual well-being.
                Connectivity & Strategic Location.<br/><Link href='/hanumat-vihar' className="text-[#313036] font-bold hover:text-blue-600 mx-1"> Read More <FontAwesomeIcon  icon={faArrowRight} /></Link>
                <br />
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
      </div>
    </div>
  );
}
