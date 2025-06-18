import styles from "./partnerList.module.css"
import {readAllPartner} from "@/features/partner/repository";
import CardPartner from "@/features/partner/components/cardPartner/CardPartner";

export default async function PartnerList() {

    const partners = await readAllPartner()

    if(!partners.success){
        return (
            <p>Erreur lors du chargement des partenaires</p>
        )
    }

    return (
        <>
        <section className={styles.section}>
            {partners.data.map((partner) => (
                <section key={partner.id}>
                    <CardPartner partner = {partner} />

                </section>
            ))}
        </section>

        </>
    )
}