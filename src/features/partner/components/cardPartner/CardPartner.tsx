import styles from "./cardPartner.module.css"
import Image from "next/image"
import {PartnerProps} from "@/features/partner/type";


export default function CardPartner({partner} : {partner: PartnerProps}) {

    return (
        <>
            {partner.link ?
        <a rel={"noopener noreferrer"} target={"_blank"} href={partner.link } className={styles.article}>
            <figure className={styles.figure}>
                <Image className={styles.image} src={partner.photo as string} alt={partner.name} width={190} height={100} />
            </figure>
            <h2>{partner.name}</h2>
        </a> :
        <article className={styles.article}>
            <figure className={styles.figure}>
                <Image className={styles.image} src={partner.photo as string} alt={partner.name} width={190} height={100} />
            </figure>
            <h2>{partner.name}</h2>
        </article>
            }
        </>
    )
}