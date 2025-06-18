

import styles from "./page.module.css"
import dataTitle from "@/assets/data/homePage/homePage.json"
import MatchWidget from "@/components/ui/widgets/Match";
import ActualitiesList from "@/features/actuality/components/actualitiesList/ActualitiesList";
import {readAllActualities} from "@/features/actuality/repository";
import Link from "next/link";
import Header from "@/components/layout/header/Header";

export default async function HomePage() {

    const actualities = await readAllActualities()

    if(!actualities.success){
        return (
            <p>Erreur lors du chargement des actualités</p>
        )
    }

    const limitActualities = actualities.data.slice(0,4);

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
        </section>
        <section className={styles.sectionPhoto} />
        <section className={styles.sectionActu}>
            <article className={styles.div} >
                <h1 className={styles.h1}>{dataTitle.actu}</h1>
                    <h1 className={styles.h1bActu}>{dataTitle.actu}</h1>
            </article>
            <article>
                <ActualitiesList actualities={limitActualities}/>
            </article>
            <Link className={styles.linkActu} href="/actuality">{dataTitle.buttonActu}</Link>
        </section>
    </>)
}