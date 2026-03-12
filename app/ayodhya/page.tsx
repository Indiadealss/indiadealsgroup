import Image from 'next/image'
import React from 'react'
import ayodhya from '@/Images/ayodha.webp'
import ayodhyaHome from '@/Images/commingSoonAodhya.jpg'

const page = () => {
  return (
    <div>
      {/* HERO */}
      <div className="relative w-full h-[30vw] min-h-[60vh]">
        <Image
          src={ayodhya}
          alt="Vrindavan Banner"
          fill
          priority
          sizes="100vw"
          className="object-cover hidden lg:block"
        />
         <Image
          src={ayodhyaHome}
          alt="Vrindavan Banner"
          fill
          priority
          sizes="100vw"
          className="object-cover block lg:hidden"
        />
      </div>

      
    </div>
  )
}

export default page
