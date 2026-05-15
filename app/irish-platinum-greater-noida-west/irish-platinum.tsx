"use client";

import React, { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";

import banner from "@/Images/irishPlatinumBanner.jpg";
import irislogo from "@/Images/irishLogo.png";
import IrishLogo from "@/Images/Irish-Logo.png";

import {
  Phone,
  MessageCircle,
  Landmark,
  Tag,
  Home,
  Building2,
  Bed,
  Utensils,
  Sofa,
  DoorOpen,
  Paintbrush,
  Layers,
} from "lucide-react";

import sbi from "@/Images/sbi.png";
import uno from "@/Images/uno.png";
import centralLogo from "@/Images/central-bank-of-india-logo-vector.png";
import icici from "@/Images/icici.jpeg";

import irishPlatinumgall from "@/Images/irishPlatinumgall-3.jpg";
import irishPlatinumSportsArea from "@/Images/irishPlatinumSportsArea.jpeg";
import irishPlatinumgalls from "@/Images/irishPlatinumgall-2.jpg";

import floorPlan1 from "@/Images/1390.jpeg";
import floorPlan2 from "@/Images/1690.jpeg";
import floorPlan3 from "@/Images/1925.jpeg";
import floorPlan4 from "@/Images/2150.jpeg";

import ProjectStats from "../Component/ProjectStats.jsx";
import ContactSection from "../ContactSection/ContactSection.jsx";
import Customenquiryform from "../Component/Customenquiryform.jsx";

interface PropertyType {
  _id: string;
  projectname: string;
  location: string;
}

interface PropertyCardFloorplanProps {
  title: string;
  size: string;
  features: string;
  imageUrl: string | StaticImageData;
  setCustomEnquiry: React.Dispatch<React.SetStateAction<boolean>>;
}

const PropertyCardFloorplan: React.FC<PropertyCardFloorplanProps> = ({
  title,
  size,
  features,
  imageUrl,
  setCustomEnquiry,
}) => {

  
  return (
    <div className="bg-[#1e252b] text-white rounded-xl p-6 shadow-2xl border border-gray-700 xl:w-[50vw] max-w-2xl">
      <div className="relative h-72 w-full">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6 text-center">
        <h2 className="text-[#c19a6b] text-2xl font-serif uppercase tracking-widest mb-2">
          {title}
        </h2>
        <h3 className="text-2xl font-bold text-white mb-3">{size}</h3>
        <p className="text-white mb-6">{features}</p>
        <button
          type="button"
          onClick={() => setCustomEnquiry(true)}
          className="mt-8 px-8 py-3 bg-gradient-to-r from-[#7b3f21] to-[#b38b5d] rounded-full font-bold uppercase text-xs tracking-tighter hover:opacity-90 transition-opacity"
        >
          Download Brochure
        </button>
      </div>
    </div>
  );
};

const Irishplatinum: React.FC = () => {
  const [customEnquiry, setCustomEnquiry] = useState<boolean>(false);

  const [propertys, setPropertys] = useState<PropertyType | null>(null);

  useEffect(() => {
    setPropertys({
      _id: "irish-platinum",
      projectname: "IRISH PLATINUM",
      location: "Greater Noida West"
    });

    const timer = setTimeout(() => {
      setCustomEnquiry(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const stats = [
    {
      id: 1,
      icon: <Building2 size={48} strokeWidth={1} />,
      value: "4",
      label: "Total No. of Towers",
    },
    {
      id: 2,
      icon: <Layers size={48} strokeWidth={1} />,
      value: "30",
      label: "Total No. of Floors",
    },
    {
      id: 3,
      icon: <DoorOpen size={48} strokeWidth={1} />,
      value: "566",
      label: "Total Flats",
    },
      {
      id: 4,
      icon: <Home  size={48} strokeWidth={1} />,
      value: "3 BHK",
      label: "1390 Sq.ft. - 1925 Sq.ft.",
    },
    {
      id: 4,
      icon: <Home  size={48} strokeWidth={1} />,
      value: "4 BHK",
      label: "2150 Sq.ft. - 2550 Sq.ft.",
    },
    {
      id: 4,
      icon: <Layers size={48} strokeWidth={1} />,
      value: "Possession",
      label: "October 2029",
    },
  ];

   const banksAvailable = [
        {name:'SBI',logo:'/Images/sbi.png'},
        {name:'ICICI',logo:'/Images/icici.jpeg'},
        {name:'central',logo:'/Images/central-bank-of-india-logo-vector.png'},
      ]

  
      const specs = [
        {
          title: "Master Bedroom",
          detail: "Laminated wooden flooring",
          icon: Bed,
        },
        {
          title: "Bedrooms",
          detail: "Vitrified tile flooring",
          icon: Bed,
        },
        {
          title: "Kitchen",
          detail: "Anti-skid vitrified tile flooring",
          icon: Utensils,
        },
        {
          title: "Living & Dining",
          detail: "Vitrified tile flooring",
          icon: Sofa,
        },
        {
          title: "Balcony",
          detail: "Anti-skid vitrified flooring",
          icon: DoorOpen,
        },
        {
          title: "External Finish",
          detail: "Quartz reinforced textured paint",
          icon: Paintbrush,
        },
      ];

      const amenities = [
        {
          title: "Swimming Pool",
          description: "A premium pool area with sun decks and landscaped surroundings.",
          image: "/Images/irishPlatinumSportsArea.jpeg",
        },
        {
          title: "Club House",
          description: "An exclusive clubhouse for leisure and social gatherings.",
          image: "/Images/irishPlatinumgall-3.jpg",
        },
        {
          title: "Fitness Center",
          description: "A fully equipped gym for strength and cardio workouts.",
          image: "/Images/irishPlatinumgall-2.jpg",
        },
      ];


       const floorPlans = [
  {
    id: 1,
    title: "3 BHK +  2T",
    size: "1390 SQ. FT.",
    features: "Low-density premium tower",
    imageUrl: '/Images/1390.jpeg'
  },
  {
    id: 2,
    title: "3 BHK + 3T",
    size: "1690 SQ.FT",
    features: "MIVAN Superior Construction",
    imageUrl: '/Images/1690.jpeg'
  },
  {
    id: 3,
    title: "3 BHK + 4T + SER",
    size: "1925 SQ.FT",
    features: "MIVAN Superior Construction",
    imageUrl: '/Images/1925.jpeg'
  },
  {
    id: 4,
    title: "4 BHK + 4T",
    size: "2150 SQ.FT",
    features: "MIVAN Superior Construction",
    imageUrl: '/Images/2150.jpeg'
  },
  {
    id: 5,
    title: "4 BHK + 5T + SER",
    size: "2550 SQ.FT",
    features: "MIVAN Superior Construction",
    imageUrl: '/Images/2550.jpeg'
  },
];

  return (
    <div>

      {/* HERO SECTION */}
      <section className="relative h-[90vh] min-h-[700px] w-full flex flex-col items-center justify-center text-white text-center px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src='/Images/irishPlatinumBanner.jpg'
            alt="Irish Platinum"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/40 shadow-[inset_0_0_100px_rgba(0,0,0,0.5)]" />
        </div>

        {/* LEFT LOGO */}
        <div className="absolute top-8 left-8 z-10 hidden md:block">
          <div className="w-22 h-12 bg-white rounded-full p-2 flex items-center justify-center mb-1 relative">
            <Image
              src='/Images/IrishLogoLeft.png'
              alt="Irish Logo"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* RIGHT LOGO */}
        <div className="absolute top-8 right-8 z-10 hidden md:block">
          <div className="w-49 h-22 relative">
            <Image
              src='/Images/irishLogo.png'
              alt="Irish Platinum"
              fill
              className="object-contain w-[100%] h-[100%]"
            />
          </div>
        </div>

        {/* CONTENT */}
        <div className="relative z-10 max-w-5xl space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight drop-shadow-lg">
            Luxury 3 & 4 BHK Apartments
          </h1>

          <div className="space-y-1">
            <h2 className="text-xl md:text-3xl font-bold uppercase tracking-wider">
              IRISH PLATINUM
            </h2>

            <p className="text-sm md:text-lg font-semibold">
              Sector 10 | GREATER NOIDA WEST
            </p>

            <p className="text-sm md:text-lg font-semibold">
              RERA APPROVED :- UPRERAPRJ503189/03/2024
            </p>
          </div>

          <div className="py-2">
            <p className="text-lg md:text-2xl font-bold">
              Starting Price – ₹ 1.70 Cr*
            </p>
            <p className="text-xs md:text-sm font-medium opacity-90 mt-2 flex flex-wrap justify-center gap-x-4">
            <span>Best Luxury Flats</span>
            <span>|</span>
            <span>Mivan Construction</span>
            <span>|</span>
            <span>Premium Lifestyle</span>
            <span>|</span>
            <span>High ROI Investment</span>
          </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <button
              onClick={() => setCustomEnquiry(true)}
              className="bg-gradient-to-r from-[#7a553a] to-[#a3836a] hover:scale-105 transition-transform px-10 py-4 rounded-full font-bold text-sm uppercase shadow-xl"
            >
              Book Site Tour
            </button>

            <button
              onClick={() => setCustomEnquiry(true)}
              className="border-2 border-white/80 backdrop-blur-sm hover:scale-105 transition-all px-10 py-4 rounded-full font-bold text-sm uppercase"
            >
              Explore
            </button>
          </div>
        </div>
      </section>

        {/* PROJECT STATS */}
      <ProjectStats stats={stats} />

       <section className="bg-[#0f172a] pt-20 ">
          <div className="max-w-7xl mx-auto  px-4 text-center mb-16">
            <h2 className="text-white text-4xl md:text-5xl font-serif mb-4">
              Discover Premium Living
            </h2>
            <div className="w-24 h-1 bg-white mx-auto relative">
               <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-3 h-3 bg-white rounded-full border-2 border-[#0f172a]" />
            </div>
          </div>
    
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto  px-4 py-20">
            {amenities.map((item, index) => (
              <div 
                key={index} 
                className="bg-[#1e293b]/50 border border-white/10 rounded-xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:bg-[#1e293b] hover:-translate-y-2 group"
              >
                {/* Image Container */}
                <div className="relative w-full h-48 mb-6 overflow-hidden rounded-lg">
                  <Image
                    draggable="false"
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
    
                {/* Text Content */}
                <h3 className="text-white text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-1">
                  {item.description}
                </p>
    
                {/* Gradient Button */}
                <button onClick={() => setCustomEnquiry(true)} className="bg-gradient-to-r from-[#7a553a] to-[#a3836a] text-white px-8 py-2 rounded font-bold text-xs uppercase tracking-widest hover:opacity-90 transition-opacity">
                  Learn More
                </button>
              </div>
            ))}
          </div>
    
          <section className="py-20 bg-white">  
          <div className="max-w-7xl mx-auto  px-4">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif text-[#0f172a] mb-6">
                Why Irish Platinum is in Tranding
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
                Looking for Ultra luxury apartments in Greater Noida West with premium amenities and high appreciation?
              </p>
            </div>
    
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Side: Content */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-[#0f172a] mb-4">Irish Platinum</h3>
                  <p className="text-gray-600 leading-relaxed text-justify">
                    Irish Platinum is a premium residential project located in Sector 10, Greater Noida West, designed to offer a modern and comfortable lifestyle. Developed with a focus on quality construction and contemporary architecture, the project has become one of the notable residential addresses in the rapidly growing Noida Extension region. Its strategic location, thoughtfully planned apartments, and lifestyle-oriented amenities make it attractive for both homebuyers and investors.
                    </p>
                  <p className="text-gray-600 leading-relaxed mt-3 text-justify">
                   The project offers spacious apartments with elegant interiors, proper ventilation, and efficient space utilization. Every home is designed to provide maximum natural light and a peaceful living environment. The residential towers are surrounded by landscaped green areas that create a refreshing atmosphere away from the noise of city life. Families living here enjoy a balance of urban convenience and serene surroundings.
                   </p>
                   <p className="text-gray-600 leading-relaxed mt-3 text-justify">
                  One of the biggest advantages of Irish Platinum is its location in Sector 10, Greater Noida West. The area has witnessed rapid infrastructure development in recent years, making it a preferred residential destination for professionals and families. The project enjoys good connectivity to Noida, Delhi, Ghaziabad, and other parts of the National Capital Region through wide roads and nearby expressways. Educational institutions, hospitals, shopping complexes, and entertainment hubs are easily accessible from the property, enhancing everyday convenience for residents.
                   </p>
                </div>
    
                
              </div>
    
              {/* Right Side: Image with Rounded Corners */}
              <div className="relative h-[600px] md:h-[700px] w-full rounded-[40px] overflow-hidden shadow-2xl">
               <img draggable="false"
        src={'/Images/Asset2.png'}
        alt="Tower T-10 Gold Render"
        // 'object-contain' puri image dikhayega, bina crop kiye.
        // 'object-bottom' building ko neeche se align karega taaki neeche khali jagah na dikhe.
        className="w-full h-full object-cover object-bottom"
      />
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 items-center">
              <div className="space-y-8">
                <div className="mt-10">
                  <p className="text-gray-600 leading-relaxed text-justify mt-3">
                    The project also focuses on providing a modern lifestyle through a wide range of amenities. Residents can enjoy facilities such as a clubhouse, swimming pool, gymnasium, jogging tracks, landscaped gardens, children’s play areas, and sports courts. These amenities encourage a healthy and active lifestyle while creating opportunities for social interaction among residents. Security features including CCTV surveillance and gated entry provide an added sense of safety for families.
                  </p>
                  <p className="text-gray-600 leading-relaxed text-justify mt-3">
                    Irish Platinum is also considered a promising investment opportunity because of the growing real estate demand in Greater Noida West. The area continues to attract buyers due to improving connectivity, metro expansion plans, and increasing commercial development nearby. As infrastructure grows, property values in the region are expected to appreciate steadily, making residential projects like Irish Platinum appealing for long-term investment.
                    </p>
                    <p className="text-gray-600 leading-relaxed text-justify mt-3">
                    Another important aspect of the project is its focus on community living. The residential environment is designed to promote harmony and comfort among residents. Open spaces, seating areas, and recreational zones provide opportunities for relaxation and interaction. The combination of modern amenities and a peaceful atmosphere makes the project suitable for people of all age groups.
                    </p>
                    <p className="text-gray-600 leading-relaxed text-justify mt-3">
                    Overall, Irish Platinum represents a blend of comfort, connectivity, and modern living in Sector 10, Greater Noida West. With its contemporary design, convenient location, and lifestyle facilities, the project continues to gain popularity among homebuyers seeking quality housing in the NCR region.
                    </p>
                  <p className="text-gray-800 leading-relaxed mt-3 text-justify font-bold ">
                  Key Features & Benefits of Irish Platinum  
                  </p>
                   <p className="text-gray-600 leading-relaxed mt-3 text-justify">
                   <ul>
                    <li>-	RERA-registered project. </li>
                    <li>-	4-side open plot</li>
                    <li>-	5.5 Acre project with plenty of greenery, parking spaces & facilities.</li>
                    <li>-	550 units, 4 towers.</li>
                    <li>-	3-BHK (1,390 sq. ft.) & 4-BHK (2,550 sq. ft.) flats.</li>
                    <li>-	Spacious balcony and high ceilings.</li>
                    <li>-	Community spaces like club house, amphitheater.</li>
                    <li>-	Gym, jogging track & children’s play area.</li>
                    <li>-	Good local connectivity with roads & metro (Aqua line & Blue line)</li>
                    <li>-	Near schools, hospitals, malls & offices.</li>
                    <li>-	The RERA registration number of this project is UPRERAPRJ503189/03/2024.</li>
                   </ul>
                   </p>
                   
                </div>
    
                
              </div>
            </div>
          </div>
          </section>
    
    
    
          <section className="bg-[#fdf2f0] py-16 px-6">
    
            <h2 className='font-serif text-center py-10 text-3xl font-bold'>The Finest Address—Now at Its Finest Price</h2>
            <div className='text-center mx-auto lg:w-140 pb-5'>
            <p className=' text-center'><span className='text-xl'>Developed by IRISH Group</span></p>
            </div>
          <div className="max-w-7xl mx-auto  px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Left Side: High-Resolution Render */}
            <div className="relative h-[400px] lg:h-[680px] w-full overflow-hidden shadow-xl rounded">
              <img draggable="false"
        src='/Images/Asset1.jpg'
        alt="Tower T-10 Gold Render"
        // 'object-contain' puri image dikhayega, bina crop kiye.
        // 'object-bottom' building ko neeche se align karega taaki neeche khali jagah na dikhe.
        className="w-[-webkit-fill-available] h-full object-cover object-bottom rounded"
      />
            </div>
    
            {/* Right Side: Information Data */}
            <div className="space-y-12 py-4">
              
              {/* Section 1: Pricing */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-[#b08d57] font-bold">
                  <Tag size={20} />
                  <span className="uppercase tracking-widest text-sm"> Pricing</span>
                </div>
                <hr className="border-gray-300" />
                <div className="space-y-2 pt-2">
                    <p className="text-[#333] text-lg font-bold">Starting Price: <span className="text-[#b08d57]">₹1.70 Cr*</span></p>
                  <p className="text-[#333] text-lg font-bold">Booking Amount: <span className="font-normal text-gray-600 text-base">10% of the total value</span></p>
                </div>
              </div>
    
              {/* Section 2: Configurations */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-[#b08d57] font-bold">
                  <Home size={20} />
                  <span className="uppercase tracking-widest text-sm">Configurations</span>
                </div>
                <hr className="border-gray-300" />
                <div className="space-y-3 pt-2">
                    <p className="text-[#333] font-bold">3 BHK + 2 Toilets: 
                    <span className="font-normal text-gray-600 block sm:inline ml-0 sm:ml-2">1390 sq ft</span>
                  </p>
                    <p className="text-[#333] font-bold">3 BHK + 3 Toilets: 
                    <span className="font-normal text-gray-600 block sm:inline ml-0 sm:ml-2">1690 sq ft</span>
                  </p>
                  <p className="text-[#333] font-bold">3 BHK + 4 Toilets + Servent: 
                    <span className="font-normal text-gray-600 block sm:inline ml-0 sm:ml-2">1925 sq ft</span>
                  </p>
                  <p className="text-[#333] font-bold">4 BHK  + 4 Toilets: 
                    <span className="font-normal text-gray-600 block sm:inline ml-0 sm:ml-2">2150 sq ft</span>
                  </p>
                  <p className="text-[#333] font-bold">4 BHK  + 5 Toilets + Servent: 
                    <span className="font-normal text-gray-600 block sm:inline ml-0 sm:ml-2">2550 sq ft</span>
                  </p>
                  
                </div>
              </div>
    
              {/* Section 3: Tower Details */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-[#b08d57] font-bold">
                  <Building2 size={20} />
                  <span className="uppercase tracking-widest text-sm">Tower Details</span>
                </div>
                <hr className="border-gray-300" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 pt-2">
                  <p className="text-[#333] font-bold">Tower: <span className="font-normal text-gray-600">T-4 | G+29 floors (1st to 29th)</span></p>
                  <p className="text-[#333] font-bold">Per Floor: <span className="font-normal text-gray-600"> 6 unit per floor in 3 BHK Tower & 4 unit per floor in 4 BHK </span></p>
                  <p className="text-[#333] font-bold">Lifts: <span className="font-normal text-gray-600">3 High-Speed Lifts</span></p>
                  <p className="text-[#333] font-bold">Type: <span className="font-normal text-gray-600">Low-density premium tower</span></p>
                </div>
              </div>
    
            </div>
          </div>
        </section>
    
    
        <section className="py-20 bg-gray-50 px-6">
          <div className="max-w-7xl mx-auto  px-4">
            {/* Header Section */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif text-[#0f172a] mb-4">
                Tower Specifications
              </h2>
              <p className="text-gray-500 font-medium">
                Premium finishes and world-class construction standards
              </p>
            </div>
    
            {/* Specifications Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {specs.map((spec, index) => (
                <div 
                  key={index} 
                  className="bg-white p-10 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] flex flex-col items-center text-center border-t-4 cursor-default border-[#b08d57] hover:border-[#b08d57] transition-all duration-300 group"
                >
                  {/* Icon with Gold Accent */}
                  <div className="mb-6 text-[#b08d57] transition-transform duration-300 group-hover:scale-110">
                    <spec.icon size={48} strokeWidth={1.5} />
                  </div>
    
                  {/* Text Content */}
                  <h3 className="text-2xl font-bold text-[#0f172a] mb-3">
                    {spec.title}
                  </h3>
                  <p className="text-gray-500 font-medium">
                    {spec.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
    
    
    
        </section>


        <div className="mx-auto bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 transition-all hover:shadow-lg max-w-4xl">
      {/* Header Section */}
      <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#0f172a] text-center mb-10">
        All Bank Finance Available
      </h3>

      {/* Logo Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center justify-items-center">
        {banksAvailable.map((bank, index) => (
          <div key={index} className=" flex flex-col items-center gap-3">
            <div className="relative w-32 h-16 filter">
              <Image
                draggable="false"
                src={bank.logo}
                alt={`${bank.name} logo`}
                fill
                className="object-contain"
              />
            </div>
            {/* <span className="text-xs font-bold ">
              {bank.name}
            </span> */}
          </div>
        ))}
      </div>

      {/* Footer Note */}
      <p className="text-center text-gray-400 text-sm mt-8 border-t pt-8 border-gray-50">
        & many other leading financial institutions
      </p>
    </div>

     

     {/*  */}


     <div className="bg-[#0f172a] min-h-screen p-10">
      <h1 className="text-white text-6xl mb-10 text-center font-serif">Floor Plan Options</h1>
      
      {/* Grid wrapper to handle multiple cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 justify-items-center">
        {floorPlans.map((plan) => (
          <PropertyCardFloorplan 
            key={plan.id} // Important for React performance
            title={plan.title}
            size={plan.size}
            features={plan.features}
            imageUrl={plan.imageUrl}
            setCustomEnquiry={setCustomEnquiry}
          />
        ))}
      </div>
    </div>
      
      <ContactSection projectName='IRISH PLATINUM' projectLocation=' Gh-04A, Sector 10, Greater Noida West, <br />(Noida Extension), Uttar Pradesh'/>
    {customEnquiry && (
            <div>
              <Customenquiryform setCustomEnquiry={setCustomEnquiry} propertys={propertys} />
            </div>
          )}
    </div>
  );
};

export default Irishplatinum;