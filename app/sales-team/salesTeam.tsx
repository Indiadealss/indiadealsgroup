'use client'
import Image from 'next/image'
import Kanishk from '@/Images/Kanishk-sir.webp';
import Kapil from '@/Images/kapil-sir.webp';
import rohitBhia from '@/Images/RohitSharma.jpg';
import Ravie from '@/Images/RAVIE-SIR.jpg';
import Shubham from '@/Images/SHUBHAM.jpg';
import Ajit from '@/Images/AJIT-SIR.jpg'
import Santosh from '@/Images/SANTOSH-JI.jpg'
import Mehak from '@/Images/MehakShukla.jpg';
import saurabh from '@/Images/saurabh-freelincer.jpg'

const page = () => {

    const teamData = [
        {
            id: 1,
            name: "Ravie Mishraa",
            role: "Manager-sales",
            image: Ravie,
            linkedin: "#"
        },
        {
            id: 2,
            name: "Shubham Kumar",
            role: "Manager Sales",
            image: Shubham,
            linkedin: "#"
        },
        {
            id: 3,
            name: "Ajit Kulshrestha",
            role: "Manager Sales",
            image: Ajit,
            linkedin: "#"
        },
        {
            id: 4,
            name: "Santosh Kumar",
            role: "Manager Sales",
            image: Santosh,
            linkedin: "#"
        },
        {
            id: 5,
            name: "Rohit Sharma",
            role: "Assistant Manager-sales",
            image: rohitBhia,
            linkedin: "#"
        },
        
        {
            id:6,
            name:"Saurabh Kumar",
            role: "Assistance Manager-Sales",
            image:saurabh,

        },
        {
            id: 7,
            name: "Mahak Shukla",
            role: "Sales coordinator",
            image: Mehak,
            linkedin: "#"
        },
    ];
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
                    <div className='shadow-xl md:mx-10 mt-10 py-3    bg-white flex flex-col md:flex-row'>
                        <div>
                            <div className='   overflow-hidden ms-4'>
                                <Image src={Kanishk} alt='...' className='w-80 rounded-t-full' />
                            </div>

                            <h1 className='text-center text-[#313036] uppercase font-black text-xl'>Mr. Kanishk V Sharma</h1>
                        </div>

                        <div className='mt-10 ms-4'>
                            <h1 className='font-bold text-[#313036] text-xl uppercase'>Channel Sales Head</h1><br />
                            <div className='w-[85vw] md:w-[60vw] ms-4 pe-10'>
                                <p className='text-justify text-gray-600'>
                                    <span className='text-justify text-gray-600 leading-6'>
                                        Kanishk V Sharma is a highly experienced real estate professional with 14 years of experience in the real estate industry, specializing in Channel Sales Management and Strategic Property Consulting. <br />
                                        He has successfully built and managed strong networks of channel partners, brokers, and real estate associates to drive consistent project sales and market expansion. <br />
                                        He holds a Bachelor of Technology (B.Tech) degree and an MBA in Real Estate, which equips him with a strong understanding of real estate development, investment planning, and modern property marketing strategies. <br />
                                        Kanishk has extensive experience in channel partner acquisition, relationship management, sales strategy planning, and project promotion. <br />
                                        His ability to develop strong partnerships and create effective sales networks has helped deliver successful real estate project sales. <br />
                                        With his market insight, leadership skills, and strategic approach, Kanishk V Sharma plays a key role in expanding channel sales networks and maximizing project sales opportunities.
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <section className="p-0 m-0 md:py-20 md:px-20">
                        <div className="md:flex md:flex-wrap justify-center gap-6">

                            {teamData.map((member) => (

                                <div
                                    key={member.id}
                                    className="bg-white rounded-xl shadow-md mx-auto my-4  relative w-[80%] md:w-[23%]"
                                >

                                    <div className="relative w-full h-[440px] md:h-[360px] 2xl:h-[500px]">
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            fill
                                            className="object-contain rounded-xl"
                                        />
                                    </div>

                                    <div className="bg-gray-500/30 backdrop-blur-md shadow rounded-lg px-4 py-3 flex justify-between items-center absolute bottom-6 left-6 right-6">

                                        <div>
                                            <h3 className="font-semibold text-white text-sm">
                                                {member.name}
                                            </h3>
                                            <p className="text-xs text-white">
                                                {member.role}
                                            </p>
                                        </div>

                                    </div>

                                </div>

                            ))}

                        </div>
                    </section>


                </div>


            </div>
        </div>
    )
}

export default page
