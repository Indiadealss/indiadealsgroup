'use client'
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';


const Fixedicons = () => {
  return (
    <div className='w-15 h-15 rounded-full sticky top-0 bottom-50 right-10 left-full me-3 bg-green-500 cursor-pointer opacity-80'>
        <div className='w-10 mx-auto pt-2'>
      <FontAwesomeIcon icon={faWhatsapp}  className='text-white text-4xl text-center' />
      </div>
    </div>
  )
}

export default Fixedicons
