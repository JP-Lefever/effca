import Image from "next/image"
import {MemberProps} from "@/features/members/type";

export default function CardPlayer({player} : {player : MemberProps}){


    return (
        <>
        <section>
            <figure>
                <Image src={player.photo as string} alt={player.firstname} width={220} height={220} />
            </figure>
            <article>
                <h2>{player.firstname}</h2>
                <h2>{player.lastname}</h2>
            </article>
        </section>

        </>
    )
}