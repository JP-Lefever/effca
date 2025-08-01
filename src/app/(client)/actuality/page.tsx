import styles from "./page.module.css"
import ActualitiesList from "@/features/actuality/components/actualitiesList/ActualitiesList";
import {Metadata} from "next";

export const metadata : Metadata = {
    title: "EFFCA | Les actualités du club",
    description: "Les actualités du club de l'Entente Fons Fourmagnac Camburat Assier",
    icons : "/images/logo.webp",
}

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