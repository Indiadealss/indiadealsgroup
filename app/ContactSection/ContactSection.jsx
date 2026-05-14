"use client";

import { useState } from 'react';
import { MapPin, ArrowRight,Loader2 } from 'lucide-react';

export default function ContactSection({projectName,projectLocation}) {
  const [formData, setFormData] = useState({
    project: 'IRISH PLATINUM',
    name: '',
    email: '',
    message: '',
    phone: '',
    city:'Greater Noida West',

  });

   const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    let newErrors = {};

    if (!formData.name) newErrors.name = "name is required";

    if (!formData.phone) newErrors.phone = "phone is required";
    else if (!/^\d{10}$/.test(formData.phone))
      newErrors.phone = "Enter valid 10-digit phone";

    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email";

    if (!formData.message) newErrors.message = "Message is required";

    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

   const handleSubmit = async (e) => {
      e.preventDefault();
      console.log('hello');
      
  
      const validationErrors = validate();
  
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
      } else {
        setErrors({});
        // console.log("Form Submitted:", formData);
  
      //   setSubmitted(true);
      setLoading(true)
  
      try {

  console.log("Form Submitted:", formData);

  const finalRes = await fetch("/api/send-mail", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  console.log(finalRes, "finalRes");

  const data = await finalRes.json();

  if (finalRes.ok) {
    setSubmitted(true);
    setFormData({
    project: 'IRISH PLATINUM',
    name: '',
    email: '',
    message: '',
    phone: '',
    city:'Greater Noida West',

  });
  }

} catch (error) {

  console.log("FETCH ERROR:", error);

}
finally {

  setTimeout(() => {
    setLoading(false);
    setSubmitted(false);
  }, 2000);

}
  
        // auto close after 2 sec
      //   setTimeout(() => {
      //     setCustomEnquiry(false);
      //     setSubmitted(false);
      //   }, 2000);
  
        
      }
    };
        

  return (
    <section className="relative min-h-[600px] w-full flex items-center py-16 px-6 overflow-hidden">
      {/* 1. Background Image with Blue Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src='/Images/irishPlatinumQuestion.jpg' // Path to your tall building image
          fill
          className="object-cover object-left w-[-webkit-fill-available]"
          alt="Contact Background"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-[#1e3a8a]/70 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl px-4 mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Content */}
        <div className="space-y-8">
          {/* Accent Label */}
          <span className="text-[#c19a6b] text-sm font-bold uppercase tracking-[0.3em] border-l-2 border-[#c19a6b] pl-4">
            Exclusive Opportunities
          </span>

          <h2 className="text-white text-5xl md:text-6xl font-serif font-light leading-[1.1] tracking-tight">
            Tell Us What <br /> 
            <span className="italic text-[#c19a6b]">You're Looking For</span>
          </h2>

          <div className="space-y-6">
            

            {/* Address Card with Glassmorphism */}
            <div className="inline-flex items-start gap-4 p-5 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm max-w-sm">
              <MapPin className="text-[#c19a6b] mt-1 shrink-0" size={24} />
              <div>
                <h4 className="text-white font-semibold mb-1">{projectName}</h4>
                <p className="text-gray-400 text-sm leading-snug">
                 {projectLocation}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Form Card */}
        <div className="bg-white rounded-xl shadow-2xl p-0 md:p-8 max-w-xl lg:ml-auto w-full">
          <h3 className="text-2xl font-bold text-[#0f172a] mb-6 uppercase text-center pt-3">Contact Now</h3>
          
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {submitted && (
            <div className="bg-green-100 text-green-700 p-2 rounded text-center text-sm">
              ✅ Enquiry submitted
            </div>
          )}
            <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
              <div>
                <label className="text-xs font-bold text-gray-500 uppercase mb-1 block">name</label>
                <input
              type="text"
              name="name"
              placeholder="Full name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name}</p>
            )}
              </div>
              <div>
                <label className="text-xs font-bold text-gray-500 uppercase mb-1 block">Contact No.</label>
                 <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
            />
            {errors.phone && (
              <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
            )}
              </div>
            </div>

            <div className="">
              <div className="space-y-4">
                <div>
                  <label className="text-xs font-bold text-gray-500 uppercase mb-1 block">Email</label>
                  <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
                </div>
                <div>
              <label className="text-xs font-bold text-gray-500 uppercase mb-1 block">Message</label>
              <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
            />
            {errors.message && (
              <p className="text-red-500 text-xs mt-1">{errors.message}</p>
            )}
            </div>
              </div>
              
              {/* Small Decorative Image inside Form (as seen in screenshot) */}
              {/* <div className="hidden md:block relative rounded-lg overflow-hidden h-full">
                <img
                  src={irishPlatinumQuestion} // Small project thumbnail
                  fill
                  className="object-cover"
                  alt="Project Thumbnail"
                />
              </div> */}
            </div>

            

            <button 
              type="submit"
              disabled={loading}
              className={`w-full flex items-center justify-center gap-3 py-4 rounded-xl font-bold uppercase tracking-widest text-sm shadow-lg transition-all
                ${loading 
                  ? 'bg-blue-400 cursor-not-allowed opacity-80' 
                  : 'bg-blue-600 hover:bg-blue-700 active:scale-[0.98] cursor-pointer text-white'
                }`}
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin" size={20} />
                  Processing...
                </>
              ) : (
                'Submit Now'
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}