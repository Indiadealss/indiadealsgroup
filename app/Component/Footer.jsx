'use client';
import logo from '../../Images/indiadealsgroupsvg.svg'
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright, faClock } from '@fortawesome/free-regular-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faBuilding } from "@fortawesome/free-regular-svg-icons";

const Footer = () => {
  return (
    <div className="bg-[#313036]">
      {/* TOP SECTION */}
      <div className="
      flex
      justify-between
      flex-col
      md:flex-row
  gap-10 
  py-10 
  px-6 sm:px-10 lg:px-24 
  border-b 
  border-[#d2b02d4d]
">
            {/* LOGO */}
        <div className="flex flex-col lg:flex-row lg:justify-center lg:justify-start">
          <Link href="/">
            <Image src={logo} alt="Shri Divine Group" className='mx-auto' width={160}  priority />
          </Link>
        </div>

        {/* IMPORTANT LINKS */}
        

        {/* LATEST PROJECT */}
       

        {/* CONTACT */}
        <div className="w-auto md:w-[35%]">
          <h1 className="text-[#f1e6c8]  py-2">Registered office</h1>
          <p className="text-[#f1e6c8] text-sm uppercase tracking-wider">
           <FontAwesomeIcon icon={faBuilding} className='mr-2' />C-320, 3rd Floor, Block C, Golden I, Techzone 4, Greater Noida West,Uttar Pradesh, 201306
          </p>
          <p className="text-[#f1e6c8] py-2">
            <FontAwesomeIcon icon={faPhone} className="mr-2" />
            +91-9818763100
          </p>
          <p className='text-[#f1e6c8] py-1'>
            <FontAwesomeIcon icon={faEnvelope} className='mr-2' />
            customercare@indiadealsgroup.com
          </p>
        </div>
      </div>

      {/* DISCLAIMER */}
      <div className="py-8 px-6 sm:px-10 lg:px-[22vw] ">
        <h1 className="text-[#f1e6c8] mb-2 text-center">DISCLAIMER</h1>

        

        <p className="text-[#f1e6c8] text-xs mb-2">
        </p>

        <p className="text-[#f1e6c8] text-xs">
          <FontAwesomeIcon icon={faCopyright} /> Copyright © IndiaDeals Group. All rights reserved. All content, trademarks, logos, text, graphics, images, design elements, source code, and materials displayed on this website are the exclusive intellectual property of IndiaDeals Group and are protected under applicable copyright, trademark, and intellectual property laws. Unauthorized copying, reproduction, modification, distribution, republication, display, or transmission of any material from this website, in whole or in part, is strictly prohibited without prior written consent from IndiaDeals Group. Website design, development, and maintenance are owned and controlled by IndiaDeals Group. Any violation may result in legal action under applicable laws.
        </p>
      </div>
    </div>
  );
};

export default Footer;