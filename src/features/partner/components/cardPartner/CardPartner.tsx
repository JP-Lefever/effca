import styles from "./cardPartner.module.css"
import Image from "next/image"
import {PartnerProps} from "@/features/partner/type";
import Link from "next/link";

export default function CardPartner({partner} : {partner: PartnerProps}) {

    return (
        <>
        <Link href={partner.link || "#"} className={styles.article}>
            <figure className={styles.figure}>
                <Image className={styles.image} src={partner.photo as string} alt={partner.name} width={190} height={100} />
            </figure>
            <h2>{partner.name}</h2>
        </Link>
        </>
    )
}