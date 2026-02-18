import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import 'aos/dist/aos.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ClientLayout from "./ClientLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  icons:{
    icon:[
      {url:'/favicon.png', sizes:'32x32', type: 'image/png'},
    ],
    shortcut:'/favicon.png',
    apple:'/favicon.png'
  },
  title: "Top Real Estate Developer in Vrindavan, Mathura, Indiadeals Group",
  description: " Indiadeals Group is a trusted and leading real estate developer launch new residential project Hanumat Vihar Awas Yojna offers premium plots, Which is located at Raal Road, Vrindavan, Mathura.",

  alternates: {
    canonical: "https://www.indiadealsgroup.com/",   // 👈 homepage canonical
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}