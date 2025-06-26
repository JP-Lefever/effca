import styles from "./actualityList.module.css"
import {browseActualities} from "@/features/actuality/action";

import Link from "next/link";

export default async function ActualityList(){

    const actualities = await browseActualities()

    if (!actualities.success){
        return (
            <p>Erreur lors du chargement des actualités</p>
        )
    }

    return(<>
    <section className={styles.section}>

        {actualities.data.map((actuality)=>(
            <article key={actuality.id} className={styles.card}>
                <Link className={styles.link} href={`/admin/modifyActuality/${actuality.id}`}>{actuality.title}</Link>
            </article>
        ))}
    </section>

    </>)
}