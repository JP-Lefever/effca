import PartnerList from "@/features/partner/components/partnerList/PartnerList";
import styles from "./page.module.css";
import dataTitle from "@/assets/data/homePage/homePage.json";

export default function PartnersPage() {


    return (
        <>
            <section>
                <article className={styles.div} >
                    <h1 className={styles.h1}>{dataTitle.partner}</h1>
                    <h1 className={styles.h1b}>{dataTitle.partner}</h1>
                </article>
                <article >
                    <PartnerList />
                </article>
        </section>
        </>
    )
}