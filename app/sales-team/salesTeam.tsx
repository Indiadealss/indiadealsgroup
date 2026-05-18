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
            role: "Assistant Manager-Sales",
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
