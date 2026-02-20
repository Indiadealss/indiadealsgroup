'use client';
import { useEffect, useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import logo from '../../Images/india_deals_logo10x.png'
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [open, setOpen] = useState(false);


  const [opens, setOpens] = useState(false);
const [scrolled, setScrolled] = useState(false);
const [visible, setVisible] = useState(true);

  //   const scrollToTop = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: 'smooth'
  //   });
  // };

  useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 80) {
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
      link:'/hanumat-vihar-awasiya-yojna'
    },
    {
      label:'Our team',
      link:'/our-team'
    },
    {
      label:'Blogs',
      link:'/blogs'
    },
     {
      label:'Privacy & Policy',
      link:'/privacy-policy'
    },
    {
      label:'Contact us',
      link:'/contact-us'
    },
    // {
    //   label:'Costumer interface',
    //   link:'/review'
    // }
  ];

  return (
    <header
  className={`w-full  left-0 z-50 transition-all duration-500 ease-in-out
  ${
    scrolled
      ? "fixed text-[#f1e6c8] bg-[#313036ab]  shadow-lg"
      : "absolute text-[#f1e6c8] bg-transparent"
  }
  ${visible ? "top-0" : "top"}
  `}
>
      {/* TOP BAR */}
      <div className=" mx-auto flex items-center justify-between px-6 py-3">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link href='/'><Image
            src={logo}
            alt="Shri Divine Group"
            width={scrolled ? 100 : 110}
            priority
          /></Link>
        </div>

        {/* Desktop Right */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Desktop Menu */}
      <nav className="hidden lg:block ">
        <ul className="container mx-auto flex justify-between gap-10 font-semibold pb-1 text-sm ">
          {navItems.map((item) => (
            <Link href={item.link}  key={item.label}> <li
             
              className="cursor-pointer hover:text-[#f1e6c8]  transition  uppercase tracking-widest"
            >
              {item.label}
            </li></Link>
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
              <Link href={item.link} key={item.label} onClick={() => setOpen(false)}><li
                key={item.label}
                className=" pb-2 cursor-pointer hover:text-[#f1e6c8] text-[#ebb51f] font-bold"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </li></Link>
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
