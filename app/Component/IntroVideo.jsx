"use client";
import { useEffect, useState } from "react";

export default function IntroVideo() {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHide(true), 5000); // video duration
    return () => clearTimeout(timer);
  }, []);

  if (hide) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-black">
      <video
        autoPlay
        muted
        playsInline
        className="w-full h-full object-cover"
      >
        <source src="https://cdn.brandsdoor.in/indiadealss/indiadealss/1771139465772-logo-revel.mp4" type="video/mp4" />
      </video>
    </div>
  );
}