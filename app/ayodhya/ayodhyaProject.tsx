import Image from 'next/image'
import React from 'react'
import ayodhya from '@/Images/ayodha.webp'
import ayodhyaHome from '@/Images/commingSoonAodhya.jpg'

const ayodhyaProject = () => {
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

        <div className="px-4 lg:px-[10vw] text-gray-700 leading-5">
           <h1 className="text-xl lg:text-2xl font-bold mt-10 mb-2">
            Upcoming Premium Plotting Project in Ayodhya
            </h1>

            <p className='text-justify text-gray-600 mb-4'>
              A New Landmark in Spiritual & Investment Destination -Ayodhya
            </p>

            <p className="text-justify text-justify mb-3">
      Welcome to our Upcoming Premium Plotting Project in Ayodhya, a thoughtfully planned residential development designed to offer a perfect combination of spiritual living, modern infrastructure, and high-value investment potential. Located in one of India’s fastest-growing pilgrimage and tourism hubs, this project brings you an opportunity to own land in a city that is witnessing historic transformation.
    </p>

    <p className="text-justify text-justify mb-3">
      Ayodhya, the sacred birthplace of Lord Shri Ram, has rapidly emerged as a major global spiritual destination after the grand development of the Ram Mandir and massive infrastructure expansion. With new roads, airport connectivity, tourism projects, and hospitality developments, Ayodhya is quickly becoming a hotspot for real estate investment.Our upcoming premium plotting project is designed to provide secure, well-planned, and high-return residential plots for families, investors, and spiritual seekers who wish to be part of this extraordinary growth story.
    </p>


    <h1 className="text-xl lg:text-xl font-semibold mt-10 mb-2">
            Project Highlights
            </h1>


            <p className='text-justify text-gray-600 mb-4'>
              This premium plotted township is being developed with a vision to create a well-organized, peaceful, and modern residential environment.
            </p>

              <h2 className="text-xl font-semibold mt-4 mb-1">
    Key Highlights
  </h2>

  <ul className="list-disc ml-6 space-y-2 mb-6">
    <li>Premium Residential Plots</li>
    <li>Well-Planned Township Layout</li>
    <li>Wide Internal Roads</li>
    <li>Gated Community with Security</li>
    <li>Landscaped Green Parks</li>
    <li>Electricity & Water Infrastructure</li>
    <li>Street Lighting & Drainage System</li>
    <li>Excellent Road Connectivity</li>
    <li>Ideal for Investment & Residential Purpose</li>
  </ul>

  <p className='text-justify text-gray-600 mb-4'>
    The project focuses on providing a clean, organized, and future-ready environment where residents can build their dream homes while investors can benefit from Ayodhya’s rapidly increasing property demand.
  </p>

  <h2 className="text-xl font-semibold mt-4 mb-1">
   Strategic Location Advantage
  </h2>

  <p className='text-justify text-gray-600 mb-4'>
    One of the biggest strengths of this project is its strategic location within Ayodhya, providing excellent connectivity to the city's major landmarks and infrastructure projects.
Nearby Landmarks & Connectivity
    </p>


    <ul className="list-disc ml-6 space-y-2 mb-6">
    <li>Close to Ram Mandir</li>
    <li>Near Ayodhya International Airport</li>
    <li>Easy connectivity to Lucknow – Ayodhya Highway</li>
    <li>Close to Sarayu River Ghats</li>
    <li>Near upcoming hotels, dharamshalas & tourist facilities</li>
    <li>Rapidly developing residential zone</li>
  </ul>


  <p className='text-justify text-gray-600 mb-4'>
With the expected arrival of millions of pilgrims and tourists every year, the demand for residential and hospitality properties in Ayodhya is projected to grow significantly.
    </p>


    <h2 className="text-xl font-semibold mt-4 mb-1">
    Investment Potential
  </h2>

  <p className='text-justify text-gray-600 mb-4'>
    Ayodhya is currently one of the most promising real estate investment destinations in India. With large-scale government development projects, international tourism attention, and improved connectivity, land prices in the region have been consistently rising.
 </p>

 <h2 className="text-xl font-semibold mt-4 mb-1">
    Investing in this premium plotting project offers:
  </h2>


  <ul className="list-disc ml-6 space-y-2 mb-6">
    <li>High Appreciation Potential</li>
    <li>Secure Land Ownership</li>
    <li>Growing Rental & Hospitality Demand</li>
    <li>Future Residential</li>
    <li>Development Opportunity</li>
    <li>Long-Term Wealth Creation</li>
  </ul>


  <p className='text-justify text-gray-600 mb-4'>
    Whether you are looking to build a spiritual retreat home, a future residence, or simply want to invest in one of India's fastest-growing cities, this project offers the perfect opportunity.
Ideal for Multiple Buyers
    </p>


    <p className='text-justify text-gray-600 mb-4'>
      This project is suitable for:
    </p>


     <ul className="list-disc ml-6 space-y-2 mb-6">
    <li>Real Estate Investors</li>
    <li>Families planning future homes</li>
    <li>NRIs seeking spiritual property investment</li>
    <li>Hospitality developers</li>
    <li>Buyers looking for secure land investment</li>
  </ul>

  <p className='text-justify text-gray-600 mb-4'>
    With flexible plot sizes and planned infrastructure, buyers can design their homes according to their own preferences and needs.
    </p>


    <h2 className="text-xl font-semibold mt-4 mb-1">
    A Vision for Modern Living in a Sacred City
  </h2>

  <p className='text-justify text-gray-600 mb-4'>
    Our vision is to develop a premium plotted township that respects the spiritual essence of Ayodhya while providing modern living standards. Every aspect of the project is planned to ensure convenience, security, and long-term value for buyers.
    </p>

    <p className='text-justify text-gray-600 mb-4'>
        As Ayodhya continues to transform into a global spiritual capital, owning land here is not just a property investment—it is a legacy asset for generations to come.
    </p>

     <p className='text-justify text-gray-600 mb-4'>
       Book your plot early and become part of Ayodhya’s historic growth story.
     </p>


        </div>
      
    </div>
  )
}

export default ayodhyaProject
