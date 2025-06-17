import styles from "./layout.module.css"

import {readAllActualities} from "@/features/actuality/repository";
import ActualitiesList from "@/features/actuality/components/actualitiesList/ActualitiesList";

export default async function ActualityPage(){

    const actualities = await readAllActualities()

    if (!actualities.success){
        return (
            <p>Une erreur est survenue</p>
        )
    }


    return (
        <>
           <section className={styles.div} role = "groupe">
               <h1 className={styles.h1}>Actualités</h1>
               <h1 className={styles.h1b}>Actualités</h1>
           </section>
           <section className={styles.section}>
               <ActualitiesList actualities={actualities.data}/>
           </section>
        </>
    )
}