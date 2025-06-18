import styles from "./layout.module.css"


import ActualitiesList from "@/features/actuality/components/actualitiesList/ActualitiesList";

export default async function ActualityPage(){



    return (
        <>
           <section className={styles.div} role = "groupe">
               <h1 className={styles.h1}>Actualités</h1>
               <h1 className={styles.h1b}>Actualités</h1>
           </section>
           <section className={styles.section}>
               <ActualitiesList/>
           </section>
        </>
    )
}