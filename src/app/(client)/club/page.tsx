import {readHistory} from "@/features/club/repository";
import ClubHistory from "@/features/club/components/clubHistory/ClubHistory";
import styles from "./page.module.css";
import data from "@/assets/data/club/club.json";
import Organigramme from "@/features/club/components/organigramme/Organigramme";

import {readAllRole} from "@/features/associationRole/action";
import {readMemberRole} from "@/features/users/action";
import {notFound} from "next/navigation";
import {Metadata} from "next";


export const metadata: Metadata = {
    title: "EFFCA | Histoire et organisation du club de football",
    description:
        "Découvrez l'histoire et l'organigramme du club EFFCA : Entente Fons Fourmagnac Camburat Assier, ses origines et sa structure.",
    icons: "/images/logo.webp",
    keywords: [
        "EFFCA",
        "club de foot",
        "football",
        "histoire du club",
        "organigramme",
        "Fons",
        "Fourmagnac",
        "Camburat",
        "Assier",
        "sport local",
    ],
    metadataBase: new URL(process.env.NEXT_PUBLIC_DOMAIN || "http://localhost:3000"),
    openGraph: {
        title: "EFFCA | Histoire et organisation du club",
        description:
            "Découvrez l'histoire et l'organigramme du club EFFCA : Entente Fons Fourmagnac Camburat Assier, ses origines et sa structure.",
        url: `${process.env.NEXT_PUBLIC_DOMAIN || "http://localhost:3000"}/histoire`,
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
        title: "EFFCA | Histoire et organisation du club",
        description:
            "Découvrez l'histoire et l'organigramme du club EFFCA : Entente Fons Fourmagnac Camburat Assier, ses origines et sa structure.",
        images: ["/images/logo.webp"],
    },
    alternates: {
        canonical: `${process.env.NEXT_PUBLIC_DOMAIN || "http://localhost:3000"}/histoire`,
    },
};

export const revalidate = 0

export default async function ClubPage(){

    const history = await readHistory();
    const role = await readAllRole()
    const members = await readMemberRole();


    if(!history.success || ! members.success || !role.success){

        return (
            notFound()
        )
    }




    return (
        <>
            <header className={styles.div} >
                <h1 className={styles.h1}>{data.legend}</h1>
                <h1 className={styles.h1b}>{data.legend}</h1>
            </header>
        <ClubHistory history = {history.data} />
        <Organigramme members = {members.data} role ={role.data} />
        </>
    )
}