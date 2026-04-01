import Image from 'next/image'
import React from 'react'
import YamunaExpressway from '@/Images/yamunaExpressway.jpg'
import YamunaExpresswayHome from '@/Images/mobileYamunaExpressway.png'

const yamunaExpressway = () => {
  return (
    <div>
      {/* HERO */}
      <div className="relative w-full h-[30vw] min-h-[60vh]">
        <Image
          src={YamunaExpressway}
          alt="Vrindavan Banner"
          fill
          priority
          sizes="100vw"
          className="object-cover hidden lg:block"
        />
         <Image
          src={YamunaExpresswayHome}
          alt="Vrindavan Banner"
          fill
          priority
          sizes="100vw"
          className="object-cover block lg:hidden"
        />
      </div>

        <div className="px-4 lg:px-[10vw] text-gray-700 leading-5">
           <h1 className="text-xl lg:text-2xl font-bold mt-10 mb-2">
            Upcoming Residential Plots in Yamuna Expressway
            </h1>

            {/* <p className='text-justify text-gray-600 mb-4'>
              A New Landmark in Spiritual & Investment Destination -Yamuna Expressway
            </p> */}

            <p className="text-justify text-justify mb-3">
      Welcome to our Upcoming Premium Plotting Project in Yamuna Expressway, a thoughtfully planned residential development designed to offer a perfect for modern infrastructure, and high-value investment potential. Positioned in one of the most promising growth corridors of NCR, this premium project on Yamuna Expressway offers a rare chance to own land in a region set to redefine modern urban living with world-class infrastructure and connectivity.
    </p>

    <p className="text-justify text-justify mb-3">
      The Yamuna Expressway is really changing into a place for real estate in North India. It is 165 kilometers long and connects Greater Noida to Agra. This area is not a highway anymore it is becoming a modern city with big infrastructure projects, government support and private investments.
      </p>

      <p className="text-justify text-justify mb-3">
        The Noida International Airport, also known as Jewar Airport is a part of this change. When it is finished it will be one of the airports in Asia making it easier for people to travel and doing good things for the local economy. This airport project has started a lot of developments like homes, offices, factories and mixed-use projects making the Yamuna Expressway a great place for investors and people who want to live there.
        </p>


    <h1 className="text-xl lg:text-xl font-semibold mt-10 mb-2">
            Project Highlights
            </h1>


            <p className='text-justify text-gray-600 mb-4'>
              The Yamuna Expressway Industrial Development Authority is in charge of planning this area. They have a plan that includes:
              </p>

              <h2 className="text-xl font-semibold mt-4 mb-1">
    Key Highlights
  </h2>

  <ul className="list-disc ml-6 space-y-2 mb-6">
    <li>Areas with homes for all budgets</li>
    <li>Commercial and business areas</li>
    <li>Industrial and logistics hubs</li>
    <li>Schools, universities and research centers</li>
    <li>Green spaces and recreational areas</li>
    <li>Electricity & Water Infrastructure</li>
    <li>Street Lighting & Drainage System</li>
    <li>Excellent Road Connectivity</li>
    <li>Ideal for Investment & Residential Purpose</li>
  </ul>

  <p className='text-justify text-gray-600 mb-4'>
   Some areas like sectors 18 20 22D, 24 and 32 are growing fast. The plan is to make this area a smart city with roads, metro connections, digital infrastructure and sustainable planning.
   </p>

  <h2 className="text-xl font-semibold mt-4 mb-1">
   Strategic Location Advantage
  </h2>

  <p className='text-justify text-gray-600 mb-4'>
    The Yamuna Expressway is not another place to buy property it is going to be a big urban area with a strong economy, driven by infrastructure, planning and investments. With projects like the airport, Film City and industrial hubs this area is going to be a self- economy.
    </p>


    <ul className="list-disc ml-6 space-y-2 mb-6">
    <li>Direct access to Yamuna Expressway ensuring smooth connectivity to Noida, Greater Noida, and Delhi</li>
    <li>Close proximity to Noida International Airport (Jewar Airport)</li>
    <li>Well-connected to Eastern Peripheral Expressway</li>
    <li>Near developing industrial and logistics hubs increasing job opportunities</li>
    <li>Surrounded by rapidly developing residential sectors (Sector 18, 20, 22D, etc.)</li>
    <li>Seamless connectivity to Agra via Yamuna Expressway</li>
    <li>Close to educational institutions, hospitals, and daily lifestyle infrastructure</li>
  </ul>



    <h2 className="text-xl font-semibold mt-4 mb-1">
    Investment Potential
  </h2>

  <p className='text-justify text-gray-600 mb-4'>
    Yamuna Expressway is currently one of the most promising real estate investment destinations in India. With large-scale government development projects, international tourism attention, and improved connectivity, land prices in the region have been consistently rising.
 </p>

 <h2 className="text-xl font-semibold mt-4 mb-1">
    So why is it attractive?
  </h2>


  <ul className="list-disc ml-6 space-y-2 mb-6">
    <li>Lower prices compared to NCR</li>
    <li>Expected to increase in value after the airport is finished</li>
    <li>Government support, for infrastructure projects</li>
    <li>More and more people want to live and invest here</li>
    <li>Development Opportunity</li>
    <li>Long-Term Wealth Creation</li>
  </ul>


  <p className='text-justify text-gray-600 mb-4'>
    The Yamuna Expressway area is changing and is no longer seen as a highway but as a future urban center of NCR. The combination of infrastructure government support and private investment is creating an opportunity to build a whole new city from scratch with better planning, wider roads and modern utilities unlike older congested areas of NCR.
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
    Our vision is to develop a premium plotted township along the Yamuna Expressway that blends modern infrastructure with future-ready urban planning. Every aspect of the project is planned to ensure convenience, security, and long-term value for buyers.
    </p>

    <p className='text-justify text-gray-600 mb-4'>
        As the Yamuna Expressway transforms into a high-growth corridor, owning land here is not just a property investment—it is a legacy asset for generations to come.
    </p>

     <p className='text-justify text-gray-600 mb-4'>
       Book your plot early and become part of Ayodhya’s historic growth story.
     </p>


        </div>
      
    </div>
  )
}

export default yamunaExpressway
