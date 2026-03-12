'use client'
import Image from 'next/image'
import Kanishk from '@/Images/Kanishk-sir.webp';
import Kapil from '@/Images/kapil-sir.webp'


const page = () => {
  return (
    <div>
      {/* HERO SECTION */}


      {/* our team our streanth */}
      <div className=''>


        <div className='p-0 md:p-10 bg-opacity-0'>
          <div className='mx-auto'>
            <h1 className='text-center mt-10 font-bold text-[#313036] text-xl text-4xl uppercase'>Sales Team</h1>
            <div className='mx-auto w-10 border mt-3'></div>
          </div>
          <div className='shadow-xl md:mx-10 mt-10 py-3    bg-white flex flex-col md:flex-row'>
            <div>
              <div className='   overflow-hidden ms-4'>
                <Image src={Kanishk} alt='...' className='w-80 rounded-t-full' />
              </div>

              <h1 className='text-center text-[#313036] uppercase font-black text-xl'>Mr. Kanishk Sharma</h1>
            </div>

            <div className='mt-10 ms-4'>
              <h1 className='font-bold text-[#313036] text-xl uppercase'>Channel Sales Head</h1><br />
              <div className='w-[85vw] md:w-[60vw] ms-4 pe-10'>
                <p className='text-justify text-gray-600'>
                  <span className='text-justify text-gray-600 leading-6'>
                    ...
                  </span>
                </p>
              </div>
            </div>
          </div>


          <div className='shadow-xl md:mx-10 mt-10 py-3    bg-white flex flex-col md:flex-row'>
            <div>
              <div className='   overflow-hidden ms-4'>
                <Image src={Kapil} alt='...' className='w-80 rounded-t-full' />
              </div>

              <h1 className='text-center text-[#313036] uppercase font-black text-xl'>Mr. Kapil Walia</h1>
            </div>

            <div className='mt-10 ms-4'>
              <h1 className='font-bold text-[#313036] text-xl uppercase'>Sales Head</h1><br />
              <div className='w-[85vw] md:w-[60vw] ms-4 pe-10'>
                <p className='text-justify text-gray-600'>
                  <span className='text-justify text-gray-600 leading-6'>
                    Kapil Walia is a seasoned real estate professional with over 17 years of experience in the real estate industry.
                    Throughout his career, he has successfully guided clients in making informed property investments and has built strong expertise in property sales, investment advisory, and market analysis.
                    He holds a Master of Arts (M.A.) degree and has further enhanced his professional knowledge by completing an MBA in Real Estate, which provides him with advanced understanding of real estate development, investment strategies, and market dynamics.
                    With deep industry knowledge, strategic planning skills, and a client-focused approach,
                    Kapil Walia is committed to delivering reliable property solutions and helping clients identify high-growth investment opportunities.
                  </span>
                </p>
              </div>
            </div>
          </div>


        </div>


      </div>
    </div>
  )
}

export default page
