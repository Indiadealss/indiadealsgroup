'use client';

import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import('./Component/Nevbar.jsx'), {
  ssr: false,
});



const Footer = dynamic(() => import('./Component/Footer.jsx'), {
  ssr: false,
});

const Fixedicons = dynamic(() => import('./Component/Fixedicons.jsx'), {
  ssr: false,
});

const Fixedcalliocns = dynamic(() => import('./Component/Fixedcallicons.jsx'), {
  ssr: false,
});

const Fixedupicons = dynamic(() => import('./Component/Fixedupicons.jsx'), {
  ssr: false,
});

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
      <Fixedicons />
      <Fixedcalliocns />
      <Fixedupicons />
      <Footer />
    </>
  );
}