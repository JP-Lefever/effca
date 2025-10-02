import styles from "./layout.module.css";
import data from "@/assets/data/matchPage/match.json";
import NavMatch from "@/components/layout/navigation/navMatchPage/NavMatch";
import {ReactNode} from "react";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "EFFCA | Les matchs",
    description:
        "Consultez tous les matchs, le calendrier et les résultats du club de football EFFCA : Entente Fons Fourmagnac Camburat Assier.",
    icons: "/images/logo.webp",
    keywords: [
        "EFFCA",
        "club de foot",
        "football",
        "matchs",
        "calendrier",
        "résultats",
        "Fons",
        "Fourmagnac",
        "Camburat",
        "Assier",
    ],
    metadataBase: new URL(process.env.NEXT_PUBLIC_DOMAIN || "http://localhost:3000"),
    openGraph: {
        title: "EFFCA | Les matchs",
        description:
            "Consultez tous les matchs, le calendrier et les résultats du club EFFCA : Entente Fons Fourmagnac Camburat Assier.",
        url: `${process.env.NEXT_PUBLIC_DOMAIN || "http://localhost:3000"}/matchs`,
        images: [
            {
                url: "/images/logo.webp",
                width: 800,
                height: 600,
                alt: "Logo EFFCA",
            },
        ],
        siteName: "EFFCA",
    },
    twitter: {
        card: "summary_large_image",
        title: "EFFCA | Les matchs",
        description:
            "Consultez tous les matchs, le calendrier et les résultats du club EFFCA : Entente Fons Fourmagnac Camburat Assier.",
        images: ["/images/logo.webp"],
    },
    alternates: {
        canonical: `${process.env.NEXT_PUBLIC_DOMAIN || "http://localhost:3000"}/matchs`,
    },
};

export default function  matchLayout({children} : { children: ReactNode }) {

    return (
        <>

                <header className={styles.div} >
                    <h1 className={styles.h1}>{data.title}</h1>
                    <h1 className={styles.h1b}>{data.title}</h1>
                </header>
                <NavMatch/>
                <main>
                    {children}
                </main>
        </>
    )
}