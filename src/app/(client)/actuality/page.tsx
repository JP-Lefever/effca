import styles from "./page.module.css"
import CardActuality from "@/features/actuality/components/cardActuality/CardActuality";
import {browseActualities} from "@/features/actuality/action";

export default async function ActualityPage(){

    const actualities = await browseActualities()

    if(!actualities.success){
        return (
            <p>Une erreur est survenue</p>
        )
    }

    return (
        <>
            <div className={styles.div} role = "groupe">
                <h1 className={styles.h1}>Actualités</h1>
                <h1 className={styles.h1b}>Actualités</h1>
            </div>
            <section className={styles.section}>
                {actualities.data.map((actuality)=>(
                    <section key={actuality.id}>
                         <CardActuality actuality={actuality} />
                    </section>
                ))}
            </section>
        </>
    )
}