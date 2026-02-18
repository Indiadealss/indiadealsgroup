'use client';
import logo from '../../Images/indiadealsgroupsvg.svg'
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright, faClock } from '@fortawesome/free-regular-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faBuilding } from "@fortawesome/free-regular-svg-icons";
import { faFacebookF, faInstagram, faLinkedinIn, faYoutube } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {

  const socialmedia = [
    {
      label:'Facebook',
      icon:<FontAwesomeIcon icon={faFacebookF} className='text-blue-600' width={300} />,
      link:'https://www.facebook.com/people/Indiadeals/61587222626520/',
      name:'Indiadeals'
    },
    {
      label:'Instagram',
      icon:<FontAwesomeIcon icon={faInstagram}  className='text-pink-600' />,
      link:'https://www.instagram.com/indiadeals_official?igsh=eGEwc2x0enJtaWk0',
      name:'Indiadeals_official'
    },{
      label:'YouTube',
      icon:<FontAwesomeIcon icon={faYoutube}  className='text-red-600' />,
      link: 'https://www.youtube.com/@indiadealss',
      name:'@indiadealss'
    },
    {
      label:'Linkdin',
      icon:<FontAwesomeIcon icon={faLinkedinIn} className='text-blue-700' />,
      link:'https://www.linkedin.com/company/indiadeals-official/',
      name:'Indiadeals-official'
    }
  ]
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
        

        {/* Follow US*/}

        <div className='w-auro'>
          <h1 className="text-[#f1e6c8] text-center mb-5 py-2 font-bold">Follow US</h1>
          {/* <div className='flex justify-between'>
            {socialmedia.map((item,index) => (
              <div key={item.index} className='text-[#f1e6c8] text-sm mx-3 uppercase tracking-wider'>
                <a href={item.link} target='_blank' className="text-xl  my-3 bg-text-[#f1e6c8] rounded-full p-2 cursor-pointer transition">{item.icon}</a>
              </div>
            ))}
          </div> */}
          <ul className=' space-y-1'>
            {socialmedia.map((item,index) => (
              <li key={item.index} className='text-[#f1e6c8] text-sm  tracking-wider'>
                <a href={item.link} target='_blank' className="text-xl me-3 cursor-pointer transition">{item.icon}</a><a href={item.link} target='_blank' className="transition  cursor-pointer">{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
       

        {/* CONTACT */}
        <div className="w-auto md:w-[35%]">
          <h1 className="text-[#f1e6c8]  py-2 font-bold">Registered office</h1>
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