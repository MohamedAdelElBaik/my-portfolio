import type { Metadata } from "next";
// import { Tomorrow } from 'next/font/google';
import { Tomorrow } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const tomorrow = Tomorrow({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mohamed Adel Portfolio",
  description:
    "portfolio for Mohamed Adel, frontend developer using React.js and Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${tomorrow.className} bg-background text-secondary flex flex-col min-h-screen`}
      >
        <Navbar />
        <main className="flex-1 pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
