import PartnerList from "@/features/partner/components/partnerList/PartnerList";
import styles from "./page.module.css";
import data from "@/assets/data/partner/partner.json";
import {readAllPartner} from "@/features/partner/repository";
import {notFound} from "next/navigation";

export default async function PartnersPage() {

    const partners = await readAllPartner()

    if(!partners.success){
        return (
            notFound()
        )
    }

    const majorPartner = partners.data.filter((partner)=> partner.is_main)
    const normalPartner = partners.data.filter((partner)=> !partner.is_main)

    return (
        <>
            <section>
                <article className={styles.div} >
                    <h1 className={styles.h1}>{data.title}</h1>
                    <h1 className={styles.h1b}>{data.title}</h1>
                </article>
                <article className={styles.articlePartner} >
                    <h2 className={styles.h2}>{data.major}</h2>
                    <PartnerList partners={majorPartner} />
                </article>
                <article className={styles.articlePartner} >
                    <h2 className={styles.h2}>{data.normal}</h2>
                    <PartnerList partners={normalPartner} />
                </article>
        </section>
        </>
    )
}