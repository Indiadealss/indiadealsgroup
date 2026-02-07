'use client';

import Slider from 'react-slick';
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
const settings = {
  dots: false,
  arrows: true,
  infinite: true,

  autoplay: true,
  autoplaySpeed: 1000,
  speed: 5000,

  slidesToShow: 5,
  slidesToScroll: 3,

  pauseOnHover: true,
  pauseOnFocus: false,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,   // mobile & small tablets
      settings: {
        slidesToShow: 1,  // ⭐ only one visible
        slidesToScroll: 2,
        arrows: false,    // optional (looks cleaner on mobile)
      },
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
                width={1580}
                height={1080}
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
