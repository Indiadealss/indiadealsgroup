import Image from 'next/image'
import carers from '@/Images/carrer.jpg';

const page = () => {
  return (
    <div>
      <div className="relative w-full h-[30vw] min-h-[60vh]">
              <Image
                src={carers}
                alt="Vrindavan Banner"
                fill
                priority
                sizes="100vw"
                className="object-cover absolute mt-[119px]"
              />
            </div>
            {/* ABOUT SECTION */}
      <section className="mt-20 px-0 lg:px-20 " >
        <div className="lg:flex  mx-10">
          
          <div className="px-0 lg:px-10 ps-0 mt-[141px]">
            <h1 className="text-[#313036]   text-4xl lg:text-6xl">Careers</h1>
            <p className=" my-10   text-gray-600">
             <p className="  text-gray-600 leading-6 text-justify">Build Your Future With Us</p><br />
              <p className="  text-gray-600 leading-6 text-justify">
              At <span className='font-bold text-[#313036]'>DSI Indiadealss Real Estate Pvt. Ltd.,</span>  we believe that our people are the foundation of our success. We are always looking for passionate, driven, and talented individuals who want to grow in the dynamic world of real estate.
              <br />
                <br />
                If you are ambitious, customer-focused, and ready to build a rewarding career, we invite you to join our team.
                <br />
                <br />
                <span className='text-xl font-medium text-[#313036]'>Why Work With Us</span><br /><br />
                <span className='text-[#313036] font-medium leading-6 text-justify'>Growth Opportunities</span><br />
                <span className='text-gray-600 leading-6 text-justify'>We provide a platform where individuals can grow professionally while gaining deep industry knowledge in the real estate sector.</span><br /><br />
                <span className='font-medium text-[#313036] leading-6 text-justify'>Performance-Driven Culture</span><br />
                <span className='text-gray-600 leading-6 text-justify'>Hard work and dedication are recognized and rewarded with attractive incentives and career advancement opportunities.</span><br /><br />

                <span className='font-medium text-[#313036] leading-6 text-justify'>Industry Exposure</span><br />
                <span className='text-gray-600 leading-6 text-justify'>We maintain a collaborative, ethical, and professional work culture that encourages innovation and teamwork.</span><br /><br />
                <span className='font-medium text-[#313036] leading-6 text-justify'>Current Opportunities</span><br />
                <span className='text-gray-600 leading-6 text-justify'>Real Estate Sales Executive</span><br /><br />
                

              </p>
            </p>
          </div>
        </div>
      </section>
      <div className='mx-auto'>
        <p className='text-center'><span className='font-bold text-xl text-[#313036] leading-6 text-center'>Current Oppenings</span><br /></p>
     </div>
    </div>
  )
}

export default page
