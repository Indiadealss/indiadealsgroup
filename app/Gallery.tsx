'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

import vird from '@/Images/1.jpg';
import premTemple from '@/Images/2.jpg';
import temple from '@/Images/3.jpg';
import temple2 from '@/Images/4.jpg';
import temple3 from '@/Images/5.jpg';
import temple6 from '@/Images/6.jpg';
import temple7 from '@/Images/7.jpg';
import temple8 from '@/Images/8.jpg';
import temple9 from '@/Images/9.jpg';

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
  { name: 'Bhutani Cyberthum', logo: temple9 },
  { name: 'Bhutani Alphathum', logo: vird },
];

export default function Gallery() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [pause, setPause] = useState(false);

  // duplicate for seamless loop
  const items = [...projects, ...projects];

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationFrame: number;

    const autoScroll = () => {
      if (!pause) {
        container.scrollLeft += 0.5; // ⭐ speed control (lower = smoother)

        // reset without user noticing
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }

      animationFrame = requestAnimationFrame(autoScroll);
    };

    animationFrame = requestAnimationFrame(autoScroll);

    return () => cancelAnimationFrame(animationFrame);
  }, [pause]);

  return (
    <div className="py-12 overflow-hidden">
      <div
        ref={scrollRef}
        onMouseEnter={() => setPause(true)}
        onMouseLeave={() => setPause(false)}
        className="flex gap-4 px-4 overflow-x-auto scrollbar-hide"
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="
              flex-shrink-0
              w-[80%]
              sm:w-[45%]
              md:w-[30%]
              lg:w-[20%]
              xl:w-[18%]
              cursor-pointer
            "
          >
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 p-2">
              <div className="relative w-full h-[220px] md:h-[260px]">
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