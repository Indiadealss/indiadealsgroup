import Image from 'next/image'
import React from 'react'
import ayodhya from '@/Images/barsana.jpg'

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
          className="object-cover"
        />
      </div>

      
    </div>
  )
}

export default page
