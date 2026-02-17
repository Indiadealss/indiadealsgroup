'use client'
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';


const Fixedicons = () => {
  const message = `Thank you for contacting us.
  Indiadeals team connect with you as soon as possible`
  return (
    <div className='w-15 h-15 rounded-full sticky top-0 bottom-50 right-10 left-full me-3 bg-green-500 cursor-pointer opacity-80'>
        <div className='w-10 mx-auto pt-2'>
      <a
  href="https://wa.me/919818763100"
  target="_blank"
  rel="noopener noreferrer"
><FontAwesomeIcon icon={faWhatsapp}  className='text-white text-4xl text-center' /></a>
      </div>
    </div>
  )
}

export default Fixedicons
