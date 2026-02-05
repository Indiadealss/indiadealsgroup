'use client';
import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import logo from '../../Images/logo.png'
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
 
  return (
    <div className='bg-[#313036] '>
        <div className='flex py-10 px-24 justify-between border-b-1 border-[#d2b02d4d]'>
            <div>
                 <Link href='/'><Image
            src={logo}
            alt="Shri Divine Group"
            width={100}
            priority
          /></Link>
            </div>
            <div>
                <h1 className=' text-[#f1e6c8] py-2'>IMPORTANT LINKS</h1>
                <ul className=' text-[#f1e6c8] list-disc pl-5 space-y-2'>
                    <li>Blogs</li>
                    <li>Contact us</li>
                    <li>Privacy & Policy</li>
                    <li>Terms & conditions</li>
                    
                </ul>
            </div>
            <div>
                <h1 className=' text-[#f1e6c8] py-2 text-center'>Latest Projects</h1>
                <div className='flex'>
                    <div className='rounded-full py-2 px-2 bg-white h-18'>
                        <Link href='/'><Image
            src={logo}
            alt="Shri Divine Group"
            width={50}
            className='rounded-full overflow-hidden bg-black py-2'
            priority
          /></Link>
                    </div>
                    <div className='px-4 w-[20vw]'>
                        <p><span className=' text-[#f1e6c8] text-xs px-2'><FontAwesomeIcon icon={faClock} /></span><span className=' text-[#f1e6c8]'>PROJECT NAME</span></p>
                        <p><span className=' text-[#f1e6c8] text-xs px-2 w-[1vw]'>Astrathum is not merely a mixed-use development—it’s an evolved urban typology.</span></p>
                    </div>
                </div>

            </div>
            <div className='w-[20vw]'>
                <h1 className=" text-[#f1e6c8] py-2">CONTACT</h1>
                    <p className=' text-[#f1e6c8]'><span>Unit No:- 320, 3rd Floor, Block C, Golden I, Techzone 4, Grater Noida West,201304</span></p>
                    <p className=' text-[#f1e6c8] py-4'><span><FontAwesomeIcon icon={faPhone} />+91-9818763100</span></p>
            </div>
        </div>

        {/*  */}
        <div className='py-10 px-20 justify-between'>
            <h1 className='text-center  text-[#f1e6c8]'>DISCLAIMER</h1>
            <p className='px-10'><span className=' text-[#f1e6c8] text-xs'>The Pictures and details are tentative depictions only. This is not a legal offer. Mentioned features are indicative and are subject to change without any prior notice as may be decided by the company or competent authority.</span></p>
            <p className='px-10'><span className=' text-[#f1e6c8] text-xs'>Terms and Conditions Apply. Special Scheme by the developer.1Sq Mtr =10.764 Sq. Ft & 1Sq. Yd. = 0.83 Sq. Mtr.</span></p>
            <p className="px-10"><span className=" text-[#f1e6c8] text-xs"><FontAwesomeIcon icon={faCopyright} />Copyright INDIADEALS. Design & Devlopment By INDIADEALS GROUP</span></p>
        </div>
    </div>
  );
};

export default Footer;
