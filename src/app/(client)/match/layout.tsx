import styles from "./layout.module.css";
import data from "@/assets/data/matchPage/match.json";
import NavMatch from "@/components/layout/navigation/navMatchPage/NavMatch";
import {ReactNode} from "react";
import {Metadata} from "next";

export const metadata : Metadata = {
    title: "EFFCA | Les matchs",
    description: "Les matchs, le calendrier et les résultat de l'Entente Fons Fourmagnac Camburat Assier",
    icons : "/images/logo.webp",
}


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