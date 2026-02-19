'use client'

import Image from "next/image";
import aboutTemImage from "@/Images/shridivineabout.jpg";
import virndavan from "@/Images/Vrindavan-Banner.jpg";
import AOS from 'aos'
import { useEffect } from "react";
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import banner from "@/Images/hanumat-vihar.jpeg"
import Customcomponent from "../Customcomponent/Customcomponent";



export default function page() {

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
        <Image src={banner} alt="..." />

      </div>

      <div className="my-5 mx-5 lg:mx-20">
        {/* projects */}

        {/*  */}


        {/* ABOUT SECTION */}
        <section className="py-20 px-0 lg:px-2" data-aos="fade-up">
          <div className="lg:flex flex-cols mx-2 lg:mx-1">
            <div className="px-0 lg:ps-10 ">
              <h1 className="text-[#313036]   text-4xl lg:text-6xl">Hanumat Vihar</h1>
              <p className="text-[#313036] my-10   text-gray-600 text-justify whitespace-pre-line">
                Hanumant Vihar Vrindavan:<br /><br />
                Vrindavan has developed into a thriving residential area and is no longer merely a place for pilgrims to spend a weekend. Located in the quiet yet conveniently accessible Raal Road neighborhood, Hanumat Vihar Awasiya Yojna (also called Hanumant Vihar Mathura) is a carefully designed residential development. The low-density, gated community experience that this project offers is carefully planned to emphasize privacy, security, and spiritual well-being.
               <br /> <br />
                <h3 className="text-[#313036] my-5   text-xl lg:text-2xl">Connectivity & Strategic Location</h3>
                The unmatched location advantage is among the strongest arguments for investing in Hanumat Vihar Plots in Vrindavan. The project, which is situated on the Raal Road, offers easy access to both Mathura's contemporary infrastructure and the historic center of Vrindavan.
                <br /><br />
                <h3 className="text-[#313036] my-5   text-xl lg:text-2xl">Banke Bihari Ji Temple:</h3> Just a short drive away, ensuring you are never far from the divine darshan.
                <br />
                Residents can enjoy the evening light shows and spiritual talks at Prem Mandir & ISKCON, which are conveniently located.
                <h3 className="text-[#313036] my-5   text-xl lg:text-2xl">Connectivity:</h3> Residents of Delhi-NCR find the location to be an ideal second home due to its excellent connections to the Yamuna Expressway and the NH-19 (Delhi-Agra Highway).
                <h3 className="text-[#313036] my-5   text-xl lg:text-2xl">MVDA New Housing Plan 2026:</h3> A Controlled Development
                <br />
                In order to make sure that the twin cities' growth is planned, the Mathura-Vrindavan Development Authority (MVDA) has taken the initiative. There is a strong push for high-quality infrastructure as part of the MVDA New Housing Scheme 2026.
                <br /> <br />Hanumat Vihar is a benchmark in quality for investors searching for MVDA-approved plots in Vrindavan or investigating the MVDA new housing scheme in Vrindavan. Private townships such as Hanumat Vihar offer ready-to-move-in plots in Vrindavan for sale with immediate possession and registry, avoiding the lengthy waiting periods typically associated with government lotteries, while the authority opens windows for Vrindavan Awasiyaiya Yojana application online.
                <br />
              </p>
            </div>
          </div>
        </section>

        {/* Content */}

        <Customcomponent />
      </div>
    </div>
  );
}
