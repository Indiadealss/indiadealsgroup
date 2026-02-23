import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import 'aos/dist/aos.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ClientLayout from "./ClientLayout";
import { Playwrite_NZ } from 'next/font/google';
import { Dancing_Script } from 'next/font/google'
import { Cormorant } from 'next/font/google'
import { Montserrat } from 'next/font/google'
import Script from "next/script";

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

const playwrite = Playwrite_NZ({
  weight: ['400'],
  // subsets: ['latin'],
})



const cormorant = Cormorant({
  subsets: ['latin'],
  weight: ['700'],
  display: 'swap',
})


const dancing = Dancing_Script({
  subsets: ['latin'],
  weight: ['400', '700'],
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  icons: {
    icon: [
      { url: '/favicon.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/favicon.png',
    apple: '/favicon.png'
  },
  title: "Top Real Estate Developer in Vrindavan, Mathura, Indiadeals Group",
  description: " Indiadeals Group is a trusted and leading real estate developer launch new residential project Hanumat Vihar Awasiya Yojna offers premium plots, Which is located at Raal Road, Vrindavan, Mathura.",

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
      <body className={`${montserrat.className} antialiased`}>

        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-M5Q5FSL6');
            `,
          }}
        />
        {/* <!-- Google Tag Manager --> */}
        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M5Q5FSL6"
          height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe></noscript>
        {/* <!-- End Google Tag Manager (noscript) --> */}
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}