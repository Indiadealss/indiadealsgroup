
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faHouseLaptop } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
import { message } from "antd";

const Customcomponent = () => {

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
    if (!name || !email || !phone || !project || phone.length < 10 || phone.length > 10 || !emailRegex.test(email)) {
      message.warning("Please fill required fields");
      if (name.length < 3) {
        setErrormessage('Enter a Valid name');
      }
      
      if (!emailRegex.test(email)) {
        setErrormessage('Enter a Valid Email')
      }

      if (phone.length < 10 || phone.length > 10) {
        setErrormessage('Enter a Valid 10 digit Phone Number')
      }

      if (!project) {
        console.log('hello');
        
        setErrormessage('Choose a Project')
      }
      return;
    }

    if (!consent) {
      message.warning("Please accept the consent before submitting");
      setErrormessage('Please accept the consent before submitting')
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
        message.success("Thank you for contacting us. Indiadeals team connect with you as soon as possible");
        setName("");
        setEmail("");
        setPhone("");
        setCity("");
        setUserMessage("");
        
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

  const contactdetails = [
    {
      icon: <FontAwesomeIcon icon={faHouseLaptop} className="text-white text-lg" />,
      title: "REGISTERED OFFICE",
      desc: "Office No:- C-320, 3rd Floor, Block C, Golden I, Techzone 4, Greater Noida West, 201304",
    },
    {
      icon: <FontAwesomeIcon icon={faPhone} className="text-white text-lg" />,
      title: "CALL US NOW",
      desc: "Tel : +91–9818763100",
    },
    {
      icon: <FontAwesomeIcon icon={faPhone} className="text-white text-lg" />,
      title: "BEST – INDIADEALS Experience Satisfaction Team",
      desc: "customer Care: +91–9818763100\n7 Days | 8:00 AM – 8:00 PM",
    },
    {
      icon: <FontAwesomeIcon icon={faEnvelope} className="text-white text-lg" />,
      title: "EMAIL US",
      desc: "customercare@indiadealsgroup.com",
    },
  ];
  return (
    <div>


      {/* CONTENT */}
      <div className="m-0 lg:m-20 lg:me-10">
        <div className="max-w-3xl mx-auto px-4 grid md:grid-cols-1 gap-10">

          {/* FORM */}
          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-400">
            <h2 className="text-xl font-semibold mb-6">GET IN TOUCH WITH US !</h2>
            <p className="text-gray-500 text-sm mb-6">
              Please take a moment to fill out the enquiry form. This will help us understand what you are looking for. We want to give you the help possible. The information you give us will help our team show you the property options and services that're best for you. We will make sure these options are what you need. Our team will use the information from the enquiry form to guide you with the suitable property options and services and also some special offers that are just, for you.
            </p>

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
                className="border p-3 rounded w-full"
              />
              <input
                type="tel"
                inputMode='numeric'
                maxLength={10}
                placeholder="Phone"
                onChange={(e) => {
                  const value = e.target.value.replace(/[^0-9]/g, ""); // remove everything except numbers
                  if (value.length <= 10) {
                    setPhone(value)
                  }
                }}
                value={phone}
                className="border p-3 rounded w-full"
              />
              <input
                type="text"
                placeholder="City"
                value={city}
                onChange={(e) => setCity(e.currentTarget.value)}
                className="border p-3 rounded w-full"
              />
              <select
                value={project}
                onChange={(e) => setProject(e.target.value)}
                className="border p-3 rounded w-full outline-none text-gray-800"
              >
                <option value="">Select Project</option>
                <option value="Hanumat Vihar">Hanumat Vihar</option>
              </select>



              <textarea
                placeholder="Message"
                value={userMessage}
                onChange={(e) => setUserMessage(e.currentTarget.value)}
                className="border p-3 rounded w-full md:col-span-2 h-28"
              />

              <div className="md:col-span-2 flex items-start gap-2 text-sm text-gray-600">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-1"
                />
                <p>
                  I am giving consert to IndiaDeals Group and its people permission to get in touch with me. They can call me. Send me messages on my phone or by email or WhatsApp. I want them to tell me about properties and any special offers they have.I am fine, with IndiaDeals Group contacting me about IndiaDeals Group properties.
                </p>
              </div>

              <button
                type="button"
                disabled={loading}
                onClick={submit}
                className="bg-gray-900 text-white px-6 py-3 rounded md:col-span-2 w-fit disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Now"}
              </button>
            </div>
          </div>

          {/* CONTACT INFO */}
          {/* <div className="space-y-6 mt-10">
            {contactdetails.map((item, i) => (
              <div key={i} className="flex gap-6 items-start my-10">
                <div className="w-16 h-10 bg-gray-800 rounded-full flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-sm">{item.title}</h4>
                  <p className="text-gray-600 text-sm whitespace-pre-line">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div> */}

        </div>
      </div>
    </div>
  )
}

export default Customcomponent
