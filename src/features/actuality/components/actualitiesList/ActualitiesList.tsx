import styles from "./actualitiesList.module.css";
import CardActuality from "@/features/actuality/components/cardActuality/CardActuality";


import {readAllActualities} from "@/features/actuality/repository";

export default async function ActualitiesList({limit} : {limit?: number}) {
    const actualities = await readAllActualities()


    if (!actualities.success){
        return (
            <p>Une erreur est survenue</p>
        )
    }

    const limitData = limit ? actualities.data.slice(0, limit) : actualities.data

    return (
        <section className={styles.section}>
            { limitData.map(actuality => (
                <article key={actuality.id}>
                    <CardActuality actuality={actuality}/>
                </article>
            ))}
        </section>
    )
}