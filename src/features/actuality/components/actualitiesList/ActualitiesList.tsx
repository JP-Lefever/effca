import styles from "@/app/(client)/actuality/layout.module.css";
import CardActuality from "@/features/actuality/components/cardActuality/CardActuality";
import {ActualityProps} from "@/features/actuality/type";


export default function ActualitiesList({actualities} : {actualities: ActualityProps[]}) {


    return (
        <section className={styles.section}>
            { actualities.map(actuality => (
                <article key={actuality.id}>

                    <CardActuality actuality={actuality}/>
                </article>
            ))}
        </section>
    )
}