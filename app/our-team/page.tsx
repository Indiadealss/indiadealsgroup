'use client'
import Image from 'next/image'
import teambanner from '@/Images/teamsBanner.jpg';


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
            <div className='relative w-full h-[30vw]'>
                
            </div>
    </div>
  )
}

export default page
