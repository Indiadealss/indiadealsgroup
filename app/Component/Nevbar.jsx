'use client';
"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from 'lucide-react';
import logo from '../../Images/india_deals_logo10x.png'
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const pathname = usePathname();
const isPrivacyPage = pathname === "/privacy-policy";
const ischannelpatnerpolicy = pathname === "/channel-patner-policy";
const career = pathname === "/career";

  const [opens, setOpens] = useState(false);
const [scrolled, setScrolled] = useState(false);
const [visible, setVisible] = useState(true);




  console.log(window.location.pathname);
  

  useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 80 ) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

useEffect(() => {
  let lastScroll = 0;

  const handleScroll = () => {
    const currentScroll = window.scrollY;

    setScrolled(currentScroll > 80);

    if (currentScroll > lastScroll && currentScroll > 100) {
      setVisible(false); // scrolling down
    } else {
      setVisible(true); // scrolling up
    }

    lastScroll = currentScroll;
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  
  

  const navItems = [
   
    {
      label:'About us',
      link:'/about'
    },
     {
      label:'Our Projects',
      submenu: [
        {label:'Hanumat Vihar Awasiya Yojna (Vrindavan)',link:'/hanumat-vihar-awasiya-yojna'},
        {label:'Upcoming Project(Barsana)',link:'/barsana'},
        {label:'Upcoming Project(Ayodhya)',link:'/ayodhya'},
      ]
    },
    {
      label:'Our team',
      submenu: [
        {label:'Management Team',link:'/our-team'},
        {label:'Sales Team',link:'/sales-team'},
        {label:'IT Team',link:'/it-team'},
      ]
    },
     {
      label:'Our Policy',
      submenu: [
        {label:'Privacy Policy',link:'/privacy-policy'},
        {label:'Channel Partner Policy',link:'/channel-patner-policy'}
      ]
    },
    {
      label:'Contact us',
      link:'/contact-us'
    },
    {
      label:'Careers',
      link:'/career'
    }
  ];

  return (
    <header
  className={`w-full  left-0 z-50 transition-all duration-50 
  ${
    scrolled || isPrivacyPage || ischannelpatnerpolicy || career
      ? `${isPrivacyPage || ischannelpatnerpolicy ? 'sticky' : 'fixed'} text-[#f1e6c8] bg-[#313036ab]  shadow-lg`
      : "absolute text-[#f1e6c8] bg-transparent"
  }
  ${visible || isPrivacyPage || ischannelpatnerpolicy || career ? "top-0" : "top"}
  `}
>
      {/* TOP BAR */}
      <div
  className={`mx-auto flex items-center justify-between px-6 py-3 transition-all duration-1000 ${
    scrolled ? "py-2" : "py-5"
  }`}
>
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link href='/'><Image
            src={logo}
            alt="INDIA DEALS GROUP"
            width={scrolled ? 100 : 110}
            priority
          /></Link>
        </div>

        {/* Desktop Right */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Desktop Menu */}
      <nav className="hidden lg:block">
  <ul className="container mx-auto flex gap-10 font-semibold pb-1 text-sm">
    {navItems.map((item) => (
      <li key={item.label} className="relative group uppercase tracking-widest">

        {item.submenu ? (
          <>
            <span className="cursor-pointer hover:text-[#f1e6c8]">
              {item.label}
            </span>

            {/* Dropdown */}
            <ul className="absolute w-[max-content]  bg-[#313036ab] left-0 top-8  text-black shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 min-w-[180px]">
              {item.submenu.map((sub) => (
                <Link href={sub.link} key={sub.label}>
                  <li className="px-4 py-2 cursor-pointer text-[#f0e5c7]">
                    {sub.label}
                  </li>
                </Link>
              ))}
            </ul>
          </>
        ) : (
          <Link href={item.link}>
            <span className="cursor-pointer hover:text-[#f1e6c8]">
              {item.label}
            </span>
          </Link>
        )}

      </li>
    ))}
  </ul>
</nav>
        </div>

        
          <div className="hidden lg:flex items-center gap-2 bg-[#d2b02d] text-white px-4 py-2 rounded">
            <Phone size={16} />
            <span className="font-semibold cursor-pointer">+91-9818763100</span>
          </div>

        {/* Mobile buttons */}
        <div className="lg:hidden flex justify-between  gap-3">
          <a
            href="tel:+919818763100"
            className="bg-[#d2b02d] text-white p-2 rounded"
          >
            <Phone size={18} />
          </a>

          <button onClick={() => setOpen(!open)}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden  bg-white fixed top-0 left-0 right-0">
          <p className='mx-5' onClick={() => setOpen(false)}><span className='text-2xl float-right text-red-600'>x</span></p>
          <ul className="flex flex-col px-4 py-3 gap-3 text-sm font-medium">
            {navItems.map((item) => (
  <div key={item.label}>
    {item.link ? (
      <Link href={item.link} onClick={() => setOpen(false)}>
        <li className="pb-2 cursor-pointer font-bold text-[#e3ba43] hover:text-[#f1e6c8]">
          {item.label}
        </li>
      </Link>
    ) : (
      <>
        <li className="pb-2 text-[#e3ba43] font-bold">{item.label}</li>

        {item.submenu?.map((sub) => (
          <Link
            key={sub.label}
            href={sub.link}
            onClick={() => setOpen(false)}
          >
            <li className="pl-4 pb-2 text-sm  text-[#e3ba43] hover:text-[#f1e6c8]">
              {sub.label}
            </li>
          </Link>
        ))}
      </>
    )}
  </div>
))}
          </ul>

          <div className="px-4 py-3 text-sm">
            <a
              href="tel:+919818763100"
              className="block text-center bg-pink-700 text-white py-2 rounded"
            >
              Call +91-9818763100
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
