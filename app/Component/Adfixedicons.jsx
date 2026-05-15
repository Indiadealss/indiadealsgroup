'use client';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Adfixedicons = () => {
  return (
    <div className="fixed bottom-40 right-5 z-50">
      <a
        href="https://wa.me/919266687953"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-lg"
      >
        <FontAwesomeIcon
          icon={faWhatsapp}
          className="text-white text-3xl"
        />
      </a>
    </div>
  );
};

export default Adfixedicons;