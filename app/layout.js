import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { SessionProvider } from "next-auth/react";

export const Metadata = {
title: "Rently",
description: "application werelandlord can be able to collect rent from tenenet and tenanat can be able to pay rent without stress",
icons:{
  icon: "/favicon.ico",
}
}





const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Rently",
  description: "application were landload and tenent interact about house rent",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        
      >
        <Navbar/>
        <SessionProvider>
        {children}
        </SessionProvider>
        <Footer/>
      </body>
    </html>
  );
}
