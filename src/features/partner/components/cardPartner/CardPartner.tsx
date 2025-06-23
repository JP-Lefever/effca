import styles from "./cardPartner.module.css"
import Image from "next/image"
import {PartnerProps} from "@/features/partner/type";

export default function CardPartner({partner} : {partner: PartnerProps}) {

    return (
        <>
        <article className={styles.article}>
            <figure className={styles.figure}>
                <Image className={styles.image} src={partner.photo as string} alt={partner.name} fill={true}/>
            </figure>
            <h2>{partner.name}</h2>
        </article>
        </>
    )
}