import styles from "./detailActuality.module.css"
import {ActualityProps} from "@/features/actuality/type";
import Image from "next/image"

export default function DetailActuality({actuality, closeModalAction}: {actuality: ActualityProps, closeModalAction : ()=> void}) {

    return (
        <>
            <div className={styles.overlay} onClick={closeModalAction}>
        <section className={styles.section}>

            <Image className={styles.image} src={actuality.photo as string} alt={actuality.title} width = {860} height = {640} />
            <h2>{actuality.title}</h2>
            <p className={styles.p}>{actuality.description}</p>
            <article>
            <h3>Contact :</h3>
            <p>{actuality.contact}</p>
            <p>{actuality.phone}</p>
            <p>{actuality.mail}</p>
            </article>


        </section>
            </div>
        </>
    )
}