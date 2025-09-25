"use client"
import styles from "./cardActuality.module.css"
import Image from 'next/image';
import {ActualityProps} from "@/features/actuality/type";

import Link from "next/link";
import {shortPres} from "@/assets/helpers/sliceText";
import {formatedDate} from "@/assets/helpers/formatedDate";
import {Suspense} from "react";


export default function CardActuality({actuality} : {actuality: ActualityProps }) {



    return (
        <>

            <Link href={`/actualites/${actuality.id}`} className={styles.section}>
                {actuality.photo !== "" && actuality.photo !== null &&
                <Suspense fallback={<p>Chargement...</p>}>
                    <figure className={styles.figure}>
                        <Image className={styles.image} src={actuality.photo as string} alt={actuality.title} fill={true} />
                    </figure>
                </Suspense>
                }
                <article className={styles.article}>
                    <h2 className={styles.h2}>{actuality.title}</h2>
                    <p>{formatedDate(actuality.date)}</p>
                    <p >{shortPres(actuality.description)}</p>
                </article>
            </Link>

        </>
    )
}