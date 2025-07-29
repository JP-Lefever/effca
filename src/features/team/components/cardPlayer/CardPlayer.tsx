import styles from "./cardPlayer.module.css"
import Image from "next/image"
import {MemberProps} from "@/features/users/type";
import {Suspense} from "react";


export default function CardPlayer({player} : {player : MemberProps}) {


    return (
        <>
        <section  >
            <Suspense>
                <figure>
                    <Image src={player.photo as string} alt={player.firstname} width={320} height={320} />
                </figure>
            </Suspense>
            <article className={styles.info}>
                <h2>{player.firstname}</h2>
                <h2>{player.lastname}</h2>
            </article>
        </section>

        </>
    )
}