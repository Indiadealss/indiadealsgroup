'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

import vird from '@/Images/twelve12.png';
import premTemple from '@/Images/one1.png';
import temple from '@/Images/two2.png';
import temple2 from '@/Images/forteen14.png';
import temple3 from '@/Images/three3.png';
import temple6 from '@/Images/four4.png';
import temple7 from '@/Images/five5.png';
import temple8 from '@/Images/six6.png';
import temple10 from '@/Images/eight8.png';
import temple11 from '@/Images/nine9.png';
import temple12 from '@/Images/ten10.png';
import temple13 from '@/Images/elven11.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faGreaterThan } from '@fortawesome/free-solid-svg-icons';

interface GalleryProps {
  cardWidth?: string;
  cardHeight?: string;
}

export default function Gallery({
  cardWidth = "300px",
  cardHeight = "250px"
}: GalleryProps) {

  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [pause, setPause] = useState(false);

  const projects = [
    { name: 'Bhutani Astrathum', logo: vird },
    { name: 'Ace 153', logo: premTemple },
    { name: 'Golden I', logo: temple },
    { name: 'Experion Saatori', logo: temple2 },
    { name: 'Bhutani Cyberthum', logo: temple3 },
    { name: 'Bhutani Alphathum', logo: temple },
    { name: 'Bhutani Astrathum', logo: temple },
    { name: 'Ace 153', logo: temple6 },
    { name: 'Golden I', logo: temple7 },
    { name: 'Experion Saatori', logo: temple8 },
    { name: 'Bhutani Cyberthum', logo: temple10 },
    { name: 'Bhutani Cyberthum', logo: temple11 },
    { name: 'Bhutani Cyberthum', logo: temple12 },
    { name: 'Bhutani Cyberthum', logo: temple13 },
    { name: 'Bhutani Alphathum', logo: vird },
  ];

  const items = [...projects, ...projects];

 

  // 🔥 Manual Scroll Functions
  const scrollLeft = () => {
    const container = scrollRef.current;
    if (!container) return;
    container.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    const container = scrollRef.current;
    if (!container) return;
    container.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <div className="relative py-12 overflow-hidden">

      {/* 🔥 LEFT BUTTON */}
      <button
        onClick={scrollLeft}
        className="hover:cursor-pointer absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-100 transition"
      >
        <FontAwesomeIcon icon={faAngleLeft} />
      </button>

      {/* 🔥 RIGHT BUTTON */}
      <button
        onClick={scrollRight}
        className="hover:cursor-pointer absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-100 transition"
      >
        <FontAwesomeIcon icon={faAngleRight} />
      </button>

      <div
        ref={scrollRef}
        onMouseEnter={() => setPause(true)}
        className="flex gap-4 px-12 overflow-x-auto scrollbar-hide"
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 cursor-pointer"
            style={{ width: cardWidth }}
          >
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 p-2">
              <div
                className="relative w-full"
                style={{ height: cardHeight }}
              >
                <Image
                  src={item.logo}
                  alt={item.name}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}