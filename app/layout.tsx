import type {Metadata} from "next";
import {Poppins, Roboto} from "next/font/google";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "400", "900"],
  variable: "--font-poppins"
})

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "900"],
  variable: "--font-roboto"
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body
      className={`${poppins.variable} ${roboto.variable} antialiased`}
    >
    <Navbar/>
    {children}
    </body>
    </html>
  );
}
