'use client';

import Slider from 'react-slick';
import Image from 'next/image';

const projects = [
  { name: 'Bhutani Astrathum', logo: '/logos/bhutani.png' },
  { name: 'Ace 153', logo: '/logos/ace.png' },
  { name: 'Golden I', logo: '/logos/golden.png' },
  { name: 'Experion Saatori', logo: '/logos/experion.png' },
  { name: 'Bhutani Cyberthum', logo: '/logos/cyberthum.png' },
  { name: 'Bhutani Alphathum', logo: '/logos/alphathum.png' },
  { name: 'Bhutani Astrathum', logo: '/logos/bhutani.png' },
  { name: 'Ace 153', logo: '/logos/ace.png' },
  { name: 'Golden I', logo: '/logos/golden.png' },
  { name: 'Experion Saatori', logo: '/logos/experion.png' },
  { name: 'Bhutani Cyberthum', logo: '/logos/cyberthum.png' },
  { name: 'Bhutani Alphathum', logo: '/logos/alphathum.png' },
];

export default function Ongoingprojectslider() {
const settings = {
  dots: false,
  arrows: true,
  infinite: true,

  autoplay: true,
  autoplaySpeed: 1000, // ⏸ pause 5 seconds
  speed: 5000,          // ▶ slide animation duration

  slidesToShow: 6,
  slidesToScroll: 3,

  pauseOnHover: true,
  pauseOnFocus: false,

  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 4 },
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
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
