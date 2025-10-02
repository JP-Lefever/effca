import {titleFont, paragraphFont} from "@/assets/fonts/fonts";
import { Analytics } from "@vercel/analytics/next"
import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import { ToastContainer } from 'react-toastify';

export const metadata: Metadata = {
    title: "EFFCA | Club de foot Entente Fons Fourmagnac Camburat Assier",
    description: "EFFCA, club de football basé à Fons, Fourmagnac, Camburat et Assier. Suivez nos équipes, nos matchs et nos événements sportifs.",
    icons: "/images/logo.webp",
    keywords: ["football", "EFFCA", "club de foot", "Fons", "Fourmagnac", "Camburat", "Assier", "sport local"],
    openGraph: {
        title: "EFFCA - Club de foot Entente Fons Fourmagnac Camburat Assier",
        description: "Suivez l'actualité du club de foot EFFCA : équipes, matchs, événements et résultats.",
        url: "#",
        images: [
            {
                url: "/images/logo.webp",
                width: 800,
                height: 600,
                alt: "Logo EFFCA"
            }
        ],
        siteName: "EFFCA"
    },
    twitter: {
        card: "summary_large_image",
        title: "EFFCA - Club de foot Entente Fons Fourmagnac Camburat Assier",
        description: "Suivez l'actualité du club de foot EFFCA : équipes, matchs, événements et résultats.",
        images: ["/images/logo.webp"]
    },
};


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
