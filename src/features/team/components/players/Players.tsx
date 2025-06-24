import styles from "./players.module.css"
import {MemberProps} from "@/features/users/type";
import CardPlayer from "@/features/team/components/cardPlayer/CardPlayer";
import clsx from "clsx";

type PlayerProps = {
    pos : string,
    players : MemberProps[],
}
type PlayersByPosProps = {
    playersByPositions : PlayerProps[]
}

export default function Players({playersByPositions}:  PlayersByPosProps) {


    return <>


            {playersByPositions.map((player, i)=>(
                <section key={player.pos} className={clsx(styles.section, i%2 ===0 ? styles.sectionA : styles.sectionB)}>
                    <article className={styles.div} key={player.pos}>
                        <h1 className={styles.h1}>{player.pos}</h1>
                        <h1 className={clsx(styles.h1c, i%2===0 ? styles.h1b : styles.h1c) }>{player.pos}</h1>
                    </article>
                    <article className={clsx(styles.card, i%2===0 ? styles.card : styles.cardB )}>
                        {player.players.map((player, i)=>(
                            <article  key={player.id}>
                                <CardPlayer player={player} i={i}/>
                            </article>
                        ))}
                    </article>
                </section>
            ))}


    </>
}