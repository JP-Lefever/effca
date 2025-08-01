import {titleFont, paragraphFont} from "@/assets/fonts/fonts";
import { Analytics } from "@vercel/analytics/next"
import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import { ToastContainer } from 'react-toastify';

export const metadata : Metadata = {
    title: "EFFCA | Entente Fons Fourmagnac Camburat Assier",
    description: "Club de foot de l'Entente Fons Fourmagnac Camburat Assier",
    icons : "/images/logo.webp",
}



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${titleFont.variable} ${paragraphFont.variable}`}>
      <body className={`${paragraphFont.className} `}>
      <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
      />
        {children}
      <Analytics/>
      </body>
    </html>
  );
}
