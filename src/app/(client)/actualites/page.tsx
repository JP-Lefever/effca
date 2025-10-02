import styles from "./page.module.css"
import ActualitiesList from "@/features/actuality/components/actualitiesList/ActualitiesList";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "EFFCA | Les actualités de l'EFFCA",
    description:
        "Suivez toutes les actualités du club EFFCA : résultats, événements, matchs et annonces des équipes de l'Entente Fons Fourmagnac Camburat Assier.",
    icons: "/images/logo.webp",
    keywords: [
        "EFFCA",
        "club de foot",
        "football",
        "actualités",
        "résultats matchs",
        "événements sportifs",
        "Fons",
        "Fourmagnac",
        "Camburat",
        "Assier",
    ],
    metadataBase: new URL(process.env.NEXT_PUBLIC_DOMAIN || "http://localhost:3000"),
    openGraph: {
        title: "EFFCA | Actualités du club de football",
        description:
            "Toutes les actualités du club EFFCA : résultats, événements, matchs et annonces des équipes locales.",
        url: `${process.env.NEXT_PUBLIC_DOMAIN || "http://localhost:3000"}/actualites`,
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
        title: "EFFCA | Actualités du club de football",
        description:
            "Toutes les actualités du club EFFCA : résultats, événements, matchs et annonces des équipes locales.",
        images: ["/images/logo.webp"],
    },
    alternates: {
        canonical: `${process.env.NEXT_PUBLIC_DOMAIN || "http://localhost:3000"}/actualites`,
    },
};

export const revalidate = 0

export default async function ActualityPage(){


    return (
        <>
           <section className={styles.div} role = "groupe">
               <h1 className={styles.h1}>Actualités</h1>
               <h1 className={styles.h1b}>Actualités</h1>
           </section>

               <ActualitiesList/>

        </>
    )
}