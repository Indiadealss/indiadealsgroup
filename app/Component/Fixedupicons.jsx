'use client';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

const Fixedupicons = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div
      className="fixed bottom-8 right-5 z-50"
      onClick={scrollToTop}
    >
      <button className="w-14 h-14 rounded-full bg-[#313036] flex items-center justify-center shadow-lg">
        <FontAwesomeIcon
          icon={faArrowDown}
          className="rotate-180 text-2xl text-[#f3e6c6]"
        />
      </button>
    </div>
  );
};

export default Fixedupicons;