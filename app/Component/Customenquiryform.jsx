import React, { useState } from "react";
import {Loader2 } from 'lucide-react';

export default function Customenquiryform({ setCustomEnquiry, propertys }) {

    
  const [formData, setFormData] = useState({
    project: propertys.projectname,
    name: "",
    phone: "",
    email: "",
    message: "",
    city: propertys.location,
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

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      console.log("Form Submitted:", formData);

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

  console.log(data, "response data");

  if (finalRes.ok) {
    setSubmitted(true);
    setFormData({
      project: propertys.projectname,
      name: "",
      phone: "",
      email: "",
      message: "",
      city: propertys.location,
    });
    setCustomEnquiry(false);
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
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
      onClick={() => setCustomEnquiry(false)}
    >
      <div
        className="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#011638] to-[#0a2a6b] text-white p-5 text-center relative">
          <h2 className="text-xl font-semibold">Get Best Deal</h2>
          <p className="text-sm opacity-80">
            Fill details & get instant call
          </p>

          <button
            onClick={() => setCustomEnquiry(false)}
            className="absolute right-4 top-3 text-2xl cursor-pointer"
          >
            ×
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {submitted && (
            <div className="bg-green-100 text-green-700 p-2 rounded text-center text-sm">
              ✅ Enquiry submitted !
            </div>
          )}

          {/* name */}
          <div>
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

          {/* phone */}
          <div>
            <input
              type="text"
              name="phone"
              placeholder="phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
            />
            {errors.phone && (
              <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
            )}
          </div>

          {/* Email */}
          <div>
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

          {/* Message */}
          <div>
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

          {/* Button */}
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
                '🚀 Submit Enquiry'
              )}
            </button>

          <p className="text-xs text-gray-400 text-center">
            🔒 Your data is safe with us
          </p>
        </form>
      </div>
    </div>
  );
}