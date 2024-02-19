'use client';
// import type { Metadata } from 'next';
// import { Grandstander } from 'next/font/google';
// import { Tourney } from 'next/font/google';
// import { Tomorrow } from 'next/font/google';
import { Tomorrow } from 'next/font/google';
import './globals.css';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MailFly from '@/components/MailFly';

const tomorrow = Tomorrow({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

// export const metadata: Metadata = {
//   title: 'Mohamed Adel Portfolio',
//   description:
//     'portfolio for Mohamed Adel, frontend developer using React.js and Next.js',
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [activeDark, setActiveDark] = useState(true);

  return (
    <html lang="en" className={activeDark ? 'dark' : 'light'}>
      <body
        className={`${tomorrow.className} bg-light-background bg-opacity-60 dark:bg-dark-background text-light-secondary-r dark:text-dark-secondary-r`}
      >
        <Navbar activeDark={activeDark} setActiveDark={setActiveDark} />
        {children}
        <MailFly />
        <Footer />
      </body>
    </html>
  );
}
