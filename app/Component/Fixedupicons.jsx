'use client'

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

const Fixedupicons = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
     <div className='w-15 h-15 rounded-full sticky top-0 bottom-10 right-10 left-full bg-[#313036] cursor-pointer me-3' onClick={scrollToTop}>
        <div className="ps-4 mx-auto pt-5 ">
      <FontAwesomeIcon icon={faArrowDown} className=' rotate-180 text-2xl text-[#f3e6c6]' />
      </div>
    </div>
  )
}

export default Fixedupicons
