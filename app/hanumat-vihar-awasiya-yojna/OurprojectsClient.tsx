'use client'

import Image from "next/image";
import aboutTemImage from "@/Images/shridivineabout.jpg";
import virndavan from "@/Images/Vrindavan-Banner.jpg";
import AOS from 'aos'
import { useEffect } from "react";
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import reracertificate from "@/Images/rera.png"
import { useState } from "react";
import { message } from "antd";
import downloadPdf from "@/Images/pdbDownload.png"


export default function Home() {

  const [open, setOpen] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [userMessage, setUserMessage] = useState('');
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false);
  const [project, setProject] = useState('');
  const [consent, setConsent] = useState(false);
  const [errormessage, setErrormessage] = useState('')

  const submit = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!name || !email || !phone || !project || phone.length < 10 || phone.length > 10 || !emailRegex.test(email) || !city) {
      message.warning("Please fill required fields");
      if (name.length < 3) {
        setErrormessage('Enter a Valid name');
      }

       if(!city){
        setErrormessage('Enter the City');
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setErrormessage('Enter a Valid Email')
      }

      if (phone.length < 10 || phone.length > 10) {
        setErrormessage('Enter a Valid 10 digit Phone Number')
      }

      if (!project) {
        setErrormessage('Choose a Project')
      }
      return;
    }



    if (!consent) {
      message.warning("Please accept the consent before submitting");
      setErrormessage('Please accept the consent before submitting');
      return;
    }

    setErrormessage('');

    try {
      setLoading(true);

      const res = await fetch("/api/send-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, city, project, message: userMessage }),
      });

      if (res.ok) {
        
        setName("");
        setEmail("");
        setPhone("");
        setCity("");
        setUserMessage("");
        const link = document.createElement("a");
        link.href = "/Hanumat-Vihar-Brochure.pdf";
        link.download = "Hanumat-Vihar-Brochure.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        setOpen(false);
        
        message.success("Thank you for contacting us. Indiadeals team connect with you as soon as possible");
      } else {
        message.error("Something went wrong");
      }
    } catch (err) {
      console.log(err);
      message.error("Server error");
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);
  return (
    <div className="min-h-screen">
      <div className="">
        <video
          autoPlay
          muted
          loop
          playsInline
          className=" inset-0 w-full h-[30vw] object-cover"
        >
          <source src="https://cdn.brandsdoor.in/indiadealss/indiadealss/1771137358731-ourproject.mp4" type="video/mp4" />
        </video>

      </div>

      <div className="my-5 mx-5 lg:mx-20">
        {/* projects */}
        <h1 className="text-[#313036]   font-bold text-4xl text-center mt-10">Hanumat Vihar Awasiya Yojna (MVDA) <br /></h1>


        {/*  */}


        {/* ABOUT SECTION */}
        <section className="py-20 px-0 lg:px-2" data-aos="fade-up">
          <div className="lg:flex lg:justify-between flex-cols mx-10 lg:mx-1">
            <Image
              src="https://cdn.brandsdoor.in/indiadealss/indiadealss/1770974282692-Hanumant-Vihar-inner-projects.png"
              alt="About Shri Divine"
              width={600}
              height={600}
              className=" rounded-lg border-4 border-[#313036]"
            />
            <div className="px-0 lg:ps-10 ">
              <div className="px-0 lg:px-10">
                <h1 className="text-[#313036]   font-bold text-4xl"><span className="text-2xl font-medium font-normal">Radha Kund – Ral Road, Vrindavan</span> <br /><span className="text-2xl font-medium font-normal">RERA Approved Residential Township</span></h1>
                <p className="text-[#313036] my-10   text-gray-600 text-justify">
                  Hanumat Vihar Awasiya Yojna is an approved residential plotted township that offers people a chance to own land safely in Vrindavan. This is a place for families, investors, retirees and people who want a second home. The project is designed to bring the spiritual surroundings of Vrindavan and the modern infrastructure that people need.
                  <br /><br />The township is located on Radha Kund – Ral Road, which's a rapidly developing area. This means that Hanumat Vihar Awasiya Yojna is an opportunity for people to own property in a place where the value of land is increasing. The area is perfect for people who want to invest in land build a house or just own a piece of land in Vrindavan.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="pt-3 px-5 lg:pe-20 lg:pt-10">
              <h1 className="text-[#313036]   font-medium text-4xl"></h1>
              <p className="text-gray-600   my-5 text-justify">
                Hanumat Vihar Awasiya Yojna is a planned community where people can buy plots of land that are legally clear. The project is designed to be affordable. It does not compromise on planning, accessibility or the potential for the land to increase in value over time.
                The project is suitable for people who want to build their house invest in land for the long term retire in Vrindavan or own a holiday home. It is also an option for people who want to create a family asset or rent out their property to tourists.
              </p>
            </div>

            {/* Legal Security and Approvals */}
            <div className="pt-3 px-2 lg:px-5 text-justify">
              <h1 className="text-[#313036]   text-2xl font-medium">Legal Security and Approvals:</h1>
              <p className="text-gray-600   my-5">
                One of the aspects of Hanumat Vihar Awasiya Yojna is the safety of investment. The project is approved by MVDA and RERA which means that it is legally documented and compliant with all regulations. This gives buyers peace of mind. Protects their interests.

                <span className="font-bold"> <Link rel="stylesheet" href="https://indiadealsgroup.com/hanumat-vihar-awasiya-yojna" >Hanumat Vihar Awasiya Yojna</Link></span> has all the approvals, including MVDA approval and RERA registration. The project is also legally documented, which means that buyers can be sure that their investment is safe.
              </p>
            </div>

            {/* Strategic Location Advantage */}
            <div className="pt-3 px-2 lg:px-5 ">
              <h1 className="text-[#313036]   text-2xl font-medium">Strategic Location Advantage:</h1>
              <p className="text-gray-600   my-5 text-justify">
                The location of Hanumat Vihar Awasiya Yojna is one of its strengths. Radha Kund – Ral Road is becoming a residential area in Vrindavan driven by spiritual tourism, retirement and infrastructure development. The project is close to Radha Kund zone and it has easy access to central Vrindavan and Mathura routes.
              </p>
            </div>

            {/* Some of the location highlights include: */}
            <div className="pt-3 px-2 lg:px-5">
              <h1 className="text-[#313036]   text-2xl font-medium">Some of the location highlights include:</h1>
              <p className="text-gray-600   my-5 text-justify">
                <ul className="list-disc ps-10 space-y-3 leading-7 pl-5">
                  <li>Proximity to Radha Kund spiritual zone</li>
                  <li>Easy access to central Vrindavan</li>
                  <li>Connectivity to Mathura routes</li>
                  <li>Growing residential corridor</li>
                  <li>Close to temples and pilgrimage centers</li>
                  <li>Expansion of hospitality and tourism sector</li>
                  <li>Rapid road and infrastructure development</li>
                </ul> <br />
                Vrindavan is becoming a residential destination, which makes it an attractive place to invest in land.
              </p>
            </div>

            {/* Township Infrastructure and Planning */}

            <div className="pt-3 px-2 lg:px-5">
              <h1 className="text-[#313036]   text-2xl font-medium">Township Infrastructure and Planning</h1>
              <p className="text-gray-600   my-5 text-justify">
                Hanumat Vihar Awasiya Yojna is planned with infrastructure that supports convenience, safety and long-term growth. The project has internal roads clearly demarcated plots and a colony-style structured layout. It also has open surroundings, drainage and access planning and a construction-friendly design.
              </p>
            </div>

            {/*  */}

            <div className="pt-3 px-2 lg:px-5">
              <h1 className="text-[#313036]   text-2xl font-medium">Some of the features of the project include:</h1>
              <p className="text-gray-600   my-5">
                <ul className="list-disc ps-10 space-y-2 leading-7 pl-5">
                  <li>Wide internal roads</li>
                  <li>Demarcated plots</li>
                  <li>Colony-style structured layout</li>
                  <li>Green open surroundings</li>
                  <li>Drainage and access planning</li>
                  <li>Construction-friendly design</li>
                  <li>Community-oriented environment</li>
                </ul> <br />
                The project is designed to provide easy mobility planned expansion and a balanced residential ecosystem.
              </p>
            </div>


            {/* Investment Potential */}
            <div className="pt-3 px-2 lg:px-5">
              <h1 className="text-[#313036]   text-2xl font-medium">Hanumat Vihar Vrindavan: Investment Potential</h1>
              <p className="text-gray-600   my-5 text-justify">
                The real estate market in Vrindavan is experiencing growth due to increasing demand from spiritual tourists, retirees, holiday home investors and long-term land investors. Hanumat Vihar Awasiya Yojna offers a range of benefits including early-stage pricing advantage, high appreciation potential and tangible plotted asset.

                The project is ideal for people who want to invest in land as it offers resale liquidity, low maintenance investment and tourism-driven rental demand. It also provides long-term capital growth, which makes it a safe and attractive investment option.
              </p>
            </div>

            <div className="pt-3 px-2 lg:px-5">
              <h1 className="text-[#313036]   text-2xl font-medium">Ideal for Families and End Users</h1>
              <p className="text-gray-600   my-5 text-justify">
                Hanumat Vihar Awasiya Yojna is perfect for families and people who want to own a piece of land in Vrindavan. The project offers calm surroundings freedom to design your own home and an organized residential colony. It is also a way to enter the Vrindavan market and create a long-term family asset.

              </p>
            </div>


            {/* Some of the benefits of the project include: */}

            <div className="pt-3 px-2 lg:px-5">
              <h1 className="text-[#313036]   text-2xl font-medium">Some of the benefits of the project include:</h1>
              <p className="text-gray-600   my-5">
                <ul className="list-disc ps-10 space-y-3 leading-7 pl-5">
                  <li>Spiritual and calm surroundings</li>
                  <li>Freedom to design your home</li>
                  <li>Organized residential colony</li>
                  <li>Affordable Vrindavan entry</li>
                  <li>Long-term family asset</li>
                  <li>Cultural and emotional connection</li>
                  <li>Community-oriented environment</li>
                </ul> <br />
                Owning land in Vrindavan is not just a financial decision, but also a meaningful life investment.
              </p>
            </div>

            {/* Transparent Buying Experience */}

            <div className="pt-3 px-2 lg:px-5">
              <h1 className="text-[#313036]   text-2xl font-medium">Transparent Buying Experience</h1>
              <p className="text-gray-600   my-5 text-justify">
                The project emphasizes dealing and structured buyer support. Buyers receive plot allocation, professional documentation assistance, guided purchase process, transparent communication and long-term relationship support.

                The focus of the project is not just on selling plots. On building trust and confidence with buyers. The project team is committed to providing an hassle-free buying experience.
                <br />
                <br />
                Hanumat Vihar Awasiya Yojna is a approved and future-ready plotted township that offers a rare blend of legality location strength, affordability and growth potential. With RERA approvals, strategic positioning on Radha Kund – Ral Road and Vrindavan’s expanding real estate market the project stands as an ideal choice for both living and investment.

                It is more, than a property purchase – it is an opportunity to secure land in one of India’s most spiritually and economically evolving destinations. Hanumat Vihar Awasiya Yojna is a chance to own a piece of Vrindavan and create a long-term asset that will appreciate in value over time.
              </p>
            </div>
          </div>
        </section>

        {/* rera,logo */}
        <section className="">
          <div className="flex flex-col md:flex-row justify-around">
            <Image src={downloadPdf} alt="..." className="text-white cursor-pointer mx-auto my-10 md:my-0 lg:mx-0 rounded w-[80vw] md:w-[25vw] font-bold " onClick={() => setOpen(true)} />


            {/* <div className="">
              <Image src={reracertificate} alt="..." className="mx-auto" />
            </div> */}
          </div>
        </section>

        {/* Content */}
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center">

          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setOpen(false)}
          />

          {/* Modal Box */}
          <div className="
      relative bg-white 
      w-full md:w-[100%] 
      md:max-w-2xl 
      rounded-t-2xl md:rounded-lg 
      p-5 md:p-8
      mt-30
      max-h-[90vh] 
      overflow-y-auto
      animate-[slideUp_0.3s_ease-out]
    ">

            <h2 className="text-lg md:text-xl font-semibold mb-4 mt-10 md:mt-0">
              Download Brochure
            </h2>

            <p className="text-red-500 font-semibold text-center">{errormessage}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.currentTarget.value)}
                className="border p-3 rounded w-full text-gray-800"
              />

              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.currentTarget.value)}
                className="border p-3 rounded w-full text-gray-800"
              />

              <input
                type="number"
                placeholder="Phone"
                maxLength={10}
                value={phone}
                onChange={(e) => {
                  const value = e.target.value.replace(/[^0-9]/g, ""); // remove everything except numbers
                  if (value.length <= 10) {
                    setPhone(value)
                  }
                }}
                className="border p-3 rounded w-full text-gray-800"
              />

              <input
                type="text"
                placeholder="City"
                value={city}
                onChange={(e) => setCity(e.currentTarget.value)}
                className="border p-3 rounded w-full text-gray-800"
              />

              <select
                value={project}
                onChange={(e) => setProject(e.target.value)}
                className="border p-3 rounded w-full md:col-span-2 text-gray-800"
              >
                <option value="">Select Project</option>
                <option value="Hanumat Vihar">Hanumat Vihar</option>
              </select>

              <textarea
                placeholder="Message"
                value={userMessage}
                onChange={(e) => setUserMessage(e.currentTarget.value)}
                className="border p-3 rounded w-full md:col-span-2 h-28 text-gray-800"
              />

              <div className="md:col-span-2 flex items-start gap-2 text-sm text-gray-600">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-1 text-gray-600"
                />
                <p className="text-gray-500">
                  I am giving consert to IndiaDeals Group and its people permission to get in touch with me. They can call me. Send me messages on my phone or by email or WhatsApp. I want them to tell me about properties and any special offers they have.I am fine, with IndiaDeals Group contacting me about IndiaDeals Group properties.

                </p>
              </div>

              <button
                type="button"
                disabled={loading}
                onClick={submit}
                className="bg-gray-900 text-white px-6 py-3 rounded md:col-span-2 w-full md:w-fit disabled:opacity-50"
              >
                {loading ? "Sending..." : "Submit & Download"}
              </button>

            </div>

          </div>
        </div>
      )}

     
    </div>
  );
}
