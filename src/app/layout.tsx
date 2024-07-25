import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { GoogleTagManager } from "@next/third-parties/google"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shohruz Ernazarov",
  description: "Founder, Leader, & Student. Junior studying Computer Science at Hunter College. Founded his own Computer Science Club in his sophomore year, leading to over 600 members accumulated in the span of an academic year. Software Engineering Fellow at Headstarter and at CUNY Tech Prep, with aspirations to become a full-stack web developer with a focus in AI.",
  icons: {
    icon: "/images/hunter-cs-club.jpg",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
      <GoogleTagManager gtmId="GTM-W429N5L3" />
    </html>
  );
}
