'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import premTemple from '@/Images/Hanumat-Vihar-Brochure_page-0001.jpg';
import temple16 from '@/Images/Hanumat-Vihar-Brochure_page-0002.jpg';
import temple3 from '@/Images/Hanumat-Vihar-Brochure_page-0001.jpg';
import temple6 from '@/Images/Hanumat-Vihar-Brochure_page-0003.jpg';
import temple7 from '@/Images/Hanumat-Vihar-Brochure_page-0004.jpg';
import temple8 from '@/Images/Hanumat-Vihar-Brochure_page-0005.jpg';
import temple15 from '@/Images/Hanumat-Vihar-Brochure_page-0006.jpg';
import temple10 from '@/Images/Hanumat-Vihar-Brochure_page-0007.jpg';
import temple11 from '@/Images/Hanumat-Vihar-Brochure_page-0010.jpg';
import temple12 from '@/Images/Hanumat-Vihar-Brochure_page-0011.jpg';
import temple13 from '@/Images/Hanumat-Vihar-Brochure_page-0012.jpg';
import temple14 from '@/Images/Hanumat-Vihar-Brochure_page-0013.jpg';
import temple from '@/Images/Hanumat-Vihar-Brochure_page-0014.jpg';
import gallery15 from '@/Images/Hanumat-Vihar-Brochure_page-0016.jpg';
import gallery16 from '@/Images/Hanumat-Vihar-Brochure_page-0017.jpg';
import gallery17 from '@/Images/Hanumat-Vihar-Brochure_page-0018.jpg';
import gallery18 from '@/Images/Hanumat-Vihar-Brochure_page-0019.jpg';
import gallery19 from '@/Images/Hanumat-Vihar-Brochure_page-0020.jpg';
import gallery20 from '@/Images/Hanumat-Vihar-Brochure_page-0021.jpg';
import gallery21 from '@/Images/Hanumat-Vihar-Brochure_page-0024.jpg';




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
    { name: 'gallery4', logo: temple3 },
    { name: 'gallery5', logo: temple6 },
    { name: 'gallery6', logo: temple7 },
    { name: 'gallery7', logo: temple8 },
    { name: 'gallery8', logo: temple10 },
    { name: 'gallery11', logo: temple13 },
    { name: 'gallery12', logo: temple14 },
    { name: 'gallery13', logo: temple15 },
    { name: 'gallery15', logo: gallery15 },
    { name: 'gallery16', logo: gallery16 },
    { name: 'gallery17', logo: gallery17 },
    { name: 'gallery18', logo: gallery18 },
    { name: 'gallery19', logo: gallery19 },
    { name: 'gallery20', logo: gallery20 },
    { name: 'gallery21', logo: gallery21 },
  ];

  const items = [...projects, ...projects];


  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationFrame: number;

    const autoScroll = () => {
      if (!pause) {
        container.scrollLeft += 0.5;

        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }

      animationFrame = requestAnimationFrame(autoScroll);
    };

    animationFrame = requestAnimationFrame(autoScroll);

    return () => cancelAnimationFrame(animationFrame);
  }, [pause]);

 

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
      onMouseEnter={() => setPause(true)}
        onMouseLeave={() => setPause(false)}
        onClick={scrollLeft}
        className="hover:cursor-pointer absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-100 transition"
      >
        <FontAwesomeIcon icon={faAngleLeft} />
      </button>

      {/* 🔥 RIGHT BUTTON */}
      <button
      onMouseEnter={() => setPause(true)}
        onMouseLeave={() => setPause(false)}
        onClick={scrollRight}
        className="hover:cursor-pointer absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-100 transition"
      >
        <FontAwesomeIcon icon={faAngleRight} />
      </button>

      <div
        ref={scrollRef}
        onMouseEnter={() => setPause(true)}
        onMouseLeave={() => setPause(false)}
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