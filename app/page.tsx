'use client'
import Image from "next/image";
import virndavan from "@/Images/abhinandan-lodha-vrindavan-plots-v0-pu57jype7rfe1.webp";
import aboutTemImage from "@/Images/shridivineabout.jpg";
import AOS  from 'aos';
import { useEffect } from "react";
import Gallery from "./Gallery";
import Ongoingprojectslider from "./Ongoingprojectslider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Customcomponent from "./Customcomponent/Customcomponent";

export default function Home() {

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);
  return (
    <div className="min-h-screen ">
      
      {/* HERO SECTION */}
      <div className="relative w-full h-[38vw] min-h-[60vh] overflow-hidden">
        {/* <Image
          src={virndavan}
          alt="Vrindavan Banner"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        /> */}
        <video
    autoPlay
    muted
    loop
    playsInline
    className="absolute inset-0 w-full h-full object-cover"
    preload="metaadd"
    poster="https://cdn.brandsdoor.in/indiadealss/banner-thumb.jpg"
  >
    <source src="https://cdn.brandsdoor.in/indiadealss/indiadealss/1771136869498-indiadeals-group-home-banners.mp4" type="video/mp4" />
  </video>

        {/* Overlay (optional but recommended) */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Text Content */}
        <div className="relative z-10 flex justify-center items-start top-40 pt-[35vw] md:pt-25 lg:pt-3 lg:pt-4">
          {/* <div className="bg-[#f3f39b54] mx-[10%] p-4">
            <h1 className="text-[#f1e6c8] text-2xl font-medium md:text-4xl lg:text-6xl text-center font-[CanelaDeck-Light] leading-tight">
              RESIDENTIAL PLOT TOWNSHIP,
              <br />
              Where Luxury Meets Devotion
            </h1>
          </div> */}
        </div>
      </div>
      
      {/* gallery */}
      {/* <section className="py-5 px-20">
        <Gallery />
      </section>

       <section className="py-5 px-20">
        <Ongoingprojectslider />
      </section> */}

      {/* Title */}

        <h1 className="text-[#313036] font-['CanelaDeck-Light'] font-bold text-4xl text-center mt-10">Hanumat Vihar Awas Yojna (MVDA) <br /></h1>


      {/* ABOUT SECTION */}
      <section className="pt-20 pb-10 px-2 lg:px-20 text-justify" data-aos="fade-up">
        <div className=" lg:flex  mx-5">
          <Image
            src="https://cdn.brandsdoor.in/indiadealss/indiadealss/1770972766053-ChatGPT%20Image%20Feb%2012%2C%202026%2C%2004_12_53%20PM.png"
            alt="About indiadealss"
            width={600}
            height={300}
            className="  h-auto rounded border-4 border-[#313036]"
          />
          <div className="px-0 lg:px-10">
            <h1 className="text-[#313036] font-['CanelaDeck-Light'] font-bold text-4xl"><span className="text-2xl font-medium font-normal">Radha Kund – Ral Road, Vrindavan</span> <br /><span className="text-2xl font-medium font-normal">RERA Approved Residential Township</span></h1>
            <p className="text-[#313036] my-10 font-['poppins'] text-gray-600">
             Hanumat Vihar Awas Yojna is an approved residential plotted township that offers people a chance to own land safely in Vrindavan. This is a place for families, investors, retirees and people who want a second home. The project is designed to bring the spiritual surroundings of Vrindavan and the modern infrastructure that people need.
             <br /><br />The township is located on Radha Kund – Ral Road, which's a rapidly developing area. This means that Hanumat Vihar Awas Yojna is an opportunity for people to own property in a place where the value of land is increasing. The area is perfect for people who want to invest in land build a house or just own a piece of land in Vrindavan.
</p>
          </div>
        </div>
          <div className="pt-3 px-5 lg:pe-20 lg:pt-10">
          <h1 className="text-[#313036] font-['CanelaDeck-Light'] font-medium text-4xl">About Hanumat Vihar Awas Yojna</h1>
          <p className="text-gray-600 font-['poppins'] my-5">
            Hanumat Vihar Awas Yojna is a planned community where people can buy plots of land that are legally clear. The project is designed to be affordable. It does not compromise on planning, accessibility or the potential for the land to increase in value over time.
           
            The project is suitable for people who want to build their house invest in land for the long term retire in Vrindavan or own a holiday home. It is also an option for people who want to create a family asset or rent out their property to tourists.
          </p>
      </div>

      {/* Legal Security and Approvals */}
         <div className="pt-3 px-2 lg:px-5">
          <h1 className="text-[#313036] font-['CanelaDeck-Light'] text-2xl font-medium">Legal Security and Approvals:</h1>
          <p className="text-gray-600 font-['poppins'] my-5">
            One of the aspects of Hanumat Vihar Awas Yojna is the safety of investment. The project is approved by MVDA and RERA which means that it is legally documented and compliant with all regulations. This gives buyers peace of mind. Protects their interests.
            
            Hanumat Vihar Awas Yojna has all the approvals, including MVDA approval and RERA registration. The project is also legally documented, which means that buyers can be sure that their investment is safe.
          </p>
      </div>

      {/* Strategic Location Advantage */}
      <div className="pt-3 px-2 lg:px-5">
          <h1 className="text-[#313036] font-['CanelaDeck-Light'] text-2xl font-medium">Strategic Location Advantage:</h1>
          <p className="text-gray-600 font-['poppins'] my-5">
              The location of Hanumat Vihar Awas Yojna is one of its strengths. Radha Kund – Ral Road is becoming a residential area in Vrindavan driven by spiritual tourism, retirement and infrastructure development. The project is close to Radha Kund zone and it has easy access to central Vrindavan and Mathura routes.
            </p>
      </div>

        {/* Some of the location highlights include: */}
      <div className="pt-3 px-2 lg:px-5">
          <h1 className="text-[#313036] font-['CanelaDeck-Light'] text-2xl font-medium">Some of the location highlights include:</h1>
          <p className="text-gray-600 font-['poppins'] my-5">
              <ul className="list-disc ps-10 space-y-3 leading-7 pl-5">
                <li>Proximity to Radha Kund spiritual zone</li>
                <li>Easy access to central Vrindavan</li>
                <li>Connectivity to Mathura routes</li>
                <li>Growing residential corridor</li>
                <li>Close to temples and pilgrimage centers</li>
                <li>Expansion of hospitality and tourism sector</li>
                <li>Rapid road and infrastructure development</li>
              </ul> <br />
              Vrindavan is becoming a residential destination, which makes it an attractive place to invest in land.
              </p>
      </div>

      {/* Township Infrastructure and Planning */}

      <div className="pt-3 px-2 lg:px-5">
          <h1 className="text-[#313036] font-['CanelaDeck-Light'] text-2xl font-medium">Township Infrastructure and Planning</h1>
          <p className="text-gray-600 font-['poppins'] my-5">
            Hanumat Vihar Awas Yojna is planned with infrastructure that supports convenience, safety and long-term growth. The project has internal roads clearly demarcated plots and a colony-style structured layout. It also has open surroundings, drainage and access planning and a construction-friendly design.
            </p>
      </div>

      {/*  */}

      <div className="pt-3 px-2 lg:px-5">
          <h1 className="text-[#313036] font-['CanelaDeck-Light'] text-2xl font-medium">Some of the features of the project include:</h1>
          <p className="text-gray-600 font-['poppins'] my-5">
              <ul className="list-disc ps-10 space-y-2 leading-7 pl-5">
                <li>Wide internal roads</li>
                <li>Demarcated plots</li>
                <li>Colony-style structured layout</li>
                <li>Green open surroundings</li>
                <li>Drainage and access planning</li>
                <li>Construction-friendly design</li>
                <li>Community-oriented environment</li>
              </ul> <br />
              The project is designed to provide easy mobility planned expansion and a balanced residential ecosystem.
              </p>
      </div>


      {/* Investment Potential */}
         <div className="pt-3 px-2 lg:px-5">
          <h1 className="text-[#313036] font-['CanelaDeck-Light'] text-2xl font-medium">Investment Potential</h1>
          <p className="text-gray-600 font-['poppins'] my-5">
            The real estate market in Vrindavan is experiencing growth due to increasing demand from spiritual tourists, retirees, holiday home investors and long-term land investors. Hanumat Vihar Awas Yojna offers a range of benefits including early-stage pricing advantage, high appreciation potential and tangible plotted asset.
           
            The project is ideal for people who want to invest in land as it offers resale liquidity, low maintenance investment and tourism-driven rental demand. It also provides long-term capital growth, which makes it a safe and attractive investment option.
           </p>
      </div>

      <div className="pt-3 px-2 lg:px-5">
          <h1 className="text-[#313036] font-['CanelaDeck-Light'] text-2xl font-medium">Ideal for Families and End Users</h1>
          <p className="text-gray-600 font-['poppins'] my-5">
            Hanumat Vihar Awas Yojna is perfect for families and people who want to own a piece of land in Vrindavan. The project offers calm surroundings freedom to design your own home and an organized residential colony. It is also a way to enter the Vrindavan market and create a long-term family asset.
            
              </p>
      </div>


      {/* Some of the benefits of the project include: */}

      <div className="pt-3 px-2 lg:px-5">
          <h1 className="text-[#313036] font-['CanelaDeck-Light'] text-2xl font-medium">Some of the benefits of the project include:</h1>
          <p className="text-gray-600 font-['poppins'] my-5">
              <ul className="list-disc ps-10 space-y-3 leading-7 pl-5">
                <li>Spiritual and calm surroundings</li>
                <li>Freedom to design your home</li>
                <li>Organized residential colony</li>
                <li>Affordable Vrindavan entry</li>
                <li>Long-term family asset</li>
                <li>Cultural and emotional connection</li>
                <li>Community-oriented environment</li>
              </ul> <br />
              Owning land in Vrindavan is not just a financial decision, but also a meaningful life investment.    
          </p>
      </div>

      {/* Transparent Buying Experience */}
      
      <div className="pt-3 px-2 lg:px-5">
          <h1 className="text-[#313036] font-['CanelaDeck-Light'] text-2xl font-medium">Transparent Buying Experience</h1>
          <p className="text-gray-600 font-['poppins'] my-5">
              The project emphasizes dealing and structured buyer support. Buyers receive plot allocation, professional documentation assistance, guided purchase process, transparent communication and long-term relationship support.
            
            The focus of the project is not just on selling plots. On building trust and confidence with buyers. The project team is committed to providing an hassle-free buying experience.
            <br />
            <br />
            Hanumat Vihar Awas Yojna is a approved and future-ready plotted township that offers a rare blend of legality location strength, affordability and growth potential. With RERA approvals, strategic positioning on Radha Kund – Ral Road and Vrindavan’s expanding real estate market the project stands as an ideal choice for both living and investment.
            
            It is more, than a property purchase – it is an opportunity to secure land in one of India’s most spiritually and economically evolving destinations. Hanumat Vihar Awas Yojna is a chance to own a piece of Vrindavan and create a long-term asset that will appreciate in value over time.
            </p>
      </div>
      </section>

      {/* project content */}

    


      {/* contact */}

      <Customcomponent />


      

    </div>
  );
}
