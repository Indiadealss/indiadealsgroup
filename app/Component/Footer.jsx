'use client';
import logo from '../../Images/indiadealsgroupsvg.svg'
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright, faClock } from '@fortawesome/free-regular-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

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
        <div className="mx-auto hidden lg:block lg:text-left">
          <h1 className="text-[#f1e6c8] py-2">IMPORTANT LINKS</h1>
          <ul className="text-[#f1e6c8] list-disc list-inside space-y-2">
            <li>Blogs</li>
            <li><Link href='/contact-us'>Contact us</Link></li>
            <li><Link href='/Privacy-policy'>Privacy & Policy</Link></li>
            <li><Link href='/Terms&Conditions'>Terms & conditions</Link></li>
          </ul>
        </div>

        {/* LATEST PROJECT */}
        <div className="text-center lg:text-left w-auto lg:w-[20vw]">
          <h1 className="text-[#f1e6c8] py-2">Latest Projects</h1>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="rounded-full bg-white p-2">
              <Link href="/">
                <Image
                  src={logo}
                  alt="Project"
                  width={50}
                  className="rounded-full"
                />
              </Link>
            </div>

            <div>
              <p className="text-[#f1e6c8] text-sm">
                <FontAwesomeIcon icon={faClock} className="mr-2" />
                Hanumant Vihar
              </p>
              <p className="text-[#f1e6c8] text-xs mt-1">
                INDIADEALS is not merely a mixed-use development—it’s an evolved urban typology.
              </p>
            </div>
          </div>
        </div>

        {/* CONTACT */}
        <div className="text-center lg:text-left w-auto lg:w-[20vw]">
          <h1 className="text-[#f1e6c8] py-2">CONTACT</h1>
          <p className="text-[#f1e6c8] text-sm uppercase tracking-wider">
            Office address:- 320, 3rd Floor, Block C, Golden I, Techzone 4,
            Greater Noida West, 201304
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
          The Pictures and details are tentative depictions only. This is not a legal offer.
          Mentioned features are indicative and subject to change without notice.
        </p>

        <p className="text-[#f1e6c8] text-xs mb-2">
          Terms and Conditions Apply. 1 Sq Mtr = 10.764 Sq Ft & 1 Sq Yd = 0.83 Sq Mtr.
        </p>

        <p className="text-[#f1e6c8] text-xs">
          <FontAwesomeIcon icon={faCopyright} /> Copyright INDIADEALS.
          Design & Development by INDIADEALS GROUP
        </p>
      </div>
    </div>
  );
};

export default Footer;