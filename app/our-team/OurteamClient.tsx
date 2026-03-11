'use client'
import Image from 'next/image'
import teambanner from '@/Images/teamsBanner.jpg';
import soniMam from '@/Images/Soni-mam-.jpg.jpeg';
import Deepusir from '@/Images/DeepuSir.jpeg';
import RichaMam from '@/Images/indiadealsgroupHr.jpeg';


const page = () => {
  return (
    <div>
      {/* HERO SECTION */}
            <div className="relative w-full h-[30vw] min-h-[60vh]">
                <Image
                    src={teambanner}
                    alt="Vrindavan Banner"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover"
                />


            </div>

            {/* our team our streanth */}
            <div className=''>
                

                <div className=' p-10 bg-opacity-0'>
                  <div className='mx-auto'>
                <h1 className='text-center mt-10 font-bold text-[#313036] text-xl text-4xl uppercase'>Our Management</h1>
                <div className='mx-auto w-10 border mt-3'></div>
                </div>
                  <div className='shadow-xl md:mx-10 mt-10 py-3    bg-white flex flex-col md:flex-row'>
                    <div>
                    <div className='   overflow-hidden ms-4'>
                      <Image src={soniMam} alt='...'  className='w-80 rounded-t-full'/>
                    </div>
                    
                      <h1 className='text-center text-[#313036] uppercase font-black text-xl'>Mrs. Soni Yadav</h1>
                    </div>

                    <div className='mt-10 ms-10'>
                      <h1 className='font-bold text-[#313036] text-xl'>Managing Director (MD) - INDIADEALSGROUP</h1>
                    </div>
                    </div>

                    <div className='shadow-xl md:mx-10 mt-10 py-3 my-10    bg-white flex flex-col md:flex-row'>
                    <div>
                    <div className='   overflow-hidden ms-4'>
                      <Image src={Deepusir} alt='...'  className='w-80 rounded-t-full'/>
                    </div>
                    
                      <h1 className='text-center text-[#313036] uppercase font-black text-xl'>Mr. Deepu Jaswal</h1>
                    </div>

                    <div className='mt-10 ms-4'>
                      <h1 className='font-bold text-xl text-[#313036] uppercase'>Managing Director (MD) - INDIADEALSGROUP</h1>
                    </div>
                    </div>


                    <div className='shadow-xl md:mx-10 mt-10 py-3 my-10    bg-white flex flex-col md:flex-row'>
                    <div>
                    <div className='   overflow-hidden ms-4'>
                      <Image src={RichaMam} alt='...'  className='w-80  rounded-t-full'/>
                    </div>
                    
                      <h1 className='text-center text-[#313036] uppercase font-black text-xl'>Mrs. Richa Keshri</h1>
                    </div>

                    <div className='mt-10 ms-10'>
                      <h1 className='font-bold text-[#313036] text-xl uppercase'>HR Manager - INDIADEALSGROUP</h1>
                    </div>
                    </div>

                    
                </div>
                
                
            </div>
    </div>
  )
}

export default page
