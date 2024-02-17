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
        className={`${inter.className} bg-light-background dark:bg-dark-background text-light-secondary-r dark:text-dark-secondary-r`}
      >
        <Navbar activeDark={activeDark} setActiveDark={setActiveDark} />
        {children}
        <span className="fixed -rotate-90 bottom-40 -left-40 flex gap-10 items-center transition hover:-translate-y-6 duration-500">
          <div className="w-32 h-0.5 bg-light-secondary-l dark:bg-dark-secondary-l"></div>
          <a
            href="mailto:mohamedadelelbeak@gmail.com"
            className="text-sm text-light-primary-l dark:text-dark-primary-l hover:text-dark-primary-r"
          >
            MohamedAdelElbeak@gmail.com
          </a>
        </span>
      </body>
    </html>
  );
}
