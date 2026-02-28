"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  FacebookFilled,
  TwitterOutlined,
  LinkedinFilled,
  YoutubeFilled,
  RedditCircleFilled,
  DribbbleCircleFilled,
} from "@ant-design/icons";
import logo from '../../Images/india_deals_logo10x.png'
import Image from "next/image";

const Thankyou = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.back(); // 👈 go back
    }, 5000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="bg-white shadow-xl rounded-2xl p-10 text-center max-w-md w-full">

        <div className="mb-6">
          <Image
            src={logo}
            alt="INDIA DEALS GROUP"
            width={180}
            className="mx-auto"
          />
        </div>

        <h1 className="text-3xl font-bold mb-3">Thank You!</h1>

        <p className="text-gray-600 mb-6">
          Our team will connect with you soon.
        </p>

        <button
          onClick={() => router.back()}
          className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition mb-6"
        >
          Back to Home
        </button>

        

      </div>
    </div>
  );
};

export default Thankyou;