"use client"
import styles from "./detailActuality.module.css"
import {ActualityProps} from "@/features/actuality/type";
import Image from "next/image"
import {useRouter} from "next/navigation";
import {X, SquareArrowUp,User, Phone, AtSign } from "lucide-react"
import {formatedDate} from "@/assets/helpers/formatedDate";

export default function DetailActuality({actuality }: {actuality: ActualityProps}) {

    const router = useRouter();
    return (
        <>
    <div  className={styles.overlay}>
        <section id={"top"} className={styles.section}>

                <button className={styles.button} type={"button"} onClick={() => {router.push("/actuality")}}><X size={48} color={"black"}/></button>
                <article>
                    <h2 className={styles.h2head}>{actuality.title}</h2>
                    <Image className={styles.image} src={actuality.photo as string} alt={actuality.title} width = {860} height = {640} />
                </article>
            <article>
                <h2 className={styles.h2}>{actuality.title}</h2>
                <h3 className={styles.h3}>{formatedDate(actuality.date)}</h3>
                <p className={styles.p}>{actuality.description}</p>
            </article>
            {actuality.contact &&
            <article>
                <h3 className={styles.h3contact}>Demande de renseignement :</h3>
                <ul>
                    <li className={styles.pList}><User/> : {actuality.contact}</li>
                    <li className={styles.pList}><Phone/> : {actuality.phone}</li>
                    <li className={styles.pList}><AtSign/> : {actuality.mail}</li>
                </ul>
            </article>
            }
            <a href={"#top"} className={styles.anchor}>
                <SquareArrowUp size={48} color={"black"}/>
            </a>
        </section>
    </div>
        </>
    )
}