'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

import Navbar from './Component/Nevbar.jsx';
import Footer from './Component/Footer.jsx';
import Fixedicons from './Component/Fixedicons.jsx';
import Fixedcalliocns from './Component/Fixedcallicons.jsx';
import Fixedupicons from './Component/Fixedupicons.jsx';
import Adfixedicons from './Component/Adfixedicons.jsx';
import Adfixedcallicons from './Component/Adfixedcallicons.jsx';

type Props = {
  children: React.ReactNode;
};

export default function ClientLayout({ children }: Props) {
  const pathname = usePathname();

  // Pages where layout should be hidden
  const hideLayout =
    pathname === '/irish-platinum-greater-noida-west';

  return (
    <>
      {!hideLayout && <Navbar />}

      {children}
      
        {hideLayout && (
          <>
          <Adfixedicons />
          <Adfixedcallicons />
                    <Fixedupicons />
          </>
        )}

      {!hideLayout && (
        <>
          <Fixedicons />
          <Fixedcalliocns />
          <Fixedupicons />
          <Footer />
        </>
      )}
    </>
  );
}