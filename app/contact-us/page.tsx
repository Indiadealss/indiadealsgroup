'use client'

import Image from "next/image";
import virndavan from '@/Images/Vrindavan-Banner.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faHouseLaptop } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";


export default function Home() {

    const contactdetails = [
            {
              icon:<FontAwesomeIcon icon={faHouseLaptop} className="text-white text-lg" />,
              title: "REGISTERED OFFICE",
              desc: "Unit No:- 320, 3rd Floor, Block C, Golden I, Techzone 4, Grater Noida West,201304",
            },
            {
              icon:<FontAwesomeIcon icon={faPhone} className="text-white text-lg" />,
              title: "CALL US NOW",
              desc: "Tel : +91–9818763100",
            },
            {
              icon:<FontAwesomeIcon icon={faPhone} className="text-white text-lg" />,
              title: "BEST – INDIADEALS Experience Satisfaction Team",
              desc: "Customer Care: +91–9818763100\n7 Days | 8:00 AM – 8:00 PM",
            },
            {
              icon:<FontAwesomeIcon icon={faEnvelope} className="text-white text-lg" />,
              title: "EMAIL US",
              desc: "costumercare@indiadealsgroup.com",
            },
          ]

    return (
        <div className="min-h-screen">

            {/* HERO SECTION */}
            <div className="relative w-full h-[30vw] min-h-[60vh]">
                <Image
                    src={virndavan}
                    alt="Vrindavan Banner"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover"
                />


            </div>

            <div className="w-[100%] flex justify-between mt-10">
                <h1 className="mx-auto text-4xl font-black font-['CanelaDeck-Light'] text-[#313036]">CONTACT US</h1>
            </div>
            
            {/* Get in touch with us */}
            <div className="m-20 me-10">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10">

        {/* LEFT SIDE – FORM */}
        <div className="bg-white p-8 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">GET IN TOUCH WITH US !</h2>
          <p className="text-gray-500 text-sm mb-6">
            We have multiple offices to serve you better. Please find the details
            and addresses of our locations below.
          </p>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name"
              className="border p-3 rounded w-full"
            />
            <input
              type="email"
              placeholder="Email"
              className="border p-3 rounded w-full"
            />
            <input
              type="tel"
              placeholder="Phone"
              className="border p-3 rounded w-full"
            />
            <input
              type="text"
              placeholder="City"
              className="border p-3 rounded w-full"
            />

            <textarea
              placeholder="Message"
              className="border p-3 rounded w-full md:col-span-2 h-28"
            />

            <div className="md:col-span-2 flex items-start gap-2 text-sm text-gray-600">
              <input type="checkbox" className="mt-1" />
              <p>
                I authorise INDIADEALS and associate companies & its
                representatives to contact me via Email/SMS/WhatsApp/Call.
              </p>
            </div>

            <button
              type="submit"
              className="bg-gray-900 text-white px-6 py-3 rounded md:col-span-2 w-fit"
            >
              Send Now
            </button>
          </form>
        </div>

        {/* RIGHT SIDE – CONTACT INFO */}
        <div className="space-y-6 mt-10">
          {contactdetails.map((item, i) => (
            <div key={i} className="flex gap-6 items-start my-10">
              <div className="w-10 h-10 bg-gray-800 text-white rounded-full flex items-center justify-center">
                {item.icon}
              </div>
              <div>
                <h4 className="font-semibold text-sm">{item.title}</h4>
                <p className="text-gray-600 text-sm whitespace-pre-line">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
            </div>


        </div>
    );
}
