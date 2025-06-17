"use client"
import styles from "./detailActuality.module.css"
import {ActualityProps} from "@/features/actuality/type";
import Image from "next/image"
import {useRouter} from "next/navigation";
import {X, SquareArrowUp } from "lucide-react"

export default function DetailActuality({actuality }: {actuality: ActualityProps}) {

    const router = useRouter();
    return (
        <>
    <div  className={styles.overlay}>
        <section id={"top"} className={styles.section}>

                <button className={styles.button} type={"button"} onClick={() => {router.push("/actuality")}}><X size={48} color={"black"}/></button>

                <Image className={styles.image} src={actuality.photo as string} alt={actuality.title} width = {860} height = {640} />
            <article>
                <h2>{actuality.title}</h2>
                <p className={styles.p}>{actuality.description}</p>
            </article>
            <article>
                <h3>Contact :</h3>
                <p className={styles.p}>{actuality.contact}</p>
                <p className={styles.p}>{actuality.phone}</p>
                <p className={styles.p}>{actuality.mail}</p>
            </article>
            <a href={"#top"} className={styles.anchor}>
                <SquareArrowUp size={48} color={"black"}/>
            </a>
        </section>
    </div>
        </>
    )
}