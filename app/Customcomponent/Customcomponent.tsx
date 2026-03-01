"use client";

import { useState } from "react";
import { message, Modal } from "antd";
import { useRouter } from "next/navigation";

const Customcomponent = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    project: "",
    message: "",
  });

  const router = useRouter()

  const [consent, setConsent] = useState(false);
  const [loading, setLoading] = useState(false);

  const [otp, setOtp] = useState("");
  const [otpModal, setOtpModal] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Handle Input Change
 const handleChange = (field: string, value: any) => {
  setForm((prev) => ({ ...prev, [field]: value }));
};

  // Validate Form
  const validateForm = () => {

    console.log(form,'form');
    
    if (
      !form.name ||
      form.name.length < 3 ||
      !emailRegex.test(form.email) ||
      form.phone.length !== 10 ||
      !form.city ||
      !form.project
    ) {
      message.warning("Please fill all required fields correctly");
      return false;
    }

    if (!consent) {
      message.warning("Please accept the consent");
      return false;
    }

    return true;
  };

  // Step 1: Click Send Now → Validate + Send OTP
  const handleSubmitClick = async () => {
    if (!validateForm()) return;

    try {
      setLoading(true);

      const res = await fetch("/api/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mobile: form.phone }),
      });

      if (!res.ok) {
        message.error("Failed to send OTP");
        return;
      }

      message.success("OTP sent to your mobile");
      setOtpModal(true);
    } catch (err) {
      message.error("Server error");
    } finally {
      setLoading(false);
    }
  };

  // Step 2: Verify OTP → Final Submit
  const verifyOtpAndSubmit = async () => {
    if (!otp) {
      message.warning("Enter OTP");
      return;
    }

    try {
      setLoading(true);

      const verifyRes = await fetch("/api/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mobile: form.phone, otp }),
      });

      if (!verifyRes.ok) {
        message.error("Invalid OTP");
        return;
      }

      // OTP verified → Send Final Form
      const finalRes = await fetch("/api/send-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!finalRes.ok) {
        message.error("Failed to submit form");
        return;
      }

       if (finalRes.ok) {
        router.push("/thankyou");
        message.success("Thank you! Our team will contact you soon.");
      }


      setForm({
        name: "",
        email: "",
        phone: "",
        city: "",
        project: "",
        message: "",
      });

      setConsent(false);
      setOtp("");
      setOtpModal(false);
    } catch (err) {
      message.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="m-0 lg:m-20">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg border border-gray-800 outline-none border border-gray-800 outline-none-gray-300">
        <h2 className="text-xl font-semibold mb-6">GET IN TOUCH WITH US!</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            placeholder="Name"
            value={form.name}
            onChange={(e) => handleChange("name", e.target.value)}
            className="border border-gray-800 outline-none p-3 rounded text-gray-800"
          />

          <input
            placeholder="Email"
            value={form.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className="border border-gray-800 outline-none p-3 rounded text-gray-800"
          />

          <input
            placeholder="Phone"
            maxLength={10}
            value={form.phone}
            onChange={(e) =>
              handleChange(
                "phone",
                e.target.value.replace(/[^0-9]/g, "")
              )
            }
            className="border border-gray-800 outline-none p-3 rounded text-gray-800"
          />

          <input
            placeholder="City"
            value={form.city}
            onChange={(e) => handleChange("city", e.target.value)}
            className="border border-gray-800 outline-none p-3 rounded text-gray-800"
          />

          <select
            value={form.project}
            onChange={(e) => handleChange("project", e.target.value)}
            className="border border-gray-800 outline-none p-3 rounded text-gray-800"
          >
            <option value="">Select Project</option>
            <option value="Hanumat Vihar">Hanumat Vihar</option>
          </select>

          <textarea
            placeholder="Message"
            value={form.message}
            onChange={(e) => handleChange("message", e.target.value)}
            className="border border-gray-800 outline-none p-3 rounded md:col-span-2 h-28 text-gray-800"
          />

          <div className="md:col-span-2 flex items-start gap-2 text-sm">
            <input
              type="checkbox"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              className="text-gray-800"
            />
            <p>
              I agree to be contacted regarding property offers and updates.
            </p>
          </div>

          <button
            disabled={loading}
            onClick={handleSubmitClick}
            className="bg-black text-white px-6 py-3 rounded md:col-span-2"
          >
            {loading ? "Processing..." : "Send Now"}
          </button>
        </div>
      </div>

      {/* OTP MODAL */}
      <Modal
        title="Verify OTP"
        open={otpModal}
        footer={null}
        onCancel={() => setOtpModal(false)}
      >
        <input
          placeholder="Enter OTP"
          maxLength={6}
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          className="border border-gray-800 outline-none p-3 rounded w-full mb-4"
        />

        <button
          onClick={verifyOtpAndSubmit}
          className="bg-green-600 text-white px-4 py-2 rounded w-full"
        >
           {loading ? "Processing..." : "Verify & Submit"}
        </button>
      </Modal>
    </div>
  );
};

export default Customcomponent;