'use client';


import Image from 'next/image';
import vird from '@/Images/1.jpg'
import premTemple from '@/Images/2.jpg'
import templ10 from '@/Images/10.jpg'
import temple11 from '@/Images/11.jpg'
import temple12 from '@/Images/12.jpg'
import temple13 from '@/Images/13.jpg'
import temple14 from '@/Images/14.jpg'
import temple15 from '@/Images/15.jpg'
import temple16 from '@/Images/16.jpg'
import templ17 from '@/Images/17.jpg'
import temple18 from '@/Images/18.jpg'
import temple19 from '@/Images/19.jpg'
import { useEffect, useRef, useState } from 'react';


const projects = [
  { name: 'Bhutani Astrathum', logo: templ10 },
  { name: 'Ace 153', logo: temple11 },
  { name: 'Golden I', logo: temple12 },
  { name: 'Experion Saatori', logo: temple13 },
  { name: 'Bhutani Cyberthum', logo: temple14 },
  { name: 'Bhutani Alphathum', logo: temple15 },
  { name: 'Bhutani Astrathum', logo: temple16 },
  { name: 'Ace 153', logo: templ17 },
  { name: 'Golden I', logo: temple18 },
  { name: 'Experion Saatori', logo: templ10 },
  { name: 'Bhutani Cyberthum', logo: temple12 },
  { name: 'Bhutani Alphathum', logo: temple11 },
];

export default function Ongoingprojectslider() {
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
