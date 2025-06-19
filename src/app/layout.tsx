import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shohruz Ernazarov",
  description:
    "Founder, Leader, & Student. Rising Senior studying Computer Science at Hunter College. Founded his own Computer Science Club in his sophomore year, leading to over 1000 members accumulated in the span of two years. Solutions Engineer Intern at Burt Intelligence, with aspirations to become a full-stack developer with a focus in AI.",
  icons: {
    icon: "/images/hunter-cs-club.jpg",
  },
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
      <GoogleAnalytics gaId="G-4Q2WXQ8EPK" />
    </html>
  );
}
