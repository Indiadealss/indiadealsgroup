'use client';

import dynamic from 'next/dynamic';
import Navbar from './Component/Nevbar.jsx'
import Footer from './Component/Footer.jsx'
import Fixedicons from './Component/Fixedicons.jsx'
import Fixedcalliocns from './Component/Fixedcallicons.jsx'
import Fixedupicons from './Component/Fixedupicons.jsx';

type Props = {
  children: React.ReactNode;
};


export default function ClientLayout({ children }: Props) {
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