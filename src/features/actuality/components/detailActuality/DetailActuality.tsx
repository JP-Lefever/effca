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
      <main id={"top"} className={styles.main}>
            <button className={styles.button} type={"button"} onClick={() => {router.push("/actuality")}}>Revenir à la liste</button>
            <section  className={styles.section}>
                <article>
                    <div role={"group"} className={styles.div}>
                        <h1 className={styles.h1}>{actuality.title}</h1>
                        <h1 className={styles.h1b}>{actuality.title}</h1>
                    </div>

                    <Image className={styles.image} src={actuality.photo as string} alt={actuality.title} width = {1920} height = {1080} />
                </article>
                <article>
                    <h2 className={styles.h2}>{actuality.title} </h2>
                    <h3 className={styles.h3}>Le {formatedDate(actuality.date)}</h3>
                    <p className={styles.p}>{actuality.description}</p>
                </article>
                <article>
                {actuality.contact &&
                    <>
                    <h3 className={styles.h3contact}>Demande de renseignement :</h3>
                    <ul>
                        <li className={styles.pList}><User/> : {actuality.contact}</li>
                        <li className={styles.pList}><Phone/> : {actuality.phone}</li>
                        <li className={styles.pList}><AtSign/> : {actuality.mail}</li>
                    </ul>
                    </>
                }
                </article>
            </section>
            <a href={"#top"} className={styles.anchor}>
                  <SquareArrowUp size={48} color={"black"}/>
            </a>
      </main>

        </>
    )
}