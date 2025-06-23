import styles from "./partnerList.module.css"

import CardPartner from "@/features/partner/components/cardPartner/CardPartner";
import {PartnerProps} from "@/features/partner/type";

export default async function PartnerList({partners} :{partners:PartnerProps[]}) {



    return (
        <>
        <section className={styles.section}>
            {partners.map((partner) => (
                <section key={partner.id}>
                    <CardPartner partner = {partner} />

                </section>
            ))}
        </section>

        </>
    )
}