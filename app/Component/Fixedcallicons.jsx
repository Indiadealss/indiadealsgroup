'use client'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';




const Fixedcallicons = () => {
  return (
    <div className='w-15 h-15 rounded-full sticky top-0 bottom-30 right-10 left-full me-3 bg-[#CE9C0E] cursor-pointer opacity-80'>
        <div className="w-7 mx-auto pt-5 opacity-85">
            <a
            href="tel:+919818763100"
            className="rounded"
          ><FontAwesomeIcon icon={faPhone} className=' text-white text-2xl' /></a>
      </div>
    </div>
  )
}

export default Fixedcallicons
