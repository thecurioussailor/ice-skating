import type { Metadata } from "next";
import "./globals.css";
import bg from '../public/background.png';
import { JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
});

const tasaOrbiterDisplay = localFont({
  src: [
    {
      path: '../public/fonts/TASAOrbiterDisplay-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/TASAOrbiterDisplay-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-tasa-display',
});

export const metadata: Metadata = {
  title: "Ice Skating",
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
        className={`${jetbrainsMono.variable} ${tasaOrbiterDisplay.variable} antialiased`}
      >
        <div className={`flex flex-col justify-center items-center z-10 bg-repeat bg-top w-full`} style={{backgroundImage: `url(${bg.src})`}}>
          <Navbar/>
            {children}
          <Footer/>
        </div>
      </body>
    </html>
  );
}
