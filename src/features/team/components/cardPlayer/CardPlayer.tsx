import styles from "./cardPlayer.module.css"
import Image from "next/image"
import {MemberProps} from "@/features/users/type";
import {Suspense} from "react";


export default function CardPlayer({player} : {player : MemberProps}) {


    return (
        <>
        <section >
            <Suspense>
                <figure className={styles.figure}>
                    <Image className={styles.image} src={player.photo as string} alt={player.firstname} fill={true} />
                </figure>
            </Suspense>
            <article className={styles.info}>
                <h2 className={styles.h2}>{player.firstname}</h2>
                <h2 className={styles.h2}>{player.lastname}</h2>
            </article>
        </section>

        </>
    )
}