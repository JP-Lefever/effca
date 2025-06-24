import styles from "./cardPlayer.module.css"
import Image from "next/image"
import {MemberProps} from "@/features/members/type";


export default function CardPlayer({player, i} : {player : MemberProps, i:number}) {


    return (
        <>
        <section  >
            <figure>
                <Image src={player.photo as string} alt={player.firstname} width={320} height={320} />
            </figure>
            <article className={styles.info}>
                <h2>{player.firstname}</h2>
                <h2>{player.lastname}</h2>
            </article>
        </section>

        </>
    )
}