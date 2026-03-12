'use client'

import Image from "next/image";
import contactUs from '@/Images/contactUs.webp';
import contactUsHome from '@/Images/contactWithUs.jpg'
import Customcomponent from "../Customcomponent/Customcomponent";

export default function Home() {

 

  return (
    <div className="min-h-screen">

      {/* HERO */}
      <div className="relative w-full h-[30vw] min-h-[60vh]">
        <Image
          src={contactUs}
          alt="Vrindavan Banner"
          fill
          priority
          sizes="100vw"
          className="object-cover hidden lg:block"
        />
        <Image
          src={contactUsHome}
          alt="Vrindavan Banner"
          fill
          priority
          sizes="100vw"
          className="object-cover block lg:hidden"
        />
      </div>

      {/* TITLE */}
      <div className="w-full flex justify-between mt-10">
        {/* <h1 className="mx-auto text-4xl font-black   text-[#313036]">
          CONTACT US
        </h1> */}
      </div>

      <Customcomponent />

    </div>
  );
}