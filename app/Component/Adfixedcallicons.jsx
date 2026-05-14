'use client';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const Fixedcallicons = () => {
  return (
    <div className="fixed bottom-24 right-5 z-50">
      <a
        href="tel:+919818763100"
        className="w-14 h-14 rounded-full bg-[#CE9C0E] flex items-center justify-center shadow-lg"
      >
        <FontAwesomeIcon
          icon={faPhone}
          className="text-white text-2xl"
        />
      </a>
    </div>
  );
};

export default Fixedcallicons;