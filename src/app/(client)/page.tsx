import styles from "./page.module.css"
import dataTitle from "@/assets/data/homePage/homePage.json"
import MatchWidget from "@/components/ui/widgets/Match";
import ActualitiesList from "@/features/actuality/components/actualitiesList/ActualitiesList";
import Link from "next/link";
import Header from "@/components/layout/header/Header";
import {readAllPartner} from "@/features/partner/repository";
import Slider from "@/components/ui/slider/Slider";
import {notFound} from "next/navigation";
import React from "react";
import type {Metadata} from "next";

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

export const revalidate = 0

export default async function HomePage() {

    const partners = await readAllPartner();

    if(!partners.success){
        return (
            notFound()
        )
    }

    return (<>

        <Header/>
        <section className={styles.sectionMatch}>
            <article className={styles.div} >
                <h1 className={styles.h1}>{dataTitle.result}</h1>
                <h1 className={styles.h1b}>{dataTitle.result}</h1>
            </article>
            <article>
                <MatchWidget/>
            </article>
            <Link className={styles.linkPartner} href="/match/prochain-match">{dataTitle.buttonMatch}</Link>
        </section>
        <section className={styles.sectionPhoto} />
        <section className={styles.sectionActu}>
            <article className={styles.div} >
                <h1 className={styles.h1}>{dataTitle.actu}</h1>
                    <h1 className={styles.h1bActu}>{dataTitle.actu}</h1>
            </article>
            <article>
                <ActualitiesList limit={4}/>
            </article>
            <Link className={styles.linkActu} href="/actualites">{dataTitle.buttonActu}</Link>
        </section>
        <section className={styles.sectionPartner}>
            <article className={styles.div} >
                <h1 className={styles.h1}>{dataTitle.partner}</h1>
                <h1 className={styles.h1b}>{dataTitle.partner}</h1>
            </article>
            <article>
                <Slider partners={partners.data}/>

            </article>
            <Link className={styles.linkPartner} href="/partenaires">{dataTitle.buttonPartner}</Link>
        </section>
    </>)
}