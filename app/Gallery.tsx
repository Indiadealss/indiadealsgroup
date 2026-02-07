'use client';

import Slider from 'react-slick';
import Image from 'next/image';
import vird from '@/Images/1.jpg'
import premTemple from '@/Images/2.jpg'
import temple from '@/Images/3.jpg'
import temple2 from '@/Images/4.jpg'
import temple3 from '@/Images/5.jpg'
import temple6 from '@/Images/6.jpg'
import temple7 from '@/Images/7.jpg'
import temple8 from '@/Images/8.jpg'
import temple9 from '@/Images/9.jpg'

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
const settings = {
  dots: false,
  arrows: true,
  infinite: true,

  autoplay: true,
  autoplaySpeed: 1000, // ⏸ pause 5 seconds
  speed: 5000,          // ▶ slide animation duration

  slidesToShow: 5,
  slidesToScroll: 3,

  pauseOnHover: true,
  pauseOnFocus: false,

  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 2 },
    },
  ],
};


  return (
    <div className="py-10">

      {/* <h2 className="text-center text-sm font-semibold text-gray-600 mb-8">
        GET STARTED WITH EXPLORING REAL ESTATE OPTIONS
      </h2> */}

      <Slider {...settings}>
        {projects.map((item, index) => (
          <div key={index} className="text-center px-4">
            <div className="flex justify-center mb-3">
              <Image
                src={item.logo}
                alt={item.name}
                width={500}
                height={180}
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
