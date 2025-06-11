import styles from "./modifyActuality.module.css"
import {browseActualities} from "@/features/actuality/action";

import Link from "next/link";

export default async function ModifyActuality(){

    const actualities = await browseActualities()

    if (!actualities.success){
        return (
            <p>Erreur lors du chargement des actualités</p>
        )
    }

    return(<>
    <section className={styles.card}>

        {actualities.data.map((actuality)=>(
            <article key={actuality.id} >
                <Link href={`/admin/modifyActuality/${actuality.id}`}>{actuality.title}</Link>
            </article>
        ))}
    </section>

    </>)
}