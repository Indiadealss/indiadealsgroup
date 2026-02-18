'use client'

import virndavan from '@/Images/Vrindavan-Banner.jpg';
import Image from 'next/image';


import React from 'react'

const page = () => {

    const awards = [
        {
            image:virndavan,
            title:'Title',
            content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
        {
            image:virndavan,
            title:'Title',
            content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
        {
            image:virndavan,
            title:'Title',
            content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
        {
            image:virndavan,
            title:'Title',
            content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
        {
            image:virndavan,
            title:'Title',
            content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
        {
            image:virndavan,
            title:'Title',
            content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
        

    ]
    return (
        <div>
            {/* HERO SECTION */}
            <div className="relative w-full h-[30vw] min-h-[60vh]">
                <Image
                    src={virndavan}
                    alt="Vrindavan Banner"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover"
                />


            </div>

            
            <div className="w-[100%] flex justify-between my-10">
                <h1 className="mx-3 lg:mx-auto text-lg lg:text-4xl font-black   text-[#313036] cursor-pointer">AWARD | EVENTS | NEWS</h1>
            </div>

        <div className="mx-5 lg:mx-20 h-full grid grid-cols-1 sm:grid-cols-4 gap-8">
  {awards.map((item, index) => (
    <div key={index} className="w-full">
      <Image
        src={virndavan}
        alt="award_image"
        className="w-full h-80 border-4 border-white rounded"
      />

      <h1 className="text-center font-[CanelaDeck-Light] text-4xl mt-4">
        {item.title}
      </h1>

      <p className="mt-2">
        {item.content}
      </p>
    </div>
  ))}
</div>
    </div >
  )
}

export default page
