import React from 'react'
import privacy from '@/Images/tnc.shared.png'
import Image from 'next/image'

const Terms = () => {
  return (
    <>
      <div className='px-[22%] my-10'>
                <div className='bg-blue-50  py-5 rounded-lg mt-3'>
                    <Image src={privacy} alt='...' className='w-[4%] mx-auto' />
                    <h2 className='text-center mt-3'><span className='text-center'>INDIADEALS Policy</span></h2>
                </div>

                

                
            </div>
    </>
  )
}

export default Terms
