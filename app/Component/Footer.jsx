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
  grid 
  grid-cols-1 
  sm:grid-cols-2 
  lg:grid-cols-4 
  gap-10 
  py-10 
  px-6 sm:px-10 lg:px-24 
  border-b 
  border-[#d2b02d4d]
">
            {/* LOGO */}
        <div className="flex justify-center lg:justify-start">
          <Link href="/">
            <Image src={logo} alt="Shri Divine Group" width={160}  priority />
          </Link>
        </div>

        {/* IMPORTANT LINKS */}
        

        {/* LATEST PROJECT */}
       

        {/* CONTACT */}
        <div className="text- w-auto">
          <h1 className="text-[#f1e6c8]  py-2">Registered office</h1>
          <p className="text-[#f1e6c8] text-sm uppercase tracking-wider">
           <FontAwesomeIcon icon={faBuilding} className='mr-2' /> 320, 3rd Floor, Block C, Golden I, Techzone 4, Greater Noida West,Uttar Pradesh, 201306
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
         I am giving IndiaDeals Group and Company representatives permission to get in touch with me. They can call me. Send me a message on my phone or by email or WhatsApp. I want to know more about the properties and the services they offer. I also want to know about any deals they have. What is going on with my transactions. I know that by saying this I am allowing them to contact me even if I am on a list that says I do not want to get these kinds of messages. This is okay, with me long as it is allowed by the law that applies to this situation.
        </p>

        <p className="text-[#f1e6c8] text-xs mb-2">
        </p>

        <p className="text-[#f1e6c8] text-xs">
          <FontAwesomeIcon icon={faCopyright} /> Copyright © IndiaDeals Group. All rights reserved. The content, design, layout, graphics, branding, and materials on this website are the intellectual property of IndiaDeals Group and may not be reproduced, distributed, or used without prior written permission. Website design, development, and maintenance by IndiaDeals Group.
        </p>
      </div>
    </div>
  );
};

export default Footer;