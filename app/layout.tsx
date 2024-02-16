'use client';
// import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { useState } from 'react';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

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
        className={`${inter.className} bg-light-background dark:bg-dark-background text-light-secondaryForeground dark:text-dark-foreground`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
