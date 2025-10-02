import PartnerList from "@/features/partner/components/partnerList/PartnerList";
import styles from "./page.module.css";
import data from "@/assets/data/partner/partner.json";
import {readAllPartner} from "@/features/partner/repository";
import {notFound} from "next/navigation";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "EFFCA | Les partenaires",
    description:
        "Découvrez les partenaires officiels du club de football EFFCA : Entente Fons Fourmagnac Camburat Assier et leurs collaborations.",
    icons: "/images/logo.webp",
    keywords: [
        "EFFCA",
        "club de foot",
        "football",
        "partenaires",
        "collaborations",
        "Fons",
        "Fourmagnac",
        "Camburat",
        "Assier",
    ],
    metadataBase: new URL(process.env.NEXT_PUBLIC_DOMAIN || "http://localhost:3000"),
    openGraph: {
        title: "EFFCA | Les partenaires",
        description:
            "Découvrez les partenaires officiels du club de football EFFCA : Entente Fons Fourmagnac Camburat Assier et leurs collaborations.",
        url: `${process.env.NEXT_PUBLIC_DOMAIN || "http://localhost:3000"}/partenaires`,
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
        title: "EFFCA | Les partenaires",
        description:
            "Découvrez les partenaires officiels du club de football EFFCA : Entente Fons Fourmagnac Camburat Assier et leurs collaborations.",
        images: ["/images/logo.webp"],
    },
    alternates: {
        canonical: `${process.env.NEXT_PUBLIC_DOMAIN || "http://localhost:3000"}/partenaires`,
    },
};


export const revalidate = 0

export default async function PartnersPage() {

    const partners = await readAllPartner()

    if(!partners.success){
        return (
            notFound()
        )
    }


    return (
        <>
            <section>
                <article className={styles.div} >
                    <h1 className={styles.h1}>{data.title}</h1>
                    <h1 className={styles.h1b}>{data.title}</h1>
                </article>
                <article className={styles.articlePartner} >
                    <h2 className={styles.h2}>{data.normal}</h2>
                    <PartnerList partners={partners.data} />
                </article>
        </section>
        </>
    )
}