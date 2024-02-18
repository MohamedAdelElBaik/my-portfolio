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

        <span className="fixed -rotate-90 bottom-40 -left-40 flex gap-10 items-center transition hover:-translate-y-6 duration-500">
          <div className="w-32 h-0.5 bg-light-secondary-l dark:bg-dark-secondary-l"></div>
          <a
            href="mailto:mohamedadelelbeak@gmail.com"
            className="text-sm text-light-primary-l dark:text-dark-primary-l hover:text-dark-primary-r"
          >
            MohamedAdelElbeak@gmail.com
          </a>
        </span>
        <Footer />
      </body>
    </html>
  );
}
